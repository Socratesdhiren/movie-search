import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function SeriesNotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Series not found</h1>
      <p className="text-muted-foreground">
        That id isn’t in the TV catalog. Try another search.
      </p>
      <Link href="/search?type=tv" className={buttonVariants()}>
        Search TV series
      </Link>
    </div>
  )
}
