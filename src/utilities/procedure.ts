import { instance, RequestProps } from "@/utilities/instance";

const validate = (headers: Headers) => {
  const token = headers.get("Authorization");

  if (!token) {
    throw Error("unauthorized");
  }

  return true;
};

const request = instance({ basePath: process.env.API_URL as string });

export const privateProcedure = async <ResponseProps>(
  url: RequestProps["url"],
  config?: RequestProps["config"],
) => {
  return await request<ResponseProps>(url, config);
};
