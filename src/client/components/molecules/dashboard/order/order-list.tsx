"use client";

import { useState } from "react";

import { priceFormatter, dateTimeFormatter } from "@/client/lib/utils";
import { cn } from "@/client/lib/utils";
import { ShopOrderDataType } from "@/client/types/order";

import { OrderDisplayCard } from "./order-display-card";
import { StatusBadge } from "../../../atoms/status-badge";
import { useDemoModal } from "../../common/demo-modal";
import { EmptyOrderList } from "../empty-lists";

export const OrderListCard = ({
  order,
  onClick,
}: {
  order: ShopOrderDataType;
  onClick?: () => void;
}) => {
  const { id, date, customer, items, fulfilled } = order;
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const paddedId = id.toString().padStart(5, "0");
  const { dayMonthString, year } = dateTimeFormatter(date);

  return (
    <>
      <li
        className="grid cursor-pointer grid-cols-7 items-start justify-between gap-2 border-b border-b-zinc-200 px-2 py-2 font-default text-xs capitalize leading-6 text-gray-1300 md:px-4 md:text-sm lg:hidden"
        onClick={onClick}
      >
        <p className="col-span-2 flex flex-col">
          <span className="line-clamp-1">{customer.name}</span>
          <span className="line-clmap-1">
            {dayMonthString}, {year}
          </span>
        </p>
        <p>{totalQuantity}</p>
        <p className="col-span-2">{priceFormatter(totalPrice, "symbol")}</p>
        <StatusBadge fulfilled={fulfilled} className=" col-span-2" />
      </li>

      <li
        className="hidden cursor-pointer grid-cols-6 items-center justify-between gap-8 rounded-smd px-4 py-2 font-default text-sm capitalize leading-6 text-gray-1300 hover:bg-beige-400 lg:grid xl:gap-12 2xl:px-5 2xl:py-2.5 2xl:text-base"
        onClick={onClick}
      >
        <p>{paddedId}</p>
        <p>
          {dayMonthString}, {year}
        </p>
        <p className="line-clamp-1">{customer.name}</p>
        <p>{totalQuantity}</p>
        <p>{priceFormatter(totalPrice, "symbol")}</p>
        <StatusBadge fulfilled={fulfilled} />
      </li>
    </>
  );
};

export const OrderList = ({
  orders,
  listClassName,
}: {
  orders: Map<any, ShopOrderDataType>;
  listClassName?: string;
}) => {
  const [selectedOrder, setSelectedOrder] = useState<any>(0);
  const orderMap = new Map(orders);
  const ordersArray = Array.from(orderMap.values());
  const listIsEmpty = ordersArray.length <= 0;
  const orderToDisplay = orderMap.get(selectedOrder);
  const { setShowDemoModal, DemoModal } = useDemoModal(
    <OrderDisplayCard
      order={orderToDisplay}
      onClose={() => setShowDemoModal(false)}
    />
  );

  const orderDisplayHandler = (id: number) => {
    setSelectedOrder(id);
    setShowDemoModal(true);
  };

  return listIsEmpty ? (
    <EmptyOrderList />
  ) : (
    <>
      <ul
        className={cn(
          "flex flex-col gap-2 rounded-xlg bg-white px-4 pb-6 pt-2 md:pb-10 md:pt-3 xl:gap-4 2xl:gap-5 2xl:px-5 2xl:pb-12 2xl:pt-4",
          listClassName
        )}
      >
        <li className="grid grid-cols-7 items-start justify-between gap-2 border-b border-b-zinc-200 px-2 py-1 font-default text-xs font-medium capitalize leading-6 text-black md:px-4 md:text-sm lg:grid-cols-6 lg:items-center lg:gap-8 lg:rounded-smd lg:border-none lg:bg-beige-400 lg:py-3 xl:gap-12 2xl:px-5 2xl:text-base">
          <span className="hidden lg:inline-block">Order ID</span>
          <span className="col-span-2 flex flex-wrap lg:col-span-1">
            <span className="lg:hidden">Customer/</span>
            <span>Date</span>
          </span>
          <span className="hidden lg:inline-block">Customer</span>
          <span className="col-span-1">Items</span>
          <span className="col-span-2 lg:col-span-1">Amount</span>
          <span className="col-span-2 lg:col-span-1">Fulfillment</span>
        </li>
        {ordersArray.map((order: any) => {
          return (
            <OrderListCard
              key={`order-${order.id}`}
              order={order}
              onClick={() => orderDisplayHandler(order.id)}
            />
          );
        })}
      </ul>
      <DemoModal />
    </>
  );
};

// todo
// calculate totalprice or get totalprice from data???
// delivery fee is not include in current order data
