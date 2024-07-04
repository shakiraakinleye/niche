"use client";

import React from "react";
// import { Session } from "next-auth";

import { cn } from "@/client/lib/utils";
import useScroll from "@/lib/hooks/use-scroll";

import {
  SignInButtonWithoutBorder,
  StartSellingButton,
  GoToShopDashboardButton,
} from "./nav-buttons";
import { BrandTextLogo } from "../../atoms/brand-text-logo";

export default function SellerHomePageNavBar({
  session,
}: {
  // session: Session | null;
  session: any;
}) {
  const scrolled = useScroll(50);
  const seller = false;
  return (
    <>
      <div
        className={cn(
          "fixed top-0 w-screen border-b border-gray-200",
          scrolled ? "bg-white/50 backdrop-blur-xl" : "bg-gray-150",
          "z-30 transition-all"
        )}
      >
        <div className="flex w-full max-w-screen-xl items-center justify-between gap-20 px-4.5 py-4 md:gap-28 md:px-6 md:py-6 lg:gap-40 xl:mx-auto xl:gap-52 xl:px-12 2xl:gap-64 2xl:px-16">
          <BrandTextLogo />

          <div className="flex shrink-0 items-center gap-4 2xl:gap-6">
            {!session && <SignInButtonWithoutBorder />}
            {session && seller ? (
              <GoToShopDashboardButton />
            ) : (
              <StartSellingButton />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// fix - fetch seller value from session
