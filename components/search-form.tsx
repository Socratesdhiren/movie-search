"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, type FormEvent, type Ref } from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import { searchHref, searchLandingHref } from "@/lib/format"
import { parseSearchKind, type SearchKind } from "@/lib/search-params"
import { cn } from "@/lib/utils"

const SEARCH_DEBOUNCE_MS = 300

function onSearchSubmit(event: FormEvent<HTMLFormElement>) {
  const input = event.currentTarget.elements.namedItem("query")
  if (!(input instanceof HTMLInputElement)) return

  input.value = input.value.trim()
  if (!input.value) {
    event.preventDefault()
    input.setCustomValidity("Enter a title.")
    input.reportValidity()
    return
  }

  input.setCustomValidity("")
}

function KindSwitch({ kind, query }: { kind: SearchKind; query: string }) {
  const trimmed = query.trim()

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="What to search">
      {(["movie", "tv"] as const).map((option) => {
        const selected = kind === option
        const href = trimmed
          ? searchHref(trimmed, 1, option)
          : searchLandingHref(option)

        return (
          <Link
            key={option}
            href={href}
            aria-current={selected ? "page" : undefined}
            className={buttonVariants({
              variant: selected ? "default" : "outline",
              size: "sm",
            })}
          >
            {option === "movie" ? "Movies" : "TV series"}
          </Link>
        )
      })}
    </div>
  )
}

export function SearchFormFields({
  id = "movie-query",
  defaultQuery = "",
  kind = "movie",
  debounceMs = 0,
  inputRef,
  labelClassName = "text-sm font-medium",
}: {
  id?: string
  defaultQuery?: string
  kind?: SearchKind
  debounceMs?: number
  inputRef?: Ref<HTMLInputElement>
  labelClassName?: string
}) {
  const router = useRouter()
  const [value, setValue] = useState(defaultQuery)
  const [trackedQuery, setTrackedQuery] = useState(defaultQuery)
  const debounced = debounceMs > 0

  if (defaultQuery !== trackedQuery) {
    setTrackedQuery(defaultQuery)
    setValue(defaultQuery)
  }

  useEffect(() => {
    if (!debounced) return

    const handle = window.setTimeout(() => {
      const next = value.trim()
      if (next === defaultQuery.trim()) return
      router.replace(next ? searchHref(next, 1, kind) : searchLandingHref(kind))
    }, debounceMs)

    return () => window.clearTimeout(handle)
  }, [value, defaultQuery, debounced, debounceMs, kind, router])

  const label = kind === "tv" ? "Search TV series" : "Search movies"

  return (
    <form
      action="/search"
      method="get"
      role="search"
      className="flex flex-col gap-3"
      onSubmit={onSearchSubmit}
    >
      <KindSwitch kind={kind} query={value} />
      <input type="hidden" name="type" value={kind} />
      <label htmlFor={id} className={cn(labelClassName)}>
        {label}
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          ref={inputRef}
          id={id}
          name="query"
          type="search"
          placeholder={kind === "tv" ? "breaking bad" : "batman"}
          value={debounced ? value : undefined}
          defaultValue={debounced ? undefined : defaultQuery}
          key={debounced ? kind : defaultQuery}
          autoComplete="off"
          enterKeyHint="search"
          onChange={
            debounced ? (event) => setValue(event.currentTarget.value) : undefined
          }
          onInput={(event) => event.currentTarget.setCustomValidity("")}
          className="h-10 w-full min-w-0 flex-1 rounded-4xl border border-input bg-background px-4 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
        <Button type="submit" size="lg">
          Search
        </Button>
      </div>
    </form>
  )
}

export function SearchForm({
  inputRef,
  labelClassName,
  debounceMs = 0,
}: {
  inputRef?: Ref<HTMLInputElement>
  labelClassName?: string
  debounceMs?: number
}) {
  const params = useSearchParams()

  return (
    <SearchFormFields
      defaultQuery={params.get("query") ?? ""}
      kind={parseSearchKind(params.get("type") ?? "")}
      debounceMs={debounceMs}
      inputRef={inputRef}
      labelClassName={labelClassName}
    />
  )
}

export { SEARCH_DEBOUNCE_MS }
