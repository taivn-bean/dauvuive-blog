"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

export default function AuthButton() {
  const { user, isLoading } = useAuth();
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="py-2 px-3 flex items-center">
        <Loader2 className="h-4 w-4 animate-spin mr-2" aria-hidden="true" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  // If user is logged in, show avatar with dropdown
  if (user) {
    // Get initials for avatar fallback
    const initials = user.email
      ? user.email.substring(0, 2).toUpperCase()
      : "U";

    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user?.user_metadata?.avatar ?? ""}
                alt={user.email ?? "User avatar"}
              />
              <AvatarFallback className="bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                {initials}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.email}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Tài khoản</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Cài đặt</span>
            </DropdownMenuItem>
          </DropdownMenuGroup> */}
          <DropdownMenuSeparator />
          <form action="/logout" method="post">
            <DropdownMenuItem asChild>
              <button
                type="submit"
                className="w-full flex items-center cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Đăng xuất</span>
              </button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // If no user, show login button
  return (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Đăng nhập
    </Link>
  );
}
