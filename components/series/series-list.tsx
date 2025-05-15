import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type { Series, Article } from "@/types/type"
import { cn } from "@/lib/utils"

interface SeriesListProps {
  series: Series
  articles: Article[]
  currentArticleId?: string
  className?: string
}

export default function SeriesList({ series, articles, currentArticleId, className }: SeriesListProps) {
  return (
    <div className={cn("border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden", className)}>
      <div className="relative h-40 w-full">
        <Image src={series.cover_image || "/images/placeholder.png"} alt={series.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{series.name}</h3>
          <p className="text-sm text-gray-200">{series.name} bài viết</p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{series.seo.description}</p>

        <h4 className="text-base font-medium text-gray-900 dark:text-gray-50 mb-3">Danh sách bài viết</h4>

        <div className="space-y-3">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={cn(
                "flex items-center p-3 rounded-md",
                currentArticleId === article.id
                  ? "bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600 dark:border-primary-400"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800",
              )}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium mr-3">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/blog/${article.slug}`}
                  className={cn(
                    "block text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400",
                    currentArticleId === article.id
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-900 dark:text-gray-100",
                  )}
                >
                  {article.title}
                </Link>
              </div>
              {currentArticleId !== article.id && <ChevronRight className="flex-shrink-0 h-4 w-4 text-gray-400" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
