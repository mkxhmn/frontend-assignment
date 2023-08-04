import { LoginResponse, LoginSchema } from "@/app/api/login/route";
import { localProcedure } from "@/utilities/procedure/client";

export const login = async (params: LoginSchema) => {
  return await localProcedure<LoginResponse>("/api/login", {
    method: "POST",
    body: JSON.stringify(params),
  });
};

export const logout = async () => {
  return await localProcedure<LoginResponse>("/api/logout", {
    method: "POST",
  });
};
