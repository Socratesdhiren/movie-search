"use client"

import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"

export function RouteError({
  error,
  retry,
  title,
  description,
}: {
  error: unknown
  retry: () => void
  title: string
  description: string
}) {
  const details =
    error instanceof Error && error.message
      ? error.message
      : "Something went wrong while loading this page."

  return (
    <div
      role="alert"
      className="mx-auto flex max-w-lg flex-col items-start gap-4 py-8"
    >
      <h1 className="text-2xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      <p className="text-muted-foreground">{description}</p>
      <p className="text-sm text-pretty">{details}</p>
      <div className="flex flex-wrap gap-2">
        <Button type="button" onClick={() => retry()}>
          Try again
        </Button>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Browse trending
        </Link>
      </div>
    </div>
  )
}
