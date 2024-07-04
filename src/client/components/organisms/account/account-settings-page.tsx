"use client";
// import { Session } from "next-auth";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import useWindowSize from "@/client/lib/hooks/use-window-size";

import { BuyerProfileForm } from "./buyer-profile-form";
import { AccountMenuMobile } from "../../layout/navigation/account-menu-mobile";

export const AccountSettingsPage = ({ session }: { session: any }) => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    isDesktop && router.replace("/account/profile");
  }, [isDesktop, router]);

  if (isMobile || isTablet) {
    return <AccountMenuMobile session={session} />;
  } else {
    return <BuyerProfileForm />;
  }
};
