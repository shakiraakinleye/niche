"use client";

import { useState } from "react";

import { FilterList } from "@/client/components/atoms/filter-list";
import { PayoutList } from "@/client/components/molecules/dashboard/payout-list";
import { dateFilterOptions } from "@/client/data/common";
import { priceFormatter } from "@/client/lib/utils";

import { Button } from "../../atoms/button";

export const PayoutsPageBody = ({
  payouts,
  totalBalance,
}: {
  payouts: any;
  totalBalance: number;
}) => {
  const initialDateFilterOption = dateFilterOptions[0];
  const [selectedDateFilter, setSelectedDateFilter] = useState(
    initialDateFilterOption
  );
  // filter the payoutData based on the selectedFilter from here then pass down

  return (
    <div className="flex flex-col overflow-hidden rounded-xlg lg:border lg:border-zinc-200 lg:bg-white 2xl:gap-8">
      <div className="flex flex-col gap-4 px-4 py-4 md:gap-6 md:pt-6 2xl:gap-10 2xl:px-5 2xl:pt-8">
        <h1 className="self-center font-display text-lg font-bold leading-7 text-black md:text-xl lg:self-start lg:leading-8 2xl:text-2xl">
          Payouts
        </h1>
        <div className="flex items-center justify-between rounded-smd border border-gray-3100 px-3 py-4 2xl:px-4 2xl:py-6">
          <p className="flex flex-col gap-1.5 2xl:gap-2.5">
            <span className="font-default text-xs font-medium leading-5 text-gray-1300 2xl:text-sm">
              Total Balance;
            </span>
            <span className="text black font-default text-2xl font-bold leading-6">
              {priceFormatter(totalBalance, "symbol")}
            </span>
          </p>
          <Button
            type="button"
            variant="secondaryFilled"
            size="md"
            borderRadius="large"
            className="font-default text-xs font-bold leading-5 text-white hover:text-tertiary-100 md:text-sm 2xl:text-base 2xl:leading-6"
            // onClick={() => withdraw }
          >
            Withdraw
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 bg-transparent px-4 py-4 lg:flex-row lg:bg-white 2xl:px-5">
        <span className="font-display text-sm font-semibold leading-6 tracking-tight015 text-black 2xl:text-base">
          All Payouts
        </span>
        <FilterList
          options={dateFilterOptions}
          selectedOption={selectedDateFilter}
          setSelected={setSelectedDateFilter}
        />
      </div>
      <PayoutList
        payouts={payouts}
        listClassName="border border-zinc-200 lg:border-none"
      />
    </div>
  );
};
