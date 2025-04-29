import type { Metadata } from "next"
import FeedbackClientPage from "./FeedbackClientPage"

export const metadata: Metadata = {
  title: "Góp ý - KidCare",
  description: "Góp ý và phản hồi cho KidCare - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default function FeedbackPage() {
  return <FeedbackClientPage />
}
