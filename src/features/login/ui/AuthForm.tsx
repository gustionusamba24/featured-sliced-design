import { useState } from "react";
import * as React from "react";
import { useLogin } from "@/features/login/model";
import { Button, Input, Label } from "@/shared/ui";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, isLoading } = useLogin();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <form onSubmit={onSubmit} className={"mx-auto w-full max-w-sm space-y-4"}>
      <div>
        <Label htmlFor={"email"}>Email</Label>
        <Input
          disabled={isLoading}
          id={"email"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor={"password"}>Password</Label>
        <Input
          disabled={isLoading}
          id={"password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button disabled={isLoading} type={"submit"} className={"w-full"}>
          Login
        </Button>
      </div>
    </form>
  );
};
