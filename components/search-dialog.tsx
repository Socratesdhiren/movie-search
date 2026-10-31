"use client"

import { Search, X } from "lucide-react"
import { Suspense, useRef } from "react"

import { SearchForm, SearchFormFields } from "@/components/search-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function SearchDialog() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Dialog>
      <DialogTrigger
        aria-label="Search movies"
        render={<Button type="button" variant="outline" size="icon" />}
      >
        <Search aria-hidden="true" />
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup initialFocus={inputRef}>
          <div className="mb-4 flex items-start justify-between gap-4">
            <DialogTitle>Search movies</DialogTitle>
            <DialogClose
              aria-label="Close search"
              render={<Button type="button" variant="ghost" size="icon" />}
            >
              <X aria-hidden="true" />
            </DialogClose>
          </div>
          <Suspense
            fallback={
              <SearchFormFields inputRef={inputRef} labelClassName="sr-only" />
            }
          >
            <SearchForm inputRef={inputRef} labelClassName="sr-only" />
          </Suspense>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  )
}
