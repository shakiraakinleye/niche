"use client";

import { PaginatedShopList } from "@/client/components/organisms/shops/paginated-shop-list";
import { shops } from "@/client/data/sample";

export default function Shops() {
  const shopsArray = Object.values(shops);
  return (
    <section className="w-full bg-white py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40">
      <div className="w-full max-w-screen-xl space-y-6 px-6 md:space-y-8 xl:mx-auto xl:px-12 2xl:space-y-10 2xl:px-16">
        <h1 className="2xl:3xxl font-display text-base font-medium uppercase leading-6 tracking-tight015 text-black md:text-2xl md:leading-8 2xl:leading-10 2xl:tracking-tight">
          Shops
        </h1>

        <PaginatedShopList itemsPerPage={9} shopsArray={shopsArray} />
      </div>
    </section>
  );
}
