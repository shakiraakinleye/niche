import { ProductType } from "@/client/types/product";

import { ProductCard } from "../../molecules/common/product-card";

export const ProductList = ({
  productsArray,
}: {
  productsArray: ProductType[];
}) => {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-y-8 lg:grid-cols-4 2xl:gap-x-6 2xl:gap-y-10">
      {productsArray.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
