import Image from "next/image";

import { StartSellingButton } from "@/client/components/layout/navigation/nav-buttons";
import { SellerHomePageCopy } from "@/client/data/copy";

export const GettingStartedSection = () => {
  const copy = SellerHomePageCopy.gettingStartedSection;
  return (
    <section className="bg-beige-500">
      <div className="mx-auto w-full max-w-[1440px] px-4.5 py-10 md:px-6 md:py-16 lg:px-8 xl:px-12 2xl:px-16 2xl:py-24">
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12 2xl:gap-20">
          <div className="space-y-5 text-center text-black">
            <h2 className="font-display text-xl font-medium capitalize leading-11 tracking-tight text-inherit md:text-2xl lg:text-3xl 2xl:text-4xxl 2xl:tracking-tighter">
              {copy.heading}
            </h2>
            <p className="font-default text-base leading-8 text-inherit md:text-lg 2xl:text-xl">
              {copy.subheading}
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-5 lg:items-center lg:gap-12 2xl:gap-16">
            <ul className="md:max-w-xl lg:col-span-2">
              {copy.listItems.map((item, itemIndex) => {
                const isLastChild = itemIndex === copy.listItems.length - 1;
                return (
                  <ListItem
                    key={itemIndex}
                    item={item}
                    index={itemIndex}
                    isLastChild={isLastChild}
                  />
                );
              })}
            </ul>

            <div className="hidden pb-36 lg:col-span-3 lg:block 2xl:pb-50">
              <div className="relative aspect-video lg:w-150 2xl:w-180">
                <Image
                  src={copy.image}
                  alt={copy.heading}
                  className="absolute inset-0 z-20 aspect-video lg:w-150 2xl:w-180"
                />
                <div className="absolute -bottom-36 -right-36 aspect-square h-72 w-72 bg-getting-started-section-gradient blur-2xl 2xl:-bottom-50 2xl:-right-50 2xl:h-100 2xl:w-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-fit lg:mx-0">
          <StartSellingButton />
        </div>
      </div>
    </section>
  );
};

type ListItemProp = {
  item: {
    heading: string;
    description: string;
  };
  index: number;
  isLastChild: boolean;
};

const ListItem = ({ item, index, isLastChild }: ListItemProp) => {
  const marker = index + 1;
  return (
    <li className="flex items-stretch gap-4 md:gap-6 2xl:gap-8">
      <div className="relative min-w-[32px] md:min-w-[40px] 2xl:min-w-[48px]">
        <p className="absolute left-0 top-0 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 md:h-10 md:w-10 2xl:h-12 2xl:w-12">
          <span className="font-default text-sm font-medium text-white md:text-base 2xl:text-lg">
            {marker}
          </span>
        </p>
        {!isLastChild && (
          <p className="absolute left-4 top-0 h-full w-0.5 border-l border-dashed border-l-primary-100 bg-transparent md:left-5 2xl:left-6"></p>
        )}
      </div>

      <div className="space-y-3 pb-10 font-default text-black md:pb-16 2xl:pb-24">
        <h3 className="text-base font-medium leading-8 text-inherit md:text-lg 2xl:text-xl">
          {item.heading}
        </h3>
        <p className="text-xs leading-6 text-inherit md:text-sm">
          {item.description}
        </p>
      </div>
    </li>
  );
};
