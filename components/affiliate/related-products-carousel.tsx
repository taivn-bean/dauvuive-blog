"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SingleProductAffiliate, { type AffiliateProduct } from "./single-product-affiliate"

interface RelatedProductsCarouselProps {
  products: AffiliateProduct[]
  title?: string
  description?: string
  className?: string
}

export default function RelatedProductsCarousel({
  products,
  title = "Sản phẩm liên quan",
  description,
  className = "",
}: RelatedProductsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScrollability = () => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener("resize", checkScrollability)
    return () => window.removeEventListener("resize", checkScrollability)
  }, [products])

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const scrollAmount = containerRef.current.clientWidth * 0.8
    const newScrollLeft =
      direction === "left"
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount

    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })

    // Update buttons after scroll animation completes
    setTimeout(checkScrollability, 300)
  }

  return (
    <div
      className={`border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2 snap-x"
        onScroll={checkScrollability}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[250px] max-w-[250px] snap-start" style={{ flex: "0 0 auto" }}>
            <SingleProductAffiliate product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
