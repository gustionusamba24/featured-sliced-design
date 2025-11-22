import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "@/app/stores/mainStore";
import { useLogin } from "@/features/login/model";
import { ROUTES } from "@/shared/config";
import { Button } from "@/shared/ui";

export const Header = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const { logoutUser } = useLogin();

  return (
    <header className={"flex w-full items-center justify-between border-b p-4"}>
      <h2 className={"text-lg font-semibold"}>Articles</h2>
      {user?.id ? (
        <div className={"flex items-center gap-4"}>
          <span className={"text-muted-foreground text-sm"}>{user.email}</span>
          <Button variant={"outline"} onClick={logoutUser}>
            Logout
          </Button>
        </div>
      ) : (
        <span className={"text-muted-foreground text-sm"}>
          <Link to={ROUTES.LOGIN}>Login</Link>
        </span>
      )}
    </header>
  );
};
