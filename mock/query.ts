import type { Movie } from "@/lib/types"
import { jsonError } from "@/mock/http"
import { byRating, pageOf } from "@/mock/paging"
import { parseMovieSearch } from "@/lib/search-params"

export const SEARCH_PAGE_SIZE = 3
const SLOW_DELAY_MS = 3000

function matches(item: Movie, query: string) {
  return `${item.title} ${item.overview ?? ""}`.toLowerCase().includes(query)
}

export async function searchCatalog(url: URL, catalog: Movie[]) {
  const parsed = parseMovieSearch(
    url.searchParams.get("query") ?? "",
    url.searchParams.get("page") ?? ""
  )
  if (!parsed.ok) return jsonError(400, parsed.message)

  const query = parsed.query.toLowerCase()
  const page = parsed.page

  if (query === "error") {
    return jsonError(503, "Search is temporarily unavailable")
  }

  if (query === "slow") {
    await new Promise((resolve) => setTimeout(resolve, SLOW_DELAY_MS))
    return pageOf(
      [...catalog].sort(byRating).slice(0, SEARCH_PAGE_SIZE),
      page,
      SEARCH_PAGE_SIZE
    )
  }

  if (query === "noresults") return pageOf([], page, SEARCH_PAGE_SIZE)

  return pageOf(
    catalog.filter((item) => matches(item, query)).sort(byRating),
    page,
    SEARCH_PAGE_SIZE
  )
}
