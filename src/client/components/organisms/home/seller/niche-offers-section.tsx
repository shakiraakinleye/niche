"use client";

import { Fragment } from "react";

import { Tab } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";

import { SellerHomePageCopy } from "@/client/data/copy";
import { cn } from "@/client/lib/utils";

export const NicheOffersSection = () => {
  const serviceArray = Array.from(
    Object.values(SellerHomePageCopy.whatNicheOffers)
  );
  return (
    <section className="mx-auto w-full px-4.5 py-10 md:max-w-3xl md:px-6 md:py-12 lg:max-w-7xl lg:px-8 xl:px-12 2xl:p-16">
      <div className="w-full space-y-6 md:space-y-10 2xl:space-y-20">
        <h2 className="text-center font-display text-xl font-medium capitalize leading-11 text-black md:text-2xl lg:text-3xl 2xl:text-4xxl">
          What Niche offers
        </h2>
        <Tab.Group
          as="div"
          className="flex flex-col items-center gap-6 md:gap-8 md:pt-6 lg:gap-10 2xl:gap-16 2xl:pt-10"
        >
          <Tab.List className="grid auto-cols-fr grid-flow-col">
            {serviceArray.map((service, serviceIndex) => (
              <Tab as={Fragment} key={serviceIndex}>
                {({ selected }) => (
                  <div
                    className={cn(
                      "flex shrink-0 cursor-pointer items-center justify-center border border-primary-100 px-4 py-2 outline-0 transition-colors focus-within:outline-0 focus-within:ring-0 focus:outline-0 focus:ring-0 md:px-10 md:py-4 lg:px-14 2xl:px-20",
                      selected
                        ? "bg-primary-100 text-white"
                        : "bg-transparent text-primary-100"
                    )}
                  >
                    <span
                      className={cn(
                        "font-default text-xs font-medium capitalize text-inherit md:text-base 2xl:text-xl"
                      )}
                    >
                      {service.title}
                    </span>
                  </div>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="w-full">
            {serviceArray.map((service, serviceIndex) => (
              <Tab.Panel key={serviceIndex}>
                <PanelContent
                  heading={service.heading}
                  listItems={service.listItems}
                  image={service.image}
                  containerClassName={
                    (serviceIndex + 1) % 2 ? "" : "flex-row-reverse"
                  }
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

type PanelContentProps = {
  containerClassName?: string;
  heading: string;
  listItems: string[];
  image: StaticImageData;
};

const PanelContent = ({
  heading,
  listItems,
  image,
  containerClassName,
}: PanelContentProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-10 md:py-4 lg:gap-16 xl:gap-20 2xl:gap-28",
        containerClassName
      )}
    >
      <div className="hidden min-w-[340px] max-w-[340px] md:block lg:min-w-[400px] lg:max-w-[400px] 2xl:min-w-[600px] 2xl:max-w-[600px]">
        <Image src={image} alt={heading} priority={true} />
      </div>

      <div className="space-y-4 2xl:space-y-6">
        <h3 className="text-center font-display text-base font-medium text-black md:text-left md:text-xl lg:text-2xl 2xl:text-3xxl">
          {heading}
        </h3>
        <ul className="flex flex-col gap-2 lg:gap-4">
          {listItems.map((item, itemIndex) => {
            return (
              <li
                key={itemIndex}
                className="flex items-start gap-2 font-default text-sm leading-6 text-dark-600 lg:text-base"
              >
                <span>•</span>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
