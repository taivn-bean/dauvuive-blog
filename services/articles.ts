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
      totalPages: Math.ceil((count ?? 0) / limit),
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      articles: [],
      total: 0,
    };
  }
};

export const getArticleSlugs = async () => {
  try {
    const { data, error } = await supabase
      .from("articles")
      .select("slug")
      .overrideTypes<string[]>();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching article slugs:", error);
    return [];
  }
};

export const getArticle = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from("articles")
      .select(
        `
      id,
      title,
      excerpt,
      slug,
      content,
      seo,
      cover_image,
      created_at,
      updated_at,
      series:series_id (id, name, slug),
      category:category_id (id, name, slug),
      author:author_id (id, name, slug)
      tags:tag_id (id, name, slug)
      ratings (id, value)
    `
      )
      .eq("slug", slug)
      .overrideTypes<Article[]>();

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
};

export const getRelatedArticles = async (
  currentArticleId: string,
  categoryId?: string,
  seriesId?: string | null
): Promise<Article[]> => {
  try {
    let query = supabase
      .from("articles")
      .select(
        `
        id,
        title,
        slug,
        excerpt,
        created_at,
        cover_image,
        series_id,
        category:category_id (id, name, slug),
        series:series_id (id, name, slug)
      `
      )
      .neq("id", currentArticleId) // không lấy bài hiện tại
      .order("created_at", { ascending: false })
      .limit(5);

    if (categoryId) {
      query = query.or(`category_id.eq.${categoryId}`);
    }

    if (seriesId) {
      query = query.or(`series_id.eq.${seriesId}`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching related articles:", error);
      return [];
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};

export const getArticlesByCategory = async (
  categoryId: string,
  page = 1,
  limit = 10
): Promise<{ articles: Article[]; totalPages: number; total: number }> => {
  try {
    const offset = (page - 1) * limit;
    const { data, error, count } = await supabase
      .from("articles")
      .select(
        `
      id,
      title,
      excerpt,
      slug,
      content,
      seo,
      cover_image,
      created_at,
      updated_at,
      series:series_id (id, name, slug),
      category:category_id (id, name, slug),
      author:author_id (id, name, slug)
      tags:tag_id (id, name, slug)
      ratings (id, value)
    `,
        { count: "exact" }
      )

      .range(offset, offset + limit - 1)
      .eq("category_id", categoryId)
      .overrideTypes<Article[]>();

    if (error) {
      throw error;
    }

    return {
      articles: data,
      total: count,
      totalPages: Math.ceil((count ?? 0) / limit),
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return {
      articles: [],
      totalPages: 0,
    };
  }
};
