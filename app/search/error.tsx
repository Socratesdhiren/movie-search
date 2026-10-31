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
      title="Search results couldn’t be loaded"
      description="You can try the search again, or look for a different title."
    />
  )
}
