import { BuyerHomePageCopy } from "@/client/data/copy";
import { CTACard } from "@/components/molecules/home/cta-card";

export const CTASection = () => {
  const copy = BuyerHomePageCopy.CTASectionCopy;
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-y-11 px-4.5 md:gap-13 md:px-6 lg:items-start lg:justify-center lg:gap-16 lg:px-8 xl:gap-20 xl:px-12 2xl:gap-y-33 2xl:px-16">
      {copy.map((cta, index) => {
        return (
          <CTACard
            key={cta.heading}
            cta={cta}
            imageOrder={index % 2 ? "lg:order-last" : "lg:order-first"}
          />
        );
      })}
    </div>
  );
};
