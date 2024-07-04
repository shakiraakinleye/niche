import useWindowSize from "@/client/lib/hooks/use-window-size";
import { priceFormatter, dateTimeFormatter } from "@/client/lib/utils";
import { cn } from "@/client/lib/utils";

import { EmptyPayoutList } from "./empty-lists";
import { LinkButton } from "../../atoms/link-button";
import { StatusBadge } from "../../atoms/status-badge";

export type PayoutData = {
  id: number;
  date: string;
  fulfilled: boolean;
  price: number;
};

export const PayoutCard = ({ payout }: { payout: PayoutData }) => {
  const { isDesktop } = useWindowSize();
  const { date, fulfilled, price } = payout;

  const { dayMonthString, year } = dateTimeFormatter(date);

  return (
    <li className="grid grid-cols-4 items-center justify-between gap-2 px-2 font-default text-xs capitalize leading-6 text-gray-1300 md:px-4 md:text-sm lg:gap-8 xl:gap-12 2xl:px-5 2xl:text-base">
      <p>
        {dayMonthString}, {year}
      </p>
      <p>{priceFormatter(price, "symbol")}</p>
      <StatusBadge fulfilled={fulfilled} />
      <LinkButton
        href="#"
        variant={isDesktop ? "beigeOutline" : "default"}
        className="w-fit font-default text-xxs font-medium leading-4 text-tertiary-200 hover:text-tertiary-100 lg:px-4 lg:py-2 2xl:px-6 2xl:py-3 2xl:text-xs"
      >
        View details
      </LinkButton>
      {/* replace href with a slug that incorporates the payout id */}
    </li>
  );
};

export const PayoutList = ({
  payouts,
  listClassName,
}: {
  payouts: PayoutData[];
  listClassName?: string;
}) => {
  const listIsEmpty = payouts.length <= 0;

  return listIsEmpty ? (
    <EmptyPayoutList />
  ) : (
    <ul
      className={cn(
        "flex flex-col gap-6 rounded-xlg bg-white px-4 pb-6 pt-2 md:pb-10 md:pt-3 lg:rounded-none xl:gap-8 2xl:gap-10 2xl:px-5 2xl:pb-12 2xl:pt-4",
        listClassName
      )}
    >
      <li className="grid grid-cols-4 justify-between gap-2 px-2 font-default text-xs font-medium capitalize leading-6 text-black md:px-4 md:text-sm lg:gap-8 lg:rounded-smd lg:bg-beige-400 lg:py-3 xl:gap-12 2xl:px-5 2xl:text-base">
        <span>Date</span>
        <span>Amount</span>
        <span>Status</span>
        <span className="sr-only">Details Links</span>
      </li>
      {payouts.map((payout: PayoutData) => {
        return <PayoutCard key={`payout-${payout.id}`} payout={payout} />;
      })}
    </ul>
  );
};
