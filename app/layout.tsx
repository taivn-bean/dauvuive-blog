import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
    template: "%s | Đậu Vui Vẻ",
  },
  description: "Thông tin hữu ích về chăm sóc sức khỏe và nuôi dạy trẻ nhỏ từ 0-10 tuổi",
  keywords: ["chăm sóc trẻ", "nuôi dạy trẻ", "sức khỏe trẻ em", "phát triển trẻ nhỏ", "dạy con"],
  authors: [{ name: "Đậu Vui Vẻ Team" }],
  creator: "Đậu Vui Vẻ",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://kidcare.vn",
    title: "Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
    description: "Thông tin hữu ích về chăm sóc sức khỏe và nuôi dạy trẻ nhỏ từ 0-10 tuổi",
    siteName: "Đậu Vui Vẻ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
    description: "Thông tin hữu ích về chăm sóc sức khỏe và nuôi dạy trẻ nhỏ từ 0-10 tuổi",
    creator: "@kidcare",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
