import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function MovieNotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Movie not found</h1>
      <p className="text-muted-foreground">
        That id isn’t in the catalog. Check the link, or go back to the movie
        list.
      </p>
      <Link href="/" className={buttonVariants()}>
        Browse movies
      </Link>
    </div>
  )
}
