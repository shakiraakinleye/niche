import { products } from "@/client/data/sample";

import { ProductsSlider } from "./product-slider";

export const SuggestedProducts = () => {
  // export const SuggestedProducts = ({ products }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 2xl:gap-12">
      <h2 className="font-display text-lg font-bold leading-7 tracking-tight015 text-dark-200 md:text-xl md:leading-8 2xl:text-2xxl 2xl:leading-10">
        You may also like
      </h2>
      <ProductsSlider
        products={products.slice(0, 6)}
        showSlideButtons={false}
      />
    </div>
  );
};

// fix - fetch a deteremined number of suggested products
