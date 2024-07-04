import { Dispatch, SetStateAction } from "react";

import { Circle } from "lucide-react";
import Image from "next/image";

import { cn } from "@/client/lib/utils";
import { ProductType } from "@/client/types/product";

import { EmptyProductList } from "../empty-lists";

export const MobileProductListCard = ({
  product,
  selectionHandler,
}: {
  product: ProductType;
  selectionHandler: (id: any) => void;
}) => {
  const { id, image1, name, quantity, enabled } = product;
  const onClick = () => {
    selectionHandler(id);
  };

  return (
    <li
      className="flex cursor-pointer flex-col gap-y-3 rounded-smd border border-gray-3300/25 bg-white pb-3"
      onClick={onClick}
    >
      <Image
        src={image1}
        alt={`${name}-product-image`}
        className="h-32 w-full rounded-sm object-cover"
      />
      <div className="flex flex-col gap-y-2 px-2 font-default text-gray-1300">
        <p className="text-xs font-medium leading-4">{name}</p>
        <p
          className={cn(
            "flex items-center gap-1.5 text-xxs leading-3.5",
            enabled ? "text-inherit" : "text-red-1200"
          )}
        >
          <span className="">{enabled ? "Active" : "Inactive"}</span>
          <Circle
            className={cn(
              "h-1.5 w-1.5 text-inherit",
              enabled ? "fill-gray-1300" : "fill-red-1200"
            )}
          />
          <span className={cn(quantity > 3 ? "text-inherit" : "text-red-1200")}>
            {quantity} available
          </span>
        </p>
      </div>
    </li>
  );
};

export const MobileProductList = ({
  products,
  listClassName,
  heading,
  setSelectedProduct,
}: {
  products: Map<any, ProductType>;
  listClassName?: string;
  heading?: string;
  setSelectedProduct: Dispatch<SetStateAction<any>>;
}) => {
  const productMap = new Map(products);
  const productsArray = Array.from(productMap.values());
  const listIsEmpty = productsArray.length <= 0;

  const selectionHandler = (id: any) => {
    const selectedId = productMap.get(id);
    setSelectedProduct(selectedId);
  };

  return listIsEmpty ? (
    <div className="lg:hidden">
      <EmptyProductList />
    </div>
  ) : (
    <div className="rounded-xlg border border-zinc-200 bg-white lg:hidden">
      {heading && (
        <h3 className="px-5 py-2.5 font-default text-base font-medium capitalize leading-6 text-black">
          {heading}
        </h3>
      )}

      <ul
        className={cn(
          "grid grid-cols-2 gap-5 px-5 py-2.5 md:grid-cols-3",
          listClassName
        )}
      >
        {productsArray.map((product: ProductType) => {
          return (
            <MobileProductListCard
              key={`product-${product.id}`}
              product={product}
              selectionHandler={selectionHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};
