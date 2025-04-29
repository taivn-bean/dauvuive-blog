import Link from "next/link"
import type { Category } from "@/lib/types"

export default function CategorySection({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors"
        >
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-50">{category.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}
