const POSTER_BASE = "https://image.tmdb.org/t/p/w500"
const BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280"

function imageUrl(path: string | null, base: string): string | null {
  if (!path) return null
  if (path.startsWith("https://") || path.startsWith("http://")) return path
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

export function posterUrl(path: string | null): string | null {
  return imageUrl(path, POSTER_BASE)
}

export function backdropUrl(path: string | null): string | null {
  return imageUrl(path, BACKDROP_BASE)
}
