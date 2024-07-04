"use client";

import React, { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/client/lib/utils";

const linkVariants = cva(
  "flex relative group overflow-hidden items-center justify-center transition-colors focus-visible:outline-0 focus-visible:ring-0 disabled:opacity-50 disabled:pointer-events-none ring-offset-background font-default font-medium capitalize border-1.5 shrink-0",
  {
    variants: {
      variant: {
        default: "border-none",
        beigeOutline:
          "border-2 border-beige-400 bg-transparent hover:bg-beige-400",
        beigeFilled:
          "border-2 border-beige-400 bg-beige-400 hover:bg-transparent",
        primaryOutline:
          "border-primary-100 bg-transparent hover:bg-primary-100",
        // for hover bg to work == add lg:hover:bg-transparent
        primaryFilled: "border-primary-100 bg-primary-100 hover:bg-transparent",
        secondaryOutline:
          "border-tertiary-100 bg-transparent hover:bg-tertiary-100",
        secondaryFilled:
          "border-tertiary-100 bg-tertiary-100 hover:bg-transparent",
        primaryMobileFilledLgOutline:
          "border-primary-100 bg-primary-100 hover:bg-transparent lg:bg-transparent lg:hover:bg-primary-100",
        secondaryMobileFilledLgOutline:
          "border-tertiary-100 bg-tertiary-100 hover:bg-transparent lg:bg-transparent lg:hover:bg-tertiary-100",
      },
      size: {
        default: "",
        md: "px-3 py-2 md:py-3 md:px-4 xl:px-5",
        wide: "px-3 lg:px-4 xl:px-5",
        lg: "px-5 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5",
        wider: "px-10",
      },
      borderRadius: {
        default: "rounded-smd",
        large: "rounded-large",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      borderRadius: "default",
    },
  }
);

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> & {
    href: string;
    className?: string;
    children: ReactNode;
  };

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { href, className, size, variant, borderRadius, children, ...props },
    ref
  ) => {
    return (
      <Link
        href={href}
        ref={ref}
        // className={linkVariants({ variant, size, borderRadius, className })}
        className={cn(linkVariants({ variant, size, borderRadius }), className)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
LinkButton.displayName = "LinkButton";

// export const HoverBgAnimation = ({ bgColor }: { bgColor: string }) => {
//   return (
//     <span
//       className={cx(
//         "absolute inset-0 z-0 hidden w-0 rounded-full transition-all duration-500 group-hover:w-full group-active:w-full lg:inline-block",
//         bgColor,
//       )}
//     />
//   );
// };

export { LinkButton, linkVariants };
