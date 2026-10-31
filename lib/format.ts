import type { SearchKind } from "@/lib/search-params"
import type { Video } from "@/lib/types"

export function firstParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export function formatReleaseDate(value: string | null): string | null {
  if (!value) return null
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return value

  const month = MONTHS[Number(match[2]) - 1]
  if (!month) return value

  return `${month} ${Number(match[3])}, ${match[1]}`
}

export function searchHref(
  query: string,
  page: number,
  kind: SearchKind = "movie"
): string {
  const params = new URLSearchParams({
    type: kind,
    query,
    page: String(page),
  })
  return `/search?${params.toString()}`
}

export function searchLandingHref(kind: SearchKind): string {
  return kind === "tv" ? "/search?type=tv" : "/search"
}

export function catalogHref(page: number): string {
  if (page <= 1) return "/"
  return `/?page=${page}`
}

export function countLabel(
  count: number,
  singular: string,
  plural: string
): string {
  return `${count} ${count === 1 ? singular : plural}`
}

export function resultRange(
  page: number,
  totalPages: number,
  totalResults: number,
  resultCount: number
): { start: number; end: number } {
  if (totalResults === 0 || resultCount === 0) {
    return { start: 0, end: 0 }
  }

  if (page >= totalPages) {
    return {
      start: totalResults - resultCount + 1,
      end: totalResults,
    }
  }

  const start = (page - 1) * resultCount + 1
  return { start, end: start + resultCount - 1 }
}

export function visiblePages(
  page: number,
  totalPages: number
): Array<number | "gap"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const wanted = new Set<number>([1, totalPages, page - 1, page, page + 1])
  if (page <= 3) {
    wanted.add(2)
    wanted.add(3)
    wanted.add(4)
  }
  if (page >= totalPages - 2) {
    wanted.add(totalPages - 1)
    wanted.add(totalPages - 2)
    wanted.add(totalPages - 3)
  }

  const numbers = [...wanted]
    .filter((number) => number >= 1 && number <= totalPages)
    .sort((a, b) => a - b)

  const items: Array<number | "gap"> = []
  for (const number of numbers) {
    const previous = items.at(-1)
    if (typeof previous === "number" && number - previous > 1) {
      items.push("gap")
    }
    items.push(number)
  }
  return items
}

export function pickTrailer(videos: Video[]): Video | null {
  return (
    videos.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    ) ??
    videos.find((video) => video.site === "YouTube") ??
    null
  )
}
