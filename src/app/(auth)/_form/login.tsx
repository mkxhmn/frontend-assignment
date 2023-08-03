"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "@/app/api/login/route";
import { useState } from "react";
import { login } from "@/actions/client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
  const router = useRouter();
  const [message, setMessage] = useState(() => "");

  const { handleSubmit, register } = useForm<LoginSchema>();
  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const response = await login(data);

    if (response?.error) {
      return setMessage(response.error.message);
    }

    router.replace("/home");
  };

  return (
    <Card className="border-0 sm:border">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">👋 Welcome Back!</CardTitle>
        <CardDescription>
          Get ready to put on your customer superhero cape! With great login
          power comes great customer responsibility
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">
            <span className="mb-2 block">Username</span>
            <Input
              type="text"
              autoFocus
              {...register("username", {
                required: true,
              })}
            />
          </Label>
          <Label htmlFor="password">
            <span className="mb-2 block">Password</span>
            <Input
              type="password"
              {...register("password", {
                required: true,
              })}
            />
          </Label>
          {message && (
            <span
              className="text-rose-400"
              aria-invalid
              aria-errormessage={message}
            >
              {message}
            </span>
          )}
          <Button type="submit">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
};
