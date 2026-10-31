import type { Movie } from "@/lib/types"
import { json, jsonError } from "@/mock/http"

export function byRating(a: Movie, b: Movie) {
  if (b.voteAverage !== a.voteAverage) return b.voteAverage - a.voteAverage
  return a.title.localeCompare(b.title)
}

export function pageOf(list: Movie[], page: number, pageSize: number) {
  const totalResults = list.length
  const totalPages = totalResults === 0 ? 0 : Math.ceil(totalResults / pageSize)

  if (page > 1 && (totalPages === 0 || page > totalPages)) {
    return jsonError(400, "Page is out of range")
  }

  const start = (page - 1) * pageSize

  return json({
    page,
    totalPages,
    totalResults,
    results: list.slice(start, start + pageSize),
  })
}
