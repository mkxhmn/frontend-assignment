"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/client";

export const LogOut = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();

    router.replace("/login");
  };

  return (
    <Button onClick={handleLogout}>
      Log Out
      <span aria-hidden="true">→</span>
    </Button>
  );
};
