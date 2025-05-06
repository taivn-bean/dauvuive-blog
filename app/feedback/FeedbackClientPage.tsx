"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function FeedbackClientPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    feedbackType: "content",
    rating: "",
    message: "",
    subscribe: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, subscribe: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Giả lập gửi form
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        feedbackType: "content",
        rating: "",
        message: "",
        subscribe: false,
      })
    } catch (err) {
      console.error(err)
      setError("Có lỗi xảy ra khi gửi phản hồi. Vui lòng thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Góp ý</span>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Góp ý và phản hồi</h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Chúng tôi luôn mong muốn cải thiện trang web và nội dung để phục vụ bạn tốt hơn. Mọi ý kiến đóng góp của bạn
          đều rất quý giá đối với chúng tôi. Vui lòng dành chút thời gian để chia sẻ suy nghĩ của bạn.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600 dark:text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Cảm ơn bạn đã góp ý!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Phản hồi của bạn đã được ghi nhận. Chúng tôi rất trân trọng ý kiến đóng góp của bạn và sẽ xem xét cẩn
                thận để cải thiện trang web.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="text-primary-600 dark:text-primary-400"
              >
                Gửi phản hồi khác
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Họ tên (không bắt buộc)</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (không bắt buộc)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Nhập địa chỉ email của bạn"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Chúng tôi chỉ sử dụng email của bạn nếu cần liên hệ về phản hồi này.
                  </p>
                </div>

                <div>
                  <Label>Loại phản hồi</Label>
                  <RadioGroup
                    value={formState.feedbackType}
                    onValueChange={(value) => handleRadioChange("feedbackType", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="content" id="content" />
                      <Label htmlFor="content" className="cursor-pointer">
                        Nội dung
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="design" id="design" />
                      <Label htmlFor="design" className="cursor-pointer">
                        Thiết kế và giao diện
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feature" id="feature" />
                      <Label htmlFor="feature" className="cursor-pointer">
                        Đề xuất tính năng mới
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bug" id="bug" />
                      <Label htmlFor="bug" className="cursor-pointer">
                        Báo cáo lỗi
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="cursor-pointer">
                        Khác
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Đánh giá trải nghiệm của bạn</Label>
                  <RadioGroup
                    value={formState.rating}
                    onValueChange={(value) => handleRadioChange("rating", value)}
                    className="mt-2 flex space-x-4"
                  >
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="1" id="rating-1" className="sr-only" />
                      <Label
                        htmlFor="rating-1"
                        className={`cursor-pointer text-2xl ${
                          formState.rating === "1"
                            ? "text-yellow-500 dark:text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        ★
                      </Label>
                      <span className="text-xs mt-1">Rất tệ</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="2" id="rating-2" className="sr-only" />
                      <Label
                        htmlFor="rating-2"
                        className={`cursor-pointer text-2xl ${
                          formState.rating === "2"
                            ? "text-yellow-500 dark:text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        ★
                      </Label>
                      <span className="text-xs mt-1">Tệ</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="3" id="rating-3" className="sr-only" />
                      <Label
                        htmlFor="rating-3"
                        className={`cursor-pointer text-2xl ${
                          formState.rating === "3"
                            ? "text-yellow-500 dark:text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        ★
                      </Label>
                      <span className="text-xs mt-1">Bình thường</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="4" id="rating-4" className="sr-only" />
                      <Label
                        htmlFor="rating-4"
                        className={`cursor-pointer text-2xl ${
                          formState.rating === "4"
                            ? "text-yellow-500 dark:text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        ★
                      </Label>
                      <span className="text-xs mt-1">Tốt</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <RadioGroupItem value="5" id="rating-5" className="sr-only" />
                      <Label
                        htmlFor="rating-5"
                        className={`cursor-pointer text-2xl ${
                          formState.rating === "5"
                            ? "text-yellow-500 dark:text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        ★
                      </Label>
                      <span className="text-xs mt-1">Rất tốt</span>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message">Nội dung góp ý</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Nhập nội dung góp ý của bạn"
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="subscribe" checked={formState.subscribe} onCheckedChange={handleCheckboxChange} />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="subscribe"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Đăng ký nhận bản tin
                    </Label>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Tôi muốn nhận thông tin cập nhật và bài viết mới từ Đậu Vui Vẻ.
                    </p>
                  </div>
                </div>

                {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Đang gửi..." : "Gửi phản hồi"}
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  Bằng cách gửi biểu mẫu này, bạn đồng ý với{" "}
                  <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Chính sách bảo mật
                  </Link>{" "}
                  của chúng tôi.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
