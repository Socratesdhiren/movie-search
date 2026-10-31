import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { EmptyState } from "@/components/empty-state"
import { MovieGrid } from "@/components/movie-grid"
import { MovieGridSkeleton } from "@/components/movie-grid-skeleton"
import { PageIntro } from "@/components/page-intro"
import { Pagination } from "@/components/pagination"
import { SearchFormFields, SEARCH_DEBOUNCE_MS } from "@/components/search-form"
import { buttonVariants } from "@/components/ui/button"
import { ApiError, searchMovies, searchSeries } from "@/lib/api"
import { countLabel, firstParam, searchHref } from "@/lib/format"
import { parseMovieSearch, parseSearchKind, type SearchKind } from "@/lib/search-params"

type SearchPageProps = {
  searchParams: Promise<{
    query?: string | string[]
    page?: string | string[]
    type?: string | string[]
  }>
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const params = await searchParams
  const query = firstParam(params.query).trim()
  const kind = parseSearchKind(firstParam(params.type))
  const catalog = kind === "tv" ? "TV" : "movies"

  return {
    title: query ? `${catalog} results for ${query}` : `Search ${catalog}`,
  }
}

function SearchBox({
  defaultQuery,
  kind,
}: {
  defaultQuery: string
  kind: SearchKind
}) {
  return (
    <div className="mb-8 max-w-xl">
      <SearchFormFields
        id="search-page-query"
        defaultQuery={defaultQuery}
        kind={kind}
        debounceMs={SEARCH_DEBOUNCE_MS}
      />
    </div>
  )
}

function SearchProblem({
  query,
  kind,
  message,
}: {
  query: string
  kind: SearchKind
  message: string
}) {
  const noun = kind === "tv" ? "TV series" : "movies"

  return (
    <>
      <PageIntro
        eyebrow="Search"
        title={query ? `Results for “${query}”` : `Search ${noun}`}
      />
      <p role="alert" className="mb-4 text-muted-foreground">
        {message}
      </p>
      {query ? (
        <Link
          href={searchHref(query, 1, kind)}
          className={buttonVariants({ variant: "outline" })}
        >
          Back to page 1
        </Link>
      ) : null}
    </>
  )
}

async function SearchResults({
  query,
  page,
  kind,
}: {
  query: string
  page: number
  kind: SearchKind
}) {
  let data
  try {
    data =
      kind === "tv"
        ? await searchSeries(query, page)
        : await searchMovies(query, page)
  } catch (error) {
    if (error instanceof ApiError && error.status === 400) {
      return <SearchProblem query={query} kind={kind} message={error.message} />
    }
    throw error
  }

  const empty = data.totalResults === 0
  const noun = kind === "tv" ? "series" : "movie"
  const plural = kind === "tv" ? "series" : "movies"

  return (
    <>
      <PageIntro
        eyebrow={kind === "tv" ? "TV series" : "Movies"}
        title={
          empty ? `No ${plural} found for “${query}”` : `Results for “${query}”`
        }
        description={
          empty
            ? "Nothing in that catalog matches this title."
            : `${countLabel(data.totalResults, noun, plural)} · page ${data.page} of ${data.totalPages}`
        }
      />
      {empty ? (
        <EmptyState query={query} />
      ) : (
        <MovieGrid
          movies={data.results}
          hrefPrefix={kind === "tv" ? "/tv" : "/movies"}
          viewLabel={kind === "tv" ? "View series" : "View movie"}
        />
      )}
      <Pagination
        page={data.page}
        totalPages={data.totalPages}
        totalResults={data.totalResults}
        resultCount={data.results.length}
        hrefFor={(nextPage) => searchHref(query, nextPage, kind)}
        label={kind === "tv" ? "TV series pages" : "Movie search pages"}
      />
    </>
  )
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const rawQuery = firstParam(params.query)
  const rawPage = firstParam(params.page)
  const kind = parseSearchKind(firstParam(params.type))
  const parsed = parseMovieSearch(rawQuery, rawPage)
  const submitted = rawQuery !== "" || rawPage !== ""

  return (
    <section>
      <SearchBox defaultQuery={rawQuery} kind={kind} />
      {parsed.ok ? (
        <Suspense
          fallback={
            <MovieGridSkeleton label="Loading search results…" count={3} />
          }
        >
          <SearchResults query={parsed.query} page={parsed.page} kind={kind} />
        </Suspense>
      ) : submitted ? (
        <SearchProblem
          query={rawQuery.trim()}
          kind={kind}
          message={parsed.message}
        />
      ) : (
        <PageIntro
          eyebrow="Search"
          title={kind === "tv" ? "Search TV series" : "Search movies"}
          description="Type a title. Results update after a short pause, and each page is loaded from the API."
        />
      )}
    </section>
  )
}
