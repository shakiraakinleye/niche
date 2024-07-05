import { useState, useEffect } from "react";

import { RadioGroup } from "@headlessui/react";
import { CheckCircle2 } from "lucide-react";

import { cn } from "@/client/lib/utils";

import { RadioOptionType } from "../../atoms/radio-input";

type RadioCardsProps = {
  options: RadioOptionType[];
  props: any;
};

export const RadioCards = ({ options, props }: RadioCardsProps) => {
  const { onChange, value } = props;
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption, onChange]);

  return (
    <RadioGroup
      value={selectedOption}
      onChange={setSelectedOption}
      className="flex flex-col gap-4 lg:gap-6 2xl:gap-8"
    >
      {options.map((option) => (
        <RadioGroup.Option
          key={option.title}
          value={option.title}
          className={({ checked }) =>
            cn(
              "focus-visible-outline-0 relative flex cursor-pointer flex-col gap-1 rounded-lg border bg-white p-4 shadow-cardLg focus:outline-0 2xl:gap-2",
              checked
                ? "border-primary-100 ring-2 ring-primary-100"
                : "border-transparent"
            )
          }
        >
          {({ checked }) => (
            <>
              <p className="flex">
                <RadioGroup.Label
                  as="span"
                  className="inline-block grow font-default text-xs font-medium leading-4 text-dark-1000 lg:text-sm lg:leading-5"
                >
                  {option.title}
                </RadioGroup.Label>
                <CheckCircle2
                  className={cn(
                    !checked ? "invisible" : "",
                    "h-5 w-5 shrink-0 fill-primary-100 stroke-white"
                  )}
                  aria-hidden="true"
                />
              </p>
              <RadioGroup.Description
                as="span"
                className="font-default text-xs leading-4 text-dark-1100 lg:text-sm lg:leading-5"
              >
                {option.description}
              </RadioGroup.Description>
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
