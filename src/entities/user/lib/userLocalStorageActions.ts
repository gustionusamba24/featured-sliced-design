import type { User } from "@/entities/user/model";

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeUserFromLocalStorage = (): void => {
  localStorage.removeItem("user");
};

export const setUserToLocalStorage = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};
