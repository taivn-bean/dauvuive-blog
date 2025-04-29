"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface HeroSliderProps {
  articles: Article[]
}

export default function HeroSlider({ articles }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalSlides = articles.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Restart autoplay after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Auto play slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pause autoplay when user hovers over slider
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <div className="relative w-full h-full">
            <Image
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <Link
                href={`/categories/${article.category.slug}`}
                className="inline-block text-xs sm:text-sm font-medium bg-primary-600 hover:bg-primary-700 px-2.5 py-1 rounded mb-2 sm:mb-3 transition-colors"
              >
                {article.category.name}
              </Link>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 line-clamp-2">
                <Link href={`/blog/${article.slug}`} className="hover:text-primary-300 transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="hidden sm:block text-sm sm:text-base text-gray-200 mb-3 line-clamp-2">{article.description}</p>
              <Link
                href={`/blog/${article.slug}`}
                className="inline-flex items-center text-sm sm:text-base font-medium text-white hover:text-primary-300 transition-colors"
              >
                Đọc tiếp <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Slide trước"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Slide tiếp theo"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Đi đến slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
