import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function EmptyState({ query }: { query: string }) {
  return (
    <div className="rounded-xl border border-dashed px-6 py-10">
      <p className="max-w-md text-muted-foreground">
        Nothing matched “{query}”. Try another title, or browse the movie list.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
      >
        Browse movies
      </Link>
    </div>
  )
}
