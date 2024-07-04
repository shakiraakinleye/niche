import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import validator from "validator";
import { object, string, TypeOf } from "zod";

import { RadioInput } from "@/client/components/atoms/radio-input";
import { useOnboardingContext } from "@/client/context/onboarding-context";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

import { PhoneNumberInput } from "../../common/phone-number-input";
import { ShopnameRequirementChecklist } from "../../common/requirement-checklist";
import { ResponseBox } from "../../common/response-box";

export const startSchema = object({
  shopName: string({
    required_error: "Please enter the name your shop will be called.",
  })
    .trim()
    .min(1, { message: "Please enter the name your shop will be called" })
    .regex(/^[A-Za-z0-9]+$/, {
      message:
        "Please enter a shopname that contains alphabet characters and/or numbers only",
    })
    .refine((value) => {
      return value.length >= 3 && value.length <= 20;
    }, "Please enter a shopname that contains 3 - 20 charcaters"),

  userCategory: string({
    required_error: "Please select which best describes you.",
  }),

  phoneNumber: string({
    required_error: "Please enter a registered phone number",
    invalid_type_error: "Invalid phone number",
  }).refine((value) => {
    return validator.isMobilePhone(value);
  }, "Invalid phone number"),
});

export type StartInput = TypeOf<typeof startSchema>;

type StartFormProps = {
  nextStep?: () => void;
};

export const StartForm: FC<StartFormProps> = ({ nextStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const {
    startContext: { updateStartData },
  } = useOnboardingContext();

  const onSubmitHandler = async (value: StartInput) => {
    setIsLoading(true);
    try {
      updateStartData("start", value);
      if (nextStep) {
        nextStep();
      }
    } catch (error: any) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("error");
      current.set("error", error?.message);

      const path = current.toString();
      const query = path ? `?${path}` : "";
      router.push(`${pathname}${query}`);
    } finally {
      // setIsLoading(false);
    }
  };

  const form = useForm<StartInput>({
    resolver: zodResolver(startSchema),
    mode: "onBlur",
  });

  const { handleSubmit } = form;

  const userCategoryOptions = {
    lagend: "Which best describes you",
    options: [
      {
        title: "Business owner",
        description:
          "I own a business or I’m just starting a business and I want to sell items from my business",
      },
      {
        title: "Micro Seller",
        description: "I am selling items from my closet",
      },
    ],
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col items-center gap-y-8 lg:gap-y-10"
        >
          {searchParams?.get("error") && (
            <div className="self-start">
              <ResponseBox
                responseTitle="An error has occurred"
                responseDescription={searchParams?.get("error")}
                type="error"
              />
            </div>
          )}
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="shopName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Choose your unique shopname</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <p className="font-default text-xxs leading-4 text-gray-1300 2xl:text-xs 2xl:leading-5">
                    https://niche/shop/{field.value?.toLowerCase()}
                  </p>
                  <FormDescription className="sr-only">
                    Enter the name your shop will be called.
                  </FormDescription>
                  <FormMessage />
                  <ShopnameRequirementChecklist shopname={field.value} />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userCategory"
              render={({ field: { name, value, ...props } }) => (
                <FormItem className="space-y-4">
                  <h3 className="font-default text-xs leading-4 text-gray-1300 md:text-sm md:leading-5 xl:text-base xl:font-medium">
                    {userCategoryOptions.lagend}
                  </h3>
                  <FormControl>
                    <div className="space-y-2 lg:space-y-3">
                      {userCategoryOptions.options.map((option) => {
                        return (
                          <RadioInput
                            key={option.title}
                            option={option}
                            name="userCategory"
                            {...props}
                          />
                        );
                      })}
                    </div>
                  </FormControl>
                  <FormDescription className="sr-only">
                    Describe your activity on Niche
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneNumberInput
                      control={form.control}
                      name="phoneNumber"
                      inputComponent={Input}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your phone number
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            loading={isLoading}
            variant="primaryFilled"
            size="sm"
            spinnerColor="fill-primary-100"
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="w-1/2 font-default text-sm font-medium leading-5 text-white hover:text-primary-100 xl:text-sm 2xl:text-base 2xl:leading-6"
          >
            Continue
          </Button>
        </form>
      </Form>
    </>
  );
};
