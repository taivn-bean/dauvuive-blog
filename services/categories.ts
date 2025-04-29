import { Category } from "@/lib/types";
import supabase from "@/supabase/client";

export const getCategories = async (): Promise<Category[]> => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("id, name, slug, description");

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
