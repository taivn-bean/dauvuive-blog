import type { Metadata } from "next";
import HeroSlider from "@/components/hero-slider";
import LatestArticles from "@/components/latest-articles";
import CategorySection from "@/components/category-section";
import Sidebar from "@/components/layout/sidebar";
import { getFeaturedArticles } from "@/lib/data";
import { getCategories } from "@/services/categories";
import { getListArticles } from "@/services/articles";
import { LatestArticle } from "@/services/types";

export const metadata: Metadata = {
  title: "KidCare - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
  description:
    "Thông tin hữu ích về chăm sóc sức khỏe và nuôi dạy trẻ nhỏ từ 0-10 tuổi",
  keywords: [
    "chăm sóc trẻ",
    "nuôi dạy trẻ",
    "sức khỏe trẻ em",
    "phát triển trẻ nhỏ",
    "dạy con",
  ],
};

export default async function Home() {
  const featuredArticles = await getFeaturedArticles();
  const { articles: latestArticles, total } = await getListArticles(1, 12);
  const categories = await getCategories();

  console.log("latestArticles", latestArticles);
  console.log("total", total);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Slider */}
      <section className="mb-12">
        <HeroSlider articles={featuredArticles} />
      </section>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          {/* Latest Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">
              Bài viết mới nhất
            </h2>
            <LatestArticles articles={latestArticles as LatestArticle} />
          </section>

          {/* Categories */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">
              Khám phá theo chủ đề
            </h2>
            <CategorySection categories={categories} />
          </section>
        </div>

        {/* Sidebar */}
        <Sidebar className="w-full md:w-1/3 mt-8 md:mt-0" />
      </div>
    </div>
  );
}
