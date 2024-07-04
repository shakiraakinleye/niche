import { useState } from "react";

import { ChevronLeft, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/client/components/atoms/button";
import { StatusBadge } from "@/client/components/atoms/status-badge";
import { dateTimeFormatter, priceFormatter } from "@/client/lib/utils";
import { ShopOrderDataType, OrderItem } from "@/client/types/order";

export const OrderItemCard = ({ item }: { item: OrderItem }) => {
  const { image, productName, variants, quantity, price } = item;

  return (
    <li className="grid grid-cols-6 items-start justify-between gap-3 py-1 font-default 2xl:gap-5">
      <Image
        src={image}
        alt={productName}
        className="col-span-1 h-12 w-12 shrink-0 rounded-xlg md:h-16 md:w-16 lg:h-20 lg:w-20 2xl:h-30 2xl:w-30"
      />
      <p className="col-span-3 flex grow flex-col gap-2 2xl:gap-2.5">
        <span className="text-xs font-medium leading-5 text-dark-600 2xl:text-sm 2xl:leading-6">
          {productName}
        </span>
        {variants &&
          variants.map((variant) => {
            return (
              <span
                key={variant.title}
                className="text-xs capitalize leading-5 text-gray-1300  2xl:text-sm 2xl:leading-6"
              >
                {variant.title} : {variant.value}
              </span>
            );
          })}
      </p>
      <p className="col-span-1 text-xs leading-4 text-black 2xl:text-sm 2xl:leading-5">
        {quantity}
      </p>
      <p className="col-span-1 justify-self-end text-xs leading-4 text-black 2xl:text-sm 2xl:leading-5">
        {priceFormatter(price * quantity, "", "symbol")}
      </p>
    </li>
  );
};

export const OrderDisplayCard = ({
  order,
  onClose,
}: {
  order: ShopOrderDataType | undefined;
  onClose: () => void;
}) => {
  if (order === undefined) return <Link href="#"></Link>;

  const { id, date, customer, items, fulfilled } = order;
  const { dayMonthString, year, timeString } = dateTimeFormatter(date);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [orderIsFulfilled, setOrderIsFulfilled] = useState(fulfilled);
  // order.fulfilled = orderIsFulfilled;
  // update order with fulfilled status
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex max-h-[80%] w-full flex-col gap-4 overflow-scroll rounded-xlg bg-white p-4 scrollbar-hide md:max-w-lg md:border md:border-gray-2400 md:bg-beige-400 lg:max-w-xl 2xl:max-w-3xl 2xl:gap-6 2xl:p-6">
      <div className="flex flex-col gap-2">
        <Button type="button" onClick={onClose} className="-ml-1 self-start">
          <ChevronLeft className="h-5 w-5 stroke-gray-2600" />
          <span className="font-default text-sm font-medium leading-5 text-gray-2600 2xl:text-base">
            Orders
          </span>
        </Button>

        <div className="flex items-start justify-between md:items-center">
          <div className="md:divide flex flex-col items-start gap-2 md:flex-row md:items-center md:divide-x md:divide-gray-2600 2xl:gap-3">
            <p className="flex items-center gap-2 2xl:gap-3">
              <h2>Order #{id}</h2>
              <StatusBadge fulfilled={orderIsFulfilled} />
            </p>
            <p className="flex items-center gap-2 md:pl-2 2xl:gap-3 2xl:pl-3">
              <CalendarDays className="h-5 w-5 stroke-gray-2600" />
              <p className="font-default text-xs leading-4 text-black 2xl:text-sm 2xl:leading-6">
                <span>
                  {dayMonthString}, {year}
                </span>{" "}
                at <span>{timeString}</span>
              </p>
            </p>
          </div>

          <Button
            type="button"
            variant="primaryFilled"
            size="sm"
            onClick={() => setOrderIsFulfilled(true)}
            className="hover:bg-primary-100 md:hover:bg-transparent"
            disabled={orderIsFulfilled}
          >
            <span className="font-default text-xs font-medium leading-4 leading-5 text-white md:group-hover:text-primary-100 2xl:text-sm">
              Fulfill
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 2xl:gap-6">
        <div className="overflow-hidden rounded-xlg bg-beige-400 p-3 shadow-2md shadow-zinc-200/25 md:bg-white">
          <ul className="flex flex-col gap-2 py-2 2xl:gap-4">
            {items.map((item) => {
              return <OrderItemCard key={item.productName} item={item} />;
            })}
          </ul>

          <p className="flex items-center justify-between border-t border-t-gray-2400 pt-3 text-sm font-medium leading-4 text-black 2xl:pt-5 2xl:text-md 2xl:leading-5">
            <span>
              Subtotal ({totalQuantity} item{totalQuantity > 1 && "s"})
            </span>
            <span>{priceFormatter(totalPrice, "", "symbol")}</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-xlg bg-beige-400 p-3 text-gray-1300 shadow-2md shadow-zinc-200/25 md:bg-white 2xl:gap-4 ">
          <p className="0 flex flex-col gap-2 font-default text-sm font-medium leading-5 2xl:gap-3 2xl:text-md 2xl:leading-6">
            <span className="text-black">Customer</span>
            <span>{customer.name}</span>
          </p>

          <p className="0 flex flex-col gap-2 font-default text-sm font-medium leading-5 2xl:gap-3 2xl:text-md 2xl:leading-6">
            <span className="text-black">Shipping Address</span>
            <span>
              {customer.address.street}, {customer.address.lga},{" "}
              {customer.address.state}
            </span>
          </p>

          <p className="flex flex-col text-sm 2xl:text-md">
            <span>{customer.email}</span>
            <span>{customer.phoneNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
