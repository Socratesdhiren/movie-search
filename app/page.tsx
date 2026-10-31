import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { MovieGrid } from "@/components/movie-grid"
import { MovieGridSkeleton } from "@/components/movie-grid-skeleton"
import { PageIntro } from "@/components/page-intro"
import { Pagination } from "@/components/pagination"
import { buttonVariants } from "@/components/ui/button"
import { ApiError, listMovies } from "@/lib/api"
import { catalogHref, countLabel, firstParam } from "@/lib/format"
import { parsePage } from "@/lib/page-param"

type HomePageProps = {
  searchParams: Promise<{
    page?: string | string[]
  }>
}

export async function generateMetadata({
  searchParams,
}: HomePageProps): Promise<Metadata> {
  const params = await searchParams
  const parsed = parsePage(firstParam(params.page))

  return {
    title: parsed.ok && parsed.page > 1 ? `Movies, page ${parsed.page}` : "Movies",
  }
}

function PageProblem({ message }: { message: string }) {
  return (
    <>
      <PageIntro eyebrow="Movies" title="Movies" />
      <p role="alert" className="mb-4 text-muted-foreground">
        {message}
      </p>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Back to page 1
      </Link>
    </>
  )
}

async function MovieCatalog({ page }: { page: number }) {
  let data
  try {
    data = await listMovies(page)
  } catch (error) {
    if (error instanceof ApiError && error.status === 400) {
      return <PageProblem message={error.message} />
    }
    throw error
  }

  return (
    <>
      <PageIntro
        eyebrow="Movies"
        title="Movies"
        description={`${countLabel(data.totalResults, "movie", "movies")} · page ${data.page} of ${data.totalPages}. Each page is loaded from the API.`}
      />
      <MovieGrid movies={data.results} />
      <Pagination
        page={data.page}
        totalPages={data.totalPages}
        totalResults={data.totalResults}
        resultCount={data.results.length}
        hrefFor={catalogHref}
        label="Movie pages"
      />
    </>
  )
}

export default async function Page({ searchParams }: HomePageProps) {
  const params = await searchParams
  const parsed = parsePage(firstParam(params.page))

  return (
    <section>
      {parsed.ok ? (
        <Suspense
          fallback={<MovieGridSkeleton label="Loading movies…" count={9} />}
        >
          <MovieCatalog page={parsed.page} />
        </Suspense>
      ) : (
        <PageProblem message={parsed.message} />
      )}
    </section>
  )
}
