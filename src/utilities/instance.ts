export type RequestProps = {
  url: RequestInfo | URL;
  config?: RequestInit;
};

type RequestResponseProps<T> = {
  data?: T;
  error?: Error;
};

type InstanceConfigurations = {
  basePath: string;
};

export const instance =
  (instanceConfigs: InstanceConfigurations) =>
  async <ResponseProps>(
    url: RequestProps["url"],
    config?: RequestProps["config"],
  ): Promise<RequestResponseProps<ResponseProps>> => {
    try {
      const response = await fetch(instanceConfigs.basePath + url, config);

      return { data: await response.json() };
    } catch (cause) {
      return {
        error: cause as Error,
      };
    }
  };
