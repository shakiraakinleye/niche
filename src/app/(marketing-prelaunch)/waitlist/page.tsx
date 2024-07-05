import Image from "next/image";

import { LinkButton } from "@/client/components/atoms/link-button";
import { waitlistFeatures } from "@/client/data/common";
import { WAITLIST_URL } from "@/lib/constants";
import waitlistHeroImage from "@/public/waitlist-hero-image.png";

type Feature = {
  key: string;
  feature: {
    icon: any;
    heading: string;
    description: string;
  };
};

const Feature = ({ feature }: Feature) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 rounded-md border-none md:pr-20 lg:w-60 lg:pr-0 xl:w-72.5">
      <div className="flex items-center gap-2">
        <feature.icon className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
        <h3 className="font-default text-base font-medium leading-5.5 text-black">
          {feature.heading}
        </h3>
      </div>
      <p className="font-default text-base leading-5.5 text-gray-1000">
        {feature.description}
      </p>
    </div>
  );
};

export default async function Home() {
  return (
    <div className="mx-auto mb-24 flex max-w-[1440px] flex-col gap-25 bg-transparent px-6 lg:mb-0 lg:gap-16 lg:px-12 xl:gap-20 xl:px-30">
      <div className="flex items-center md:gap-10 lg:gap-20 xl:gap-40">
        <div className="flex flex-col items-center gap-6 md:items-start xl:gap-8">
          <div className="flex flex-col items-start gap-3 text-center md:text-left lg:gap-4 xl:gap-5">
            <h1
              className="animate-fade-up bg-text-backgradient bg-clip-text font-display text-4xl font-medium leading-12 tracking-tighter text-transparent xl:text-5xl xl:leading-16.5"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              Make more money selling your brand and preloved items.
            </h1>
            <h2
              className="w-full animate-fade-up font-default text-base leading-5 tracking-tight text-gray-1000 md:leading-6 xl:text-xl xl:leading-7"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              Sell your brand. Sell your items. Buy what you love.
            </h2>
          </div>

          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <LinkButton href={WAITLIST_URL} variant="primaryFilled" size="lg">
              <span className="font-default text-sm font-medium capitalize text-white group-hover:text-primary-100 xl:text-base">
                Join the waitlist
              </span>
            </LinkButton>
          </div>
        </div>

        <div className="hidden md:block md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] xl:min-w-[480px] xl:max-w-[480px]">
          <Image src={waitlistHeroImage} alt="waitlist hero" priority={true} />
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-16 lg:flex-row lg:justify-between lg:gap-0">
        {waitlistFeatures.map((feature) => {
          return <Feature key={feature.heading} feature={feature} />;
        })}
      </div>
    </div>
  );
}
