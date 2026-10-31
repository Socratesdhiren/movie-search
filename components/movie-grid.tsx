import { Calendar, Star } from "lucide-react"
import Link from "next/link"

import { MoviePoster } from "@/components/movie-poster"
import { formatReleaseDate } from "@/lib/format"
import { backdropUrl, posterUrl } from "@/lib/images"
import type { Movie } from "@/lib/types"

const ease = "ease-[cubic-bezier(0.22,0.61,0.36,1)]"

export function MovieGrid({
  movies,
  hrefPrefix = "/movies",
  viewLabel = "View movie",
}: {
  movies: Movie[]
  hrefPrefix?: string
  viewLabel?: string
}) {
  return (
    <ul className="grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-[30px] p-0">
      {movies.map((movie, index) => {
        const date = formatReleaseDate(movie.releaseDate)
        const year = movie.releaseDate?.slice(0, 4)
        const score = movie.voteAverage.toFixed(1)
        const image = backdropUrl(movie.backdropPath) ?? posterUrl(movie.posterPath)

        return (
          <li key={movie.id}>
            <Link
              href={`${hrefPrefix}/${movie.id}`}
              className={`group flex h-full flex-col overflow-hidden rounded-[22px] bg-white text-[#1a201d] shadow-[0_1px_0_rgba(26,32,29,0.04),0_1px_3px_rgba(26,32,29,0.05)] transition-[transform,box-shadow] duration-500 ${ease} outline-none hover:-translate-y-2 hover:shadow-[0_30px_80px_-46px_rgba(26,32,29,0.5)] focus-visible:ring-[3px] focus-visible:ring-ring`}
            >
              <div className="relative h-[230px] overflow-hidden bg-[#f4f4f0]">
                <MoviePoster
                  src={image}
                  title={movie.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {year ? (
                  <span className="absolute top-4 left-4 z-[2] rounded-full bg-white/90 px-[13px] py-1.5 text-[11.5px] font-semibold backdrop-blur-sm">
                    {year}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-3.5 p-[26px]">
                <h2 className="text-[21px] leading-tight font-semibold tracking-[-0.025em]">
                  {movie.title}
                </h2>
                <p className="flex items-center gap-4 text-[13.5px] text-[#6b736e]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" aria-hidden="true" />
                    {date ? (
                      <time dateTime={movie.releaseDate ?? undefined}>{date}</time>
                    ) : (
                      "Date unknown"
                    )}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 font-medium text-[#1a201d]">
                    <Star className="size-3.5 fill-current" aria-hidden="true" />
                    <span className="sr-only">Rating </span>
                    {score}
                    <span className="sr-only"> out of 10</span>
                  </span>
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-[#e9e8e2] pt-[18px]">
                  <p className="text-sm text-[#6b736e]" aria-hidden="true">
                    rating{" "}
                    <span className="text-[22px] font-semibold tracking-[-0.03em] text-[#1a201d]">
                      {score}
                    </span>
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1d6b4c]">
                    {viewLabel}
                    <span
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${ease} group-hover:translate-x-1`}
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
