import Image from "next/image";

import { LinkButton } from "@/client/components/atoms/link-button";
import { BuyerHomePageCopy } from "@/client/data/copy";

export const HeroSection = () => {
  return (
    <section className="bg-secondary-100/35">
      <div className="mx-auto w-full max-w-[1440px] px-4.5 pb-10 pt-32 md:gap-11 md:px-6 md:pb-12 md:pt-40 lg:gap-8 lg:px-8 lg:pb-16 lg:pt-40 xl:px-12 xl:pb-20 xl:pt-44 2xl:px-16 2xl:pb-25 2xl:pt-60">
        <div className="flex w-full items-center justify-between lg:px-4 xl:px-6 2xl:px-12">
          <div className="flex max-w-xl flex-col items-center justify-center gap-8 md:items-start">
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-display text-2xxl font-semibold leading-9.5 tracking-tight015 text-tertiary-100 md:text-2xl md:leading-8.25 lg:text-4xl lg:leading-12 xl:text-5xl xl:leading-16.5">
                {BuyerHomePageCopy.heroSection.heading.normal}
                <span className="ml-1 font-display italic md:ml-2 2xl:ml-4">
                  {BuyerHomePageCopy.heroSection.heading.italicised}
                </span>
              </h1>
              <p className="font-default text-sm leading-5 text-tertiary-100 md:text-lg md:leading-7 lg:text-base lg:leading-6">
                {BuyerHomePageCopy.heroSection.subheading}
              </p>
            </div>
            <LinkButton
              href="/products/women"
              variant="primaryMobileFilledLgOutline"
              size="wider"
              borderRadius="large"
              className="font-default text-base leading-13 text-white hover:text-primary-100 active:text-primary-100 md:text-md md:leading-14 lg:text-primary-100 lg:hover:text-white lg:active:text-white"
            >
              Start Shopping
            </LinkButton>
          </div>
          <div className="hidden min-w-[340px] max-w-[340px] md:block lg:min-w-[400px] lg:max-w-[400px] xl:min-w-[600px] xl:max-w-[600px]">
            <Image
              src={BuyerHomePageCopy.heroSection.image}
              alt="hero-section"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
