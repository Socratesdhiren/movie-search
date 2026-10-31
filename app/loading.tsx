import { MovieGridSkeleton } from "@/components/movie-grid-skeleton"

export default function Loading() {
  return <MovieGridSkeleton label="Loading movies…" count={9} />
}
