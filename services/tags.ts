import supabase from "@/supabase/client";
import { Tag } from "@/types/type";

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
