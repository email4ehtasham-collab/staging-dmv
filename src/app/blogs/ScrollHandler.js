"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.querySelector(".team-profile");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}