import { parsePage } from "@/lib/page-param"

export {
  MAX_SEARCH_PAGE,
  MIN_SEARCH_PAGE,
  parsePage,
  type PageParam,
} from "@/lib/page-param"

export type MovieSearch =
  | { ok: true; query: string; page: number }
  | { ok: false; message: string }

export type SearchKind = "movie" | "tv"

export function parseSearchKind(raw: string): SearchKind {
  return raw.trim().toLowerCase() === "tv" ? "tv" : "movie"
}

/**
 * Rules for GET /movies/search and GET /tv/search:
 * - query is required, and must contain something other than spaces
 * - page is optional, defaults to 1, and must be a whole number from 1 to 500
 */
export function parseMovieSearch(
  queryRaw: string,
  pageRaw: string
): MovieSearch {
  const query = queryRaw.trim()
  if (!query) {
    return { ok: false, message: "Query is required" }
  }

  const parsedPage = parsePage(pageRaw)
  if (!parsedPage.ok) return parsedPage

  return { ok: true, query, page: parsedPage.page }
}
