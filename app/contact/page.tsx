import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Liên hệ - Đậu Vui Vẻ",
  description: "Liên hệ với Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default function ContactPage() {
  return <ContactPageClient />
}
