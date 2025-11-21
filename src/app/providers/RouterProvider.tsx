import * as React from "react";
import { BrowserRouter } from "react-router";

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
