import { getUsers } from "@/actions/server";
import { UserTable } from "@/app/(customers)/home/_user-table";
import { Hero } from "@/components/shared/Hero";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-24 sm:grid-cols-2">
      <div className="flex items-center">
        <Hero
          title="Good to see you again!"
          subtitle="Welcome to the VIP Customer Lounge! Our delightful customers have reserved the best seats in the house. Grab some virtual popcorn and enjoy the show of exceptional loyalty!"
        />
      </div>
      <Card className="border-0 sm:border">
        <CardHeader>
          <CardTitle>Our Champions</CardTitle>
          <CardDescription>
            We celebrate the invaluable support of our loyal customers, whose
            unwavering commitment is the very heartbeat of our success.
          </CardDescription>
        </CardHeader>
        <UserTable users={users?.data?.data} />
      </Card>
    </div>
  );
}
