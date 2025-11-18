import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/app/stores/mainStore/rootReducer.ts";

export const mainStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;
