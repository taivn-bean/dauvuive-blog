"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import type { TableOfContents } from "@/types/type"

interface TableOfContentsProps {
  toc: TableOfContents[]
  className?: string
}

export default function TableOfContents({ toc, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headingElements = toc.map((heading) => document.getElementById(heading.id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    headingElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      headingElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [toc])

  if (toc.length === 0) {
    return null
  }

  return (
    <div className={cn("relative", className)}>
      <div className="sticky top-20">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-50">Mục lục</h3>
        <nav className="space-y-1">
          {toc.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "block py-1 text-sm transition-colors",
                heading.level === 1 && "pl-0",
                heading.level === 2 && "pl-4",
                heading.level === 3 && "pl-8",
                heading.level === 4 && "pl-12",
                heading.level === 5 && "pl-16",
                heading.level === 6 && "pl-20",
                activeId === heading.id
                  ? "font-medium text-primary-600 dark:text-primary-400"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
              )}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(heading.id)
                if (element) {
                  const yOffset = -80 // Điều chỉnh offset nếu cần
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                  setActiveId(heading.id)
                }
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
