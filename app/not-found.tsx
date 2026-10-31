import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">
        That address doesn’t match a page in this app.
      </p>
      <Link href="/" className={buttonVariants()}>
        Browse trending
      </Link>
    </div>
  )
}
