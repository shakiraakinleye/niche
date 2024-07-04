import { StaticImageData } from "next/image";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  // currency: string;
  image1: StaticImageData | string;
  quantity: number;
  brand: string;
  category: string;
  condition: string;
  enabled: boolean;
  size?: string[];
  color?: string[];
  shop: string;
};

// export type ProductType = {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image1: StaticImageData;
//   image2: StaticImageData;
//   image3: StaticImageData;
//   image4: StaticImageData;
//   href: string;
//   quantity: number;
//   enabled: boolean;
//   brand: string;
//   category: string;
//   condition: string;
//   variants?: {
//     size?: [],
//     colour?: []
//   }
// };
