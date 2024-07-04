"use client";

import { useContext } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { supportLinks } from "@/client/data/navigation";
import { cn } from "@/client/lib/utils";
import { ProductCategoriesType } from "@/client/types/category";

import { CartButton, HelpButton } from "./nav-buttons";
import UserDropdown from "./user-dropdown";
import {
  CartContext,
  CartContextType,
} from "../../molecules/cart/cart-context";
import Tooltip from "../../organisms/common/tooltip";

type SubMenuLinkProps = {
  navItem: string;
  subItems: string[];
};

type SubMenuNavProps = {
  navigation: ProductCategoriesType;
  session: any;
};

export const SubMenuLinks = ({ navItem, subItems }: SubMenuLinkProps) => {
  const sublinks = (
    <ul className="w-screen max-w-xs flex-auto bg-white p-4 font-default text-sm capitalize leading-6 tracking-tight012 text-dark-500 shadow-lg ring-1 ring-gray-900/5 xl:text-base 2xl:text-lg">
      {subItems.map((subitem) => {
        const sublinkStr = subitem
          .split(",")
          .flatMap((str) => str.split(" "))
          .filter((str) => str.length > 1)
          .join("-");

        return (
          <li
            key={subitem}
            className="relative overflow-hidden rounded-lg hover:bg-gray-50"
          >
            <Link
              href={`/products/${navItem}/${sublinkStr}`}
              className="block px-4 py-2"
            >
              {subitem}
            </Link>
          </li>
        );
      })}
      <li
        key="shop all"
        className="relative rounded-lg px-4 py-2 hover:bg-gray-50"
      >
        <Link href={`/products/${navItem}`}>Shop all</Link>
      </li>
    </ul>
  );

  return (
    <Tooltip
      content={sublinks}
      triggerClassName="inline-flex items-center focus:border-transparent focus:outline-0 focus:ring-0"
      contentClassName="rounded-3xl"
    >
      <Link
        href={`/products/${navItem}`}
        className="font-default text-sm font-medium capitalize leading-6 tracking-tight012 text-dark-100 2xl:text-base"
      >
        {navItem}
      </Link>
    </Tooltip>
  );
};

export const SubMenuNavBar = ({ navigation, session }: SubMenuNavProps) => {
  const { cart } = useContext(CartContext) as CartContextType;
  const path = usePathname();
  const categories = Object.keys(navigation);

  return (
    <div className="flex w-full items-center justify-between gap-12 xl:gap-16 2xl:gap-20">
      <ul className="flex items-center gap-8 capitalize xl:gap-10 2xl:gap-12">
        {categories.map((item) => {
          return (
            <li
              key={item}
              className={cn(
                "py-2",
                path.startsWith(`/products/${item}`) &&
                  "border-b-2 border-primary-100"
              )}
            >
              {navigation[item].length >= 1 ? (
                <SubMenuLinks navItem={item} subItems={navigation[item]} />
              ) : (
                <Link
                  href={`/products/${item}`}
                  className="font-default text-sm font-medium leading-6 tracking-tight012 text-dark-100 2xl:text-base"
                >
                  {item}
                </Link>
              )}
            </li>
          );
        })}

        <li
          key="shops"
          className={cn(
            "py-2",
            path.startsWith("/shops") && "border-b-2 border-primary-100"
          )}
        >
          <Link
            href="/shops"
            className="font-default text-sm font-medium leading-6 tracking-tight012 text-dark-100 2xl:text-base"
          >
            Shops
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-x-4 2xl:gap-x-5">
        {session && <UserDropdown session={session} />}
        <CartButton cart={cart} />
        <HelpButton supportLinks={supportLinks} />
      </div>
    </div>
  );
};
