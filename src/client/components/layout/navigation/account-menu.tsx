"use client";

import { LucideIcon, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

import { accountPages } from "@/client/data/navigation";
import { cn } from "@/client/lib/utils";

import { SignOutButton } from "./nav-buttons";
import { LinkButton } from "../../atoms/link-button";

export const AccountMenu = ({ showActive }: { showActive?: boolean }) => {
  const path = usePathname();

  const Item = ({
    menuItem,
  }: {
    menuItem: { title: string; icon: LucideIcon; href: string };
  }) => {
    const { title, href, icon } = menuItem;
    const ItemIcon = icon;

    return (
      <LinkButton
        href={href}
        className={cn(
          "w-full justify-between gap-x-2 rounded-md p-2 text-dark-400 transition-all duration-75 hover:text-primary-100 active:text-primary-100 hover:lg:bg-gray-100",
          showActive &&
            (path === href || path.startsWith(href)) &&
            "text-primary-100"
        )}
      >
        <p className="flex items-center justify-start gap-x-2">
          <ItemIcon className="h-4 w-4 text-inherit 2xl:h-5 2xl:w-5" />
          <span className="font-default text-sm leading-5 text-inherit md:text-base md:leading-6 2xl:text-base 2xl:leading-5">
            {title}
          </span>
        </p>
        <ChevronRight className="h-4 w-4 stroke-gray-3600 lg:hidden" />
      </LinkButton>
    );
  };

  return (
    <>
      {accountPages.map((item) => {
        return <Item key={`${item.title}-button`} menuItem={item} />;
      })}
      <SignOutButton />
    </>
  );
};
