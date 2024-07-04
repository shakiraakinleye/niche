import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";

import { ShopType } from "@/client/types/shop";

import { ShopsListCard } from "../../molecules/shop/shop-card";

type PaginatedShopListProps = {
  itemsPerPage: number;
  shopsArray: ShopType[];
};

export const PaginatedShopList = ({
  itemsPerPage,
  shopsArray,
}: PaginatedShopListProps) => {
  const pageCount = Math.ceil(shopsArray.length / itemsPerPage);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = shopsArray.slice(itemOffset, endOffset);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % shopsArray.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-24 2xl:space-y-30">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-y-8 2xl:gap-x-6 2xl:gap-y-10">
        {currentItems.map((shop) => (
          <li key={shop.id}>
            <ShopsListCard shop={shop} />
          </li>
        ))}
      </ul>

      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 2xl:h-6 2xl:w-6" />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 2xl:h-6 2xl:w-6" />
        }
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2 2xl:gap-3 items-center"
        pageClassName="w-7.5 h-7.5 flex items-center justify-center rounded-full font-default text-xs md:text-sm 2xl:text-base text-gray-3800"
        activeClassName="bg-tertiary-300 text-white"
        breakClassName="font-default text-xs md:text-sm 2xl:text-base text-gray-3800"
        nextClassName="text-dark-200"
        previousClassName="text-dark-200"
        disabledClassName="text-gray-2300"
      />
    </div>
  );
};
