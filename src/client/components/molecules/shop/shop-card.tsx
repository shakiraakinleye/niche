import Image from "next/image";
import Link from "next/link";

import { ShopType } from "@/client/types/shop";
import bgLeafOne from "@/public/bg-leaf-1.png";
import bgLeafTwo from "@/public/bg-leaf-2.png";

export const ShopCardBgImage = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={bgLeafOne}
        alt="shop card background image"
        className="h-5.5 absolute left-1 top-1 w-9 lg:h-8 lg:w-10 2xl:h-11 2xl:w-13"
      />
      <Image
        src={bgLeafTwo}
        alt="shop card background image"
        className="absolute bottom-0 right-0 h-11 w-13 md:h-12 md:w-16 lg:h-14 lg:w-20 2xl:h-16 2xl:w-26"
      />
    </div>
  );
};

export const HomeShopCard = ({ shop }: { shop: ShopType }) => {
  return (
    <Link
      href={`/shop/${shop.shopName.toLowerCase()}`}
      className="relative flex items-center justify-start gap-4 overflow-hidden rounded-smd bg-secondary-100 px-4 py-8 drop-shadow-2md md:gap-6 md:px-6 md:py-10 lg:py-8"
    >
      <ShopCardBgImage />
      <div className="h-9 w-9 overflow-hidden rounded-full md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20">
        <Image
          src={shop.image}
          alt={shop.shopName}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="font-display text-xs font-medium leading-6 tracking-tight01 text-black md:text-sm md:leading-7 lg:text-base lg:leading-8 2xl:text-lg 2xl:leading-10">
        {shop.shopName}
      </h3>
    </Link>
  );
};

export const ShopsListCard = ({ shop }: { shop: ShopType }) => {
  return (
    <Link
      href={`/shop/${shop.shopName.toLowerCase()}`}
      className="relative flex flex-col items-start gap-2 overflow-hidden rounded-smd 2xl:gap-3"
    >
      <div className="h-24 w-36 overflow-hidden md:h-32 md:w-48 lg:h-40 lg:w-64 xl:h-48 xl:w-72 2xl:h-64 2xl:w-96">
        <Image
          src={shop.image}
          alt={`shop-${shop.shopName}`}
          className="aspect-h-1 aspect-w-1.5 h-full w-full object-cover"
        />
      </div>
      <h2 className="font-display text-sm font-medium leading-7 text-black md:text-lg md:leading-8 2xl:text-xl 2xl:leading-10">
        {shop.shopName}
      </h2>
    </Link>
  );
};
