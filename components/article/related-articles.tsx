import Image from "next/image";
import Link from "next/link";
import { getRelatedArticles } from "@/services/articles";
import { Article } from "@/types/type";
import { formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";

export default async function RelatedArticles({
  article,
}: Readonly<{
  article: Article;
}>) {
  const articles = await getRelatedArticles(
    article?.id,
    article?.category?.id,
    article?.series_id
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <article
          key={article.id}
          className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
        >
          <Link
            href={`/blog/${article.slug}`}
            className="block relative aspect-[16/10] w-full"
          >
            <Image
              src={article.cover_image || "/images/placeholder.png"}
              alt={article.title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-300"
            />
          </Link>

          <div className="p-3">
            <h3 className="text-base font-semibold line-clamp-2 text-gray-900 dark:text-gray-50">
              <Link
                href={`/blog/${article.slug}`}
                className="hover:text-primary-600 dark:hover:text-primary-400"
              >
                {article.title}
              </Link>
            </h3>

            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                <time dateTime={article.created_at}>
                  {formatDate(article.created_at)}
                </time>
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
