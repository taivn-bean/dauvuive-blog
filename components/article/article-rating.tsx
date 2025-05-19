"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Article } from "@/types/type";
import { getArticleRating } from "@/services/articles";

interface ArticleRatingProps {
  article: Article;
}

export default function ArticleRating({ article }: ArticleRatingProps) {
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    // Kiểm tra xem người dùng đã đánh giá bài viết này chưa
    const ratedArticles = localStorage.getItem("ratedArticles");
    if (ratedArticles) {
      const parsedRatedArticles = JSON.parse(ratedArticles);
      if (parsedRatedArticles[article.id]) {
        setRating(parsedRatedArticles[article.id]);
        setHasRated(true);
        setReadOnly(true);
      }
    }
  }, [article.id]);

  const handleRate = (newRating: number) => {
    if (readOnly || hasRated) return;

    setRating(newRating);
    setHasRated(true);

    // Lưu đánh giá vào localStorage
    const ratedArticles = JSON.parse(
      localStorage.getItem("ratedArticles") || "{}"
    );
    ratedArticles[article.id] = newRating;
    localStorage.setItem("ratedArticles", JSON.stringify(ratedArticles));
  };

  const handleMouseEnter = (index: number) => {
    if (readOnly || hasRated) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (readOnly || hasRated) return;
    setHoverRating(0);
  };

  useEffect(() => {
    const getRating = async () => {
      const rating = await getArticleRating(article.id);
      if (rating) {
        setTotalRatings(rating.total);
      }
    };
    getRating();
  }, [article.id]);

  return (
    <div className="flex flex-col items-center">
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            className={cn(
              "h-6 w-6",
              "star",
              (hoverRating >= index || (!hoverRating && rating >= index)) &&
                "filled",
              hoverRating >= index && "hover",
              readOnly ? "cursor-default" : "cursor-pointer"
            )}
            onClick={() => handleRate(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            fill={
              hoverRating >= index || (!hoverRating && rating >= index)
                ? "currentColor"
                : "none"
            }
          />
        ))}
      </div>
      {totalRatings > 0 && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {hasRated ? "Bạn đã đánh giá" : `${totalRatings} đánh giá`}
        </div>
      )}
    </div>
  );
}
