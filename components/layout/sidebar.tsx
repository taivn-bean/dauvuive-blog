import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getPopularArticles } from "@/services/articles";
import { getTagsHasArticles } from "@/services/tags";
import { Eye } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export default async function Sidebar({ className }: SidebarProps) {
  const popularArticles = await getPopularArticles(5);
  const tags = await getTagsHasArticles();

  return (
    <aside className={cn("space-y-8", className)}>
      {/* Advertisement */}
      {/* <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-100 dark:bg-gray-800 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Quảng cáo
        </p>
        <div className="h-[250px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
          <p className="text-gray-500 dark:text-gray-400">Banner quảng cáo</p>
        </div>
      </div> */}

      {/* Popular Articles */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-50">
          Bài viết phổ biến
        </h3>
        <div className="space-y-4">
          {popularArticles.map((article) => (
            <div key={article.id} className="flex gap-3">
              <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={article.cover_image || "/images/placeholder.png"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {article.title}
                  </Link>
                </h4>

                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{article.view} lượt xem</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-50">
          Thẻ
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Link
              key={tag.id}
              href={`/tags/${tag.slug}`}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <NewsletterSignup /> */}

      {/* Second Advertisement */}
      {/* <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-100 dark:bg-gray-800 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Quảng cáo
        </p>
        <div className="h-[300px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
          <p className="text-gray-500 dark:text-gray-400">Banner quảng cáo</p>
        </div>
      </div> */}
    </aside>
  );
}
