export type Movie = {
  id: number
  title: string
  overview: string | null
  posterPath: string | null
  backdropPath: string | null
  voteAverage: number
  releaseDate: string | null
}

export type SearchResults = {
  page: number
  totalPages: number
  totalResults: number
  results: Movie[]
}

export type Video = {
  id: string
  key: string
  name: string
  site: string
  type: string
  official: boolean
}

export type VideoList = {
  id: number
  results: Video[]
}
