import { cookies } from "next/headers";

export const validate = () => {
  const token = cookies().get("next-i18next");

  console.log(token);

  if (!token) {
    throw Error("unauthorized");
  }

  return true;
};
