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
      title="Trending movies couldn’t be loaded"
      description="This week’s list didn’t come back from the server."
    />
  )
}
