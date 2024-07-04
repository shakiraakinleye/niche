import { cn } from "@/client/lib/utils";

export type ReviewerIconProps = {
  reviewerName: string;
  bgColor: string;
  textColor: string;
  textClassName?: string;
  bgClassName?: string;
  onclick?: any;
};

export const ReviewerIcon = ({
  reviewerName,
  bgColor,
  textColor,
  textClassName,
  bgClassName,
  onclick,
}: ReviewerIconProps) => {
  const nameArr = reviewerName.split(" ", 2);
  const initials = nameArr.map((n) => {
    return n[0];
  });

  return (
    <button
      className={cn(
        "flex h-full w-full items-center justify-center rounded-smd",
        bgColor,
        bgClassName
      )}
      onClick={onclick}
    >
      <span
        className={cn(
          "text-center font-display text-sm font-bold uppercase leading-5 md:text-lg md:leading-6 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10 2xl:text-4xxl 2xl:leading-14",
          textColor,
          textClassName
        )}
      >
        {initials}
      </span>
    </button>
  );
};
