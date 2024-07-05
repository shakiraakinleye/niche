"use client";

import { LucideIcon } from "lucide-react";

import { SellerHomePageCopy } from "@/client/data/copy";
import { cn } from "@/client/lib/utils";

type CardProps = {
  containerClassName: string;
  icon: LucideIcon;
  heading: string;
  subheading: string;
};

const Card = ({ containerClassName, icon, heading, subheading }: CardProps) => {
  const CardIcon: LucideIcon = icon;
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-xlg px-4 py-6 md:gap-6 md:py-8 lg:px-5 lg:py-12 2xl:gap-8 2xl:py-16",
        containerClassName
      )}
    >
      <CardIcon className="h-12 w-12 stroke-gray-50 2xl:h-16 2xl:w-16" />
      <h3 className="text-center font-default text-xl font-bold capitalize leading-11 text-gray-50 md:text-2xl">
        {heading}
      </h3>
      <p className="text-center font-default text-xs leading-5 text-gray-50 md:text-base md:leading-6">
        {subheading}
      </p>
    </div>
  );
};

export const UseNicheSection = () => {
  const business = SellerHomePageCopy.whoCanUseNiche.business;
  const shoppers = SellerHomePageCopy.whoCanUseNiche.shoppers;

  return (
    <section className="mx-auto w-full max-w-[1440px] px-4.5 py-10 md:px-6 md:py-12 lg:px-8 xl:px-12 2xl:p-16">
      <div className="w-full space-y-6 md:space-y-10 2xl:space-y-20">
        <h2 className="text-center font-display text-xl font-medium capitalize leading-11 text-black md:text-2xl lg:text-3xl 2xl:text-4xxl">
          Who can use Niche
        </h2>
        <div className="grid gap-5 md:grid-flow-row md:grid-cols-2 md:gap-6 2xl:gap-8">
          <Card
            containerClassName="bg-yellow-1200"
            heading={business.heading}
            subheading={business.subheading}
            icon={business.icon}
          />
          <Card
            containerClassName="bg-teal-1000"
            heading={shoppers.heading}
            subheading={shoppers.subheading}
            icon={shoppers.icon}
          />
        </div>
      </div>
    </section>
  );
};
