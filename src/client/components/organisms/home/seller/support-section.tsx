"use client";

import { FaqsWithArrowButton } from "@/client/components/molecules/common/faqs";
import { SupportCTA } from "@/client/components/molecules/common/support-cta";

export const SupportSection = () => {
  return (
    <section className="w-full px-4.5 py-10 md:px-6 md:py-16 lg:px-8 xl:px-12 2xl:px-16 2xl:py-24">
      <div className="mx-auto flex flex-col gap-6 md:max-w-xl md:gap-10 lg:max-w-2xl 2xl:max-w-3xl 2xl:gap-16">
        <div className="flex flex-col gap-6 md:gap-10 2xl:gap-16">
          <div className="flex flex-col gap-3 text-center md:gap-4 2xl:gap-5">
            <h2 className="font-display text-lg font-medium leading-10 tracking-tight text-dark-100 md:text-xl lg:text-2xl lg:tracking-tighter 2xl:text-4xxl">
              Need to know
            </h2>
            <p className="font-default text-sm leading-6 text-gray-3600 md:text-base 2xl:text-xl">
              Everything you need to know about selling on Niche
            </p>
          </div>

          <FaqsWithArrowButton />
        </div>

        <div className="mt-8 flex justify-center">
          <SupportCTA buttonVariant="secondaryFilled" />
        </div>
      </div>
    </section>
  );
};
