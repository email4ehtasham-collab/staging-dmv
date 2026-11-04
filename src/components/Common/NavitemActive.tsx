"use client";

import { useEffect } from "react";
import { useMyContext } from "@/hooks/context";

export default function NavitemActive({ nav }: { nav: string }) {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem(nav);
  }, [nav, setActiveMenuItem]);

  return null;
}