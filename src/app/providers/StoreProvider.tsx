import * as React from "react";
import { Provider } from "react-redux";
import { mainStore } from "@/app/stores/mainStore";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={mainStore}>{children}</Provider>;
};
