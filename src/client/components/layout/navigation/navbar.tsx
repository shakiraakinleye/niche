"use client";

import React from "react";

import { cn } from "@/client/lib/utils";
import useScroll from "@/lib/hooks/use-scroll";

import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";

export default function NavBar({ session }: { session: any }) {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 w-screen",
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-gray-150",
          "z-30 transition-all"
        )}
      >
        <NavMobile session={session} />
        <NavDesktop session={session} />
      </div>
    </>
  );
}
