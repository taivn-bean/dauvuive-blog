import type { Article, Category, Tag, ArticleNavigation, Series, TableOfContents } from "./types"

// Mock data tối giản
const authors = [
  {
    id: "1",
    name: "Nguyễn Thị Minh",
    avatar: "/placeholder.svg?height=200&width=200",
    bio: "Bác sĩ nhi khoa với hơn 15 năm kinh nghiệm",
  },
  {
    id: "2",
    name: "Trần Văn Hưng",
    avatar: "/placeholder.svg?height=200&width=200",
    bio: "Chuyên gia tâm lý trẻ em",
  },
]

const categories: Category[] = [
  {
    id: "1",
    name: "Sức khỏe",
    slug: "suc-khoe",
    description: "Thông tin về sức khỏe, bệnh tật và cách chăm sóc sức khỏe cho trẻ",
  },
  {
    id: "2",
    name: "Dinh dưỡng",
    slug: "dinh-duong",
    description: "Kiến thức về dinh dưỡng và chế độ ăn uống phù hợp cho từng giai đoạn phát triển",
  },
  {
    id: "3",
    name: "Giáo dục",
    slug: "giao-duc",
    description: "Phương pháp giáo dục, dạy dỗ và phát triển kỹ năng cho trẻ",
  },
  {
    id: "4",
    name: "Phát triển",
    slug: "phat-trien",
    description: "Các giai đoạn phát triển và cách kích thích phát triển toàn diện cho trẻ",
  },
]

const tags: Tag[] = [
  { id: "1", name: "Trẻ sơ sinh", slug: "tre-so-sinh" },
  { id: "2", name: "Trẻ mầm non", slug: "tre-mam-non" },
  { id: "3", name: "Trẻ tiểu học", slug: "tre-tieu-hoc" },
  { id: "4", name: "Dinh dưỡng", slug: "dinh-duong" },
  { id: "5", name: "Giấc ngủ", slug: "giac-ngu" },
]

// Thêm dữ liệu series
const series: Series[] = [
  {
    id: "1",
    title: "Hướng dẫn chăm sóc trẻ sơ sinh",
    slug: "huong-dan-cham-soc-tre-so-sinh",
    description: "Series bài viết hướng dẫn chi tiết cách chăm sóc trẻ sơ sinh từ 0-12 tháng tuổi",
    cover_image: "/placeholder.svg?height=600&width=800&text=Chăm+sóc+trẻ+sơ+sinh",
    totalArticles: 3,
  },
  {
    id: "2",
    title: "Dinh dưỡng cho trẻ mầm non",
    slug: "dinh-duong-cho-tre-mam-non",
    description: "Hướng dẫn về dinh dưỡng và chế độ ăn uống cho trẻ từ 1-5 tuổi",
    cover_image: "/placeholder.svg?height=600&width=800&text=Dinh+dưỡng+mầm+non",
    totalArticles: 2,
  },
]

const articles: Article[] = [
  {
    id: "1",
    title: "10 cách giúp trẻ sơ sinh ngủ ngon hơn",
    slug: "10-cach-giup-tre-so-sinh-ngu-ngon-hon",
    description:
      "Giấc ngủ rất quan trọng đối với sự phát triển của trẻ sơ sinh. Bài viết này sẽ giúp bạn biết cách tạo thói quen ngủ tốt cho bé.",
    content: `
# 10 cách giúp trẻ sơ sinh ngủ ngon hơn

Giấc ngủ đóng vai trò quan trọng trong sự phát triển của trẻ sơ sinh. Trẻ sơ sinh cần ngủ từ 14-17 giờ mỗi ngày để phát triển khỏe mạnh. Tuy nhiên, nhiều bậc cha mẹ gặp khó khăn trong việc giúp con ngủ ngon và đủ giấc.

## Tại sao giấc ngủ lại quan trọng với trẻ sơ sinh?

Trong khi ngủ, cơ thể trẻ sẽ tiết ra hormone tăng trưởng, giúp phát triển não bộ và hệ thống miễn dịch. Giấc ngủ không đủ có thể ảnh hưởng đến:

- Sự phát triển thể chất và trí não
- Khả năng tập trung và học hỏi
- Tâm trạng và hành vi của trẻ

## 10 cách giúp trẻ sơ sinh ngủ ngon hơn

### 1. Tạo thói quen trước khi ngủ

Một thói quen đều đặn trước khi ngủ sẽ giúp trẻ biết khi nào đến giờ đi ngủ. Thói quen này có thể bao gồm:

- Tắm nước ấm
- Mát-xa nhẹ nhàng
- Đọc sách hoặc hát ru
- Cho bú

### 2. Nhận biết dấu hiệu buồn ngủ

Đặt trẻ vào giường khi chúng bắt đầu có dấu hiệu buồn ngủ, không phải khi đã quá mệt mỏi. Trẻ quá mệt sẽ khó ngủ hơn.

### 3. Tạo môi trường ngủ lý tưởng

- Nhiệt độ phòng khoảng 18-22°C
- Ánh sáng dịu nhẹ hoặc tối
- Tiếng ồn trắng nhẹ (như tiếng quạt)
- Đảm bảo nôi an toàn và thoải mái

### 4. Cho trẻ ngủ riêng

Dạy trẻ ngủ trong nôi riêng sẽ giúp chúng phát triển kỹ năng tự ngủ. Đặt trẻ vào nôi khi còn thức nhưng đã buồn ngủ.

### 5. Quấn khăn đúng cách

Quấn khăn giúp trẻ cảm thấy an toàn như trong bụng mẹ. Tuy nhiên, cần quấn đúng cách và chỉ áp dụng cho trẻ dưới 2-3 tháng tuổi.
    `,
    cover_image: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-04-15T08:00:00Z",
    readingTime: 7,
    author: authors[0],
    category: categories[0],
    categoryId: "1",
    tags: [tags[0], tags[4]],
    viewCount: 1250,
    seriesId: "1",
    seriesOrder: 1,
    rating: {
      average: 4.7,
      count: 23,
    },
    stats: {
      upvotes: 45,
      downvotes: 2,
      comments: 12,
    },
  },
  {
    id: "2",
    title: "Thực đơn dinh dưỡng cho trẻ từ 6-12 tháng tuổi",
    slug: "thuc-don-dinh-duong-cho-tre-6-12-thang-tuoi",
    description:
      "Bắt đầu cho trẻ ăn dặm là giai đoạn quan trọng. Hãy tìm hiểu cách xây dựng thực đơn dinh dưỡng cân bằng cho bé.",
    content: `
# Thực đơn dinh dưỡng cho trẻ từ 6-12 tháng tuổi

Giai đoạn từ 6-12 tháng tuổi là thời điểm quan trọng khi trẻ bắt đầu làm quen với thực phẩm rắn. Việc xây dựng thực đơn dinh dưỡng cân bằng và phù hợp sẽ giúp trẻ phát triển toàn diện.

## Tầm quan trọng của ăn dặm

Ăn dặm không chỉ cung cấp dinh dưỡng mà còn giúp trẻ:

- Phát triển kỹ năng nhai và nuốt
- Làm quen với nhiều vị và kết cấu thực phẩm
- Hình thành thói quen ăn uống lành mạnh

## Nguyên tắc ăn dặm cho trẻ 6-12 tháng

### 1. Từ 6-8 tháng tuổi

- **Tần suất**: 2-3 bữa/ngày
- **Kết cấu**: Thức ăn nghiền nhuyễn
- **Số lượng**: Bắt đầu với 2-3 thìa, tăng dần lên 2-3 muỗng/bữa
- **Thực phẩm phù hợp**:
  - Bột ngũ cốc (gạo, yến mạch)
  - Rau củ nghiền (cà rốt, khoai lang, bí đỏ)
  - Trái cây nghiền (chuối, táo, lê)

### 2. Từ 9-12 tháng tuổi

- **Tần suất**: 3-4 bữa/ngày + 1-2 bữa phụ
- **Kết cấu**: Thức ăn băm nhỏ, thức ăn dạng miếng mềm
- **Số lượng**: 1/2 - 3/4 bát con/bữa
- **Thực phẩm phù hợp**:
  - Protein: thịt gà, thịt bò, cá, trứng, đậu phụ (băm nhỏ)
  - Rau củ: đa dạng các loại rau củ cắt nhỏ
  - Trái cây: cắt miếng nhỏ, mềm
  - Ngũ cốc: cơm nát, mì, bánh mì mềm
    `,
    cover_image: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-05-20T09:30:00Z",
    readingTime: 9,
    author: authors[0],
    category: categories[1],
    categoryId: "2",
    tags: [tags[0], tags[3]],
    viewCount: 2560,
    seriesId: "1",
    seriesOrder: 2,
    rating: {
      average: 4.5,
      count: 18,
    },
    stats: {
      upvotes: 38,
      downvotes: 3,
      comments: 9,
    },
  },
  {
    id: "3",
    title: "Phương pháp Montessori áp dụng tại nhà cho trẻ 3-6 tuổi",
    slug: "phuong-phap-montessori-ap-dung-tai-nha-cho-tre-3-6-tuoi",
    description:
      "Phương pháp Montessori không chỉ áp dụng tại trường mà còn có thể áp dụng hiệu quả tại nhà. Bài viết giới thiệu những hoạt động Montessori đơn giản.",
    content: `
# Phương pháp Montessori áp dụng tại nhà cho trẻ 3-6 tuổi

Phương pháp Montessori là phương pháp giáo dục do bác sĩ Maria Montessori phát triển, tập trung vào việc tôn trọng sự phát triển tự nhiên của trẻ và khuyến khích tính độc lập. Bài viết này sẽ giới thiệu cách áp dụng phương pháp Montessori tại nhà cho trẻ từ 3-6 tuổi.

## Phương pháp Montessori là gì?

Phương pháp Montessori dựa trên các nguyên tắc cơ bản sau:

- Tôn trọng trẻ và nhịp độ phát triển tự nhiên của trẻ
- Tạo môi trường chuẩn bị phù hợp với nhu cầu phát triển
- Khuyến khích tính độc lập và tự do trong khuôn khổ
- Học thông qua khám phá và trải nghiệm thực tế
- Phát triển toàn diện: thể chất, tinh thần, xã hội và cảm xúc

## Các hoạt động Montessori cho trẻ 3-6 tuổi

### 1. Hoạt động thực hành cuộc sống

#### Chăm sóc bản thân
- Tự mặc/cởi quần áo
- Đánh răng, rửa mặt
- Chuẩn bị bữa ăn nhẹ đơn giản

#### Chăm sóc môi trường
- Lau bàn, quét nhà
- Rửa bát đĩa
- Gấp quần áo
- Chăm sóc cây trồng
    `,
    cover_image: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-06-05T10:15:00Z",
    readingTime: 12,
    author: authors[1],
    category: categories[2],
    categoryId: "3",
    tags: [tags[1], tags[2]],
    viewCount: 1980,
  },
  {
    id: "4",
    title: "Các dấu mốc phát triển quan trọng của trẻ từ 0-3 tuổi",
    slug: "cac-dau-moc-phat-trien-quan-trong-cua-tre-0-3-tuoi",
    description:
      "Hiểu biết về các dấu mốc phát triển giúp cha mẹ theo dõi sự phát triển của con và phát hiện sớm các vấn đề nếu có.",
    content: `
# Các dấu mốc phát triển quan trọng của trẻ từ 0-3 tuổi

Trong ba năm đầu đời, trẻ phát triển với tốc độ đáng kinh ngạc. Hiểu biết về các dấu mốc phát triển giúp cha mẹ theo dõi sự phát triển của con và phát hiện sớm các vấn đề nếu có.

## Tầm quan trọng của việc theo dõi dấu mốc phát triển

Các dấu mốc phát triển là những kỹ năng cụ thể mà hầu hết trẻ em có thể làm được ở một độ tuổi nhất định. Chúng bao gồm:

- Phát triển vận động thô (ngồi, bò, đi)
- Phát triển vận động tinh (cầm nắm, vẽ)
- Phát triển ngôn ngữ (bập bẹ, nói từ đầu tiên)
- Phát triển nhận thức (hiểu, học hỏi, giải quyết vấn đề)
- Phát triển xã hội và cảm xúc (cười, chơi với người khác)

## Dấu mốc phát triển theo độ tuổi

### Sơ sinh (0-3 tháng)

#### Phát triển vận động
- Nâng đầu khi nằm sấp
- Đưa tay lên miệng
- Theo dõi đồ vật di chuyển bằng mắt
- Bắt đầu đạp chân
    `,
    cover_image: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-06-28T07:45:00Z",
    readingTime: 15,
    author: authors[0],
    category: categories[3],
    categoryId: "4",
    tags: [tags[0], tags[1]],
    viewCount: 3470,
    seriesId: "1",
    seriesOrder: 3,
    rating: {
      average: 4.8,
      count: 32,
    },
    stats: {
      upvotes: 65,
      downvotes: 2,
      comments: 18,
    },
  },
  {
    id: "5",
    title: "Thực đơn dinh dưỡng cân bằng cho trẻ mầm non",
    slug: "thuc-don-dinh-duong-can-bang-cho-tre-mam-non",
    description:
      "Dinh dưỡng đóng vai trò quan trọng trong sự phát triển của trẻ mầm non. Bài viết giới thiệu thực đơn cân bằng và đa dạng.",
    content: `
# Thực đơn dinh dưỡng cân bằng cho trẻ mầm non

Dinh dưỡng đóng vai trò quan trọng trong sự phát triển thể chất và trí tuệ của trẻ mầm non (1-5 tuổi). Một chế độ ăn cân bằng, đa dạng sẽ cung cấp đầy đủ dưỡng chất cần thiết cho sự phát triển toàn diện của trẻ.

## Nhu cầu dinh dưỡng của trẻ mầm non

### Năng lượng
- Trẻ 1-3 tuổi: khoảng 1000-1400 kcal/ngày
- Trẻ 4-5 tuổi: khoảng 1400-1600 kcal/ngày

### Protein
- Cần thiết cho sự phát triển cơ bắp, xương và các mô
- Nguồn: thịt, cá, trứng, sữa, đậu, đỗ
- Nhu cầu: 13-19g/ngày cho trẻ 1-3 tuổi; 19-25g/ngày cho trẻ 4-5 tuổi
    `,
    cover_image: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-07-10T11:20:00Z",
    readingTime: 10,
    author: authors[0],
    category: categories[1],
    categoryId: "2",
    tags: [tags[1], tags[3]],
    viewCount: 1850,
    seriesId: "2",
    seriesOrder: 1,
    rating: {
      average: 4.6,
      count: 14,
    },
    stats: {
      upvotes: 32,
      downvotes: 1,
      comments: 7,
    },
  },
  {
    id: "6",
    title: "Các hoạt động phát triển vận động tinh cho trẻ mầm non",
    slug: "cac-hoat-dong-phat-trien-van-dong-tinh-cho-tre-mam-non",
    description:
      "Vận động tinh là kỹ năng quan trọng giúp trẻ thực hiện các hoạt động hàng ngày và chuẩn bị cho việc học tập sau này.",
    content: `
# Các hoạt động phát triển vận động tinh cho trẻ mầm non

Vận động tinh là khả năng sử dụng và điều khiển các cơ nhỏ ở bàn tay, ngón tay và cổ tay để thực hiện các động tác chính xác. Phát triển vận động tinh là nền tảng quan trọng cho nhiều kỹ năng thiết yếu như viết, vẽ, cắt và các hoạt động tự phục vụ hàng ngày.

## Tầm quan trọng của vận động tinh

Phát triển vận động tinh mang lại nhiều lợi ích cho trẻ mầm non:

- Chuẩn bị cho việc viết và các kỹ năng học tập
- Tăng cường khả năng tự lập (tự mặc quần áo, đánh răng, ăn uống)
- Phát triển sự phối hợp tay-mắt
- Tăng cường sự tự tin và lòng tự trọng
- Hỗ trợ phát triển nhận thức và sáng tạo
    `,
    cover_image: "/placeholder.svg?height=600&width=800",
    publishedAt: "2023-08-05T14:30:00Z",
    readingTime: 14,
    author: authors[1],
    category: categories[3],
    categoryId: "4",
    tags: [tags[1], tags[2]],
    viewCount: 1680,
    seriesId: "2",
    seriesOrder: 2,
    rating: {
      average: 4.9,
      count: 21,
    },
    stats: {
      upvotes: 42,
      downvotes: 0,
      comments: 11,
    },
  },
]

// Functions for data retrieval
export async function getArticles(limit = 10, page = 1): Promise<Article[]> {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  return articles.slice(startIndex, endIndex)
}

export async function getFeaturedArticles(): Promise<Article[]> {
  // Trả về 4 bài viết được xem nhiều nhất
  return [...articles].sort((a, b) => b.viewCount - a.viewCount).slice(0, 4)
}

export async function getCategories(): Promise<Category[]> {
  return categories
}

export async function getTags(): Promise<Tag[]> {
  return tags
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  return articles.find((article) => article.slug === slug)
}

export async function getArticlesByTag(
  tagSlug: string,
  page = 1,
  limit = 10,
): Promise<{ articles: Article[]; totalPages: number }> {
  const tagArticles = articles.filter((article) => article.tags.some((tag) => tag.slug === tagSlug))
  const totalPages = Math.ceil(tagArticles.length / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return {
    articles: tagArticles.slice(startIndex, endIndex),
    totalPages,
  }
}


export async function getTag(slug: string): Promise<Tag | undefined> {
  return tags.find((tag) => tag.slug === slug)
}

export async function getArticleNavigation(articleId: string): Promise<ArticleNavigation> {
  const currentIndex = articles.findIndex((article) => article.id === articleId)

  return {
    prevArticle:
      currentIndex > 0
        ? {
            id: articles[currentIndex - 1].id,
            title: articles[currentIndex - 1].title,
            slug: articles[currentIndex - 1].slug,
          }
        : null,
    nextArticle:
      currentIndex < articles.length - 1
        ? {
            id: articles[currentIndex + 1].id,
            title: articles[currentIndex + 1].title,
            slug: articles[currentIndex + 1].slug,
          }
        : null,
  }
}

export async function getRelatedArticles(articleId: string, categoryId: string): Promise<Article[]> {
  return articles.filter((article) => article.id !== articleId && article.categoryId === categoryId).slice(0, 3)
}

export async function getArticleSlugs(): Promise<string[]> {
  return articles.map((article) => article.slug)
}

// Thêm các hàm liên quan đến series
export async function getAllSeries(): Promise<Series[]> {
  return series
}

export async function getSeries(slug: string): Promise<Series | undefined> {
  return series.find((s) => s.slug === slug)
}

export async function getArticlesBySeries(seriesId: string): Promise<Article[]> {
  return articles
    .filter((article) => article.seriesId === seriesId)
    .sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0))
}

export async function getSeriesByArticle(articleId: string): Promise<{ series: Series; articles: Article[] } | null> {
  const article = articles.find((p) => p.id === articleId)
  if (!article || !article.seriesId) return null

  const seriesInfo = series.find((s) => s.id === article.seriesId)
  if (!seriesInfo) return null

  const seriesArticles = await getArticlesBySeries(article.seriesId)

  return {
    series: seriesInfo,
    articles: seriesArticles,
  }
}

// Hàm phân tích nội dung markdown để tạo TOC
export function generateTableOfContents(content: string): TableOfContents[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const toc: TableOfContents[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")

    toc.push({
      id,
      text,
      level,
    })
  }

  return toc
}
