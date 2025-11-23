import { Loader } from "lucide-react";
import { useEditArticle } from "@/features/article-edit/model";
import { Button, Input, Textarea } from "@/shared/ui";

export const EditArticleForm = () => {
  const { title, body, setTitle, setBody, onSubmit, isLoading } =
    useEditArticle();

  if (isLoading) {
    return (
      <div className={"p-4"}>
        <Loader />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={"space-y-4"}>
      <Input
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder={"Text"}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type={"submit"}>Edit</Button>
    </form>
  );
};
