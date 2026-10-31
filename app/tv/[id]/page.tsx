import { ArrowLeft, Calendar, Star } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MoviePoster } from "@/components/movie-poster"
import { buttonVariants } from "@/components/ui/button"
import { getSeries } from "@/lib/api"
import { formatReleaseDate } from "@/lib/format"
import { backdropUrl, posterUrl } from "@/lib/images"
import { cn } from "@/lib/utils"

type SeriesPageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: SeriesPageProps): Promise<Metadata> {
  const { id } = await params
  const show = await getSeries(id)

  return {
    title: show?.title ?? "Series not found",
  }
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { id } = await params
  const show = await getSeries(id)
  if (!show) notFound()

  const releaseDate = formatReleaseDate(show.releaseDate)
  const image = backdropUrl(show.backdropPath) ?? posterUrl(show.posterPath)

  return (
    <article className="flex flex-col gap-8">
      <Link
        href="/search?type=tv"
        aria-label="Back to TV search"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "relative self-start"
        )}
      >
        <ArrowLeft aria-hidden="true" />
      </Link>
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <div className="relative aspect-[2/3] overflow-hidden rounded-[22px] bg-[#f4f4f0]">
          <MoviePoster src={image} title={show.title} loading="eager" />
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            TV series
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance">
            {show.title}
          </h1>
          <p className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4" aria-hidden="true" />
              {releaseDate ? (
                <time dateTime={show.releaseDate ?? undefined}>{releaseDate}</time>
              ) : (
                "Date unknown"
              )}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-4 fill-current" aria-hidden="true" />
              {show.voteAverage.toFixed(1)}
              <span className="sr-only"> out of 10</span>
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed">
            {show.overview ?? "No overview is available for this series."}
          </p>
        </div>
      </div>
    </article>
  )
}
