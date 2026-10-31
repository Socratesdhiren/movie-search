import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MoviePoster } from "@/components/movie-poster"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getMovie, getVideos } from "@/lib/api"
import { formatReleaseDate, pickTrailer } from "@/lib/format"
import { backdropUrl, posterUrl } from "@/lib/images"

type MoviePageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: MoviePageProps): Promise<Metadata> {
  const { id } = await params
  const movie = await getMovie(id)

  return {
    title: movie?.title ?? "Movie not found",
  }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])

  if (!movie) notFound()

  const releaseDate = formatReleaseDate(movie.releaseDate)
  const backdrop = backdropUrl(movie.backdropPath)
  const trailer = pickTrailer(videos?.results ?? [])
  const otherVideos = (videos?.results ?? []).filter(
    (video) => video !== trailer
  )

  return (
    <article className="flex flex-col gap-8">
      <Link
        href="/"
        aria-label="Back to movies list"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "relative self-start"
        )}
      >
        <ArrowLeft aria-hidden="true" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-[calc(100%+0.5rem)] -translate-y-1/2 rounded-full border bg-background px-3 py-1 text-sm font-medium opacity-0 shadow-sm transition-opacity group-hover/button:opacity-100 group-focus-visible/button:opacity-100"
        >
          Back to movies list
        </span>
      </Link>
      {backdrop ? (
        <div className="relative -mx-4 aspect-21/9 overflow-hidden rounded-none sm:-mx-6 sm:rounded-xl">
          <Image
            src={backdrop}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="grid items-start gap-6 md:grid-cols-[220px_1fr]">
        <div className="relative aspect-2/3 overflow-hidden rounded-xl border bg-muted">
          <MoviePoster src={posterUrl(movie.posterPath)} title={movie.title} />
        </div>
        <div className="flex flex-col gap-4">
          <header>
            <h1 className="text-3xl font-semibold tracking-tight text-balance">
              {movie.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {releaseDate ? (
                <time dateTime={movie.releaseDate ?? undefined}>
                  {releaseDate}
                </time>
              ) : (
                "Release date unknown"
              )}
              <span aria-hidden="true"> · </span>
              <span>Rating {movie.voteAverage.toFixed(1)} out of 10</span>
            </p>
          </header>
          <p className="max-w-2xl leading-relaxed text-pretty">
            {movie.overview ?? "No overview available."}
          </p>
        </div>
      </div>

      <section aria-labelledby="videos-heading" className="flex flex-col gap-3">
        <h2
          id="videos-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Videos
        </h2>
        {trailer ? (
          <iframe
            className="aspect-video w-full rounded-xl border"
            src={`https://www.youtube-nocookie.com/embed/${trailer.key}`}
            title={trailer.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
        {otherVideos.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {otherVideos.map((video) => (
              <li key={video.id}>
                {video.name} ({video.site})
              </li>
            ))}
          </ul>
        ) : null}
        {!trailer && (videos?.results.length ?? 0) === 0 ? (
          <p className="text-muted-foreground">No videos for this movie.</p>
        ) : null}
      </section>
    </article>
  )
}
