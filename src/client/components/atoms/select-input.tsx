"use client";

import { useState, useEffect } from "react";

import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

import { cn } from "@/client/lib/utils";

export type SelectBoxProps = {
  options?: string[];
  groupedOptions?: { title: string; subOptions: string[] }[];
  props: any;
  placeholderText?: string;
  triggerClassName?: string;
};

export type SelectListItemProps = {
  children: any;
  optionValue: string;
  className?: string;
};

const SelectItem = ({
  className,
  optionValue,
  children,
}: SelectListItemProps) => {
  return (
    <Select.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-6 font-default text-xxs capitalize text-dark-100 data-[disabled]:pointer-events-none data-[disabled]:text-gray-2600 data-[highlighted]:text-tertiary-100 data-[highlighted]:outline-none lg:text-xs",
        className
      )}
      value={optionValue}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-4 items-center justify-center">
        <Check className="h-4 w-4 stroke-tertiary-100" />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export const SelectInput = ({
  options,
  groupedOptions,
  placeholderText,
  props,
  triggerClassName,
}: SelectBoxProps) => {
  const { onChange, name, value } = props;
  const [selectedValue, setSelectedValue] = useState<undefined | string>(value);
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);
  // Had to use this hook since the value was not updating after mount
  // todo - Remove once all forms' default values are supplied by form defaultValue

  const changeHandler = (val: string) => {
    setSelectedValue(val);
    onChange(val);
  };

  return (
    <Select.Root
      value={selectedValue}
      name={name}
      onValueChange={(value) => changeHandler(value)}
    >
      <>
        <Select.Trigger
          className={cn(
            "flex h-10 w-full cursor-pointer items-center justify-between gap-4 rounded-xlg border-none bg-beige-400 px-4 font-default text-xs capitalize text-gray-2300 outline-0 scrollbar-hide focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-primary-100 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:opacity-50 lg:text-sm 2xl:h-14 2xl:px-6",
            triggerClassName
          )}
        >
          <Select.Value
            placeholder={
              placeholderText ||
              (options && options[0]) ||
              (groupedOptions && groupedOptions[0]?.title)
            }
          />
          <Select.Icon>
            <ChevronDown className="h-4 w-4 text-inherit" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          position="popper"
          side="bottom"
          className="selectContent z-10 rounded-smd border border-zinc-200 bg-white"
        >
          <Select.ScrollUpButton className="flex h-4 cursor-pointer items-center justify-center bg-white text-dark-100 md:h-6">
            <ChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="flex flex-col gap-3 px-2 py-3">
            {groupedOptions &&
              groupedOptions.map((optionGroup) => (
                <Select.Group
                  key={optionGroup.title}
                  className="flex flex-col gap-2"
                >
                  <Select.Label className="px-4 text-sm leading-6 text-gray-2100 2xl:px-6">
                    {optionGroup.title}
                  </Select.Label>
                  <Select.Separator />
                  {optionGroup.subOptions.map((subOption) => (
                    <SelectItem key={subOption} optionValue={subOption}>
                      {subOption}
                    </SelectItem>
                  ))}
                </Select.Group>
              ))}

            {options && (
              <Select.Group className="flex flex-col gap-2">
                {options.map((option) => (
                  <SelectItem key={option} optionValue={option}>
                    {option}
                  </SelectItem>
                ))}
              </Select.Group>
            )}
          </Select.Viewport>
        </Select.Content>
      </>
    </Select.Root>
  );
};
