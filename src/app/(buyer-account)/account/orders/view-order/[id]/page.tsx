"use client";

import { usePathname } from "next/navigation";

import { OrderView } from "@/client/components/organisms/account/order-view";
import { buyerOrders } from "@/client/data/sample";
import { OrderDataType } from "@/client/types/order";

export default function ViewOrderPage() {
  const path = usePathname();
  const id = path.split("/").pop();
  if (id) {
    const order = buyerOrders[id] as OrderDataType;
    return <OrderView order={order} />;
  } else {
    return <div>Order not found</div>;
  }
}
// fix - fetch order
