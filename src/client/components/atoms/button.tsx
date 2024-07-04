import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/client/lib/utils";

import Spinner from "./spinner";

const buttonVariants = cva(
  "inline-flex group items-center justify-center font-medium capitalize transition-colors focus-visible:outline-0 focus-visible:ring-0 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-black bg-transparent",
        beigeOutline:
          "border-2 border-beige-400 bg-transparent hover:bg-beige-400",
        primaryFilled:
          "border border-primary-100 bg-primary-100 hover:bg-transparent",
        // for hover bg to work == add lg:hover:bg-transparent
        primaryOutline:
          "border border-primary-100 bg-transparent hover:bg-primary-100",
        secondaryFilled:
          "border border-tertiary-100 bg-tertiary-100 hover:bg-transparent",
        tertiaryFilled:
          "border border-dark-100 bg-dark-100 hover:bg-transparent",
      },
      size: {
        default: "",
        sm: "py-3 px-5",
        smFull: "px-4 py-3 lg:py-5 w-full",
        md: "px-4 py-2 md:px-6 md:py-3 2xl:px-8 2xl:py-4.5",
        lg: "px-5 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5",
        wide: "py-3 px-8 lg:px-10",
      },
      borderRadius: {
        default: "rounded-smd",
        large: "rounded-large",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      borderRadius: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  spinnerColor?: string;
  loadingBgColor?: string;
  loadingText?: string;
  loadingTextClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      borderRadius,
      asChild = false,
      loading = false,
      children,
      spinnerColor,
      loadingBgColor,
      loadingText,
      loadingTextClassName,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type="submit"
        className={cn(
          buttonVariants({ variant, size, borderRadius, className }),
          loading ? `${loadingBgColor || "bg-[#ccc]"}` : ""
        )}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-1">
            <Spinner color={spinnerColor} />
            <span
              className={cn(
                "inline-block normal-case text-slate-500",
                loadingTextClassName
              )}
            >
              {loadingText || "Loading..."}
            </span>
          </div>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export type ImageButtonProps = ButtonProps & {
  buttonClassName?: string;
  children: React.ReactNode;
};

const ImageButton = React.forwardRef<HTMLButtonElement, ImageButtonProps>(
  ({ children, buttonClassName, ...props }, ref) => {
    return (
      <Button
        type="button"
        className={cn(
          "flex w-fit shrink-0 items-center justify-center rounded-xlg",
          buttonClassName
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ImageButton.displayName = "ImageButton";

export { Button, buttonVariants, ImageButton };
