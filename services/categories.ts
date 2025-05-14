import { Category } from "@/types/type";

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const getCategories = async (): Promise<Category[]> => {
  try {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
      console.error("Error fetching categories:", error);
      return [];
    }

    return data as Category[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getCategory = async (
  slug: string
): Promise<Category | undefined> => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching categories:", error);
      return undefined;
    }

    return data as Category;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return undefined;
  }
};
