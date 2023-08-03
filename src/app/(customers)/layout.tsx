import { ReactNode } from "react";
import { Footer, Header } from "@/components/shared";
import { validate } from "@/utilities/validate";
import { redirect } from "next/navigation";

const LINKS = [
  { label: "Profile", href: "#" },
  { label: "Deals", href: "#" },
  { label: "Travel", href: "#" },
];

export default async function Layout({ children }: { children: ReactNode }) {
  const isAuthorized = await validate();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <>
      <Header links={LINKS} />
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
      <Footer links={LINKS} />
    </>
  );
}
