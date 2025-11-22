import articleReducer, {
  setPage,
  setSearchQuery,
} from "@/entities/article/model/articleSlice";
import {
  addArticle,
  deleteArticle,
  editArticle,
  getArticles,
} from "@/entities/article/model/thunks";
import type { Article } from "@/entities/article/model/types";

export type { Article };
export {
  articleReducer,
  setPage,
  setSearchQuery,
  addArticle,
  getArticles,
  editArticle,
  deleteArticle,
};
