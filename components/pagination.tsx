import Link from "next/link"
import type { ReactNode } from "react"

import { buttonVariants } from "@/components/ui/button"
import { resultRange, visiblePages } from "@/lib/format"
import { cn } from "@/lib/utils"

function PageControl({
  href,
  disabled,
  children,
}: {
  href?: string
  disabled?: boolean
  children: ReactNode
}) {
  const className = cn(buttonVariants({ variant: "outline", size: "sm" }))

  if (disabled || !href) {
    return (
      <span
        className={cn(className, "pointer-events-none opacity-50")}
        aria-disabled="true"
      >
        {children}
      </span>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export function Pagination({
  page,
  totalPages,
  totalResults,
  resultCount,
  hrefFor,
  label = "Pages",
}: {
  page: number
  totalPages: number
  totalResults: number
  resultCount: number
  hrefFor: (page: number) => string
  label?: string
}) {
  if (totalResults === 0) return null

  const { start, end } = resultRange(page, totalPages, totalResults, resultCount)
  const pages = totalPages > 1 ? visiblePages(page, totalPages) : []

  return (
    <nav
      aria-label={label}
      className="mt-8 flex flex-col items-center gap-3 text-center"
    >
      <p className="text-sm text-muted-foreground">
        Showing {start}–{end} of {totalResults}
      </p>
      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <PageControl href={hrefFor(page - 1)} disabled={page <= 1}>
            Previous
          </PageControl>
          <ol className="flex flex-wrap items-center gap-2">
            {pages.map((item, index) =>
              item === "gap" ? (
                <li key={`gap-${index}`} aria-hidden="true" className="px-1">
                  …
                </li>
              ) : (
                <li key={item}>
                  {item === page ? (
                    <span
                      aria-current="page"
                      className={buttonVariants({ size: "sm" })}
                    >
                      <span className="sr-only">Page </span>
                      {item}
                    </span>
                  ) : (
                    <Link
                      href={hrefFor(item)}
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">Page </span>
                      {item}
                    </Link>
                  )}
                </li>
              )
            )}
          </ol>
          <PageControl
            href={hrefFor(page + 1)}
            disabled={page >= totalPages}
          >
            Next
          </PageControl>
        </div>
      ) : null}
    </nav>
  )
}
