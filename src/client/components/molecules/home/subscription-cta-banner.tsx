import { SubscriptionForm } from "@/components/molecules/common/subscription-form";

export const SubscriptionCTABanner = () => {
  return (
    <div className="mx-auto mt-28 hidden w-full max-w-4xl justify-center rounded-5xl border-none bg-primary-100 px-44 py-18 lg:flex xl:max-w-5xl xl:px-60 xl:py-22 2xl:mt-32 2xl:max-w-6xl 2xl:px-88 2xl:py-26">
      <div className="flex min-w-[460px] max-w-[460px] flex-col items-center gap-4 xl:gap-6 2xl:gap-8">
        <div className="flex flex-col items-center gap-3 text-center 2xl:gap-4">
          <h3 className="font-display text-3xl font-bold tracking-tight015 text-white xl:text-4xl 2xl:text-4xxl 2xl:leading-12">
            Stay in the loop
          </h3>
          <p className="font-default text-base leading-5.5 text-beige-300 xl:text-lg xl:leading-6">
            Subscribe to our newsletter and get exclusive updates on new offers
            and discount right in your inbox
          </p>
        </div>
        <SubscriptionForm />
      </div>
    </div>
  );
};
