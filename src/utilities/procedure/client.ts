import { instance, RequestProps } from "@/utilities/instance";

const internal = instance({ basePath: "" });

export const localProcedure = async <ResponseProps>(
  url: RequestProps["url"],
  config?: RequestProps["config"],
) => {
  return await internal<ResponseProps>(url, config);
};
