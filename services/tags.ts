import { Tag } from "@/types/type";

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const getAllTags = async (
  page = 1,
  limit = 10
): Promise<{ tags: Tag[]; totalPages: number }> => {
  try {
    const offset = (page - 1) * limit;
    const { data, error, count } = await supabase
      .from("tags")
      .select("*")
      .order("name", { ascending: true })
      .range(offset, offset + limit - 1)
      .overrideTypes<Tag[]>();

    if (error) {
      throw error;
    }

    const totalPages = Math.ceil(count ?? 0 / limit);

    return {
      tags: data,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching tags:", error);
    return {
      tags: [],
      totalPages: 0,
    };
  }
};

export const getTagsHasArticles = async () => {
  try {
    const { data, error } = await supabase
      .from("tags")
      .select("*, article_tags!inner(article_id)")
      .overrideTypes<Tag[]>();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching tag:", error);
    return null;
  }
};

export const getTag = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from("tags")
      .select("*")
      .eq("slug", slug)
      .overrideTypes<Tag[]>();

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error("Error fetching tag:", error);
    return null;
  }
};
