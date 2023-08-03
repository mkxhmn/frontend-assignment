import { ReactNode } from "react";
import { Footer, Header } from "@/components/shared";
import { validate } from "@/utilities/validate";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const isAuthorized = await validate();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
