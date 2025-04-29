// lib/data.ts

import supabase from "@/supabase/client";
import { Article } from "@/types/type";

export const getListArticles = async (page: number = 1, limit: number = 5) => {
  // Calculate the `offset` based on page number and limit
  const offset = (page - 1) * limit;

  try {
    const { data, error, count } = await supabase
      .from("articles")
      .select(
        `
      id,
      title,
      excerpt,
      slug,
      seo,
      cover_image,
      created_at,
      updated_at,
      series:series_id (id, name, slug),
      category:category_id (id, name, slug),
      author:author_id (id, name, slug)
      LENGTH(content) AS content_length
    `,
        { count: "exact" }
      )
      .range(offset, offset + limit - 1)
      .order("created_at", { ascending: false })
      .overrideTypes<Article[]>();

    if (error) {
      throw error;
    }

    return {
      articles: data,
      total: count,
      totalPages: Math.ceil((count ?? 0) / limit)
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      articles: [],
      total: 0,
    };
  }
};
