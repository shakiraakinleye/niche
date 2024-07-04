import Link from "next/link";

import { SuccessIcon } from "../../atoms/icons/success-icon";

export type PopupBoxProps = {
  title: string;
  description?: string;
};

export const PopupBox = ({ title, description }: PopupBoxProps) => {
  return (
    <div className="flex items-center gap-2 bg-white py-2 pb-8 pt-2 md:min-w-[400px] md:rounded-md md:pb-0 md:shadow-popup 2xl:gap-2.5 2xl:p-2.5">
      <Link href="#">
        <SuccessIcon />
      </Link>
      <div className="font-default leading-5 text-black">
        <h4 className="text-sm tracking-tight 2xl:text-base">{title}</h4>
        {description && (
          <p className="text-xxs tracking-tight005 2xl:text-xs">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
