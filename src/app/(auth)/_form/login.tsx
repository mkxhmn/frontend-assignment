"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "@/app/api/login/route";
import { useState } from "react";
import { login } from "@/actions/client";
import { useRouter } from "next/navigation";

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
    <>
      {message && (
        <span aria-invalid aria-errormessage={message}>
          {message}
        </span>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          <span>username</span>
          <input
            type="text"
            autoFocus
            {...register("username", {
              required: true,
            })}
          />
        </label>
        <label htmlFor="password">
          <span>password</span>
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
