"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { cn } from "@/client/lib/utils";

export type FooterCardProps = {
  footerItem: {
    title: string;
    subitems: FooterSubitemsProps[];
  };
};

export type FooterSubitemsProps = {
  title: string;
  href: string;
};

export const FooterCardMobile = ({ footerItem }: FooterCardProps) => {
  return (
    <Disclosure
      as="li"
      key={footerItem.title}
      className="border-t border-t-gray-1600 pt-4 md:pt-6"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between text-left text-gray-900">
            <span className="font-default text-sm font-bold leading-5 tracking-tight01 text-gray-50">
              {footerItem.title}
            </span>

            <ChevronDown
              className={cn(
                "ml-6 h-6 w-6 text-gray-50 transition-all",
                open && "rotate-180"
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel
            as="ul"
            className="mt-2 flex flex-col items-start gap-2 pr-8"
          >
            {footerItem.subitems.map((item) => {
              return (
                <li
                  key={item.title}
                  className="group flex w-full justify-stretch"
                >
                  <Link
                    href={item.href}
                    className="w-full font-default text-sm leading-5 tracking-tight01 text-gray-1400 group-hover:text-beige-200 group-active:text-beige-200 md:text-base md:leading-6"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
