import { instance, RequestProps } from "@/utilities/instance";
import { validate } from "@/utilities/validate";

const request = instance({ basePath: process.env.API_URL as string });

export const publicProcedure = async <ResponseProps>(
  url: RequestProps["url"],
  config?: RequestProps["config"],
) => await request<ResponseProps>(url, config);

export const privateProcedure = async <ResponseProps>(
  url: RequestProps["url"],
  config?: RequestProps["config"],
) => {
  const isAuthorized = await validate();
  if (!isAuthorized) {
    throw new Error("unauthorized");
  }

  return await request<ResponseProps>(url, config);
};
