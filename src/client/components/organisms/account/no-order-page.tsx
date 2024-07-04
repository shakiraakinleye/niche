import { Box } from "lucide-react";

import { LinkButton } from "../../atoms/link-button";

export const NoOrderPage = () => {
  return (
    <div className="py-15 lg:pb-15 lg:pt-10">
      <div className="mx-auto flex max-w-xs flex-col items-center gap-4 md:max-w-sm lg:max-w-md">
        <Box
          className=" h-28 w-28 stroke-gray-2300 lg:h-24 lg:w-24 xl:h-36 xl:w-36"
          strokeWidth="0.25"
        />
        <div className="flex flex-col gap-4 text-center font-default tracking-tight text-dark-600">
          <h3 className="text-xs font-medium leading-4.5 2xl:text-sm 2xl:leading-5">
            YOU CURRENTLY HAVE NO ORDER
          </h3>
          <p className="text-xxs leading-4 2xl:text-xs 2xl:leading-4.5">
            Buy something already guyman
          </p>
        </div>
        <LinkButton href="/products/women" variant="primaryFilled" size="md">
          <span className="font-default text-xs font-medium text-white group-hover:text-primary-100 2xl:text-sm ">
            Start Shopping
          </span>
        </LinkButton>
      </div>
    </div>
  );
};
