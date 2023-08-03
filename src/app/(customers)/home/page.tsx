import { getUsers } from "@/actions/server";
import { UserTable } from "@/app/(customers)/home/_user-table";

export default async function HomePage() {
  const users = await getUsers();

  return <UserTable users={users?.data?.data!} />;
}
