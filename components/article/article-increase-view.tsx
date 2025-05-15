"use client";
import { useEffect } from "react";
import { increaseArticleView } from "@/services/articles";

export default function ArticleIncreaseView({
  articleId,
}: {
  articleId: string;
}) {
  const MINUTE = 1.5;
  const INCREASE_AFTER = MINUTE * 60 * 1000;

  useEffect(() => {
    setTimeout(() => {
      increaseArticleView(articleId);
      console.log("Increased view for article:", articleId);
    }, INCREASE_AFTER);
  }, []);

  return null;
}
