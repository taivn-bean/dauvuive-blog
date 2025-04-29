import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ShoppingCart } from "lucide-react"

export interface AffiliateProduct {
  id: string
  title: string
  description: string
  imageUrl: string
  price: number
  originalPrice?: number
  affiliateUrl: string
  rating?: number
  reviewCount?: number
  merchant?: string
}

interface SingleProductAffiliateProps {
  product: AffiliateProduct
  variant?: "default" | "compact" | "horizontal"
  className?: string
}

export default function SingleProductAffiliate({
  product,
  variant = "default",
  className = "",
}: SingleProductAffiliateProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  if (variant === "compact") {
    return (
      <div
        className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow ${className}`}
      >
        <div className="p-4 flex items-center gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 64px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{product.title}</h3>
            <div className="flex items-center justify-between mt-1">
              <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {product.price.toLocaleString("vi-VN")}₫
              </div>
              <Link
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 flex items-center gap-1"
              >
                <span>Xem thêm</span>
                <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "horizontal") {
    return (
      <div
        className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow ${className}`}
      >
        <div className="flex">
          <div className="relative w-1/3 aspect-square">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 200px"
            />
            {discount > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discount}%
              </div>
            )}
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 line-clamp-2">{product.title}</h3>
            {product.merchant && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Cung cấp bởi: {product.merchant}</p>
            )}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                {product.price.toLocaleString("vi-VN")}₫
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  {product.originalPrice.toLocaleString("vi-VN")}₫
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{product.description}</p>
            <div className="mt-4">
              <Link
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <ShoppingCart size={16} />
                <span>Xem thêm</span>
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
      className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 line-clamp-2">{product.title}</h3>
        {product.merchant && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Cung cấp bởi: {product.merchant}</p>
        )}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
            {product.price.toLocaleString("vi-VN")}₫
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {product.originalPrice.toLocaleString("vi-VN")}₫
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{product.description}</p>
        <div className="mt-4">
          <Link
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <ShoppingCart size={16} />
            <span>Xem thêm</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
