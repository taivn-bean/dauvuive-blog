"use client"

import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { cn } from "@/lib/utils"

interface ArticleContentProps {
  content: string
  className?: string
}

export default function ArticleContent({ content, className }: ArticleContentProps) {
  // Thêm ID cho các heading để TOC có thể link đến
  useEffect(() => {
    const headings = document.querySelectorAll(
      ".markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4, .markdown-content h5, .markdown-content h6",
    )

    headings.forEach((heading) => {
      const text = heading.textContent || ""
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")

      heading.setAttribute("id", id)
    })
  }, [content])

  return (
    <div
      className={cn(
        "markdown-content prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-50 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-img:rounded-lg prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-50",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          img({ node, ...props }) {
            return <img className="rounded-lg" {...props} />
          },
          a({ node, ...props }) {
            return <a className="text-primary-600 dark:text-primary-400 hover:underline" {...props} />
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
