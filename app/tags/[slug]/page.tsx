import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Sidebar from "@/components/layout/sidebar";
import Pagination from "@/components/pagination";
import ArticleGrid from "@/components/article/article-grid";
import { getAllTags, getTag } from "@/services/tags";
import { getArticlesByTag } from "@/services/articles";
import { AsyncPageProps } from "@/types/type";

export async function generateStaticParams() {
  const { tags } = await getAllTags();
  return tags?.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const tag = await getTag((await params)?.slug);

  if (!tag) {
    return {
      title: "Chưa có bài viết",
      description: "Hiện tại chưa có bài viết liên quan đến thẻ này.",
    };
  }

  return {
    title: `${tag.name} - Bài viết liên quan đến ${tag.name.toLowerCase()}`,
    description: `Tổng hợp các bài viết liên quan đến ${tag.name.toLowerCase()} dành cho trẻ nhỏ`,
    openGraph: {
      title: `${tag.name} - Bài viết liên quan đến ${tag.name.toLowerCase()}`,
      description: `Tổng hợp các bài viết liên quan đến ${tag.name.toLowerCase()} dành cho trẻ nhỏ`,
    },
  };
}

export default async function TagPage({
  params,
  searchParams,
}: AsyncPageProps) {
  const page = Number((await searchParams)?.page) || 1;
  const tag = await getTag((await params)?.slug ?? "");

  if (!tag) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Chưa có bài viết liên quan đến thẻ này
        </h1>
        <p className="mb-8">Hiện tại chưa có bài viết liên quan đến thẻ này.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
        >
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  const { articles, total_pages } = await getArticlesByTag(tag.id, page, 9);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center text-sm mb-4 text-gray-500 dark:text-gray-400">
          <Link
            href="/"
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link
            href="/tags"
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            Thẻ
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-900 dark:text-gray-100">{tag.name}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-50">
          {tag.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          Tổng hợp các bài viết liên quan đến {tag.name.toLowerCase()} dành cho
          trẻ nhỏ
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <ArticleGrid articles={articles} />

          {total_pages > 1 && (
            <div className="mt-10">
              <Pagination
                currentPage={page}
                totalPages={total_pages}
                basePath={`/tags/${(await params)?.slug}`}
              />
            </div>
          )}
        </div>

        <Sidebar className="w-full md:w-1/3 mt-8 md:mt-0" />
      </div>
    </div>
  );
}
