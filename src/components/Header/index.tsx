"use client";

import { usePathname } from "next/navigation";
import MainHeader from "@/components/Header/MainHeader/MainHeader";
import TopBar from "@/components/Header/TopBar/TopBar";
import HeaderWidgets from "@/components/Header/HeaderWidgets";

export default function Header() {
  const pathname = usePathname();

  // Hide header on dashboard routes to preserve existing behavior
  if (pathname === "/dashboard_login" || pathname.startsWith("/s_dashboard")) {
    return null;
  }

  return (
    <>
      <TopBar />
      <MainHeader />
      <HeaderWidgets />
    </>
  );
}