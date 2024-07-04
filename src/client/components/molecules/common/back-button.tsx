import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { cn } from "@/client/lib/utils";

export type BackButtonProps = {
  title: string;
  href: string;
  linkClassName?: string;
  titleClassName?: string;
};

export const BackButton = ({
  title,
  href,
  linkClassName,
  titleClassName,
}: BackButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex w-fit items-center gap-1 text-gray-2900 hover:text-primary-100",
        linkClassName
      )}
    >
      <ChevronLeft className="h-3 w-3 text-inherit" />
      <span
        className={cn(
          "font-display text-xs font-medium capitalize leading-5 text-inherit",
          titleClassName
        )}
      >
        {title}
      </span>
    </Link>
  );
};
