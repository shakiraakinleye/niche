import { Quote } from "lucide-react";

import { ReviewType } from "@/client/types/review";

import { ReviewerIcon } from "./reviewer-icon";

export type ReviewCardProps = {
  review: ReviewType;
  iconBgColor: string;
  iconTextColor: string;
};

export const ReviewerCard = ({
  review,
  iconBgColor,
  iconTextColor,
}: ReviewCardProps) => {
  return (
    <div className=" flex items-end justify-between lg:gap-15">
      <div className="hidden h-40 w-40 shrink-0 lg:block xl:h-52 xl:w-52 2xl:h-60 2xl:w-60">
        <ReviewerIcon
          bgColor={iconBgColor}
          textColor={iconTextColor}
          textClassName="text-7xl xl:text-8xl 2xl:text-10xl"
          // fix font size
          reviewerName={review.reviewerName}
        />
      </div>
      <div className="flex w-fit flex-col items-start gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
        <div className="flex h-12 w-9 items-center justify-center gap-1 md:h-16 md:w-12 lg:h-20 lg:w-16 xl:h-24 xl:w-18 2xl:h-30 2xl:w-22">
          <Quote className="rotate-180" />
          <Quote />
        </div>
        <div className="flex flex-col items-start gap-3 lg:gap-4 2xl:gap-5">
          <p className="font-default text-sm leading-5 text-black lg:text-base lg:leading-6 2xl:text-lg ">
            {review.reviewContent}
          </p>
          <p className="font-display text-xs font-bold leading-5 tracking-tight015 text-gray-1700 md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            - {review.reviewerName}
          </p>
        </div>
      </div>
    </div>
  );
};
