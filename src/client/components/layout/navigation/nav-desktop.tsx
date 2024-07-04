import React from "react";
// import { Session } from "next-auth";

import { productCategories } from "@/client/data/common";

import {
  SignInButton,
  SellOnNicheButton,
  GoToShopDashboardButton,
} from "./nav-buttons";
import { SubMenuNavBar } from "./sub-menu-nav-bar";
import { BrandTextLogo } from "../../atoms/brand-text-logo";
import { SearchBox } from "../../molecules/common/search-box";

export const NavDesktop = ({ session }: { session: any }) => {
  const seller = false;
  // fix- get this from session
  return (
    <div className="hidden w-full max-w-screen-xl flex-col items-start gap-y-2 px-8 pt-5 md:px-6 lg:flex xl:mx-auto xl:px-12 2xl:gap-y-4 2xl:px-16 2xl:pt-6">
      <div className="flex w-full items-center justify-between lg:gap-40 xl:gap-52 2xl:gap-64">
        <BrandTextLogo />

        <div className="flex w-full items-center justify-between gap-8">
          <SearchBox />

          <div className="flex shrink-0 items-center gap-4">
            {!session && <SignInButton />}
            {session && seller ? (
              <GoToShopDashboardButton />
            ) : (
              <SellOnNicheButton />
            )}
          </div>
        </div>
      </div>
      <SubMenuNavBar session={session} navigation={productCategories} />
    </div>
  );
};
