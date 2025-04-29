import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Liên hệ - KidCare",
  description: "Liên hệ với KidCare - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default function ContactPage() {
  return <ContactPageClient />
}
