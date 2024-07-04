import cx from "classnames";
import { Circle } from "lucide-react";

export const StatusBadge = ({
  fulfilled,
  className,
}: {
  fulfilled: boolean;
  className?: string;
}) => {
  return (
    <p
      className={cx(
        "inline-flex w-fit items-center justify-start gap-x-1 rounded-2xl py-1 pl-2 pr-2 md:pr-3 lg:gap-x-1.5",
        className,
        fulfilled ? "bg-green-100" : "bg-yellow-100"
      )}
    >
      <Circle
        className={cx(
          "h-2 w-2",
          fulfilled
            ? "fill-green-500 text-green-500"
            : "fill-yellow-400 text-yellow-400"
        )}
      />
      <span
        className={cx(
          "text-xxs font-medium capitalize leading-5 2xl:text-xs",
          fulfilled ? "text-green-900" : "text-yellow-900"
        )}
      >
        {fulfilled ? "completed" : "pending"}
      </span>
    </p>
  );
};
