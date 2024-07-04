"use client";

import { useState } from "react";

import {
  dateFilterOptions,
  salesReportFilterOptions,
} from "@/client/data/common";

import { FilterList } from "../../atoms/filter-list";
import { DashboardCard } from "../../molecules/dashboard/dashboard-card";
import {
  SalesReportChart,
  SalesByCategoriesChart,
} from "../../molecules/dashboard/dashboard-charts";

export const SellerDashboard = ({
  topBarData,
  totalSalesData,
  salesByCategory,
  salesReport,
}: any) => {
  const initialDateFilterOption = dateFilterOptions[0];
  const initialSalesFilterOption = salesReportFilterOptions[0];

  const [topNavFilter, setTopNavFilter] = useState(initialDateFilterOption);
  const [salesReportFilter, setSalesReportFilter] = useState(
    initialSalesFilterOption
  );
  // filter the data based on the selected filters from here then pass down

  return (
    <div className="flex flex-col gap-4 xl:gap-6">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-7 xl:gap-6 2xl:gap-8">
        <div className="col-span-5 flex flex-col gap-2 xl:gap-3">
          <div className="self-end">
            <FilterList
              options={dateFilterOptions}
              selectedOption={topNavFilter}
              setSelected={setTopNavFilter}
            />
          </div>

          <div className="flex flex-col gap-1.5 lg:grid lg:grid-cols-3 xl:gap-3 2xl:gap-4">
            {topBarData.map((data: any) => {
              return <DashboardCard key={data.title} cardData={data} />;
            })}
          </div>
        </div>
        <div className="col-span-2">
          <DashboardCard
            priceClassName="text-xl 2xl:text-2xl"
            cardData={totalSalesData}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-7 xl:gap-6 2xl:gap-8">
        <div className="col-span-5 flex flex-col gap-2 overflow-hidden rounded-xlg border border-zinc-200 bg-white xl:gap-3">
          <SalesReportChart
            data={salesReport}
            filterOptions={salesReportFilterOptions}
            initialSelectedOption={initialSalesFilterOption}
            selectedOption={salesReportFilter}
            setSelected={setSalesReportFilter}
          />
        </div>
        <div className="col-span-2 overflow-hidden rounded-xlg border border-zinc-200 bg-white">
          <SalesByCategoriesChart data={salesByCategory} />
        </div>
      </div>
    </div>
  );
};

// todo - update types
