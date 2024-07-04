"use client";

import Image, { StaticImageData } from "next/image";

import { cn } from "@/client/lib/utils";

import { LinkButton } from "../../atoms/link-button";

export type CTAProps = {
  cta: {
    image: StaticImageData;
    heading: string;
    description: string;
    href: string;
    buttonText: string;
  };
};

export const CTAText = ({ cta }: CTAProps) => {
  return (
    <div className="flex flex-col items-center gap-y-8 px-6 md:px-8 lg:w-80 lg:items-start lg:px-0 lg:pr-3 xl:w-85 xl:pr-5">
      <div className=" flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
        <h3 className="font-display text-xl font-bold leading-12 tracking-tight015 text-dark-200 md:text-2xl lg:text-3xl xl:text-4xl">
          {cta.heading}
        </h3>
        <p className="font-default text-base leading-5.5 text-gray-1100 xl:text-lg xl:leading-6">
          {cta.description}
        </p>
      </div>
      <LinkButton
        href={cta.href}
        variant="secondaryMobileFilledLgOutline"
        size="wider"
        borderRadius="large"
        className="shrink-0 font-default text-base leading-13 text-white hover:text-tertiary-100 active:text-tertiary-100 md:text-md md:leading-14 lg:text-tertiary-100 lg:hover:text-white lg:active:text-white"
      >
        {cta.buttonText}
      </LinkButton>
    </div>
  );
};

export type CTACardProps = CTAProps & {
  className?: string;
  imageOrder?: string;
};

export const CTACard = ({ cta, className, imageOrder }: CTACardProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-start gap-y-6 lg:flex-row lg:items-center lg:justify-between",
        className
      )}
    >
      <div
        className={cn(
          "w-full lg:min-w-[600px] lg:max-w-[600px] xl:min-w-[720px] xl:max-w-[720px] 2xl:min-w-[880px] 2xl:max-w-[880px]",
          imageOrder
        )}
      >
        <Image
          src={cta.image}
          alt={cta.heading}
          loading="lazy"
          className="rounded-smd"
        />
      </div>
      <CTAText cta={cta} />
    </div>
  );
};
