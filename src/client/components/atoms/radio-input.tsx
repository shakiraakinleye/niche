import * as React from "react";

export type RadioOptionType = {
  title: string;
  description?: string;
};

export type RadioInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  option: RadioOptionType;
  name: string;
};

const RadioInput = React.forwardRef<HTMLInputElement, RadioInputProps>(
  ({ option, name, ...props }, ref) => {
    return (
      <div className="flex w-fit cursor-pointer items-start gap-2">
        <input
          type="radio"
          id={option.title}
          className="mt-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-1300 text-primary-100 outline-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 md:h-4 lg:h-4 xl:h-4 2xl:h-4"
          name={name}
          value={option.title}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={option.title}
          className="flex flex-col justify-start gap-0.5 font-default text-xs leading-5 text-gray-1300 md:text-sm 2xl:text-base 2xl:leading-6 "
        >
          <span>{option.title}</span>
          <span>{option.description}</span>
        </label>
      </div>
    );
  }
);
RadioInput.displayName = "RadioInput";

export { RadioInput };
