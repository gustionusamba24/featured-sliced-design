import { useState } from "react";
import * as React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import type { AppDispatch } from "@/app/stores/mainStore";
import { addArticle } from "@/entities/article/model";

export const useArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Title and body are required");
      return;
    }

    dispatch(addArticle({ title, body }));

    setTitle("");
    setBody("");
  };

  return {
    title,
    body,
    setTitle,
    setBody,
    onSubmit,
  };
};
