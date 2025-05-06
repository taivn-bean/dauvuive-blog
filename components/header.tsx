"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Search, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Sức khỏe", href: "/categories/suc-khoe" },
  { name: "Dinh dưỡng", href: "/categories/dinh-duong" },
  { name: "Giáo dục", href: "/categories/giao-duc" },
  { name: "Phát triển", href: "/categories/phat-trien" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all",
        isScrolled
          ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-transparent bg-background",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Đậu Vui Vẻ</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              // onClick={() => setSearchOpen(!searchOpen)}
              disabled
              className="text-gray-600 dark:text-gray-300"
              aria-label="Tìm kiếm"
            >
              <Search className="h-5 w-5" />
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-600 dark:text-gray-300"
                aria-label={theme === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-gray-600 dark:text-gray-300"
                  aria-label="Mở menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 pt-6">
                  <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Đậu Vui Vẻ</span>
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-gray-200 dark:border-gray-800 py-4">
            <form className="flex gap-2" onSubmit={handleSearch}>
              <Input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                className="flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit">Tìm kiếm</Button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}
