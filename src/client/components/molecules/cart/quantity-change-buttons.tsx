import { Plus, Minus } from "lucide-react";

import { cn } from "@/client/lib/utils";
import { CartItemType } from "@/client/types/cart";

import { Button } from "../../atoms/button";

export type QuantityChangeButtonsType = {
  handleIncrement: () => void;
  handleDecrement: () => void;
  cartItem: CartItemType;
};

export const CartItemQuantityButtons = ({
  handleIncrement,
  handleDecrement,
  cartItem,
}: QuantityChangeButtonsType) => {
  return (
    <div className="flex max-w-fit gap-4 rounded-large bg-beige-400 px-4 py-2 font-default text-dark-100 md:gap-6 2xl:px-8 ">
      <Button
        type="button"
        className={cn(
          "text-xs md:text-sm 2xl:text-base",
          cartItem.quantity <= 1
            ? "pointer-events-none cursor-not-allowed text-gray-1300"
            : "text-inherit"
        )}
        onClick={handleDecrement}
      >
        -
      </Button>
      <p className="text-base font-bold md:text-lg 2xl:text-xl">
        {cartItem.quantity}
      </p>
      <Button
        type="button"
        className="text-xs md:text-sm 2xl:text-base"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export const ProductCardQuantityButtons = ({
  handleIncrement,
  handleDecrement,
  cartItem,
}: QuantityChangeButtonsType) => {
  return (
    <div className="flex max-w-fit items-center gap-2 font-default md:gap-3">
      <Button
        type="button"
        variant="primaryFilled"
        borderRadius="none"
        disabled={cartItem.quantity === 0}
        className="h-6 w-6 rounded-sm p-1 text-xl text-white hover:text-primary-100"
        onClick={handleDecrement}
      >
        <Minus className="h-full w-full text-inherit" />
      </Button>
      <p className="w-fit text-base font-bold text-black md:text-lg 2xl:text-xl">
        {cartItem.quantity}
      </p>
      <Button
        type="button"
        variant="primaryFilled"
        borderRadius="none"
        className="h-6 w-6 rounded-sm p-1 text-xs text-white hover:text-primary-100 md:text-sm 2xl:text-base"
        onClick={handleIncrement}
      >
        <Plus className="h-full w-full text-inherit" />
      </Button>
    </div>
  );
};
