import { Box } from "lucide-react";

import { CardsIcon } from "../../atoms/icons/cards-icon";

const EmptyPageFrame = ({
  pageDescription,
  children,
}: {
  pageDescription: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-20 lg:pb-16 lg:pt-32 ">
      <div className="mx-auto flex max-w-xs flex-col items-center gap-4 md:max-w-sm lg:max-w-md lg:gap-6">
        {children}
        <p className="text-center font-default text-sm leading-5 tracking-wide text-gray-2300 2xl:text-base 2xl:leading-6">
          {pageDescription}
        </p>
      </div>
    </div>
  );
};

export const EmptyProductList = () => {
  return (
    <EmptyPageFrame
      pageDescription='Welcome to your product page! Add your first product by clicking the
          "Add Product" button. Manage all your products from here.
          Happy selling!'
    >
      <Box
        className="h-12 w-12 stroke-gray-2300 md:h-16 md:w-16 lg:h-24 lg:w-24 xl:h-36 xl:w-36"
        strokeWidth="0.25"
      />
    </EmptyPageFrame>
  );
};

export const EmptyOrderList = () => {
  return (
    <EmptyPageFrame
      pageDescription="There are currently no recent orders to display. Recent Order list would
        appear here as soon as you make a sale."
    >
      <Box
        className="h-12 w-12 stroke-gray-2300 md:h-16 md:w-16 lg:h-24 lg:w-24 xl:h-36 xl:w-36"
        strokeWidth="0.25"
      />
    </EmptyPageFrame>
  );
};

export const EmptyPayoutList = () => {
  return (
    <EmptyPageFrame
      pageDescription="Welcome to the payouts page! This is where you can view all your payouts
        from the platform. Currently, there are no payouts available to display.
        Once you receive a payout, it will be listed here for your reference."
    >
      <CardsIcon className="h-18 w-18 md:h-22 md:w-22 lg:h-32 lg:w-32 xl:h-40 xl:w-40" />
    </EmptyPageFrame>
  );
};
