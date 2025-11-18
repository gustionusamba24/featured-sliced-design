import type { User } from "@/entities/user/model";
import { axiosInstance } from "@/shared/api";

export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const res = await axiosInstance.get<User[]>("/users", {
    params: { email, password },
  });

  const user = res.data[0];
  if (!user) {
    throw new Error("Wrong email or password");
  }

  return user;
};
