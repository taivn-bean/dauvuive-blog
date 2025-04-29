import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"
import Pagination from "@/components/pagination"
import { getCategory, getArticlesByCategory } from "@/lib/data"
import ArticleGrid from "@/components/article/article-grid"

export async function generateStaticParams() {
  // This would fetch all category slugs for static generation
  // For this example, we're just showing the structure
  return [{ slug: "suc-khoe" }, { slug: "dinh-duong" }, { slug: "giao-duc" }, { slug: "phat-trien" }]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = await getCategory(params.slug)

  if (!category) {
    return {
      title: "Danh mục không tồn tại",
      description: "Danh mục này không tồn tại",
    }
  }

  return {
    title: `${category.name} - Bài viết về ${category.name.toLowerCase()} cho trẻ`,
    description: category.description,
    openGraph: {
      title: `${category.name} - Bài viết về ${category.name.toLowerCase()} cho trẻ`,
      description: category.description,
    },
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { page?: string }
}) {
  const page = Number(searchParams.page) || 1
  const category = await getCategory(params.slug)

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Danh mục không tồn tại</h1>
        <p className="mb-8">Danh mục bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
        >
          Quay lại trang chủ
        </Link>
      </div>
    )
  }

  const { articles, totalPages } = await getArticlesByCategory(params.slug, page, 9)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center text-sm mb-4 text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/categories" className="hover:text-primary-600 dark:hover:text-primary-400">
            Danh mục
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 dark:text-gray-100">{category.name}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-50">{category.name}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">{category.description}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <ArticleGrid articles={articles} />

          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination currentPage={page} totalPages={totalPages} basePath={`/categories/${params.slug}`} />
            </div>
          )}
        </div>

        <Sidebar className="w-full md:w-1/3 mt-8 md:mt-0" />
      </div>
    </div>
  )
}
