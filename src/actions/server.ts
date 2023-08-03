import { privateProcedure } from "@/utilities/procedure/server";

export type User = {
  id: number;
  email: "string";
  first_name: "string";
  last_name: "string";
  avatar: "string";
};

type GetUsersResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

export const getUsers = async () => {
  return await privateProcedure<GetUsersResponse>("/users");
};
