"use client";

import { usePathname } from "next/navigation";

export default function FooterVisibility({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (
    pathname === "/dashboard_login" ||
    pathname.startsWith("/s_dashboard")
  ) {
    return null;
  }

  return <>{children}</>;
}