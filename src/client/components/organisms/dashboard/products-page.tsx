"use client";

import { useState, useEffect } from "react";

import { Plus } from "lucide-react";

import { DesktopProductList } from "@/client/components/molecules/dashboard/product/product-list-desktop";
import { ProductType } from "@/client/types/product";

import { Button } from "../../atoms/button";
import { SearchBox } from "../../molecules/common/search-box";
import { AddProduct } from "../../molecules/dashboard/product/add-product";
import { MobileProductList } from "../../molecules/dashboard/product/product-list-mobile";

export const ProductsPageContent = ({
  products,
}: {
  products: Map<any, ProductType>;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setShowAddProductForm(true);
    }
  }, [selectedProduct]);

  return (
    <>
      {showAddProductForm ? (
        <AddProduct
          productData={selectedProduct}
          setShowAddProductForm={setShowAddProductForm}
          setSelectedProduct={setSelectedProduct}
        />
      ) : (
        <>
          <div className="relative my-5 flex items-center justify-center px-3 lg:hidden">
            <h1 className="font-display text-lg font-semibold leading-6 tracking-tight015 text-black">
              Products
            </h1>
            <p className="absolute right-3">
              <Button
                type="button"
                onClick={() => setShowAddProductForm(true)}
                className="text-dark-400 hover:text-primary-100 lg:hidden"
              >
                <Plus className="h-6 w-6 text-inherit" strokeWidth="1.5" />
              </Button>
            </p>
          </div>
          <div className="mb-5 ml-auto hidden w-fit px-4 lg:block 2xl:mb-6">
            <Button
              type="button"
              variant="primaryFilled"
              borderRadius="full"
              onClick={() => setShowAddProductForm(true)}
              className="px-4 py-2 font-default text-xs font-bold leading-4 text-white hover:text-primary-100 2xl:px-8 2xl:py-3 2xl:text-base 2xl:leading-6"
            >
              Add new product
            </Button>
          </div>
          <div className="rounded-xlg pt-4 lg:border lg:border-zinc-200 lg:bg-white xl:pt-6 2xl:pt-10">
            <div className="mb-4 px-3 md:px-0 lg:px-4 2xl:mb-5 2xl:px-5">
              <SearchBox
                placeholder="Search for a product"
                containerClassName="w-full lg:max-w-xs"
              />
            </div>

            {/* filter products through search here and pass results to list */}
            <MobileProductList
              products={products}
              heading="Recently added products"
              setSelectedProduct={setSelectedProduct}
            />
            <DesktopProductList
              products={products}
              setSelectedProduct={setSelectedProduct}
            />
          </div>
        </>
      )}
    </>
  );
};
