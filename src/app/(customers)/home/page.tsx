import { getUsers } from "@/actions/server";
import { UserTable } from "@/app/(customers)/home/_user-table";

export default async function HomePage() {
  const users = await getUsers();

  if ("error" in users) {
    return (
      <div className="my-4">
        unable to proceed,{" "}
        {typeof users.error === "string" ? users.error : "error occurred"}
      </div>
    );
  }

  return <UserTable users={users?.data?.data} />;
}
