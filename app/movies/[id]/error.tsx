"use client"

import { RouteError } from "@/components/route-error"

export default function Error({
  error,
  retry,
}: {
  error: unknown
  retry: () => void
}) {
  return (
    <RouteError
      error={error}
      retry={retry}
      title="This movie couldn’t be loaded"
      description="The details request failed before the page could render."
    />
  )
}
