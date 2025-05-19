import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import "./globals.css";
import type { Metadata } from "next";
import { WEB_INFO } from "@/constants/domain-info";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: WEB_INFO.title,
    template: "%s | Đậu Vui Vẻ",
  },
  description: WEB_INFO.description,
  keywords: WEB_INFO.keywords,
  authors: [{ name: "Đậu Vui Vẻ Team" }],
  creator: "@dauvuive",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: WEB_INFO.url,
    title: WEB_INFO.title,
    description: WEB_INFO.description,
    siteName: WEB_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: WEB_INFO.title,
    description: WEB_INFO.description,
    creator: "@dauvuive",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-icon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      {/* <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8495408189360527"
          crossOrigin="anonymous"
        ></script>
      </head> */}
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-FJSNTK1T60" />
    </html>
  );
}
