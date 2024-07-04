"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { PlusCircle, MinusCircle, ChevronDown } from "lucide-react";

import { faqs } from "@/client/data/common";
import { cn } from "@/client/lib/utils";

export const FaqsWithCircleButton = () => {
  return (
    <ul className="flex w-full flex-col">
      {faqs.map((faq) => {
        return (
          <Disclosure
            as="li"
            key={faq.title}
            className="flex flex-col gap-2 border-b border-b-gray-200 pb-6 pt-4 font-default"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between gap-6 py-2">
                  <span className="text-base font-medium leading-7 text-dark-100">
                    {faq.title}
                  </span>
                  {open ? (
                    <MinusCircle
                      className="h-6 w-6 stroke-primary-100"
                      strokeWidth="1.5"
                    />
                  ) : (
                    <PlusCircle
                      className="h-6 w-6 stroke-primary-100"
                      strokeWidth="1.5"
                    />
                  )}
                </Disclosure.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-200 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel>
                    <p className="text-xs leading-7 text-gray-3600">
                      {faq.description}
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </ul>
  );
};

export const FaqsWithArrowButton = () => {
  return (
    <ul className="flex w-full flex-col gap-2 2xl:gap-3">
      {faqs.map((faq) => {
        return (
          <Disclosure
            as="li"
            key={faq.title}
            className="flex flex-col p-2 font-default 2xl:px-3 2xl:py-4"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between gap-6 border-b border-b-gray-200 pb-2 md:pb-3 2xl:pb-4">
                  <span className="text-sm font-medium leading-7 text-dark-100 md:text-base 2xl:text-xl">
                    {faq.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 stroke-primary-100 transition-all duration-500 2xl:h-6 2xl:w-6",
                      open && "-rotate-180"
                    )}
                    strokeWidth="1.5"
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-500 ease-out"
                  enterFrom="transform opacity-0"
                  enterTo="transform opacity-100"
                  leave="transition duration-200 ease-out"
                  leaveFrom="transform opacity-100"
                  leaveTo="transform opacity-0"
                >
                  <Disclosure.Panel>
                    <p className="text-xs leading-7 text-gray-3600 md:text-sm">
                      {faq.description}
                    </p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </ul>
  );
};
