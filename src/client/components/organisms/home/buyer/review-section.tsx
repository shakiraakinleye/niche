"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import { cn } from "@/client/lib/utils";
import { ReviewerCard, ReviewerIcon } from "@/components/molecules/home/review";
import { ReviewType } from "@/types/review";

export type ReviewsProps = {
  reviews: ReviewType[];
};

const colors = [
  {
    bgColor: "bg-lemon-100",
    textColor: "text-lemon-200",
  },
  {
    bgColor: "bg-primary-100/40",
    textColor: "text-primary-100",
  },
  {
    bgColor: "bg-mint-100",
    textColor: "text-mint-200",
  },
];

export const ReviewSection = ({ reviews }: ReviewsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-5 px-4.5 pb-10 pt-20 md:gap-7 md:px-6 lg:gap-10 lg:px-8 xl:gap-12 xl:px-12 2xl:gap-16 2xl:px-16">
      <h2 className="font-display text-2xl font-bold leading-12 tracking-tight015 text-dark-200 md:text-2xxl lg:text-3xl xl:text-4xl 2xl:text-4xxl">
        People love Niche
      </h2>
      <div className="flex flex-col items-start gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-36 xl:gap-40 2xl:gap-45">
        <AnimatePresence>
          {reviews.map((review, reviewIndex) => {
            if (reviewIndex === selectedIndex) {
              return (
                // <motion.div
                //   key={review.reviewerName}
                //   layoutId={`${selectedIndex}`}
                // >
                <ReviewerCard
                  key={review.reviewerName}
                  review={review}
                  iconBgColor={colors[reviewIndex].bgColor}
                  iconTextColor={colors[reviewIndex].textColor}
                />
                // </motion.div>
              );
            }
          })}
        </AnimatePresence>

        <div className="flex items-end gap-4 lg:flex-col lg:self-center">
          {reviews.map((review, reviewIndex) => {
            return (
              <div
                key={review.id}
                className={cn(
                  "h-8 w-8 shrink-0 hover:opacity-80 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-18 xl:w-18 2xl:h-22 2xl:w-22",
                  reviewIndex === selectedIndex &&
                    "xs:h-16 xs:w-16 md:h-20 md:w-20 lg:hidden"
                )}
              >
                <ReviewerIcon
                  reviewerName={review.reviewerName}
                  bgColor={colors[reviewIndex].bgColor}
                  textColor={colors[reviewIndex].textColor}
                  onclick={() => setSelectedIndex(reviewIndex)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// fix animation issue
