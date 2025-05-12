"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
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
        subject: "general",
        message: "",
      })
    } catch (err) {
      console.error(err)
      setError("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.")
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
        <span className="text-gray-900 dark:text-gray-100">Liên hệ</span>
      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Liên hệ với chúng tôi</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Chúng tôi luôn sẵn sàng lắng nghe ý kiến, câu hỏi hoặc đề xuất của bạn. Hãy liên hệ với chúng tôi qua form
              bên dưới hoặc thông tin liên hệ của chúng tôi.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-50">Địa chỉ</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    123 Đường ABC, Quận XYZ
                    <br />
                    Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-50">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    <a href="mailto:info@dauvuive.vn" className="hover:text-primary-600 dark:hover:text-primary-400">
                      info@dauvuive.vn
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-50">Điện thoại</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    <a href="tel:+842812345678" className="hover:text-primary-600 dark:hover:text-primary-400">
                      028-1234-5678
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-medium text-gray-900 dark:text-gray-50 mb-4">Giờ làm việc</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Thứ Hai - Thứ Sáu: 8:30 - 17:30</p>
                <p>Thứ Bảy: 8:30 - 12:00</p>
                <p>Chủ Nhật: Nghỉ</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                  <Send className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Tin nhắn đã được gửi!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="text-primary-600 dark:text-primary-400"
                >
                  Gửi tin nhắn khác
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-6">Gửi tin nhắn cho chúng tôi</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Họ tên</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Nhập họ tên của bạn"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ email của bạn"
                      required
                    />
                  </div>

                  <div>
                    <Label>Chủ đề</Label>
                    <RadioGroup value={formState.subject} onValueChange={handleRadioChange} className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="cursor-pointer">
                          Câu hỏi chung
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="support" id="support" />
                        <Label htmlFor="support" className="cursor-pointer">
                          Hỗ trợ kỹ thuật
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="feedback" id="feedback" />
                        <Label htmlFor="feedback" className="cursor-pointer">
                          Góp ý, phản hồi
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cooperation" id="cooperation" />
                        <Label htmlFor="cooperation" className="cursor-pointer">
                          Hợp tác, quảng cáo
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message">Nội dung tin nhắn</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Nhập nội dung tin nhắn của bạn"
                      rows={5}
                      required
                    />
                  </div>

                  {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
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

        <div className="mt-12">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-[400px] w-full">
            {/* Đây là vị trí để nhúng bản đồ Google Maps */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">Bản đồ Google Maps sẽ được hiển thị ở đây</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
