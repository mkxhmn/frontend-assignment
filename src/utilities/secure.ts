import { seal, unseal, defaults } from "@hapi/iron";

export const encrypt = async (plain: string) => {
  return await seal(plain, process.env.IRON_SECRET as string, defaults);
};

export const decrypt = async (encrypted: string) => {
  return await unseal(encrypted, process.env.IRON_SECRET as string, defaults);
};
