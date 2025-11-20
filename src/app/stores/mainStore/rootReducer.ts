import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/user/model";

export const rootReducer = combineReducers({
  // Add your reducers here
  user: userReducer,
});
