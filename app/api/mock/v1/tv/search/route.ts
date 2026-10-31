import type { NextRequest } from "next/server"

import { searchCatalog } from "@/mock/query"
import { series } from "@/mock/series"

export async function GET(request: NextRequest) {
  return searchCatalog(request.nextUrl, series)
}
