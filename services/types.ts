export interface Author {
  id: number;
  bio: string | null;
  name: string;
  slug: string;
  website: string | null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface ArticleAuthor {
  author: Author;
}

export interface ArticleCategory {
  category: Category;
}

export interface LatestArticle {
  id: number;
  title: string;
  slug: string;
  coverImage: any;
  description: string;
  views: number;
  reading_time: number | null;
  created_at: string;
  authors: ArticleAuthor[];
  categories: ArticleCategory[];
}
