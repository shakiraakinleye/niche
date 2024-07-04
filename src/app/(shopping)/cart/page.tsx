"use client";

import { useContext } from "react";

import { Button } from "@/client/components/atoms/button";
import { CartIcon } from "@/client/components/atoms/icons";
import { LinkButton } from "@/client/components/atoms/link-button";
import {
  CartContext,
  CartContextType,
} from "@/client/components/molecules/cart/cart-context";
import { CartListItem } from "@/client/components/molecules/cart/cart-item";
import { NoContent } from "@/client/components/molecules/common/no-content";
import { SuggestedProducts } from "@/client/components/molecules/product/suggested-products";
import { priceFormatter } from "@/client/lib/utils";

export default function Cart() {
  const { cart } = useContext(CartContext) as CartContextType;
  const cartArray = Array.from(cart.values());
  const cartTotalPrice = cartArray.reduce(
    (acc, cartItem) => cartItem.price * cartItem.quantity + acc,
    0
  );
  // get from cart context

  return (
    <section className="w-full bg-white py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40">
      <div className="w-full max-w-screen-xl space-y-20 px-6 md:space-y-32 lg:mx-auto xl:px-12 2xl:space-y-40 2xl:px-16">
        <div className="mx-auto flex w-full flex-col items-start gap-6 md:flex-row md:justify-between md:gap-8 lg:gap-10 xl:max-w-screen-lg">
          {cart.size > 0 ? (
            <>
              <div className="shrink-0 space-y-4 md:space-y-5 2xl:space-y-7">
                <h1 className="font-display text-base font-semibold tracking-tight text-black md:text-lg 2xl:text-2xl">
                  Your Cart({cart.size})
                </h1>
                <ul className="space-y-6 md:space-y-8 2xl:space-y-12">
                  {cartArray.map((cartItem) => (
                    <CartListItem key={cartItem.id} cartItem={cartItem} />
                  ))}
                </ul>
              </div>

              <div className="flex w-full shrink-0 flex-col items-center gap-4 rounded-smd bg-beige-400 p-4 md:max-w-fit md:gap-8 md:p-8 lg:max-w-xs lg:gap-10 2xl:gap-12 2xl:p-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white md:h-12 md:w-12 2xl:h-14 2xl:w-14">
                  <CartIcon className="h-4 w-4 stroke-dark-400 md:h-5 md:w-5 2xl:h-6 2xl:w-6" />
                </div>

                <h2 className="text-center font-display text-base font-semibold capitalize tracking-tight text-dark-100 md:text-lg 2xl:text-2xl">
                  Order Summary
                </h2>

                <p className="flex flex-col text-center font-default">
                  <span className="text-base font-bold leading-6 text-dark-100 md:text-lg md:leading-7 2xl:text-xl">
                    {priceFormatter(cartTotalPrice)}
                  </span>
                  <span className="text-xs capitalize italic leading-4 text-gray-1300 2xl:text-sm 2xl:leading-5">
                    Excludes shipping
                  </span>
                </p>

                <div className="flex flex-col gap-2 md:gap-3 2xl:gap-4">
                  <Button
                    type="button"
                    variant="primaryFilled"
                    borderRadius="large"
                    className="w-full border-1.5 px-4 py-2 md:px-6 2xl:px-8 2xl:py-4"
                    // onClick={() => Checkout}
                  >
                    <span className="font-default text-xs font-bold leading-4 text-white group-hover:text-primary-100 md:text-sm md:leading-5 2xl:text-base 2xl:leading-6">
                      Proceed to checkout
                    </span>
                  </Button>

                  <LinkButton
                    href="/shops"
                    type="button"
                    variant="primaryOutline"
                    borderRadius="large"
                    className="w-full px-4 py-2 md:px-6 2xl:px-8 2xl:py-4"
                  >
                    <span className="font-default text-xs font-bold leading-4 text-primary-100 group-hover:text-white md:text-sm md:leading-5 2xl:text-base 2xl:leading-6">
                      Continue shopping
                    </span>
                  </LinkButton>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full space-y-4 md:space-y-5 2xl:space-y-7">
              <h1 className="font-display text-base font-semibold tracking-tight text-black md:text-lg 2xl:text-2xl">
                Your Cart
              </h1>
              <NoContent text="No products added to cart">
                <LinkButton
                  href="/products/women"
                  type="button"
                  variant="primaryFilled"
                  size="md"
                >
                  <span className="font-default text-xs leading-4 text-white group-hover:text-primary-100 2xl:text-sm 2xl:leading-5">
                    Continue shopping
                  </span>
                </LinkButton>
              </NoContent>
            </div>
          )}
        </div>

        <SuggestedProducts />
        {/* <ProductSuggestion products={suggestedProducts} /> */}
      </div>
    </section>
  );
}
