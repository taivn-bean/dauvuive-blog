Viết content chuẩn SEO cho blog chăm sóc trẻ nhỏ:
Bài viết: []
Yêu cầu: Nội dung đúng đắn, thu hút người đọc, thêm các lưu ý quan trọng đúng độ tuổi của trẻ, có thể dẫn chứng nghiên cứu khoa học vào
Viết dạng markdown, cấu trúc SEO rõ ràng, rành mạch
Lưu vào file json có type như thế này


Article {
  title: string
  slug: string
  description: string
  content: string
  tags: string[]
  seo: {
    metaTitle: string,
    metaDescription: string,
    metaRobots: index, follow,
    metaKeywords:string
  }
}
