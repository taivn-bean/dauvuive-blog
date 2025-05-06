import { TableOfContents } from "@/types/type";

export function getReadingTime(content_length: number): number {
  const wordsPerMinute = 150;
  const words = content_length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
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