"use client";

import { StatusBadge } from "@/client/components/atoms/status-badge";
import { BackButton } from "@/client/components/molecules/common/back-button";
import { OrderItemCard } from "@/client/components/molecules/dashboard/order/order-display-card";
import { dateTimeFormatter, priceFormatter } from "@/client/lib/utils";
import { OrderDataType, OrderItem } from "@/client/types/order";

type OrderDetailsProps = {
  title: string;
  children?: string | React.ReactNode;
};

const OrderDetails = ({ title, children }: OrderDetailsProps) => {
  return (
    <div className="flex w-full max-w-[4/5] flex-col gap-1 px-4 py-2 font-default text-sm leading-5 2xl:px-5 2xl:py-2.5 2xl:text-base 2xl:leading-6">
      <h4 className="capitalize text-black">{title}</h4>
      <div className="capitalize text-gray-2900">{children}</div>
    </div>
  );
};

export const OrderView = ({ order }: { order: OrderDataType }) => {
  const { id, items, date, paymentInformation, shippingInformation } = order;

  const { day, month, year } = dateTimeFormatter(date);
  const { dayMonthString: shippedDate } = dateTimeFormatter(
    shippingInformation.shippingDates.shipped
  );
  const { dayMonthString: deliveryDate } =
    shippingInformation.shippingDates.delivered !== undefined
      ? dateTimeFormatter(shippingInformation.shippingDates.delivered)
      : dateTimeFormatter(shippingInformation.shippingDates.projectedDelivery);

  const orderTotal = priceFormatter(
    paymentInformation["total order price"],
    "symbol"
  );
  const paymentInformationArray = Array.from(
    Object.entries(paymentInformation)
  );
  const shippingAddressArray = Array.from(
    Object.values(shippingInformation.address)
  );

  return (
    <div className="bg-white pb-8 md:pb-12 2xl:pb-16">
      <div className="border-b border-b-gray-3900 px-4 py-6 md:px-6 2xl:pt-8">
        <BackButton title="Orders" href="/account/orders" />
      </div>

      <div className="lg-px-5 px-4 2xl:px-6">
        <p className="flex flex-col gap-y-1 border-b border-b-gray-3900 py-4 font-default text-xs leading-5 text-black lg:text-sm 2xl:py-6">
          <span>Order #{id}</span>
          <span>
            {items.length} item{items.length > 1 && "s"}
          </span>
          <span>Placed on {`${day}-${month}-${year}`}</span>
          <span>Total: {orderTotal}</span>
        </p>

        <ul className="flex flex-col gap-2 py-4 2xl:gap-3 2xl:py-6">
          {items.map((item: OrderItem, index) => {
            return <OrderItemCard key={index} item={item} />;
          })}
        </ul>

        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:gap-6 2xl:gap-8">
          <div className="rounded-smd border-2 border-gray-3900">
            <h3 className="2xl:base border-b border-b-gray-3900 px-4 pb-3 pt-4 font-display text-sm font-medium text-black 2xl:px-5 2xl:pb-4 2xl:pt-5">
              Payment Information
            </h3>
            {paymentInformationArray && paymentInformationArray.length > 0 && (
              <OrderDetails title="Payment Details">
                <ul className="space-y-1">
                  {paymentInformationArray.map((paymentItem) => {
                    return (
                      <li key={paymentItem[0]}>
                        {paymentItem[0]}:{" "}
                        {priceFormatter(paymentItem[1], "symbol")}
                      </li>
                    );
                  })}
                </ul>
              </OrderDetails>
            )}

            {orderTotal && (
              <OrderDetails title="Total">{orderTotal}</OrderDetails>
            )}
          </div>

          <div className="rounded-smd border-2 border-gray-3900">
            <h3 className="2xl:base border-b border-b-gray-3900 px-4 pb-3 pt-4 font-display text-sm font-medium text-black 2xl:px-5 2xl:pb-4 2xl:pt-5">
              Delivery Information
            </h3>
            {shippingAddressArray && shippingAddressArray.length > 0 && (
              <OrderDetails title="Shipping Address">
                <ul className="space-y-1">
                  {shippingAddressArray.map((addressLine) => {
                    return <li key={addressLine}>{addressLine}</li>;
                  })}
                </ul>
              </OrderDetails>
            )}
            <OrderDetails title="Shipping Details">
              {shippingInformation.delivered !== undefined && (
                <div className="mb-1 flex items-center gap-2">
                  <p>Delivery Status:</p>
                  <StatusBadge fulfilled={shippingInformation.delivered} />
                </div>
              )}

              {shippingInformation.delivered === true &&
                shippingInformation.shippingDates.delivered && (
                  <p className="normal-case">Delivered on {deliveryDate}</p>
                )}

              {shippingInformation.delivered === false &&
                shippingInformation.shippingDates.shipped && (
                  <p className="normal-case">
                    Delivery between {shippedDate} and {deliveryDate}
                  </p>
                )}
            </OrderDetails>
          </div>
        </div>
      </div>
    </div>
  );
};
