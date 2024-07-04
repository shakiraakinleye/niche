import Image from "next/image";

import { dateTimeFormatter } from "@/client/lib/utils";
import { OrderDataType } from "@/client/types/order";

import { LinkButton } from "../../atoms/link-button";
import { StatusBadge } from "../../atoms/status-badge";

export const OrderListCard = ({ order }: { order: OrderDataType }) => {
  const { id, date, fulfilled, items } = order;
  const { dayMonthString } = dateTimeFormatter(date);

  return (
    <li className="flex items-start justify-between gap-4 border-b border-b-gray-3900 p-3 font-default text-xs leading-4.5 md:p-4 md:text-sm md:leading-5 2xl:gap-5 2xl:p-5 2xl:text-base 2xl:leading-6">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xlg md:h-20 md:w-20 lg:h-24 lg:w-24">
        <Image
          src={items[0].image}
          alt={items[0].productName}
          className="h-full w-full object-center"
        />
      </div>
      <div className="grow space-y-2 text-gray-1300">
        <p>Order #{id}</p>
        <StatusBadge fulfilled={fulfilled} />
        <p>On {dayMonthString}</p>
      </div>
      <LinkButton
        href={`/account/orders/view-order/${id}`}
        className="justify-self-end p-2 hover:bg-primary-100/20 active:bg-primary-100/20 2xl:p-2.5"
      >
        <span className="text-xxs uppercase text-primary-100 md:text-xs 2xl:text-sm">
          See details
        </span>
      </LinkButton>
    </li>
  );
};
