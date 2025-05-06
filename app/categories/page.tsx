import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { getCategories } from "@/services/categories"

export const metadata: Metadata = {
  title: "Danh mục - Đậu Vui Vẻ",
  description: "Khám phá tất cả các danh mục bài viết về chăm sóc và nuôi dạy trẻ nhỏ trên Đậu Vui Vẻ",
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Danh mục</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Tất cả danh mục</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Khám phá các bài viết theo từng chủ đề để tìm thông tin phù hợp với nhu cầu của bạn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={`/placeholder.svg?height=400&width=800&text=${encodeURIComponent(category.name)}`}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-bold text-white">{category.name}</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{category.description}</p>
                <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium">
                  <span>Xem bài viết</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
