// "use client";
// import { useContext } from "react";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { OrderList } from "@/client/components/molecules/dashboard/order/order-list";
import { SellerDashboard } from "@/client/components/organisms/dashboard/seller-dashboard";
import {
  dashboardSummary,
  emptyDataMap,
  orderData,
  salesByCategory,
  salesReport,
} from "@/client/data/sample";

// import { ShopContext, ShopContextType } from "@/client/context/shop-context";

export default async function SellerDashboardPage() {
  // const { shop }  = useContext(ShopContext) as ShopContextType;
  const isProfileComplete = true; //fetch this
  const data = isProfileComplete ? dashboardSummary : emptyDataMap;
  const dashboardDataArray = [
    data.get("orders"),
    data.get("sales"),
    data.get("new visitors"),
  ];
  const totalSalesData = data.get("total sales");
  const ordersEntriesArray = Array.from(orderData.entries());
  const recentOrdersArray = ordersEntriesArray.slice(0, 10);
  const recentOrdersMap = new Map(recentOrdersArray);

  return (
    <section className="flex flex-col gap-6 p-2 md:p-4 lg:p-6 2xl:gap-8 2xl:p-10">
      <SellerDashboard
        topBarData={dashboardDataArray}
        totalSalesData={totalSalesData}
        salesByCategory={salesByCategory}
        salesReport={salesReport}
      />
      <div className="flex flex-col rounded-xlg border border-zinc-200 bg-white ">
        <div className="flex justify-between gap-4 px-4 pb-2 pt-4 md:px-8 md:pb-3 md:pt-6 2xl:px-10 2xl:pb-4 2xl:pt-8">
          <span className="font-display text-sm font-semibold leading-6 tracking-tight015 text-black 2xl:text-base">
            Recent Orders
          </span>
          <Link
            href="/dashboard/orders"
            className="flex items-center gap-1 font-default text-xxs font-medium leading-4 text-dark-100 hover:text-primary-100 active:text-primary-100 2xl:gap-2 2xl:text-xs 2xl:leading-5"
          >
            <span className="capitalize">See all transactions</span>
            <ChevronRight className="h-2 w-2 text-inherit 2xl:h-3 2xl:w-3" />
          </Link>
        </div>
        <OrderList orders={recentOrdersMap} />
      </div>
    </section>
  );
}
