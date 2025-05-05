import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getPopularArticles } from "@/services/articles"
import { getTagsHasArticles } from "@/services/tags"

interface SidebarProps {
  className?: string
}

export default async function Sidebar({ className }: SidebarProps) {
  const popularArticles = await getPopularArticles(5)
  const tags = await getTagsHasArticles()

  return (
    <aside className={cn("space-y-8", className)}>
      {/* Advertisement */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-100 dark:bg-gray-800 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quảng cáo</p>
        <div className="h-[250px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
          <p className="text-gray-500 dark:text-gray-400">Banner quảng cáo</p>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-50">Bài viết phổ biến</h3>
        <div className="space-y-4">
          {popularArticles.map((article) => (
            <div key={article.id} className="flex gap-3">
              <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={article.cover_image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
                  <Link href={`/blog/${article.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {article.title}
                  </Link>
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{article.readingTime} phút đọc</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-50">Thẻ</h3>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Link
              key={tag.id}
              href={`/tags/${tag.slug}`}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-50">Đăng ký nhận bản tin</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Nhận những thông tin mới nhất về chăm sóc trẻ em qua email.
        </p>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Email của bạn"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-background"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
          >
            Đăng ký
          </button>
        </form>
      </div>

      {/* Second Advertisement */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-100 dark:bg-gray-800 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quảng cáo</p>
        <div className="h-[300px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
          <p className="text-gray-500 dark:text-gray-400">Banner quảng cáo</p>
        </div>
      </div>
    </aside>
  )
}
