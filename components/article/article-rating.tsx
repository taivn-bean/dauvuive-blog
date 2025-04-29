"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ArticleRatingProps {
  articleId: string
  initialRating?: number
  totalRatings?: number
  onRate?: (rating: number) => void
  readOnly?: boolean
  size?: "sm" | "md" | "lg"
}

export default function ArticleRating({
  articleId,
  initialRating = 0,
  totalRatings = 0,
  onRate,
  readOnly = false,
  size = "md",
}: ArticleRatingProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoverRating, setHoverRating] = useState(0)
  const [hasRated, setHasRated] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Kích thước sao dựa trên prop size
  const starSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  // Xử lý hydration
  useEffect(() => {
    setIsClient(true)
    // Kiểm tra xem người dùng đã đánh giá bài viết này chưa
    const ratedArticles = localStorage.getItem("ratedArticles")
    if (ratedArticles) {
      const parsedRatedArticles = JSON.parse(ratedArticles)
      if (parsedRatedArticles[articleId]) {
        setRating(parsedRatedArticles[articleId])
        setHasRated(true)
      }
    }
  }, [articleId])

  const handleRate = (newRating: number) => {
    if (readOnly || hasRated) return

    setRating(newRating)
    setHasRated(true)

    // Lưu đánh giá vào localStorage
    const ratedArticles = JSON.parse(localStorage.getItem("ratedArticles") || "{}")
    ratedArticles[articleId] = newRating
    localStorage.setItem("ratedArticles", JSON.stringify(ratedArticles))

    // Gọi callback nếu có
    if (onRate) {
      onRate(newRating)
    }
  }

  const handleMouseEnter = (index: number) => {
    if (readOnly || hasRated) return
    setHoverRating(index)
  }

  const handleMouseLeave = () => {
    if (readOnly || hasRated) return
    setHoverRating(0)
  }

  // Không render gì cho đến khi client-side
  if (!isClient) {
    return null
  }

  return (
    <div className="flex flex-col items-center">
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            className={cn(
              starSizes[size],
              "star",
              (hoverRating >= index || (!hoverRating && rating >= index)) && "filled",
              hoverRating >= index && "hover",
              readOnly ? "cursor-default" : "cursor-pointer",
            )}
            onClick={() => handleRate(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            fill={hoverRating >= index || (!hoverRating && rating >= index) ? "currentColor" : "none"}
          />
        ))}
      </div>
      {totalRatings > 0 && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {hasRated ? "Bạn đã đánh giá" : `${totalRatings} đánh giá`}
        </div>
      )}
    </div>
  )
}
