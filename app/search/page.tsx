import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"
import Pagination from "@/components/pagination"
import { getArticles } from "@/lib/data"
import ArticleGrid from "@/components/article/article-grid"

interface SearchPageProps {
  searchParams: { q?: string; page?: string }
}

export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  const query = searchParams.q || ""
  return {
    title: `Kết quả tìm kiếm cho "${query}" - Đậu Vui Vẻ`,
    description: `Tìm kiếm các bài viết về chăm sóc trẻ em với từ khóa "${query}" trên Đậu Vui Vẻ`,
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const page = Number(searchParams.page) || 1
  const articlesPerPage = 9

  // Lấy tất cả bài viết và lọc theo từ khóa tìm kiếm
  const allArticles = await getArticles(100) // Giả sử lấy tối đa 100 bài viết
  const filteredArticles = query
    ? allArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase()) ||
          article.content.toLowerCase().includes(query.toLowerCase()) ||
          article.tags.some((tag) => tag.name.toLowerCase().includes(query.toLowerCase())) ||
          article.category.name.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  // Phân trang kết quả
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (page - 1) * articlesPerPage
  const paginatedPosts = filteredArticles.slice(startIndex, startIndex + articlesPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Tìm kiếm</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">
          {query ? `Kết quả tìm kiếm cho "${query}"` : "Tìm kiếm"}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {filteredArticles.length > 0
            ? `Tìm thấy ${filteredArticles.length} kết quả`
            : query
              ? "Không tìm thấy kết quả nào phù hợp với từ khóa tìm kiếm của bạn."
              : "Vui lòng nhập từ khóa để tìm kiếm."}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          {paginatedPosts.length > 0 ? (
            <>
              <ArticleGrid articles={paginatedPosts} />
              {totalPages > 1 && (
                <div className="mt-10">
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    basePath="/search"
                    searchParams={{ q: query }}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">
                {query ? "Không tìm thấy kết quả" : "Bắt đầu tìm kiếm"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {query
                  ? "Vui lòng thử lại với từ khóa khác hoặc duyệt qua các danh mục của chúng tôi."
                  : "Nhập từ khóa vào ô tìm kiếm để tìm các bài viết phù hợp."}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  href="/categories/suc-khoe"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  Sức khỏe
                </Link>
                <Link
                  href="/categories/dinh-duong"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  Dinh dưỡng
                </Link>
                <Link
                  href="/categories/giao-duc"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  Giáo dục
                </Link>
                <Link
                  href="/categories/phat-trien"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  Phát triển
                </Link>
              </div>
            </div>
          )}
        </div>

        <Sidebar className="w-full md:w-1/3 mt-8 md:mt-0" />
      </div>
    </div>
  )
}
