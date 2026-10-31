import Link from "next/link"

import { SearchDialog } from "@/components/search-dialog"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="w-fit rounded-md font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
        >
          Movie Search
        </Link>
        <SearchDialog />
      </div>
    </header>
  )
}
