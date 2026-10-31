import { json, jsonError } from "@/mock/http"
import { findMovie } from "@/mock/movies"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const movie = findMovie(id)

  if (!movie) return jsonError(404, "Movie not found")
  return json(movie)
}
