import { HelpCircle, LogOut } from "lucide-react";
import Link from "next/link";
// import { signOut } from "next-auth/react";

import { CartItemType } from "@/client/types/cart";

import { Button } from "../../atoms/button";
import { CartIcon } from "../../atoms/icons";
import { LinkButton } from "../../atoms/link-button";
import Tooltip from "../../organisms/common/tooltip";

export const SignInButton = () => {
  return (
    <LinkButton
      href="/log-in"
      variant="secondaryMobileFilledLgOutline"
      size="wider"
      borderRadius="large"
      className="w-full px-5 py-2 font-default text-base text-white hover:text-tertiary-100 active:text-tertiary-100 md:shrink md:py-4 lg:w-fit lg:py-2 lg:text-sm lg:text-tertiary-100 lg:hover:text-white lg:active:text-white"
    >
      Sign in
    </LinkButton>
  );
};

export const SignInButtonWithoutBorder = () => {
  return (
    <LinkButton
      href="/log-in"
      className="font-default text-sm text-tertiary-100 hover:text-tertiary-100/80 active:text-tertiary-100/80 md:text-base 2xl:text-xl"
    >
      Sign in
    </LinkButton>
  );
};

export const SignOutButton = () => {
  return (
    <Button
      type="button"
      className="relative w-full items-center justify-start gap-x-2 border-t border-t-gray-3900 p-2 text-left text-primary-100 transition-all duration-75 hover:bg-gray-100"
      // onClick={() => signOut()}
    >
      <LogOut className="h-4 w-4 text-inherit 2xl:h-5 2xl:w-5" />
      <p className="font-default text-sm leading-5 text-inherit md:text-base md:leading-6 2xl:text-base 2xl:leading-5">
        Logout
      </p>
    </Button>
  );
};

export const SellOnNicheButton = () => {
  return (
    <LinkButton
      href="/sell-on-niche"
      variant="secondaryMobileFilledLgOutline"
      size="wider"
      borderRadius="large"
      className="w-full px-3 py-2 font-default text-base text-white hover:text-tertiary-100 active:text-tertiary-100 md:shrink md:px-5 md:py-4 lg:w-fit lg:py-2 lg:text-sm lg:text-tertiary-100 lg:hover:text-white lg:active:text-white"
    >
      Sell on Niche
    </LinkButton>
  );
};

export const StartSellingButton = () => {
  return (
    <LinkButton
      href="/sell-on-niche/start"
      variant="secondaryFilled"
      size="wider"
      className="px-3 py-2 font-default text-xs text-white hover:text-tertiary-100 active:text-tertiary-100 md:shrink md:px-5 md:py-3 md:text-sm 2xl:text-base"
    >
      Sell on Niche
    </LinkButton>
  );
};

export const GoToShopDashboardButton = () => {
  return (
    <LinkButton
      href="/dashboard"
      variant="secondaryFilled"
      size="wider"
      borderRadius="large"
      className="w-full px-5 py-2 font-default text-base text-white hover:text-tertiary-100 active:text-tertiary-100 md:shrink md:py-4 lg:w-fit lg:py-2 lg:text-sm"
    >
      Go to Shop
    </LinkButton>
  );
};
// fix - route to own's dashboard

export const CartButton = ({ cart }: { cart: Map<string, CartItemType> }) => {
  return (
    <LinkButton className="relative w-fit overflow-visible" href="/cart">
      <CartIcon className="h-5 w-5 stroke-dark-100 2xl:h-6 2xl:w-6" />
      {cart && cart.size > 0 && (
        <span className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 font-default text-xxs font-bold text-white">
          {cart.size}
        </span>
      )}
    </LinkButton>
  );
};

export const HelpButton = ({ supportLinks }: { supportLinks: any }) => {
  const supportList = (
    <ul className="flex flex-col gap-2 px-6 pb-6 pt-4 2xl:gap-4 2xl:px-8 2xl:pb-12 2xl:pt-6">
      {supportLinks.map((link: any) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className="inline-block w-full font-default text-sm leading-6.5 tracking-tight012 text-dark-500 hover:text-dark-500/80 2xl:text-lg"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Tooltip
      content={supportList}
      triggerClassName="inline-flex items-center focus:border-transparent focus:outline-0 focus:ring-0"
      contentClassName="bg-white rounded-2xl mr-5"
    >
      <HelpCircle className="h-5 w-5 stroke-dark-100 2xl:h-6 2xl:w-6" />
    </Tooltip>
  );
};

// fix - supportLinks type
