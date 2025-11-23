import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import type { AppDispatch } from "@/app/stores/mainStore";
import { deleteArticle } from "@/entities/article/model";

export const useDeleteArticle = (id: string) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteArticle(id));
    navigate("/");
  };

  return { handleDelete };
};
