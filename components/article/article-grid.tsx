import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Article } from "@/types/type";

export default function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article
          key={article.id}
          className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
          <Link
            href={`/blog/${article.slug}`}
            className="block relative aspect-[16/10] w-full"
          >
            <Image
              src={article.cover_image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-300"
            />
          </Link>

          <div className="p-4">
            <Link
              href={`/categories/${article.category?.slug}`}
              className="inline-block text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-2.5 py-0.5 rounded mb-2"
            >
              {article.category?.name}
            </Link>

            <h2 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900 dark:text-gray-50">
              <Link
                href={`/blog/${article.slug}`}
                className="hover:text-primary-600 dark:hover:text-primary-400"
              >
                {article.title}
              </Link>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
              {article.excerpt}
            </p>

            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3 mr-1" />
              <time dateTime={article.created_at}>
                {formatDate(article.created_at)}
              </time>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
