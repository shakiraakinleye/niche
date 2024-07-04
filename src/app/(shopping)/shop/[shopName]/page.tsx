"use client";

import { useState, useRef } from "react";

import { Copy, CopyCheck } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/client/components/atoms/button";
import {
  FilterList,
  FilterButtons,
} from "@/client/components/atoms/filter-list";
import { Avatar } from "@/client/components/molecules/common/avatar";
import { ResponseBox } from "@/client/components/molecules/common/response-box";
import { Slider } from "@/client/components/molecules/common/slider";
import { PaginatedProductList } from "@/client/components/organisms/products/paginated-product-list";
import { shopProductSortOptions } from "@/client/data/common";
import { productMap, shops } from "@/client/data/sample";
import { copyToClipboard } from "@/client/lib/utils";

const updateUrlWithError = (
  errorMessage: string | undefined,
  pathname: string,
  searchParams: URLSearchParams,
  router: ReturnType<typeof useRouter>
) => {
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  current.delete("error");
  if (errorMessage) {
    current.set("error", errorMessage);
  }

  const path = current.toString();
  const query = path ? `?${path}` : "";
  router.push(`${pathname}${query}`);
};

const subCategories = [
  "all",
  "tops",
  "dresses",
  "acessories",
  "shoes",
  "Gym wear",
  "Underwear",
  "Playsuits",
  "Jumpsuits",
];
// todo - fetch

// export default function ShopFront({productsMap}: {productsMap: Map<any, ProductType>}) {
export default function ShopFront() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const shopname = pathname.split("/").pop() ?? "";

  const textToCopyRef = useRef<HTMLSpanElement | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const initialCategoryOption = subCategories[0];
  const [categoryFilter, setCategoryFilter] = useState(initialCategoryOption);
  const [sortOption, setSortOption] = useState<string | undefined>();

  const copyLinkHandler = () => {
    if (textToCopyRef.current?.textContent) {
      const result = copyToClipboard(textToCopyRef.current.textContent);
      result.then(
        () => {
          setLinkCopied(true);
          setTimeout(() => setLinkCopied(false), 5000);
        },
        (error) => {
          updateUrlWithError(error?.message, pathname, searchParams, router);
        }
      );
    }
  };

  const shopProfile = shops[shopname];
  if (shopProfile === undefined) {
    updateUrlWithError("Shop not found", pathname, searchParams, router);
  }
  const productsArray = Array.from(productMap.values());
  // get the products that are linked to shop

  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-32 xl:py-36 2xl:py-40">
      <div className="w-full max-w-screen-xl space-y-10 px-6 md:space-y-16 xl:mx-auto xl:px-12 2xl:space-y-20 2xl:px-16">
        {searchParams?.get("error") && (
          <div className="self-start">
            <ResponseBox
              responseTitle="An error has occurred"
              responseDescription={searchParams?.get("error")}
              type="error"
            />
          </div>
        )}

        {shopProfile && (
          <>
            <div className="flex gap-4 py-4 md:max-w-xl md:gap-6 lg:max-w-2xl lg:gap-8 2xl:gap-10">
              <Avatar
                src={shopProfile.image}
                alt={shopProfile.shopName}
                avatarClassName="w-20 h-20 md:w-32 md:h-32 lg:h-36 lg:w-36 2xl:w-40 2xl:h-40"
              />
              <div className="flex flex-col gap-3">
                <h1 className="font-display text-lg font-semibold capitalize leading-5 tracking-tight text-dark-100 md:text-xl md:leading-7 2xl:text-2xl 2xl:leading-8">
                  {shopProfile.shopName}
                </h1>

                <p className="font-default text-sm leading-5 text-gray-1300 2xl:text-base 2xl:leading-6">
                  {shopProfile.aboutShop}
                </p>

                <div className="flex w-fit items-center overflow-hidden rounded-2xxl">
                  <p className="flex items-center bg-beige-400 px-2 py-2 md:px-3 2xl:px-6">
                    <span
                      ref={textToCopyRef}
                      className="line-clamp-1 break-all font-default text-xxs leading-4 text-gray-1300 2xl:text-xs 2xl:leading-4.5"
                    >
                      niche.com/shop/{shopProfile.shopName.toLowerCase()}
                    </span>
                  </p>

                  <Button
                    type="button"
                    borderRadius="none"
                    className="inline-flex shrink-0 gap-1 self-stretch bg-dark-100 px-3 py-2 lg:px-5 2xl:gap-2"
                    onClick={() => copyLinkHandler()}
                  >
                    <span className="font-default text-xxs text-beige-400 2xl:text-xs">
                      {linkCopied ? "Copied" : "Copy URL"}
                    </span>
                    {linkCopied ? (
                      <CopyCheck className="h-4 w-4 stroke-beige-400 2xl:h-5 2xl:w-5" />
                    ) : (
                      <Copy className="h-4 w-4 stroke-beige-400 2xl:h-5 2xl:w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 2xl:gap-6">
              <div className="mx-auto max-w-full overflow-x-hidden">
                <Slider showSlideButtons={false}>
                  <FilterButtons
                    listClassName="gap-x-4 gap-y-2 lg:gap-8 2xl:gap-10 flex-nowrap "
                    buttonClassName="border-none bg-beige-400 hover:bg-gray-200 px-3 py-2 2xl:py-2.5 md:px-4 2xl:px-7 text-gray-1300 text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base leading-5 2xl:leading-6 rounded-full"
                    activeButtonClassName="bg-primary-100 hover:bg-primary-100 text-white"
                    options={subCategories}
                    selectedOption={categoryFilter}
                    setSelected={setCategoryFilter}
                  />
                </Slider>
              </div>
              <FilterList
                buttonClassName="border-none hover:bg-transparent shadow-none"
                placeholderText="Sort by"
                options={shopProductSortOptions}
                selectedOption={sortOption}
                setSelected={setSortOption}
              />
              <PaginatedProductList
                itemsPerPage={12}
                productsArray={productsArray}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
