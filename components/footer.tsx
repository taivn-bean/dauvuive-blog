import Link from "next/link"
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Đậu Vui Vẻ</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Đậu Vui Vẻ là trang web cung cấp thông tin hữu ích về chăm sóc sức khỏe và phương pháp nuôi dạy trẻ em từ
              0-10 tuổi.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <YoutubeIcon className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Danh mục</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categories/suc-khoe"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Sức khỏe
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/dinh-duong"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Dinh dưỡng
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/giao-duc"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Giáo dục
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/phat-trien"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Phát triển
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Liên kết</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Advertisement Banner */}
        {/* <div className="mt-10 border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-100 dark:bg-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quảng cáo</p>
          <div className="h-[120px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
            <p className="text-gray-500 dark:text-gray-400">Banner quảng cáo</p>
          </div>
        </div> */}

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Đậu Vui Vẻ. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
