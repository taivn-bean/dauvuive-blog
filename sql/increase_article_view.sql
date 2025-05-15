DROP FUNCTION IF EXISTS increase_article_view;

create or replace function increase_article_view(article_id uuid)
returns void
language plpgsql
as $$
begin
  update articles
  set view = view + 1
  where id = article_id;
end;
$$;