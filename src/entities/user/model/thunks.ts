import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { loginUser } from "@/entities/user/api";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserToLocalStorage,
} from "@/entities/user/lib";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const user = await loginUser(payload.email, payload.password);
      setUserToLocalStorage(user);
      return user;
    } catch (e: any) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  removeUserFromLocalStorage();
});

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const user = getUserFromLocalStorage();
      if (!user) throw new Error("No authenticated");

      return { user };
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
