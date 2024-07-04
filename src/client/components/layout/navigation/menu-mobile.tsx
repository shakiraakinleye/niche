// import { Session } from "next-auth";
import { Disclosure } from "@headlessui/react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import Link from "next/link";

import { ProductCategoriesType } from "@/client/types/category";

import {
  SignInButton,
  SellOnNicheButton,
  GoToShopDashboardButton,
} from "./nav-buttons";
import { BrandTextLogo } from "../../atoms/brand-text-logo";
import { Button } from "../../atoms/button";

export type MainMenuMobileProps = {
  session: any;
  navigation: ProductCategoriesType;
  closeMenu: () => void;
};

export const MainMenuMobile = ({
  session,
  navigation,
  closeMenu,
}: MainMenuMobileProps) => {
  const categories = Object.keys(navigation);
  const seller = false;
  // fix - get this from session

  const Buttons = () => {
    return (
      <div className="flex flex-col gap-5 bg-beige-400 px-10 pb-8 pt-6 md:gap-8 md:px-10 md:pb-16 md:pt-10">
        {!session && <SignInButton />}
        {session && seller ? (
          <GoToShopDashboardButton />
        ) : (
          <SellOnNicheButton />
        )}
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="overflow-scroll">
        <div className="fixed inset-x-0 top-0 flex items-center justify-between gap-4 bg-beige-400 px-4.5 py-6 md:px-6 md:py-7">
          <BrandTextLogo />
          <Button onClick={closeMenu} className="text-dark-400">
            <span className="sr-only">Close main menu</span>
            <X className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
          </Button>
        </div>
        <ul className="mt-18 flex flex-col items-start gap-1 px-4.5 pb-6 pt-4 capitalize md:mt-20 md:gap-2 md:px-6 md:pb-8 md:pt-6">
          {categories.map((item) => {
            return (
              <li key={item} className="w-full rounded-lg hover:bg-beige-400">
                <Disclosure>
                  {navigation[item].length >= 1 ? (
                    <>
                      <div className="flex w-full items-center justify-between gap-6 p-2 py-3 md:gap-10">
                        <Link
                          href={`/products/${item}`}
                          className="min-w-[50%] font-default text-base font-medium capitalize leading-6 tracking-tight012 text-dark-100 md:text-lg"
                        >
                          {item}
                        </Link>
                        <Disclosure.Button className="flex w-1/4 items-center justify-end self-stretch">
                          <ChevronRight className="h-4 w-4 text-dark-400 md:h-6 md:w-6" />
                        </Disclosure.Button>
                      </div>

                      <Disclosure.Panel className="absolute left-0 right-0 top-0 z-40 flex h-screen flex-col justify-between overflow-y-scroll bg-white scrollbar-hide">
                        <div>
                          <div className="flex w-full items-center justify-between gap-4 bg-beige-400 px-4.5 py-6 focus:outline-none md:gap-5 md:p-6">
                            <Disclosure.Button className="flex w-full items-center gap-4  focus:outline-none md:gap-5">
                              <ChevronLeft
                                className="h-6 w-6 text-dark-400 md:h-8 md:w-8"
                                strokeWidth={3}
                              />
                              <span className="sr-only">Back to main menu</span>
                              <span className="font-default text-base font-medium capitalize leading-6 tracking-tight012 text-dark-100 md:text-lg">
                                {item}
                              </span>
                            </Disclosure.Button>
                            <Button
                              onClick={closeMenu}
                              className="text-dark-400"
                            >
                              <span className="sr-only">Close main menu</span>
                              <X
                                className="h-6 w-6"
                                aria-hidden="true"
                                strokeWidth={1.5}
                              />
                            </Button>
                          </div>

                          <ul className="flex flex-col items-start gap-1 px-4.5 pb-6 pt-4 md:px-6 md:pb-8 md:pt-6">
                            {navigation[item].map((subitem) => {
                              const sublinkStr = subitem
                                .split(",")
                                .flatMap((str) => str.split(" "))
                                .filter((str) => str.length > 1)
                                .join("-");

                              return (
                                <li
                                  key={subitem}
                                  className="w-full rounded-lg hover:bg-beige-400"
                                >
                                  <Link
                                    href={`/products/${item}/${sublinkStr}`}
                                    className="block p-2 py-2 font-default text-base leading-6 tracking-tight012 text-dark-500 md:py-3 md:text-lg"
                                  >
                                    {subitem}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <Buttons />
                      </Disclosure.Panel>
                    </>
                  ) : (
                    <Link
                      href={`/products/${item}`}
                      className=" block p-2 py-3 font-default text-base font-medium leading-6 tracking-tight012 text-dark-100 md:text-lg"
                    >
                      {item}
                    </Link>
                  )}
                </Disclosure>
              </li>
            );
          })}

          <li key="shops" className="w-full rounded-lg hover:bg-beige-400">
            <Link
              href="/shops"
              className="block p-2 py-3 font-default text-base font-medium leading-6 tracking-tight012 text-dark-100 md:text-lg"
            >
              Shops
            </Link>
          </li>
        </ul>
      </div>

      <Buttons />
    </div>
  );
};
