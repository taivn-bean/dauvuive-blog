// lib/data.ts

import supabase from "@/supabase/client";

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
      slug,
      description,
      views,
      reading_time,
      created_at,
      authors:articles_author_lnk (
        author:authors (
          id,
          slug,
          bio,
          website
        )
      ),
      categories:articles_category_lnk (
        category:categories (
          id,
          name,
          slug
        )
      )
    `,
        { count: "exact" }
      )
      .range(offset, offset + limit - 1)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return {
      articles: data,
      total: count,
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      articles: [],
      total: 0,
    };
  }
};
