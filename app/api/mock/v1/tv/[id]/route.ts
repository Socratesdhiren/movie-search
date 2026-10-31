import { json, jsonError } from "@/mock/http"
import { series } from "@/mock/series"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  if (!/^\d+$/.test(id)) return jsonError(404, "Series not found")

  const show = series.find((item) => item.id === Number(id))
  if (!show) return jsonError(404, "Series not found")

  return json(show)
}
