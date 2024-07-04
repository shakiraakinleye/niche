"use client";

import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { string, TypeOf } from "zod";

import { cn } from "@/client/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

export type SaerchBoxProps = {
  containerClassName?: string;
  boxClassName?: string;
  placeholder?: string;
};

export const searchInput = string({
  invalid_type_error: "Search keyword can only contain alphanumeric characters",
}).optional();

export type SearchInput = TypeOf<typeof searchInput>;

export const SearchBox = ({
  containerClassName,
  boxClassName,
  placeholder,
}: SaerchBoxProps) => {
  const form = useForm({
    mode: "onChange",
  });

  return (
    <Form {...form}>
      <form className={cn("grow", containerClassName)}>
        <FormField
          control={form.control}
          name="searchInput"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-3xl border-1.5 border-gray-1800 bg-white px-6 py-1.5 focus-within:border-primary-100 2xl:border-2 2xl:px-10 2xl:py-2",
                    boxClassName
                  )}
                >
                  <Search
                    strokeWidth={1.5}
                    className="h-4 w-4 text-gray-1900 2xl:h-4.5 2xl:w-4.5"
                  />

                  <input
                    className="w-full appearance-none border-none p-0 font-default text-xs leading-4 tracking-tight012 text-dark-100 placeholder:text-gray-2000 focus:border-transparent focus:outline-0 focus:ring-0 lg:text-sm lg:leading-6"
                    type="text"
                    placeholder={placeholder ? placeholder : "Type to search"}
                    aria-label="Search"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription className="sr-only">
                Enter keywords for your search
              </FormDescription>
              <FormMessage className="font-default text-xxs leading-3 text-black lg:font-medium" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
