import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { AffiliateProduct } from "./single-product-affiliate"

interface InContentAffiliateProps {
  product: AffiliateProduct
  className?: string
  variant?: "default" | "minimal"
}

export default function InContentAffiliate({ product, className = "", variant = "default" }: InContentAffiliateProps) {
  if (variant === "minimal") {
    return (
      <div
        className={`my-4 p-3 border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-950 dark:border-primary-700 rounded-r-md ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={product.imageUrl || "/images/placeholder.png"}
              alt={product.title}
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">Sản phẩm gợi ý</p>
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{product.title}</h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {product.price.toLocaleString("vi-VN")}₫
              </span>
              <Link
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center gap-1"
              >
                <span>Xem chi tiết</span>
                <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div
      className={`my-6 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="p-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Sản phẩm gợi ý</p>
        <div className="flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={product.imageUrl || "/images/placeholder.png"}
              alt={product.title}
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">{product.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-primary-600 dark:text-primary-400">
                  {product.price.toLocaleString("vi-VN")}₫
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                    {product.originalPrice.toLocaleString("vi-VN")}₫
                  </span>
                )}
              </div>
              <Link
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center gap-1"
              >
                <span>Xem thêm</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
