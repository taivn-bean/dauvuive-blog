drop view if exists view_popular_articles;

create or replace view view_popular_articles as
select 
  a.id,
  a.title,
  a.slug,
  a.cover_image,
  a.created_at,
  a.view,
  coalesce(avg(r.value), 0)::numeric as avg_rating,
  count(distinct reac.id) as total_reactions,
  (
    coalesce(a.view, 0) + 
    coalesce(avg(r.value), 0) * 5 + 
    count(distinct reac.id) * 2
  ) as score
from articles a
left join ratings r on r.article_id = a.id
left join reactions reac on reac.article_id = a.id
group by a.id
order by score desc;

select * from view_popular_articles;