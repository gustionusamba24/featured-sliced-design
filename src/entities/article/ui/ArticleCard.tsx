import * as React from "react";
import { Link } from "react-router";
import type { Article } from "@/entities/article/model";

interface ArticleCardProps {
  article: Article;
  children?: React.ReactNode;
}

export const ArticleCard = ({ article, children }: ArticleCardProps) => {
  return (
    <div className={"rounded-lg bg-white p-6"}>
      <h2 className={"text-2xl font-bold"}>
        <Link to={`/articles/${article.id}`}>{article.title}</Link>
      </h2>
      <p className={"text-muted-foreground"}>{article.body?.slice(0, 100)}</p>
      <div className={"mt-4 flex items-center justify-between"}>{children}</div>
    </div>
  );
};
