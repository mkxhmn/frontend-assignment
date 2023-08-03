import { LoginForm } from "@/app/(auth)/_form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login • Customer Portal",
  description:
    "Welcome back to customer portal! Unveil your customer army here and conquer the world with outstanding service. It's customer appreciation day, every day",
};

export default function Login() {
  return <LoginForm />;
}
