export const MIN_SEARCH_PAGE = 1
export const MAX_SEARCH_PAGE = 500

export type PageParam =
  | { ok: true; page: number }
  | { ok: false; message: string }

/** Page is optional, defaults to 1, and must be a whole number from 1 to 500. */
export function parsePage(pageRaw: string): PageParam {
  const pageText = pageRaw.trim()
  if (!pageText) {
    return { ok: true, page: MIN_SEARCH_PAGE }
  }

  if (!/^\d+$/.test(pageText)) {
    return { ok: false, message: "Page is out of range" }
  }

  const page = Number(pageText)
  if (
    !Number.isSafeInteger(page) ||
    page < MIN_SEARCH_PAGE ||
    page > MAX_SEARCH_PAGE
  ) {
    return { ok: false, message: "Page is out of range" }
  }

  return { ok: true, page }
}
