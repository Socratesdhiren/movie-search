import { MovieGridSkeleton } from "@/components/movie-grid-skeleton"

export default function Loading() {
  return <MovieGridSkeleton label="Loading search results…" count={3} />
}
