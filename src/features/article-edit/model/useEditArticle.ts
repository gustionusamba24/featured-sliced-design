import { useEffect, useState } from "react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import type { AppDispatch, RootState } from "@/app/stores/mainStore";
import { editArticle } from "@/entities/article/model";

export const useEditArticle = () => {
  const { id } = useParams<{ id: string }>();

  const article = useSelector((state: RootState) =>
    state.article.articles.find((a) => a.id === id)
  );

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setBody(article.body);
    }
  }, [article]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Please provide both title and body");
      return;
    }

    dispatch(editArticle({ id: id ?? "", title, body }));

    toast.success("Article updated successfully");
    navigate("/");
  };

  return {
    title,
    body,
    setTitle,
    setBody,
    onSubmit,
    isLoading: !article,
  };
};
