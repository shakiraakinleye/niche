import { StartSellingButton } from "@/client/components/layout/navigation/nav-buttons";
import { SellerHomePageCopy } from "@/client/data/copy";

export const GetStartedBanner = () => {
  const copy = SellerHomePageCopy.getStartedBanner;
  return (
    <section className="bg-beige-500 px-4.5 py-10 md:px-6 md:py-16 lg:px-8 xl:px-12 2xl:px-16 2xl:py-24">
      <div className="flex justify-center rounded-smd border-none bg-tertiary-100/70 px-4.5 py-10 md:px-6 md:py-16 lg:px-8 xl:px-12 2xl:px-16 2xl:py-24">
        <div className="flex w-full flex-col items-center gap-4 md:max-w-md lg:max-w-lg 2xl:gap-5">
          <div className="flex flex-col items-center gap-3 text-center 2xl:gap-4">
            <h3 className="font-display text-xl leading-12 text-white md:text-2xl lg:text-3xl xl:text-3xxl 2xl:text-4xxl">
              {copy.heading}
            </h3>
            <p className="font-default text-sm leading-8 text-white md:text-base 2xl:text-lg">
              {copy.subheading}
            </p>
          </div>
          <StartSellingButton />
        </div>
      </div>
    </section>
  );
};
