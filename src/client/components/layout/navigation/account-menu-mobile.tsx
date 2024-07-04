"use client";
// import { Session } from "next-auth";

import { AccountMenu } from "./account-menu";

export const AccountMenuMobile = ({ session }: { session: any }) => {
  const { name } = session?.user || {};

  return (
    <div className="flex flex-col items-start gap-4 px-4.5 pb-6 pt-4 md:gap-5 md:px-6 md:pb-8 md:pt-6">
      <p className="w-full border-b border-b-gray-3900 p-2 font-display text-base font-medium capitalize leading-7 tracking-tight015 text-black md:text-lg md:leading-8">
        Hi, {name}
      </p>
      <AccountMenu />
    </div>
  );
};
