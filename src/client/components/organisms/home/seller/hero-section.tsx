import Image from "next/image";

import { StartSellingButton } from "@/client/components/layout/navigation/nav-buttons";
import { SellerHomePageCopy } from "@/client/data/copy";

export const HeroSection = () => {
  return (
    <section className="bg-beige-500">
      <div className="mx-auto w-full max-w-[1440px] px-4.5 pb-10 pt-32 md:gap-11 md:px-6 md:pb-12 md:pt-40 lg:gap-8 lg:px-8 lg:pb-16 lg:pt-40 xl:px-12 xl:pb-20 xl:pt-44 2xl:px-16 2xl:pb-25 2xl:pt-60">
        <div className="flex w-full items-center justify-between lg:px-4 xl:px-6 2xl:px-12">
          <div className="flex max-w-xl flex-col items-center justify-center gap-8 md:items-start">
            <div className="flex flex-col items-start gap-5 text-center md:text-left">
              <h1 className="bg-text-backgradient2 bg-clip-text font-display text-4xl font-semibold leading-12 tracking-tight015 text-transparent lg:text-5xl lg:leading-16.5 2xl:text-6xxl 2xl:leading-22">
                {SellerHomePageCopy.heroSection.heading}
              </h1>
              <p className="font-default text-base leading-6 text-black lg:text-lg lg:leading-7 2xl:text-xl 2xl:leading-8">
                {SellerHomePageCopy.heroSection.subheading}
              </p>
            </div>
            <StartSellingButton />
          </div>
          <div className="hidden min-w-[340px] max-w-[340px] md:block lg:min-w-[400px] lg:max-w-[400px] xl:min-w-[600px] xl:max-w-[600px]">
            <Image
              src={SellerHomePageCopy.heroSection.image}
              alt="hero-section"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
