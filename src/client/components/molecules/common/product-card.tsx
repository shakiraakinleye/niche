"use client";

import { useState } from "react";

import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/client/components/atoms/button";
import { CartIcon } from "@/client/components/atoms/icons";
import { cn, priceFormatter } from "@/client/lib/utils";
import { ProductType } from "@/client/types/product";

import { useDemoModal } from "./demo-modal";
import { VariantModal } from "../cart/product-variant-modal";

export type ProductCardProps = {
  product: ProductType;
  className?: string;
};

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { id, name, image1, price, size, color } = product;
  const formattedPrice = priceFormatter(price);
  const [showCartButton, setShowCartButton] = useState(false);
  const productSlug = `${name.toLowerCase().split(" ").join("-")}-${id}`;

  const { DemoModal, setShowDemoModal } = useDemoModal(
    <VariantModal product={product} />
  );
  const addToCartHandler = () => {
    if ((size && size?.length > 1) || (color && color?.length > 1)) {
      setShowDemoModal(true);
    } else {
      console.log("add to cart");
      // create cartItem and addToCart
    }
  };

  return (
    <>
      <div
        className={cn(
          "group flex h-full flex-col items-stretch justify-between gap-1 md:min-w-[240px] md:max-w-[240px] xl:min-w-[256px] xl:max-w-[256px] 2xl:min-w-[280px] 2xl:max-w-[280px]",
          className
        )}
      >
        <div className="flex flex-col items-stretch gap-2">
          <div
            className="group relative h-40 overflow-hidden rounded-smd md:h-52 lg:h-64 lg:min-w-full lg:max-w-full xl:h-70 2xl:h-75"
            onMouseOver={() => setShowCartButton(true)}
            onMouseLeave={() => setShowCartButton(false)}
          >
            <Link href={`/product/${productSlug}`}>
              <Image
                src={image1}
                alt={name}
                className="min-h-full min-w-full object-cover transition-all group-hover:scale-110"
              />
            </Link>

            <Transition
              show={showCartButton}
              enter="transition-transform duration-300 ease-out"
              enterFrom="translate-y-3/4"
              enterTo="translate-y-0"
              leave="transition-transform duration-150 ease-out"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-3/4"
              className="absolute inset-x-0 bottom-0 z-10 flex"
            >
              <div className="grow bg-black/70 pb-2 pl-2 pt-1 lg:pl-3 lg:pt-1.5 2xl:pl-5 2xl:pt-2">
                {size && (
                  <p className="flex flex-col gap-1 font-default text-xxs text-white lg:text-xs 2xl:text-sm">
                    <span>Size{size?.length > 1 && "s"} available</span>
                    <span className="">{size.join(", ")}</span>
                  </p>
                )}
              </div>
              <Button
                type="button"
                borderRadius="none"
                className="shrink-0 bg-primary-100 px-4 py-3 hover:bg-primary-100/80 lg:py-4 2xl:px-5"
                onClick={addToCartHandler}
              >
                <CartIcon className="h-4 w-4 stroke-white 2xl:h-6 2xl:w-6" />
              </Button>
            </Transition>
          </div>
          <p className="font-default text-xxs capitalize leading-5 text-gray-1300 md:text-xs md:leading-6 2xl:text-sm 2xl:font-bold 2xl:leading-7">
            {name}
          </p>
        </div>
        <p className="font-default text-sm  font-bold leading-7 tracking-tight015 text-dark-300 md:text-base 2xl:text-lg">
          {formattedPrice}
        </p>
      </div>
      <DemoModal />
    </>
  );
};
