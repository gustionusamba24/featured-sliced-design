import { useSelector } from "react-redux";
import type { RootState } from "@/app/stores/mainStore";
import { CreateArticleForm } from "@/features/article-create/ui";
import { ArticleList } from "@/widgets/articleList/ui";

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className={"mx-auto max-w-3xl space-y-6 p-6"}>
      <h1 className={"text-3xl font-bold"}>Articles</h1>

      {user && (
        <div className={"rounded-3xl border p-4 shadow"}>
          <h2 className={"mb-2 text-xl font-semibold"}>New Article</h2>
          <CreateArticleForm />
        </div>
      )}
      <ArticleList />
    </div>
  );
};
