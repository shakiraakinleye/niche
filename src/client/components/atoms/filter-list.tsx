import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp } from "lucide-react";

import { cn } from "@/client/lib/utils";

import { Button } from "./button";

export type FilterListProps = {
  options: string[];
  selectedOption: string | undefined;
  setSelected: (value: string) => void;
  placeholderText?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  listClassName?: string;
};

export type FilterListItemProps = {
  optionValue: string;
  className?: string;
};

const FilterItem = ({ className, optionValue }: FilterListItemProps) => {
  return (
    <Select.Item
      className={cn(
        "flex cursor-pointer select-none items-center justify-between rounded-sm px-3 py-1.5 font-default text-xs capitalize text-gray-900 hover:bg-zinc-200 data-[disabled]:pointer-events-none data-[disabled]:text-gray-2600 data-[highlighted]:text-tertiary-100 data-[highlighted]:outline-none 2xl:text-sm ",
        className
      )}
      value={optionValue}
    >
      <Select.ItemText>{optionValue}</Select.ItemText>
      <Select.ItemIndicator className="absolute right-3 inline-flex w-3 items-center justify-center">
        <Check className="h-3 w-3 text-tertiary-100" />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export const FilterList = ({
  options,
  selectedOption,
  setSelected,
  placeholderText,
  buttonClassName,
}: FilterListProps) => {
  return (
    <Select.Root value={selectedOption} onValueChange={setSelected}>
      <>
        <Select.Trigger
          className={cn(
            "inline-flex w-fit items-center gap-1 divide-zinc-500 rounded-xlg border border-zinc-200 bg-white px-2 py-1.5 font-default text-xs font-semibold capitalize leading-5 text-zinc-500 shadow-sm outline-0 hover:bg-zinc-100 focus:outline-0 focus-visible:outline-0",
            buttonClassName
          )}
        >
          <Select.Value
            placeholder={selectedOption === undefined && placeholderText}
          />
          <Select.Icon>
            <ChevronDown className="h-3 w-3 text-zinc-500" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          position="popper"
          side="bottom"
          sideOffset={5}
          align="center"
          className="selectContent z-10 w-40 rounded-md border border-zinc-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 2xl:w-60"
        >
          <Select.ScrollUpButton className="flex h-4 cursor-pointer items-center justify-center bg-white text-dark-100 md:h-6">
            <ChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group className="flex flex-col divide-y divide-gray-200 ">
              {options.map((option) => (
                <FilterItem key={option} optionValue={option} />
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </>
    </Select.Root>
  );
};

export const FilterButtons = ({
  options,
  selectedOption,
  setSelected,
  listClassName,
  buttonClassName,
  activeButtonClassName,
}: FilterListProps) => {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-1 2xl:gap-2",
        listClassName
      )}
    >
      {options.map((option) => {
        return (
          <Button
            key={option}
            type="button"
            borderRadius="none"
            onClick={() => setSelected(option)}
            className={cn(
              buttonClassName,
              option === selectedOption && activeButtonClassName
            )}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};
