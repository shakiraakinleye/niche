"use client";

import { useState } from "react";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

import { FilterList } from "@/client/components/atoms/filter-list";
import { PaginatedProductList } from "@/client/components/organisms/products/paginated-product-list";
import { shopProductSortOptions } from "@/client/data/common";
import { productMap } from "@/client/data/sample";

export default function ProductCategoryPage() {
  const pathname = usePathname();
  const pathArray = pathname.slice(10).split("/");
  const category = pathArray[0]?.split("-").join(" ");
  const subCategory = pathArray[1]?.split("-").join(", ");

  // get products based on page category/subCategory
  const productsArray = Array.from(productMap.values());
  const [sortOption, setSortOption] = useState<string | undefined>();

  return (
    <section className="w-full bg-white py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40">
      <div className="w-full max-w-screen-xl space-y-6 px-6 md:space-y-8 xl:mx-auto xl:px-12 2xl:space-y-10 2xl:px-16">
        <div className="flex items-center gap-1 font-display font-medium tracking-tight015 text-black 2xl:tracking-tight">
          <h1 className="2xl:3xxl text-base uppercase leading-6 md:text-2xl md:leading-8 2xl:leading-10">
            {category}
          </h1>
          {subCategory && (
            <>
              <ChevronRight className="h-4 w-4 text-inherit md:h-5 md:w-5" />
              <h2 className="text-sm capitalize leading-5 md:text-md md:leading-7 2xl:text-base 2xl:leading-10">
                {subCategory}
              </h2>
            </>
          )}
        </div>

        <FilterList
          buttonClassName="border-none hover:bg-transparent shadow-none"
          placeholderText="Sort by"
          options={shopProductSortOptions}
          selectedOption={sortOption}
          setSelected={setSortOption}
        />

        <PaginatedProductList itemsPerPage={12} productsArray={productsArray} />
      </div>
    </section>
  );
}
