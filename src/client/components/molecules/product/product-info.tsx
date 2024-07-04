"use client";

import { useState, useContext } from "react";

import { AlertCircle } from "lucide-react";

import { priceFormatter } from "@/client/lib/utils";
import { ProductType } from "@/client/types/product";

import { ProductVariantSelector } from "./product-variant-selector";
import { Button } from "../../atoms/button";
import {
  CartContext,
  CartContextType,
  createCartItem,
} from "../cart/cart-context";

export const ProductInfo = ({ product }: { product: ProductType }) => {
  const { name, description, price, condition, size, color } = product;
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );
  const { addToCart } = useContext(CartContext) as CartContextType;

  const addToCartHandler = () => {
    const cartItem = createCartItem(product, 1, selectedSize, selectedColor);
    addToCart(cartItem);
  };

  const buyNowHandler = () => {
    addToCartHandler();
    // add to cart
    // then proceed to cart page
  };

  return (
    <div className="space-y-5 md:space-y-8">
      <div className="space-y-2">
        <p className="font-default text-base capitalize leading-7 text-gray-1300">
          {name}
        </p>
        <p className="font-default text-lg font-medium text-dark-100 md:text-2xl 2xl:text-4xl">
          {priceFormatter(price)}
        </p>
        <p className="flex items-center gap-1">
          <AlertCircle className="h-5 w-5 fill-yellow-1000 stroke-yellow-1100" />
          <span className="font-default text-xs italic text-gray-2100">
            Shipping is calculated at checkout
          </span>
        </p>
      </div>

      <div className="space-y-4">
        {size && (
          <ProductVariantSelector
            variant="Size"
            variantValues={size}
            selectedVariant={selectedSize}
            setSelectedVariant={setSelectedSize}
          />
        )}
        {color && (
          <ProductVariantSelector
            variant="Color"
            variantValues={color}
            selectedVariant={selectedColor}
            setSelectedVariant={setSelectedColor}
          />
        )}
        <p className="flex items-center gap-3 font-default text-xs leading-5 tracking-tight01 text-black lg:gap-4 lg:text-sm 2xl:gap-6 2xl:text-base 2xl:leading-6">
          <span className="font-medium capitalize">Condition</span>
          <span className="font-medium capitalize lg:font-bold">
            {condition}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-4 2xl:gap-6">
        <Button
          type="button"
          variant="primaryFilled"
          borderRadius="large"
          size="wide"
          onClick={buyNowHandler}
        >
          <span className="font-default text-sm font-bold leading-5 text-white group-hover:text-primary-100 2xl:text-base 2xl:leading-6">
            Buy Now
          </span>
        </Button>
        <Button
          type="button"
          variant="primaryOutline"
          borderRadius="large"
          size="wide"
          onClick={addToCartHandler}
        >
          <span className="font-default text-sm font-bold leading-5 text-primary-100 group-hover:text-white 2xl:text-base 2xl:leading-6">
            Add to Niche
          </span>
        </Button>
      </div>

      <p className="w-full font-default text-sm leading-5 text-gray-3800 lg:max-w-[75%] 2xl:text-base 2xl:leading-6">
        {description}
      </p>
    </div>
  );
};
