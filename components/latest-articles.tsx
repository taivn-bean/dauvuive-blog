import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types/type";
import { getReadingTime } from "@/lib/common";

export default function LatestArticles({
  articles,
}: Readonly<{ articles: Article[] }>) {
  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <article key={article.id} className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden">
            <Link href={`/blog/${article.slug}`}>
              <Image
                src={article.cover_image ?? "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </Link>
          </div>

          <div className="flex-1">
            <Link
              href={`/categories/${article.category?.slug}`}
              className="inline-block text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-2.5 py-0.5 rounded mb-2"
            >
              {article.category?.name}
            </Link>

            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">
              <Link
                href={`/blog/${article.slug}`}
                className="hover:text-primary-600 dark:hover:text-primary-400"
              >
                {article.title}
              </Link>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={article.created_at}>
                  {formatDate(article.created_at)}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>
                  {getReadingTime(article.content_length ?? 0)} phút đọc
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
