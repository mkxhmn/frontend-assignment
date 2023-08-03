import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customer Portal",
  description:
    "Hello customer portal, as an user you can create an account, view customers and register new account.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`relative min-h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
