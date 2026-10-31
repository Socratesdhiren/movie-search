import { json } from "@/mock/http"
import { trendingMovies } from "@/mock/movies"

export function GET() {
  return json(trendingMovies)
}
