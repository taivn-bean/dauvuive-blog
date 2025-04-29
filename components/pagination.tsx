import Link from "next/link"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
  searchParams?: Record<string, string>
}

export default function Pagination({ currentPage, totalPages, basePath, searchParams = {} }: PaginationProps) {
  // Tạo URL với các tham số tìm kiếm hiện tại
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams()

    // Thêm tất cả các tham số hiện tại
    for (const [key, value] of Object.entries(searchParams)) {
      if (key !== "page") {
        params.append(key, value)
      }
    }

    // Thêm tham số trang
    params.append("page", page.toString())

    // Tạo URL với các tham số
    const queryString = params.toString()
    return `${basePath}${queryString ? `?${queryString}` : ""}`
  }

  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    pageNumbers.push(1)

    // Current page neighborhood
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pageNumbers.push(i)
    }

    // Always show last page
    if (totalPages > 1) {
      pageNumbers.push(totalPages)
    }

    // Add ellipsis
    const result = []
    let prev = 0

    for (const num of pageNumbers) {
      if (num - prev > 1) {
        result.push("...")
      }
      result.push(num)
      prev = num
    }

    return result
  }

  const pageNumbers = getPageNumbers()

  if (totalPages <= 1) {
    return null
  }

  return (
    <nav aria-label="Điều hướng trang" className="flex justify-center">
      <ul className="flex items-center space-x-2">
        {/* Previous Page */}
        <li>
          <Link
            href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md border",
              currentPage > 1
                ? "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 pointer-events-none",
            )}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
          >
            &laquo;
          </Link>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((page, i) => (
          <li key={i}>
            {page === "..." ? (
              <span className="flex h-9 w-9 items-center justify-center text-gray-500 dark:text-gray-400">...</span>
            ) : (
              <Link
                href={createPageUrl(page as number)}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-md border",
                  page === currentPage
                    ? "border-primary-600 bg-primary-600 text-white dark:border-primary-500 dark:bg-primary-500"
                    : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800",
                )}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            )}
          </li>
        ))}

        {/* Next Page */}
        <li>
          <Link
            href={currentPage < totalPages ? createPageUrl(currentPage + 1) : "#"}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md border",
              currentPage < totalPages
                ? "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 pointer-events-none",
            )}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
          >
            &raquo;
          </Link>
        </li>
      </ul>
    </nav>
  )
}
