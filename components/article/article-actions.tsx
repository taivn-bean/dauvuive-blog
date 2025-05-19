"use client";

import { Share2, Flag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Article } from "@/types/type";
import { toast } from "sonner";
import { useState } from "react";
import { reportArticle } from "@/services/articles";

interface ArticleActionsProps {
  article: Article;
  className?: string;
}

type reasonType = "report" | "copyright" | "inappropriate";

export default function ArticleActions({
  article,
  className,
}: ArticleActionsProps) {
  const [reportHistory, setReportHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem("reportHistory") ?? "[]")
  );
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          url: window.location.href,
        });
        toast("Chia sẻ thành công", {
          description: "Cảm ơn bạn đã chia sẻ bài viết này!",
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
        toast("Đã sao chép liên kết", {
          description: "Liên kết bài viết đã được sao chép vào clipboard.",
        });
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast("Đã sao chép liên kết", {
        description: "Liên kết bài viết đã được sao chép vào clipboard.",
      });
    }
  };

  const handleReport = (reason: reasonType, description: string) => {
    const newReportHistory = [...new Set([...reportHistory, article.id])];
    if (reportHistory.includes(article.id)) {
      toast("Bạn đã báo cáo bài viết này rồi", {
        description: "Bạn không thể báo cáo bài viết này nữa.",
      });
      return;
    }

    reportArticle(article.id, reason, description);
    toast("Báo cáo bài viết", {
      description: "Cảm ơn bạn đã báo cáo. Chúng tôi sẽ xem xét bài viết này.",
    });
    localStorage.setItem("reportHistory", JSON.stringify(newReportHistory));
    setReportHistory(newReportHistory);
  };

  return (
    <div className={cn("flex items-center justify-end gap-4", className)}>
      <button
        className="article-action-button"
        onClick={handleShare}
        aria-label="Chia sẻ"
      >
        <Share2 className="h-4 w-4" />
        <span>Chia sẻ</span>
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="article-action-button" aria-label="Báo cáo">
            <Flag className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => handleReport("report", "Báo cáo bài viết")}
          >
            Báo cáo bài viết
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              handleReport("copyright", "Báo cáo vi phạm bản quyền")
            }
          >
            Báo cáo vi phạm bản quyền
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              handleReport("inappropriate", "Báo cáo nội dung không phù hợp")
            }
          >
            Báo cáo nội dung không phù hợp
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
