import { useContext } from "react";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/client/components/atoms/button";
import {
  CartContext,
  CartContextType,
} from "@/client/components/molecules/cart/cart-context";
import { CartItemQuantityButtons } from "@/client/components/molecules/cart/quantity-change-buttons";
import { priceFormatter } from "@/client/lib/utils";
import { CartItemType } from "@/client/types/cart";

export const CartListItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { id, name, shop, price, image1, size, color } = cartItem;
  const {
    updateCartItem,
    removeFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
  } = useContext(CartContext) as CartContextType;

  return (
    <li className="flex items-start justify-between gap-6 md:gap-10 2xl:gap-14">
      <div className="flex items-start gap-6 md:gap-10 2xl:gap-14">
        <div className="h-24 w-24 overflow-hidden rounded-smd md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 2xl:h-48 2xl:w-48">
          <Image
            src={image1}
            alt={`product-${name}-${id}`}
            className="min-h-full min-w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-y-2 lg:gap-y-3">
          <Link
            href={`/shop/${shop.toLowerCase()}`}
            className="font-display text-sm font-semibold tracking-tight015 text-dark-100 hover:underline 2xl:text-base"
          >
            {shop}
          </Link>

          <p className="flex flex-col font-default text-dark-100">
            <span className="text-sm capitalize leading-5 2xl:text-base 2xl:leading-6">
              {name}
            </span>
            <span className="text-base font-bold leading-6 md:text-lg md:leading-7 2xl:text-xl">
              {priceFormatter(price)}
            </span>
          </p>

          {(size || color) && (
            <div className="flex items-center gap-2 font-default text-xxs leading-4 text-gray-1300 md:gap-3 2xl:gap-4 2xl:text-xs 2xl:leading-4.5">
              {color && (
                <p className="flex gap-1">
                  <span>Color: </span>
                  <span>{color}</span>
                </p>
              )}
              {size && (
                <p className="flex gap-1">
                  <span>Size: </span>
                  <span>{size}</span>
                </p>
              )}
            </div>
          )}

          <CartItemQuantityButtons
            cartItem={cartItem}
            handleIncrement={() => increaseCartItemQuantity(cartItem)}
            handleDecrement={() => decreaseCartItemQuantity(cartItem)}
          />
        </div>
      </div>

      <Button
        type="button"
        borderRadius="full"
        className="flex h-8 w-8 items-center justify-center self-end border border-beige-400 hover:bg-beige-400 md:h-10 md:w-10 2xl:h-12 2xl:w-12"
        onClick={() => removeFromCart(cartItem)}
      >
        <Trash2 className="h-4 w-4 stroke-pink-1000 md:h-5 md:w-5 2xl:h-6 2xl:w-6" />
      </Button>
    </li>
  );
};
