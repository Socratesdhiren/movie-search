import { cache } from "react"
import { connection } from "next/server"

import type { Movie, SearchResults, Video, VideoList } from "@/lib/types"

export class ApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = "ApiError"
    this.status = status
  }
}

function baseUrl(): string {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL
  if (!base) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not set")
  }
  return base.replace(/\/$/, "")
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function isNullableString(value: unknown): value is string | null {
  return value === null || typeof value === "string"
}

function parseMovie(value: unknown): Movie {
  if (!isRecord(value)) {
    throw new Error("Movie response was not an object")
  }

  if (typeof value.id !== "number" || typeof value.title !== "string") {
    throw new Error("Movie response is missing id or title")
  }

  if (
    !isNullableString(value.overview) ||
    !isNullableString(value.posterPath) ||
    !isNullableString(value.backdropPath) ||
    !isNullableString(value.releaseDate) ||
    typeof value.voteAverage !== "number"
  ) {
    throw new Error("Movie response does not match the API contract")
  }

  return {
    id: value.id,
    title: value.title,
    overview: value.overview,
    posterPath: value.posterPath,
    backdropPath: value.backdropPath,
    voteAverage: value.voteAverage,
    releaseDate: value.releaseDate,
  }
}

function parseVideo(value: unknown): Video {
  if (!isRecord(value)) {
    throw new Error("Video response was not an object")
  }

  if (
    typeof value.id !== "string" ||
    typeof value.key !== "string" ||
    typeof value.name !== "string" ||
    typeof value.site !== "string" ||
    typeof value.type !== "string" ||
    typeof value.official !== "boolean"
  ) {
    throw new Error("Video response does not match the API contract")
  }

  return {
    id: value.id,
    key: value.key,
    name: value.name,
    site: value.site,
    type: value.type,
    official: value.official,
  }
}

async function errorMessage(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json()
    if (
      isRecord(body) &&
      typeof body.message === "string" &&
      body.message.trim()
    ) {
      return body.message
    }
  } catch {
    // Non-JSON error bodies still surface the status code below.
  }

  return `Request failed (${response.status})`
}

/** Same search URL is reused for a minute, then fetched again. */
export const SEARCH_REVALIDATE_SECONDS = 60

async function request(
  path: string,
  options?: { revalidate?: number }
): Promise<Response> {
  await connection()
  if (options?.revalidate) {
    return fetch(`${baseUrl()}${path}`, {
      next: {
        revalidate: options.revalidate,
        tags: ["search"],
      },
    })
  }
  return fetch(`${baseUrl()}${path}`, { cache: "no-store" })
}

function parseSearchResults(body: unknown): SearchResults {
  if (!isRecord(body) || !Array.isArray(body.results)) {
    throw new Error("Search response does not match the API contract")
  }

  if (
    typeof body.page !== "number" ||
    typeof body.totalPages !== "number" ||
    typeof body.totalResults !== "number"
  ) {
    throw new Error("Search response is missing page information")
  }

  return {
    page: body.page,
    totalPages: body.totalPages,
    totalResults: body.totalResults,
    results: body.results.map(parseMovie),
  }
}

export const getTrending = cache(async (): Promise<Movie[]> => {
  const response = await request("/movies/trending")
  if (!response.ok) {
    throw new ApiError(response.status, await errorMessage(response))
  }

  const body: unknown = await response.json()
  if (!Array.isArray(body)) {
    throw new Error("Trending response was not a list of movies")
  }

  return body.map(parseMovie)
})

export const listMovies = cache(async (page: number): Promise<SearchResults> => {
  const params = new URLSearchParams({ page: String(page) })
  const response = await request(`/movies?${params.toString()}`, {
    revalidate: SEARCH_REVALIDATE_SECONDS,
  })
  if (!response.ok) {
    throw new ApiError(response.status, await errorMessage(response))
  }

  return parseSearchResults(await response.json())
})

async function searchCatalog(
  path: string,
  query: string,
  page: number
): Promise<SearchResults> {
  const params = new URLSearchParams({
    query,
    page: String(page),
  })
  const response = await request(`${path}?${params.toString()}`, {
    revalidate: SEARCH_REVALIDATE_SECONDS,
  })
  if (!response.ok) {
    throw new ApiError(response.status, await errorMessage(response))
  }

  return parseSearchResults(await response.json())
}

export const searchMovies = cache(async (query: string, page: number) => {
  return searchCatalog("/movies/search", query, page)
})

export const searchSeries = cache(async (query: string, page: number) => {
  return searchCatalog("/tv/search", query, page)
})

export const getMovie = cache(async (id: string): Promise<Movie | null> => {
  const response = await request(`/movies/${encodeURIComponent(id)}`)
  if (response.status === 404) return null
  if (!response.ok) {
    throw new ApiError(response.status, await errorMessage(response))
  }

  return parseMovie(await response.json())
})

export const getSeries = cache(async (id: string): Promise<Movie | null> => {
  const response = await request(`/tv/${encodeURIComponent(id)}`)
  if (response.status === 404) return null
  if (!response.ok) {
    throw new ApiError(response.status, await errorMessage(response))
  }

  return parseMovie(await response.json())
})

export const getVideos = cache(
  async (id: string): Promise<VideoList | null> => {
    const response = await request(`/movies/${encodeURIComponent(id)}/videos`)
    if (response.status === 404) return null
    if (!response.ok) {
      throw new ApiError(response.status, await errorMessage(response))
    }

    const body: unknown = await response.json()
    if (
      !isRecord(body) ||
      typeof body.id !== "number" ||
      !Array.isArray(body.results)
    ) {
      throw new Error("Video response does not match the API contract")
    }

    return {
      id: body.id,
      results: body.results.map(parseVideo),
    }
  }
)
