"use client"

import Image from "next/image"
import { useState } from "react"

function initials(title: string) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase()
}

export function MoviePoster({
  src,
  title,
  loading = "lazy",
}: {
  src: string | null
  title: string
  loading?: "lazy" | "eager"
}) {
  const [failed, setFailed] = useState(!src)

  if (!src || failed) {
    return (
      <div
        aria-hidden="true"
        className="flex size-full items-center justify-center bg-muted text-lg font-medium text-muted-foreground"
      >
        {initials(title)}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      loading={loading}
      sizes="(max-width: 700px) 100vw, 33vw"
      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.08]"
      onError={() => setFailed(true)}
    />
  )
}
