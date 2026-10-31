export default function Loading() {
  return (
    <div aria-busy="true" aria-live="polite" className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">Loading movie…</p>
      <div className="aspect-21/9 animate-pulse rounded-xl bg-muted" />
      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <div className="aspect-2/3 animate-pulse rounded-xl bg-muted" />
        <div className="space-y-3">
          <div className="h-8 w-2/3 animate-pulse rounded bg-muted" />
          <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
          <div className="h-20 w-full animate-pulse rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}
