import { instance, RequestProps } from "@/utilities/instance";
import { cookies } from "next/headers";

const validate = () => {
  const token = cookies().get("next-i18next");

  console.log(token);

  if (!token) {
    throw Error("unauthorized");
  }

  return true;
};

const request = instance({ basePath: process.env.API_URL as string });

export const internalProcedure = async <ResponseProps>(
  url: RequestProps["url"],
  config?: RequestProps["config"],
) => {
  const internal = instance({ basePath: "" });

  await internal<ResponseProps>(url, config);
};

export const publicProcedure = async <ResponseProps>(
  url: RequestProps["url"],
  config?: RequestProps["config"],
) => await request<ResponseProps>(url, config);

export const privateProcedure = async <ResponseProps>(
  url: RequestProps["url"],
  config?: RequestProps["config"],
) => {
  validate();

  return await request<ResponseProps>(url, config);
};
