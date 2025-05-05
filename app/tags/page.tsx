import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Tag } from "lucide-react"
import { getTags } from "@/lib/data"

export const metadata: Metadata = {
  title: "Thẻ - Đậu Vui Vẻ",
  description: "Khám phá tất cả các thẻ bài viết về chăm sóc và nuôi dạy trẻ nhỏ trên Đậu Vui Vẻ",
}

export default async function TagsPage() {
  const tags = await getTags()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Thẻ</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Tất cả thẻ</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Khám phá các bài viết theo từng thẻ để tìm thông tin phù hợp với nhu cầu của bạn.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors group"
              >
                <Tag className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                <span className="text-gray-800 dark:text-gray-200 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                  {tag.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">Thẻ phổ biến</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tags.slice(0, 3).map((tag) => (
              <Link
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center mb-3">
                  <Tag className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{tag.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Khám phá các bài viết liên quan đến {tag.name.toLowerCase()} dành cho trẻ nhỏ
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
