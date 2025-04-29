CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'reader', -- reader, author, admin
  is_active BOOLEAN DEFAULT TRUE
);


CREATE TABLE authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE, -- SEO URL: /authors/ten-tac-gia
  bio TEXT,
  avatar TEXT,
  seo JSONB, -- SEO (title, description, image, robotx, keywords)

  facebook_url TEXT,
  twitter_url TEXT,
  linkedin_url TEXT,
  website_url TEXT
);

CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  user_id UUID NOT NULL UNIQUE, -- mapping với hệ thống users
  display_name TEXT,
  bio TEXT,
  avatar TEXT,
  website_url TEXT,
  
  location TEXT,
  birthday DATE,

  CONSTRAINT fk_profile_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  cover_image TEXT,
  seo JSONB
);

CREATE TABLE series (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  cover_image TEXT,
  seo JSONB
);

CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  title TEXT NOT NULL,
  excerpt TEXT,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL, -- markdown content
  cover_image TEXT,
  seo JSONB,
  
  author_id UUID NOT NULL,
  series_id UUID,
  category_id UUID,

  CONSTRAINT fk_article_author FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE SET NULL,
  CONSTRAINT fk_article_series FOREIGN KEY (series_id) REFERENCES series(id) ON DELETE SET NULL,
  CONSTRAINT fk_article_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

CREATE TABLE ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  value INTEGER NOT NULL CHECK (value BETWEEN 1 AND 5),
  user_id UUID NOT NULL,
  article_id UUID NOT NULL,

  CONSTRAINT fk_rating_article FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
);

CREATE TABLE reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  type TEXT NOT NULL CHECK (type IN ('like', 'dislike')),
  user_id UUID NOT NULL,
  article_id UUID NOT NULL,

  CONSTRAINT fk_reaction_article FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
);

CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  description TEXT NOT NULL,
  type TEXT,
  article_id UUID NOT NULL,

  CONSTRAINT fk_report_article FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
);

CREATE TABLE article_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  article_id UUID NOT NULL,
  tag_id UUID NOT NULL,

  CONSTRAINT fk_article_tag_article FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  CONSTRAINT fk_article_tag_tag FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),

  article_id UUID NOT NULL,
  user_id UUID,
  ip_address INET,
  user_agent TEXT,

  CONSTRAINT fk_view_article FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  CONSTRAINT fk_view_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  content TEXT NOT NULL,
  article_id UUID NOT NULL,
  user_id UUID NOT NULL,
  parent_id UUID,

  CONSTRAINT fk_comment_article FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,
  CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_comment_parent FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),

  user_id UUID NOT NULL,
  article_id UUID NOT NULL,

  CONSTRAINT fk_bookmark_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_bookmark_article FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE,

  UNIQUE (user_id, article_id) -- 1 user chỉ bookmark 1 bài 1 lần
);


CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger cho tất cả bảng
DO $$
DECLARE
  table_name TEXT;
BEGIN
  FOR table_name IN
    SELECT unnest(array[
      'authors', 'profiles', 'categories', 'series', 'tags',
      'articles', 'ratings', 'reactions', 'reports', 'article_tags', 'views', 'comments', 'bookmarks'
    ])
  LOOP
    EXECUTE format('
      CREATE TRIGGER set_updated_at_%s
      BEFORE UPDATE ON %I
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
    ', table_name, table_name);
  END LOOP;
END $$;
