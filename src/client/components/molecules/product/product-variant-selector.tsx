import { Dispatch, SetStateAction } from "react";

import { cn } from "@/client/lib/utils";

import { Button } from "../../atoms/button";
import { ProductVariantDisplayProps } from "../../atoms/product-variant-display";

export type ProductVariantSelectorProps = ProductVariantDisplayProps & {
  selectedVariant: string | undefined;
  setSelectedVariant: Dispatch<SetStateAction<string | undefined>>;
};

export const ProductVariantSelector = ({
  variant,
  variantValues,
  selectedVariant,
  setSelectedVariant,
}: ProductVariantSelectorProps) => {
  return (
    <div className="flex items-center gap-3 font-default text-xs leading-5 tracking-tight01 text-black lg:gap-4 lg:text-sm 2xl:gap-6 2xl:text-base 2xl:leading-6">
      <span className="font-medium capitalize">{variant}</span>
      <p className="flex items-center gap-1 lg:gap-2">
        {variantValues.map((value) => {
          return (
            <Button
              type="button"
              borderRadius="full"
              key={`${variant}-${value}`}
              className={cn(
                "border-2 px-3 py-1 font-medium lg:font-bold",
                selectedVariant === value
                  ? "border-gray-3400 bg-white"
                  : "border-transparent bg-gray-3400"
              )}
              onClick={() => setSelectedVariant(value)}
            >
              {value}
            </Button>
          );
        })}
      </p>
    </div>
  );
};
