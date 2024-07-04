import { StaticImageData } from "next/image";

export type ShopType = {
  id: string;
  shopName: string;
  isProfileComplete: boolean;
  isLive: boolean;
  image: StaticImageData;
  aboutShop: string;
};

export type ShopsType = {
  [shopname: string]: ShopType;
};
