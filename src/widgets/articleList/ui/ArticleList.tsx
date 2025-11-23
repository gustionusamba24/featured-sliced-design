import { Loader } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "@/app/stores/mainStore";
import { ArticleCard } from "@/entities/article/ui";
import { DeleteArticleButton } from "@/features/article-delete/ui";
import { Button } from "@/shared/ui";
import { useArticleList } from "@/widgets/articleList/model";

export const ArticleList = () => {
  const { articles, isLoading } = useArticleList();
  const { user } = useSelector((state: RootState) => state.user);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {articles.length === 0 ? (
        <p>no articles</p>
      ) : (
        articles.map((article) => {
          return (
            <ArticleCard key={article.id} article={article}>
              {user?.id && (
                <>
                  <Link to={`/articles/${article.id}/edit`}>
                    <Button variant={"outline"}>Edit</Button>
                  </Link>
                  <DeleteArticleButton id={article.id} />
                </>
              )}
            </ArticleCard>
          );
        })
      )}
    </div>
  );
};
