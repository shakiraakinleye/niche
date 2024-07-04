import Link from "next/link";

import { FooterCardProps } from "./footer-card-mobile";

export const FooterCardDesktop = ({ footerItem }: FooterCardProps) => {
  return (
    <li className="flex flex-col items-start gap-3 2xl:gap-4">
      <h4 className="self-stretch font-default text-sm font-bold leading-5 tracking-tight01 text-gray-50">
        {footerItem.title}
      </h4>
      <ul className="flex flex-col items-start gap-2 self-stretch 2xl:gap-3">
        {footerItem.subitems.map((item) => {
          return (
            <li key={item.title} className="group flex w-full">
              <Link
                href={item.href}
                className="w-full font-default text-base font-medium leading-6 tracking-tight012 text-gray-1400 group-hover:text-beige-200 group-active:text-beige-200"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
