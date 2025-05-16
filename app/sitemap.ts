// app/sitemap.ts
import { WEB_INFO } from "@/constants/domain-info";
import { getArticleSlugs } from "@/services/articles";
import { getCategories } from "@/services/categories";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getArticleSlugs();

  const blogPages = blogSlugs.map(
    (post: { slug: string; updated_at: string }) => ({
      url: `${WEB_INFO.url}/blog/${post.slug}`,
      lastModified: post.updated_at || new Date().toISOString(),
    })
  );

  const categorySlugs = await getCategories();

  const categoryPages = categorySlugs.map((category: { slug: string }) => ({
    url: `${WEB_INFO.url}/categories/${category.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    { url: `${WEB_INFO.url}`, lastModified: new Date().toISOString() },
    ...categoryPages,
    ...blogPages,
  ];
}
