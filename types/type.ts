/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TableOfContents {
  id: string;
  text: string;
  level: number;
  children?: TableOfContents[];
}

export interface AsyncPageProps {
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<any>;
}

// USERS
export interface User {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  password_hash: string;
  role: "reader" | "author" | "admin";
  is_active: boolean;
}

// PROFILES
export interface Profile {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  full_name: string;
  avatar_url: string | null;
  bio: string | null;
}

// AUTHORS
export interface Author {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  name: string;
  bio: string | null;
  avatar_url: string | null;
}

// GLOBAL: SEO Interface
interface SEO {
  title: string;
  description: string;
  keywords: string[];
  robots: string;
  image: string;
}
// ARTICLES
export interface Article {
  id: string;
  created_at: string;
  updated_at?: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string; // markdown
  cover_image: string | null;
  author_id: string;
  seo: SEO;
  series_id: string | null;
  view?: number;
  category?: Category;
  author?: Author;
  tags?: Tag[];
  featured?: boolean;
  ratings?: Rating;
}

// CATEGORIES
export interface Category {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  description: string;
  cover_image: string | null;
  seo: SEO;
}

// SERIES
export interface Series {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  cover_image: string | null;
  seo: SEO;
}

// TAGS
export interface Tag {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  description: string;
}

// RATINGS
export interface Rating {
  id: string;
  created_at: string;
  updated_at: string;
  value: number; // e.g., 1 - 5
  user_id: string;
  article_id: string;
  user_agent: string | null;
  ip_address: string | null;
}

// REACTIONS
export interface Reaction {
  id: string;
  created_at: string;
  updated_at: string;
  type: "like" | "dislike";
  user_id: string;
  article_id: string;
}

// REPORTS
export interface Report {
  id: string;
  created_at: string;
  updated_at: string;
  article_id: string;
  description: string;
  type: string;
}

// VIEWS
export interface View {
  id: string;
  created_at: string;
  article_id: string;
  user_id: string | null;
  ip_address: string | null;
  user_agent: string | null;
}

// COMMENTS
export interface Comment {
  id: string;
  created_at: string;
  updated_at: string;
  content: string;
  article_id: string;
  user_id: string;
  parent_id: string | null;
}

// BOOKMARKS
export interface Bookmark {
  id: string;
  created_at: string;
  user_id: string;
  article_id: string;
}
