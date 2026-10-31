export function MovieGridSkeleton({
  label,
  count = 6,
}: {
  label: string
  count?: number
}) {
  return (
    <section aria-busy="true" aria-live="polite">
      <p className="mb-4 text-sm text-muted-foreground">{label}</p>
      <ul className="grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-[30px] p-0">
        {Array.from({ length: count }, (_, index) => (
          <li
            key={index}
            className="overflow-hidden rounded-[22px] bg-white shadow-[0_1px_0_rgba(26,32,29,0.04),0_1px_3px_rgba(26,32,29,0.05)]"
          >
            <div className="h-[230px] animate-pulse bg-[#f4f4f0]" />
            <div className="space-y-3.5 p-[26px]">
              <div className="h-6 w-3/4 animate-pulse rounded bg-[#f4f4f0]" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-[#f4f4f0]" />
              <div className="h-px bg-[#e9e8e2]" />
              <div className="h-6 w-1/3 animate-pulse rounded bg-[#f4f4f0]" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
