import type { NextRequest } from "next/server"

import { movies } from "@/mock/movies"
import { searchCatalog } from "@/mock/query"

export async function GET(request: NextRequest) {
  return searchCatalog(request.nextUrl, movies)
}
