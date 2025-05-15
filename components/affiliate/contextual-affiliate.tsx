import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, AlertCircle, ThumbsUp } from "lucide-react"
import type { AffiliateProduct } from "./single-product-affiliate"

interface ContextualAffiliateProps {
  product: AffiliateProduct
  context: "solution" | "recommendation" | "alternative" | "essential"
  children?: ReactNode
  className?: string
}

export default function ContextualAffiliate({ product, context, children, className = "" }: ContextualAffiliateProps) {
  const contextConfig = {
    solution: {
      title: "Giải pháp cho vấn đề này",
      icon: <AlertCircle className="text-primary-600 dark:text-primary-400" size={20} />,
      bgColor: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    recommendation: {
      title: "Sản phẩm được khuyên dùng",
      icon: <ThumbsUp className="text-primary-600 dark:text-primary-400" size={20} />,
      bgColor: "bg-green-50 dark:bg-green-950",
      borderColor: "border-green-200 dark:border-green-800",
    },
    alternative: {
      title: "Lựa chọn thay thế",
      icon: <AlertCircle className="text-primary-600 dark:text-primary-400" size={20} />,
      bgColor: "bg-amber-50 dark:bg-amber-950",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
    essential: {
      title: "Sản phẩm thiết yếu",
      icon: <AlertCircle className="text-primary-600 dark:text-primary-400" size={20} />,
      bgColor: "bg-purple-50 dark:bg-purple-950",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  }

  const config = contextConfig[context]

  return (
    <div className={`my-6 rounded-lg overflow-hidden border ${config.borderColor} ${config.bgColor} ${className}`}>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          {config.icon}
          <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">{config.title}</h4>
        </div>

        {children && <div className="text-sm text-gray-700 dark:text-gray-300 mb-4">{children}</div>}

        <div className="flex gap-4 bg-white dark:bg-gray-900 p-3 rounded-lg">
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
                className="text-sm bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 rounded-md flex items-center gap-1 transition-colors"
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
