import { LucideIcon } from "lucide-react";

import { SellerHomePageCopy } from "@/client/data/copy";

export const ChooseNicheSection = () => {
  return (
    <section className="mx-auto w-full px-4.5 py-10 md:max-w-2xl md:px-6 md:py-12 lg:max-w-4xl lg:px-8 xl:max-w-5xl xl:px-12 2xl:max-w-6xl 2xl:p-16">
      <div className="w-full space-y-8 md:space-y-12 2xl:space-y-20">
        <h2 className="text-center font-display text-xl font-medium capitalize leading-11 text-black md:text-2xl lg:text-3xl 2xl:text-4xxl">
          Why choose Niche
        </h2>
        <ul className="space-y-5 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6 md:space-y-0 lg:gap-x-16 lg:gap-y-8 2xl:gap-x-22 2xl:gap-y-12">
          {SellerHomePageCopy.chooseNicheSection.map((item, itemIndex) => {
            return <ListItem key={itemIndex} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

type ListItemProp = {
  item: {
    heading: string;
    description: string;
    icon: LucideIcon;
  };
};
const ListItem = ({ item }: ListItemProp) => {
  return (
    <li className="flex w-full items-start gap-4 md:gap-6 2xl:gap-8">
      <div className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16">
        <item.icon
          className="h-8 w-8 stroke-primary-100 md:h-10 md:w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 "
          strokeWidth={1}
        />
      </div>
      <div className="space-y-2">
        <h4 className="leading-28 2xl:tex-txl font-default text-base font-bold capitalize text-zinc-900 md:text-lg">
          {item.heading}
        </h4>
        <p className="font-default text-sm leading-6 text-zinc-600 2xl:text-base">
          {item.description}
        </p>
      </div>
    </li>
  );
};
