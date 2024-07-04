"use client";

import { useState } from "react";

import { FilterList } from "@/client/components/atoms/filter-list";
import { OrderList } from "@/client/components/molecules/dashboard/order/order-list";
import {
  orderStatusFilterOptions,
  dateFilterOptions,
} from "@/client/data/common";
import { ShopOrderDataType } from "@/client/types/order";

export const OrdersPageBody = ({
  orders,
}: {
  orders: Map<number, ShopOrderDataType>;
}) => {
  const initialDateFilterOption = dateFilterOptions[0];
  const initialStatusFilterOption = orderStatusFilterOptions[0];
  const [selectedDateFilter, setSelectedDateFilter] = useState(
    initialDateFilterOption
  );
  const [selectedStatusFilter, setSelectedStatusFilter] = useState(
    initialStatusFilterOption
  );
  // filter the orderData based on the selectedFilters from here then pass down

  return (
    <div className="flex flex-col overflow-hidden rounded-xlg lg:border lg:border-zinc-200 lg:bg-white 2xl:gap-8">
      <div className="flex flex-col items-center justify-between gap-4 bg-transparent px-4 py-4 md:pb-3 md:pt-6 lg:flex-row lg:bg-white 2xl:px-5 2xl:pb-4 2xl:pt-8">
        <span className="font-display text-lg font-bold leading-7 text-black md:text-xl lg:leading-8 2xl:text-2xl">
          Orders
        </span>
        <div className="inline-flex gap-2 self-end">
          <FilterList
            options={dateFilterOptions}
            selectedOption={selectedDateFilter}
            setSelected={setSelectedDateFilter}
          />
          <FilterList
            options={orderStatusFilterOptions}
            selectedOption={selectedStatusFilter}
            setSelected={setSelectedStatusFilter}
          />
        </div>
      </div>
      <OrderList
        orders={orders}
        listClassName="border border-zinc-200 lg:border-none"
      />
    </div>
  );
};
