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
      <main>{children}</main>
      <Footer />
    </>
  );
}
