import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold mb-4 text-primary-600 dark:text-primary-400">404</h1>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Trang không tồn tại</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Vui lòng kiểm tra lại đường dẫn hoặc quay lại trang
        chủ.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/">Quay lại trang chủ</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/search">Tìm kiếm</Link>
        </Button>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-50">Bạn có thể quan tâm</h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          <Link
            href="/categories/suc-khoe"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            Sức khỏe
          </Link>
          <Link
            href="/categories/dinh-duong"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            Dinh dưỡng
          </Link>
          <Link
            href="/categories/giao-duc"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            Giáo dục
          </Link>
          <Link
            href="/categories/phat-trien"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            Phát triển
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            Giới thiệu
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
          >
            Liên hệ
          </Link>
        </div>
      </div>
    </div>
  )
}
