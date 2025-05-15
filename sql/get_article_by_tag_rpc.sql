CREATE OR REPLACE FUNCTION get_articles_by_tag_with_page(
  input_tag_id UUID,
  input_limit INTEGER DEFAULT 10,
  input_page INTEGER DEFAULT 1
)
RETURNS JSONB AS $$
DECLARE
  articles JSONB;
  total_count INTEGER;
  offset_value INTEGER;
BEGIN
  -- Tính offset dựa trên trang hiện tại
  offset_value := (input_page - 1) * input_limit;

  -- Đếm tổng số bài viết có tag
  SELECT COUNT(DISTINCT a.id)
  INTO total_count
  FROM articles a
  JOIN article_tags at ON a.id = at.article_id
  WHERE at.tag_id = input_tag_id;

  -- Lấy danh sách bài viết với phân trang
  SELECT JSONB_AGG(
    JSONB_BUILD_OBJECT(
      'id', a.id,
      'title', a.title,
      'excerpt', a.excerpt,
      'slug', a.slug,
      'content', a.content,
      'seo', a.seo,
      'cover_image', a.cover_image,
      'created_at', a.created_at,
      'updated_at', a.updated_at,
      'series', JSONB_BUILD_OBJECT(
        'id', s.id, 'name', s.name, 'slug', s.slug
      ),
      'category', JSONB_BUILD_OBJECT(
        'id', c.id, 'name', c.name, 'slug', c.slug
      ),
      'author', JSONB_BUILD_OBJECT(
        'id', au.id, 'name', au.name, 'slug', au.slug
      ),
      'tags', (
        SELECT JSONB_AGG(JSONB_BUILD_OBJECT('id', t.id, 'name', t.name, 'slug', t.slug))
        FROM article_tags at2
        JOIN tags t ON at2.tag_id = t.id
        WHERE at2.article_id = a.id
      )
    )
  )
  INTO articles
  FROM articles a
  JOIN article_tags at ON a.id = at.article_id
  LEFT JOIN series s ON a.series_id = s.id
  LEFT JOIN categories c ON a.category_id = c.id
  LEFT JOIN authors au ON a.author_id = au.id
  WHERE at.tag_id = input_tag_id
  GROUP BY a.id, s.id, c.id, au.id
  ORDER BY a.created_at DESC
  LIMIT input_limit OFFSET offset_value;

  -- Trả về object JSON chứa kết quả
  RETURN JSONB_BUILD_OBJECT(
    'page', input_page,
    'limit', input_limit,
    'total', total_count,
    'total_pages', CEIL(total_count::DECIMAL / input_limit),
    'articles', COALESCE(articles, '[]'::JSONB)
  );
END;
$$ LANGUAGE plpgsql;
