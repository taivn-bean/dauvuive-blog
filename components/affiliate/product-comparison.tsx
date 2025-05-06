import Image from "next/image"
import Link from "next/link"
import { Check, X, ExternalLink } from "lucide-react"
import type { AffiliateProduct } from "./single-product-affiliate"

interface ProductComparisonProps {
  products: AffiliateProduct[]
  title?: string
  description?: string
  features?: string[]
  className?: string
}

export default function ProductComparison({
  products,
  title = "So sánh sản phẩm",
  description,
  features = [],
  className = "",
}: ProductComparisonProps) {
  if (products.length < 2) {
    return null
  }

  return (
    <div className={`border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden ${className}`}>
      <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{title}</h3>
        {description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <th className="p-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 w-1/4">Sản phẩm</th>
              {products.map((product) => (
                <th key={product.id} className="p-4 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-2">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2">{product.title}</h4>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Giá</td>
              {products.map((product) => (
                <td key={`${product.id}-price`} className="p-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-base font-semibold text-primary-600 dark:text-primary-400">
                      {product.price.toLocaleString("vi-VN")}₫
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        {product.originalPrice.toLocaleString("vi-VN")}₫
                      </span>
                    )}
                  </div>
                </td>
              ))}
            </tr>

            {features.map((feature, index) => (
              <tr key={index}>
                <td className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">{feature}</td>
                {products.map((product) => {
                  // Giả định: Mỗi sản phẩm có một mảng features chứa các tính năng
                  const hasFeature = Math.random() > 0.3 // Giả lập: 70% có tính năng
                  return (
                    <td key={`${product.id}-feature-${index}`} className="p-4 text-center">
                      {hasFeature ? (
                        <Check className="mx-auto text-green-500" size={20} />
                      ) : (
                        <X className="mx-auto text-red-500" size={20} />
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}

            <tr>
              <td className="p-4"></td>
              {products.map((product) => (
                <td key={`${product.id}-action`} className="p-4 text-center">
                  <Link
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                  >
                    <span>Xem thêm</span>
                    <ExternalLink size={14} />
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
