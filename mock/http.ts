import { NextResponse } from "next/server"

const headers = { "Cache-Control": "no-store" }

export function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers })
}

export function jsonError(status: number, message: string) {
  return json({ message }, status)
}
