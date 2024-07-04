import * as React from "react";

import { cn } from "@/client/lib/utils";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    className?: string;
  };

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "h-20 w-full resize-none rounded-xlg border-none bg-beige-400 px-3 py-2 font-default text-xs leading-4 text-dark-100 scrollbar-hide focus:ring-inset focus:ring-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:opacity-50 md:h-24 md:text-sm md:leading-5 lg:h-28 2xl:h-32",
          className
        )}
        ref={ref}
        {...props}
      ></textarea>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
