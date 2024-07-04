import * as React from "react";

import { FormLabel } from "../molecules/react-hook-form/form";

export type CheckboxInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string | React.ReactNode;
  name: string;
};

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ label, name, ...props }, ref) => {
    return (
      <FormLabel
        // key={label}
        htmlFor={name}
        className="flex w-fit cursor-pointer items-start gap-2"
      >
        <input
          type="checkbox"
          id={name}
          className="mt-0.5 h-4 w-4 cursor-pointer appearance-none rounded-[2px] border border-gray-1300 text-primary-100 outline-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 md:h-4 lg:h-4 xl:h-4 2xl:h-4"
          name={name}
          ref={ref}
          {...props}
        />
        {label}
      </FormLabel>
    );
  }
);
CheckboxInput.displayName = "CheckboxInput";

export { CheckboxInput };
