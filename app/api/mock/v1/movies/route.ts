import type { NextRequest } from "next/server"

import { catalogResponse } from "@/mock/catalog"

export function GET(request: NextRequest) {
  return catalogResponse(request.nextUrl)
}
