import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

import { cn } from "@/client/lib/utils";
import { priceFormatter } from "@/client/lib/utils";

export const DashboardCard = ({
  cardData,
  titleClassName,
  priceClassName,
}: any) => {
  const { title, value, valueDifference, valueIncrease } = cardData;

  return (
    <div className="flex h-full grow flex-col justify-between gap-3 rounded-xlg border border-zinc-200 bg-white p-4 font-default xl:px-6">
      <p
        className={cn(
          "text-xs font-medium uppercase leading-4.5 tracking-wide006 text-zinc-500",
          titleClassName
        )}
      >
        {title}
      </p>
      <div className="flex shrink justify-between">
        <p
          className={cn(
            "text-sm font-bold leading-5 text-zinc-900 2xl:text-xl",
            priceClassName
          )}
        >
          {title === "sales" || title === "total sales"
            ? priceFormatter(value)
            : new Intl.NumberFormat("en-NG").format(value)}
        </p>
        {valueDifference && valueDifference !== 0 ? (
          <p
            className={cn(
              "flex items-center gap-0.5 rounded-2xl px-2 py-0.5 2xl:gap-1 ",
              valueIncrease
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            )}
          >
            {valueIncrease ? (
              <ArrowUpRight className="h-4.5 w-3 text-inherit" />
            ) : (
              <ArrowDownLeft className="h-4.5 w-3 text-inherit" />
            )}
            <span className="text-xxs leading-4">
              {valueIncrease ? "+" : "-"}
              {valueDifference}%
            </span>
          </p>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
// todo - update types
