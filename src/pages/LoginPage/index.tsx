import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import type { RootState } from "@/app/stores/mainStore";
import { AuthForm } from "@/features/login/ui";
import { ROUTES } from "@/shared/config";

export const LoginPage = () => {
  const { user } = useSelector((state: RootState) => state.user);

  if (user?.id) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <div className={"flex min-h-screen items-center justify-center"}>
      <div className={"w-full max-w-md rounded-xl border p-6 shadow-xl"}>
        <h1 className={"mb-4 text-center text-2xl font-bold"}>Login</h1>
        <AuthForm />
      </div>
    </div>
  );
};
