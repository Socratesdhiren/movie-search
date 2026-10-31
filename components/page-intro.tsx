export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="mb-6 max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 text-pretty text-muted-foreground">{description}</p>
      ) : null}
    </header>
  )
}
