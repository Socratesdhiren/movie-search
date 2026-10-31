import { parsePage } from "@/lib/page-param"
import { jsonError } from "@/mock/http"
import { movies } from "@/mock/movies"
import { byRating, pageOf } from "@/mock/paging"

export const CATALOG_PAGE_SIZE = 9

export function catalogResponse(url: URL) {
  const parsed = parsePage(url.searchParams.get("page") ?? "")
  if (!parsed.ok) return jsonError(400, parsed.message)

  return pageOf(
    [...movies].sort(byRating),
    parsed.page,
    CATALOG_PAGE_SIZE
  )
}
