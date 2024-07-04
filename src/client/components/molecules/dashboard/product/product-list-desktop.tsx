import { useState, Dispatch, SetStateAction } from "react";

import Image from "next/image";

import { cn } from "@/client/lib/utils";
import { priceFormatter } from "@/client/lib/utils";
import { ProductType } from "@/client/types/product";

import { Toggle } from "../../../atoms/toggle";
import { EmptyProductList } from "../empty-lists";

export const DesktopProductListCard = ({
  product,
  selectionHandler,
}: {
  product: ProductType;
  selectionHandler: (id: any) => void;
}) => {
  const { id, image1, name, price, quantity, enabled } = product;
  const [isEnabled, setIsEnabled] = useState(enabled);
  // product.enabled = isEnabled;
  // todo - change status in data source

  const onClick = () => {
    selectionHandler(id);
  };

  return (
    <li
      className="grid cursor-pointer grid-cols-6 items-center justify-between gap-8 rounded-smd px-4 py-2 font-default text-sm capitalize leading-6 text-gray-1300 hover:bg-beige-400 xl:gap-12 2xl:px-5 2xl:py-2.5 2xl:text-base"
      onClick={onClick}
    >
      <Image src={image1} alt={`${name}-product-image`} className="h-8 w-8" />
      <p className="col-span-2 leading-4">{name}</p>
      <p>{priceFormatter(price, "", "symbol")}</p>
      <p>{quantity.toString().padStart(2, "0")}</p>
      <Toggle enabled={isEnabled} onChange={setIsEnabled} />
    </li>
  );
};

export const DesktopProductList = ({
  products,
  listClassName,
  setSelectedProduct,
}: {
  products: Map<any, ProductType>;
  listClassName?: string;
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
    <div className="hidden lg:block">
      <EmptyProductList />
    </div>
  ) : (
    <ul
      className={cn(
        "hidden flex-col gap-2 rounded-xlg bg-white px-4 pb-10 pt-3 lg:flex xl:gap-4 2xl:gap-5 2xl:px-5 2xl:pb-12 2xl:pt-4",
        listClassName
      )}
    >
      <li className="grid grid-cols-6 justify-between gap-8 rounded-smd bg-beige-400 px-4 py-3 font-default text-sm font-medium capitalize leading-6 text-black xl:gap-12 2xl:px-5 2xl:text-base">
        <span>Image</span>
        <span className="col-span-2">Product</span>
        <span>Price</span>
        <span>Inventory</span>
        <span>Status</span>
      </li>
      {productsArray.map((product: ProductType) => {
        return (
          <DesktopProductListCard
            key={`product-${product.id}`}
            product={product}
            selectionHandler={selectionHandler}
          />
        );
      })}
    </ul>
  );
};
