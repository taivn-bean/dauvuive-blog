import type { AffiliateProduct } from "./single-product-affiliate"
import SingleProductAffiliate from "./single-product-affiliate"

interface ProductShowcaseProps {
  products: AffiliateProduct[]
  title?: string
  description?: string
  columns?: 2 | 3 | 4
  className?: string
}

export default function ProductShowcase({
  products,
  title = "Sản phẩm gợi ý",
  description,
  columns = 3,
  className = "",
}: ProductShowcaseProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div
      className={`border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{title}</h3>
        {description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
      </div>

      <div className={`grid ${gridCols[columns]} gap-4`}>
        {products.map((product) => (
          <SingleProductAffiliate key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        <p>
          Các sản phẩm được giới thiệu có thể bao gồm liên kết tiếp thị. Chúng tôi có thể nhận hoa hồng nếu bạn mua qua
          liên kết.
        </p>
      </div>
    </div>
  )
}
