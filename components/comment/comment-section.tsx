"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, Reply, MoreHorizontal, Send } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/utils"

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
  }
  content: string
  createdAt: string
  likes: number
  replies?: Comment[]
}

interface CommentSectionProps {
  articleId: string
  initialComments?: Comment[]
  className?: string
}

export default function CommentSection({ initialComments = [], className }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<{ content: string }>()

  // Xử lý hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const onSubmitComment = handleSubmit(async (data) => {
    // Trong thực tế, đây sẽ là API call để lưu comment
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: {
        name: "Người dùng ẩn danh",
        avatar: undefined,
      },
      content: data.content,
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: [],
    }

    setComments((prev) => [newComment, ...prev])
    reset()
  })

  const onSubmitReply = handleSubmit(async (data) => {
    if (!replyingTo) return

    // Trong thực tế, đây sẽ là API call để lưu reply
    const newReply: Comment = {
      id: `reply-${Date.now()}`,
      author: {
        name: "Người dùng ẩn danh",
        avatar: undefined,
      },
      content: data.content,
      createdAt: new Date().toISOString(),
      likes: 0,
    }

    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === replyingTo) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          }
        }
        return comment
      }),
    )

    setReplyingTo(null)
    reset()
  })

  const handleLike = (commentId: string, isReply = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies?.map((reply) => {
                if (reply.id === commentId) {
                  return { ...reply, likes: reply.likes + 1 }
                }
                return reply
              }),
            }
          }
          return comment
        }),
      )
    } else {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, likes: comment.likes + 1 }
          }
          return comment
        }),
      )
    }
  }

  // Không render gì cho đến khi client-side
  if (!isClient) {
    return null
  }

  return (
    <div id="comments" className={cn("space-y-6", className)}>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
        Bình luận ({comments.reduce((acc, comment) => acc + 1 + (comment.replies?.length || 0), 0)})
      </h3>

      <form onSubmit={onSubmitComment} className="space-y-4">
        <Textarea
          placeholder="Viết bình luận của bạn..."
          {...register("content", { required: true })}
          className="min-h-[100px] resize-y"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            <Send className="h-4 w-4 mr-2" />
            Gửi bình luận
          </Button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Chưa có bình luận nào. Hãy là người đầu tiên bình luận!
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={comment.author.avatar || "/images/placeholder.png"} alt={comment.author.name} />
                  <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-50">{comment.author.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(comment.createdAt)}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Báo cáo</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-2 text-gray-700 dark:text-gray-300">{comment.content}</div>
                  <div className="mt-2 flex items-center gap-4">
                    <button className="article-action-button" onClick={() => handleLike(comment.id)}>
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>{comment.likes}</span>
                    </button>
                    <button
                      className="article-action-button"
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    >
                      <Reply className="h-3.5 w-3.5" />
                      <span>Trả lời</span>
                    </button>
                  </div>

                  {replyingTo === comment.id && (
                    <form onSubmit={onSubmitReply} className="mt-3 space-y-3">
                      <Textarea
                        placeholder={`Trả lời ${comment.author.name}...`}
                        {...register("content", { required: true })}
                        className="min-h-[80px] resize-y"
                      />
                      <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                          Hủy
                        </Button>
                        <Button type="submit" size="sm" disabled={isSubmitting}>
                          Gửi
                        </Button>
                      </div>
                    </form>
                  )}

                  {comment.replies && comment.replies.length > 0 && (
                    <div className="comment-replies">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="py-3">
                          <div className="flex gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={reply.author.avatar || "/images/placeholder.png"} alt={reply.author.name} />
                              <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h5 className="font-medium text-gray-900 dark:text-gray-50">{reply.author.name}</h5>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {formatDate(reply.createdAt)}
                                  </p>
                                </div>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                      <MoreHorizontal className="h-3.5 w-3.5" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Báo cáo</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                              <div className="mt-1 text-gray-700 dark:text-gray-300 text-sm">{reply.content}</div>
                              <div className="mt-1">
                                <button
                                  className="article-action-button text-xs"
                                  onClick={() => handleLike(reply.id, true, comment.id)}
                                >
                                  <ThumbsUp className="h-3 w-3" />
                                  <span>{reply.likes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
