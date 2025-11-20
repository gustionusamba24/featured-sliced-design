import { login, logout } from "@/entities/user/model/thunks";
import type { User } from "@/entities/user/model/types";
import userReducer from "@/entities/user/model/userSlice";

export type { User, userReducer, login, logout };
