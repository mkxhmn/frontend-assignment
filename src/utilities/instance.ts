export type RequestProps = {
  url: RequestInfo | URL;
  config?: RequestInit;
};

type InstanceConfigurations = {
  basePath: string;
};

export const instance =
  (instanceConfigs: InstanceConfigurations) =>
  async <ResponseProps>(
    url: RequestProps["url"],
    config?: RequestProps["config"],
  ) => {
    try {
      const response = await fetch(instanceConfigs.basePath + url, config);
      return (await response.json()) as ResponseProps;
    } catch (cause) {
      return cause;
    }
  };
