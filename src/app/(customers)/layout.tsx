import { ReactNode } from "react";
import { Footer, Header } from "@/components/shared";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
