"use client";

import { Slide } from "@faceless-ui/slider";

import { cn } from "@/client/lib/utils";
import { Slider } from "@/components/molecules/common/slider";

import { ProductCard } from "../common/product-card";

export type ProductsSliderProps = {
  products: any[];
  showSlideButtons: boolean;
  containerClassName?: string;
  sliderClassName?: string;
  slideClassName?: string;
};

export const ProductsSlider = ({
  products,
  showSlideButtons,
  containerClassName,
  sliderClassName,
  slideClassName,
}: ProductsSliderProps) => {
  return (
    <div className={cn("max-w-full", containerClassName)}>
      <Slider
        trackClassName={cn("gap-4 xl:gap-5", sliderClassName)}
        showSlideButtons={showSlideButtons}
      >
        <>
          {products.map((product, productIndex) => {
            return (
              <Slide
                index={productIndex}
                key={product.id}
                className={cn("max-w-fit", slideClassName)}
              >
                <ProductCard product={product} />
              </Slide>
            );
          })}
        </>
      </Slider>
    </div>
  );
};
