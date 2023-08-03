import { cookies } from "next/headers";
import { decrypt } from "@/utilities/secure";

export const validate = async () => {
  const token = cookies().get("token");

  if (!token) {
    return false;
  }

  return (await decrypt(token?.value)) === process.env.DEMO_USERNAME;
};
