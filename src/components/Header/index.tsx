"use client";

import { usePathname } from "next/navigation";
import MainHeader from "@/components/redesign/home/main-header/MainHeader";
import TopBar from "@/components/redesign/home/top-bar/TopBar";
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