import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types"

export default function FeaturedArticles({ articles }: { articles: Article[] }) {
  // Chọn bài viết đặc sắc đầu tiên
  const mainFeatured = articles[0]
  // Các bài viết đặc sắc khác
  const otherFeatured = articles.slice(1, 4)

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Main featured article */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
            <Image
              src={mainFeatured.coverImage || "/placeholder.svg"}
              alt={mainFeatured.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Link
              href={`/categories/${mainFeatured.category.slug}`}
              className="inline-block text-xs font-medium bg-primary-600 text-white px-2 py-1 rounded-sm mb-2"
            >
              {mainFeatured.category.name}
            </Link>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
              <Link href={`/blog/${mainFeatured.slug}`} className="hover:text-primary-400">
                {mainFeatured.title}
              </Link>
            </h2>
            <div className="flex items-center text-xs text-gray-300">
              <Calendar className="h-3 w-3 mr-1" />
              <time dateTime={mainFeatured.publishedAt}>{formatDate(mainFeatured.publishedAt)}</time>
              <span className="mx-2">•</span>
              <span>{mainFeatured.readingTime} phút đọc</span>
            </div>
          </div>
        </div>

        {/* Other featured articles */}
        <div className="grid grid-rows-3 gap-4">
          {otherFeatured.map((article) => (
            <div key={article.id} className="relative group h-[140px]">
              <div className="relative overflow-hidden rounded-lg h-full">
                <Image
                  src={article.coverImage || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <Link
                  href={`/categories/${article.category.slug}`}
                  className="inline-block text-xs font-medium bg-primary-600 text-white px-2 py-1 rounded-sm mb-1"
                >
                  {article.category.name}
                </Link>
                <h3 className="text-sm md:text-base font-bold text-white line-clamp-2">
                  <Link href={`/blog/${article.slug}`} className="hover:text-primary-400">
                    {article.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
