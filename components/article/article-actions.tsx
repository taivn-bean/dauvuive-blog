"use client";

import { useState, useEffect } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Flag,
  MessageCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ArticleActionsProps {
  articleId: string;
  initialUpvotes?: number;
  initialDownvotes?: number;
  initialComments?: number;
  onActionClick?: (action: "upvote" | "downvote" | "share" | "report") => void;
  className?: string;
  commentSectionId?: string;
}

export default function ArticleActions({
  articleId,
  initialUpvotes = 0,
  initialDownvotes = 0,
  initialComments = 0,
  onActionClick,
  className,
  commentSectionId,
}: ArticleActionsProps) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [userVote, setUserVote] = useState<"upvote" | "downvote" | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Xử lý hydration
  useEffect(() => {
    setIsClient(true);
    // Kiểm tra xem người dùng đã vote bài viết này chưa
    const votedArticles = localStorage.getItem("votedArticles");
    if (votedArticles) {
      const parsedVotedArticles = JSON.parse(votedArticles);
      if (parsedVotedArticles[articleId]) {
        setUserVote(parsedVotedArticles[articleId]);
      }
    }
  }, [articleId]);

  const handleVote = (voteType: "upvote" | "downvote") => {
    if (userVote === voteType) {
      // Bỏ vote
      setUserVote(null);
      if (voteType === "upvote") {
        setUpvotes((prev) => Math.max(0, prev - 1));
      } else {
        setDownvotes((prev) => Math.max(0, prev - 1));
      }
    } else {
      // Thay đổi vote
      if (userVote === "upvote" && voteType === "downvote") {
        setUpvotes((prev) => Math.max(0, prev - 1));
        setDownvotes((prev) => prev + 1);
      } else if (userVote === "downvote" && voteType === "upvote") {
        setDownvotes((prev) => Math.max(0, prev - 1));
        setUpvotes((prev) => prev + 1);
      } else {
        // Vote mới
        if (voteType === "upvote") {
          setUpvotes((prev) => prev + 1);
        } else {
          setDownvotes((prev) => prev + 1);
        }
      }
      setUserVote(voteType);
    }

    // Lưu vote vào localStorage
    const votedArticles = JSON.parse(
      localStorage.getItem("votedArticles") || "{}"
    );
    if (userVote === voteType) {
      delete votedArticles[articleId];
    } else {
      votedArticles[articleId] = voteType;
    }
    localStorage.setItem("votedArticles", JSON.stringify(votedArticles));

    // Gọi callback nếu có
    if (onActionClick) {
      onActionClick(voteType);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        console.log({
          title: "Chia sẻ thành công",
          description: "Cảm ơn bạn đã chia sẻ bài viết này!",
        });
      } catch (error) {
        console.error("Lỗi khi chia sẻ:", error);
      }
    } else {
      // Fallback khi Web Share API không được hỗ trợ
      navigator.clipboard.writeText(window.location.href);
      console.log({
        title: "Đã sao chép liên kết",
        description: "Liên kết bài viết đã được sao chép vào clipboard.",
      });
    }

    if (onActionClick) {
      onActionClick("share");
    }
  };

  const handleReport = () => {
    console.log({
      title: "Báo cáo bài viết",
      description: "Cảm ơn bạn đã báo cáo. Chúng tôi sẽ xem xét bài viết này.",
    });

    if (onActionClick) {
      onActionClick("report");
    }
  };

  const handleCommentClick = () => {
    if (commentSectionId) {
      const commentSection = document.getElementById(commentSectionId);
      if (commentSection) {
        commentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Không render gì cho đến khi client-side
  if (!isClient) {
    return null;
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <button
        className={cn(
          "article-action-button",
          userVote === "upvote" && "active"
        )}
        onClick={() => handleVote("upvote")}
        aria-label="Thích"
      >
        <ThumbsUp className="h-4 w-4" />
        <span>{upvotes}</span>
      </button>

      <button
        className={cn(
          "article-action-button",
          userVote === "downvote" && "active"
        )}
        onClick={() => handleVote("downvote")}
        aria-label="Không thích"
      >
        <ThumbsDown className="h-4 w-4" />
        <span>{downvotes}</span>
      </button>

      <button
        className="article-action-button"
        onClick={handleCommentClick}
        aria-label="Bình luận"
      >
        <MessageCircle className="h-4 w-4" />
        <span>{initialComments}</span>
      </button>

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
          <DropdownMenuItem onClick={handleReport}>
            Báo cáo bài viết
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleReport}>
            Báo cáo vi phạm bản quyền
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleReport}>
            Báo cáo nội dung không phù hợp
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
