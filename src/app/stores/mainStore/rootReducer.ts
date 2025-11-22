import { combineReducers } from "@reduxjs/toolkit";
import { articleReducer } from "@/entities/article/model";
import { userReducer } from "@/entities/user/model";

export const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
  article: articleReducer,
});
