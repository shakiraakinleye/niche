"use client";

import { LinkButton } from "@/client/components/atoms/link-button";
import { ProductsSlider } from "@/client/components/molecules/product/product-slider";
import { products } from "@/client/data/sample";

export const PopularSection = () => {
  const popularProducts = products.slice(0, 10);

  return (
    <section className="bg-white ">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-4.5 py-10 md:px-6 md:py-16 lg:py-16 lg:pl-8 lg:pr-0 xl:py-20 xl:pl-12 2xl:gap-10 2xl:py-25 2xl:pl-16">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-display text-xl font-bold leading-10 tracking-tight01 text-dark-200 lg:text-2xl 2xl:text-2xxl">
            Popular on Niche
          </h2>
          <LinkButton
            href="/products/women"
            variant="primaryMobileFilledLgOutline"
            size="wider"
            borderRadius="large"
            className="shrink-0 px-5 font-default text-xs leading-8 text-white hover:text-primary-100 active:text-primary-100 md:px-10 md:text-md md:leading-14 lg:mr-8 lg:text-primary-100 lg:hover:text-white lg:active:text-white xl:mr-12 2xl:mr-16"
          >
            See more
          </LinkButton>
        </div>

        <ProductsSlider products={popularProducts} showSlideButtons={true} />
      </div>
    </section>
  );
};

// fix - fetch a definite number of popular products
