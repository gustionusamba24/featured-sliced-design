import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  addArticleApi,
  deleteArticleApi,
  editArticleApi,
  getArticlesApi,
} from "@/entities/article/api";
import type { Article } from "@/entities/article/model/types";

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async (
    {
      page = 1,
      limit = 10,
      searchQuery = "",
    }: { page?: number; limit?: number; searchQuery?: string },
    thunkAPI
  ) => {
    try {
      const response = await getArticlesApi({
        _page: page,
        _per_page: limit,
        title_like: searchQuery,
      });

      return response;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editArticle = createAsyncThunk(
  "article/editArticle",
  async (article: Article, thunkAPI) => {
    try {
      const updatedArticle = await editArticleApi(article);
      toast.success("Article updated successfully");
      return updatedArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (article: Omit<Article, "id">, thunkAPI) => {
    try {
      const newArticle = await addArticleApi(article);
      toast.success("Article added successfully");
      return newArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (id: string, thunkAPI) => {
    try {
      await deleteArticleApi(id);
      toast.success("Article deleted succesdfully");
      return id;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
