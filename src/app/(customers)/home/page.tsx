import { getUsers } from "@/actions";

export default async function HomePage() {
  const users = await getUsers();

  console.log("%o", users);

  return (
    <div>
      hello homepage
      <section>table goes here</section>
    </div>
  );
}
