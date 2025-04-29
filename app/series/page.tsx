import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { getAllSeries } from "@/lib/data"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Series - KidCare",
  description: "Danh sách các series bài viết về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default async function SeriesListPage() {
  const allSeries = await getAllSeries()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Series</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Series bài viết</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Khám phá các series bài viết chuyên sâu về các chủ đề chăm sóc và nuôi dạy trẻ. Mỗi series cung cấp thông
            tin đầy đủ và có hệ thống về một chủ đề cụ thể.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {allSeries.map((series) => (
              <Link
                key={series.id}
                href={`/series/${series.slug}`}
                className="block border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-square">
                    <Image
                      src={series.coverImage || "/placeholder.svg"}
                      alt={series.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {series.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{series.description}</p>
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium">
                      <span>{series.totalPosts} bài viết</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Sidebar className="w-full md:w-1/3 mt-8 md:mt-0" />
      </div>
    </div>
  )
}
