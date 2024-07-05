"use client";

import { useState, useContext } from "react";

import { ProductType } from "@/client/types/product";

import { ProductCardQuantityButtons } from "./quantity-change-buttons";
import { Button } from "../../atoms/button";
import {
  CartContext,
  CartContextType,
  createCartItem,
} from "../cart/cart-context";
import { ProductVariantSelector } from "../product/product-variant-selector";

export const VariantModal = ({ product }: { product: ProductType }) => {
  const { size, color } = product;
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );

  const [continueIsLoading, setContinueIsLoading] = useState(false);
  const [checkoutIsLoading, setCheckoutIsLoading] = useState(false);

  const { addToCart } = useContext(CartContext) as CartContextType;

  const cartItem = createCartItem(product, 0, selectedSize, selectedColor);

  const continueShoppingHandler = () => {
    // test if cart contains exact product and variants before adding. if it does, just change the quantity and close modal
    // if not...
    // if quantity >= 1, add to cart and close modal
    // if quantity === 0, just close modal
    addToCart(cartItem);
    setContinueIsLoading(true);
  };

  const proceedToCheckoutHandler = () => {
    addToCart(cartItem);
    setCheckoutIsLoading(true);
    // if add to cart is successful then open cart
  };

  // increase quantity and check sku before increasing quantity

  return (
    <div className="2xl:w-144 flex w-full max-w-xl flex-col space-y-4 rounded-smd border border-gray-3900 bg-white p-4 md:w-96 md:max-w-sm md:p-5 lg:w-112 lg:max-w-md 2xl:space-y-6 2xl:p-6">
      <h3 className="font-default text-sm font-medium leading-5 tracking-tight015 text-black 2xl:text-base 2xl:leading-7">
        Please select a variant
      </h3>

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

      <div className="w-fit self-end">
        <ProductCardQuantityButtons
          cartItem={cartItem}
          handleDecrement={() => console.log("reduce")}
          handleIncrement={() => console.log("increase")}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 2xl:gap-5">
        <Button
          type="button"
          loading={continueIsLoading}
          variant="primaryOutline"
          spinnerColor="fill-primary-100"
          loadingBgColor="current-color"
          loadingTextClassName="text-inherit"
          className="p-2 font-default text-xs font-medium leading-5 text-primary-100 hover:text-white lg:px-3 2xl:py-3 2xl:text-sm"
          onClick={continueShoppingHandler}
        >
          Continue Shopping
        </Button>
        <Button
          type="button"
          loading={checkoutIsLoading}
          variant="primaryFilled"
          spinnerColor="fill-primary-100"
          loadingText="Proceeding..."
          loadingBgColor="current-color"
          loadingTextClassName="text-inherit"
          className="p-2 font-default text-xs font-medium leading-5 text-white hover:text-primary-100 lg:px-3 2xl:py-3 2xl:text-sm"
          onClick={proceedToCheckoutHandler}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
