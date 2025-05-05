import type { Metadata } from "next"
import FeedbackClientPage from "./FeedbackClientPage"

export const metadata: Metadata = {
  title: "Góp ý - Đậu Vui Vẻ",
  description: "Góp ý và phản hồi cho Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default function FeedbackPage() {
  return <FeedbackClientPage />
}
