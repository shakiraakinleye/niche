"use client";

import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";

import { WAITLIST_URL, CONTACT_URL } from "@/client/lib/constants";

import { LinkButton } from "../atoms/link-button";

export const MobileMenu = () => {
  return (
    <Disclosure as="nav" className="relative block p-6 lg:hidden">
      {({ open }) => (
        <>
          <div className="relative flex items-center justify-between">
            <span className="font-display text-lg font-semibold leading-8 text-black">
              Niche
            </span>
            <div className="right-0 flex items-center justify-center">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:text-primary-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="w-full rounded-smd border-none bg-white">
            <div className="space-y-5 px-3 py-6 font-default">
              <LinkButton
                href={WAITLIST_URL}
                variant="primaryOutline"
                size="wide"
              >
                <span className="text-xs leading-8 text-primary-100 group-hover:text-white">
                  Join the waitlist
                </span>
              </LinkButton>

              <LinkButton
                href={CONTACT_URL}
                variant="primaryOutline"
                size="wide"
              >
                <span className="text-xs leading-8 text-primary-100 group-hover:text-white">
                  Contact Us
                </span>
              </LinkButton>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export const DesktopMenu = () => {
  return (
    <nav className="mx-auto hidden w-full max-w-[1440px] justify-between lg:flex lg:px-12 lg:py-8 xl:px-30">
      <span className="font-display font-semibold leading-8 text-black lg:text-xl xl:text-2xl">
        Niche
      </span>
      <div className="flex items-start gap-6 font-default">
        <LinkButton href={WAITLIST_URL} variant="primaryFilled" size="wide">
          <span className="text-sm leading-11 text-white group-hover:text-primary-100">
            Join the waitlist
          </span>
        </LinkButton>

        <LinkButton href={CONTACT_URL} variant="primaryFilled" size="wide">
          <span className="text-sm leading-11 text-white group-hover:text-primary-100">
            Contact Us
          </span>
        </LinkButton>
      </div>
    </nav>
  );
};
export const WaitlistHeader = () => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
};
