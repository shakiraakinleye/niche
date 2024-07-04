import { StaticImageData } from "next/image";

export type CartItemType = {
  id: string;
  shop: string;
  name: string;
  image1: StaticImageData | string;
  // description: string;
  price: number;
  quantity: number;
  // brand: string;
  // category: string;
  // condition: string;
  // enabled: boolean;
  size?: string;
  color?: string;
};
