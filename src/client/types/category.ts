import { StaticImageData } from "next/image";

export type HomepageProductCategoryType = {
  title: string;
  image: StaticImageData;
  href: string;
};

export type Subcategory = string;
export type ProductCategoriesType = {
  [category: string]: Subcategory[];
};
