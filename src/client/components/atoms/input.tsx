import * as React from "react";
import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/client/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputClassName?: string;
};

// ({ className, type, inputClassName, ...props }, ref) => {
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, inputClassName, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-xlg border-none bg-beige-400 px-3 py-2 font-default text-xs text-dark-100 outline-0 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-0 focus:ring-inset focus:ring-primary-100 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5 2xl:h-14",
          inputClassName
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const showPasswordHandler = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <Input
          inputClassName="pr-10"
          placeholder="**********"
          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          ref={ref}
          {...props}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onMouseDown={(e) => {
            e.preventDefault();
            showPasswordHandler();
          }}
        >
          {showPassword ? (
            <Eye className="h-4 w-4 text-gray-1300 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6" />
          ) : (
            <EyeOff className="h-4 w-4 text-gray-1300 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6" />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

const TransparentInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        inputClassName={cn(
          "bg-transparent rounded-smd border border-solid border-gray-2700 placeholder:text-gray-1300/45 focus:border-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TransparentInput.displayName = "TransparentInput";

export { Input, PasswordInput, TransparentInput };
