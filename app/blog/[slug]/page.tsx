/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

import Sidebar from "@/components/layout/sidebar";
import TableOfContents from "@/components/series/table-of-contents";
import ArticleContent from "@/components/article/article-content";
import RelatedArticles from "@/components/article/related-articles";
import { getArticle, getArticleSlugs } from "@/services/articles";
import { generateTableOfContents } from "@/lib/common";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AsyncPageProps } from "@/types/type";
import ArticleIncreaseView from "@/components/article/article-increase-view";

// Generate static paths for all articles
export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((ele) => ({ slug: ele.slug }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const article = await getArticle((await params).slug);

  if (!article) {
    return {
      title: "Bài viết không tồn tại",
      description: "Trang bài viết này không tồn tại",
    };
  }

  // Giả định rằng article có thêm trường rating
  // const articleRating = article.ratings || { average: 0, count: 0 };

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      ...(article.tags?.map((tag) => tag.name) || []),
      "chăm sóc trẻ",
      "nuôi dạy trẻ",
    ],
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      type: "article",
      publishedTime: article.created_at,
      authors: [article.author?.name ?? ""],
      tags: article.tags?.map((tag) => tag.name),
      images: [
        {
          url: article.seo.image || article.cover_image || "",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.seo.description,
      images: [article.seo.image || article.cover_image || ""],
    },
  };
}

export default async function ArticlePage({ params }: AsyncPageProps) {
  const slug = (await params)?.slug;
  const article = await getArticle(slug ?? "");

  // const seriesInfo = article?.series_id
  //   ? await getSeriesByArticle(article?.id ?? "")
  //   : null;
  const tableOfContents = generateTableOfContents(article?.content ?? "");

  // Giả định rằng article có thêm các trường này
  // const articleRating = article.rating || { average: 4.2, count: 15 };
  // const articleStats = article.stats || {
  //   upvotes: 24,
  //   downvotes: 3,
  //   comments: 8,
  // };

  // Giả định rằng có sẵn dữ liệu bình luận
  const mockComments = [
    {
      id: "comment-1",
      author: {
        name: "Nguyễn Văn A",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "Bài viết rất hữu ích, cảm ơn tác giả đã chia sẻ!",
      createdAt: "2023-06-15T08:30:00Z",
      likes: 5,
      replies: [
        {
          id: "reply-1",
          author: {
            name: "Trần Thị B",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content: "Mình cũng thấy vậy, đã áp dụng và thấy hiệu quả.",
          createdAt: "2023-06-15T09:15:00Z",
          likes: 2,
        },
      ],
    },
    {
      id: "comment-2",
      author: {
        name: "Lê Văn C",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Mình có thắc mắc về phần dinh dưỡng, liệu có thể thay thế sữa bò bằng sữa đậu nành không?",
      createdAt: "2023-06-16T10:45:00Z",
      likes: 3,
      replies: [],
    },
  ];

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Bài viết không tồn tại</h1>
        <p className="mb-8">
          Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
        >
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <article className="w-full md:w-2/3">
          <div className="mb-8">
            <Link
              href={`/categories/${article.category?.slug}`}
              className="inline-block text-sm font-medium text-primary-600 dark:text-primary-400 mb-3 hover:underline"
            >
              {article.category?.name}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={article.created_at}>
                  {formatDate(article.created_at)}
                </time>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{article?.view ?? 0} lượt xem</span>
              </div>
              <div className="flex items-center gap-1">
                <Avatar>
                  <AvatarImage
                    src={article.author?.avatar_url ?? "/placeholder.svg"}
                    alt={article.author?.name ?? ""}
                    width={24}
                    height={24}
                  />
                  <AvatarFallback>
                    {article.author?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{article.author?.name ?? ""}</span>
              </div>

              {/* Hiển thị rating */}
              {/* <div className="flex items-center ml-auto">
                <ArticleRating
                  articleId={article.id}
                  initialRating={articleRating.average}
                  totalRatings={articleRating.count}
                  readOnly
                  size="sm"
                />
              </div> */}
            </div>
          </div>

          {/* Hiển thị thông tin series nếu bài viết thuộc series */}
          {/* {seriesInfo && (
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="font-medium text-primary-600 dark:text-primary-400">
                  Series:
                </span>
                <Link
                  href={`/series/${seriesInfo.series.slug}`}
                  className="ml-2 hover:underline"
                >
                  {seriesInfo.series.title}
                </Link>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Phần{" "}
                  {article.seriesOrder ||
                    seriesInfo.articles.findIndex((p) => p.id === article.id) +
                      1}{" "}
                  / {seriesInfo.series.totalArticles}
                </span>
              </div>
            </div>
          )} */}

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.cover_image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Actions trước nội dung */}
          {/* <div className="mb-6 border-y border-gray-200 dark:border-gray-800 py-3">
            <ArticleActions
              articleId={article.id}
              initialUpvotes={articleStats.upvotes}
              initialDownvotes={articleStats.downvotes}
              initialComments={articleStats.comments}
              commentSectionId="comments"
            />
          </div> */}

          {/* Table of Contents */}
          {tableOfContents.length > 0 && (
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <TableOfContents toc={tableOfContents} />
            </div>
          )}

          {/* Nội dung bài viết */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Nội dung chính */}
            <ArticleContent content={article.content} />
          </div>

          {/* Article Rating sau nội dung */}
          {/* <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col items-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">
              Bạn thấy bài viết này thế nào?
            </h3>
            <ArticleRating
              articleId={article.id}
              initialRating={0}
              totalRatings={articleRating.count}
              size="lg"
            />
          </div> */}

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-wrap gap-2">
              <Tag className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              {article.tags?.map((tag) => (
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

          {/* Hiển thị danh sách bài viết trong series */}
          {/* {seriesInfo && (
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                Bài viết khác trong series
              </h3>
              <SeriesList
                series={seriesInfo.series}
                articles={seriesInfo.articles}
                currentArticleId={article.id}
              />
            </div>
          )} */}

          {/* Comment Section */}
          {/* <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <CommentSection
              articleId={article.id}
              initialComments={mockComments}
            />
          </div> */}

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-50">
              Bài viết liên quan
            </h3>
            <RelatedArticles article={article} />
          </div>
        </article>

        <Sidebar className="w-full md:w-1/3 mt-8 md:mt-0" />
      </div>
      <ArticleIncreaseView articleId={article.id} />
    </div>
  );
}
