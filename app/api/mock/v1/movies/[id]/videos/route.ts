import { json, jsonError } from "@/mock/http"
import { videosFor } from "@/mock/movies"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const videos = videosFor(id)

  if (!videos) return jsonError(404, "Movie not found")
  return json(videos)
}
