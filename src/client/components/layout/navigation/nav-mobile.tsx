"use client";
// import { Session } from "next-auth";
import React, { Fragment, useState, useContext } from "react";

import { Transition, Dialog } from "@headlessui/react";
import { Menu } from "lucide-react";

import { productCategories } from "@/client/data/common";

import { MainMenuMobile } from "./menu-mobile";
import { CartButton } from "./nav-buttons";
import UserDropdown from "./user-dropdown";
import { BrandTextLogo } from "../../atoms/brand-text-logo";
import { Button } from "../../atoms/button";
import { LinkButton } from "../../atoms/link-button";
import {
  CartContext,
  CartContextType,
} from "../../molecules/cart/cart-context";
import { SearchBox } from "../../molecules/common/search-box";

export const NavMobile = ({ session }: { session: any }) => {
  const { cart } = useContext(CartContext) as CartContextType;
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  const openMainMenu = () => {
    setIsMainMenuOpen(true);
  };
  const closeMainMenu = () => {
    setIsMainMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between gap-10 px-4.5 py-6 md:p-6 lg:hidden">
      <div className="flex items-center gap-4">
        <Button
          type="button"
          onClick={openMainMenu}
          className="inline-flex items-center text-dark-400 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
        </Button>
        <BrandTextLogo />
      </div>

      <div className="hidden w-100 md:flex">
        <SearchBox />
      </div>

      <div className="flex items-center gap-5">
        {session && (
          <LinkButton href="/account">
            <UserDropdown session={session} />
          </LinkButton>
        )}
        <CartButton cart={cart} />
      </div>

      <Transition appear show={isMainMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30 lg:hidden"
          onClose={closeMainMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-100 bg-opacity-10 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="ease-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="h-full w-3/4 max-w-[3/4] overflow-hidden rounded-tr-xlg bg-white shadow-xl md:w-3/5 md:max-w-[3/5] lg:hidden">
                  <MainMenuMobile
                    session={session}
                    navigation={productCategories}
                    closeMenu={closeMainMenu}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
};
