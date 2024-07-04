import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

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

import { CalendarDatePicker } from "../../common/date-picker";
import { ResponseBox } from "../../common/response-box";

export const kycFormSchema = object({
  firstName: string({
    required_error: "Please enter your legal first name",
  })
    .trim()
    .min(1, "Please enter your legal first name"),

  lastName: string({
    required_error: "Please enter your legal last name",
  })
    .trim()
    .min(1, "Please enter your legal last name"),

  dateOfBirth: string({
    required_error: "Please enter your date of birth",
  }).refine((value) => {
    const today = Date.now();
    const dob = Date.parse(value);
    const age = (today - dob) / 31536000000;
    return age >= 18;
  }, "You must be at least 18 years old"),
});

export type KYCFormInput = TypeOf<typeof kycFormSchema>;

type KYCFormProps = {
  nextStep: () => void;
  skipStep: () => void;
};

export const KYCForm: FC<KYCFormProps> = ({ nextStep, skipStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { selfServiceContext } = useOnboardingContext();
  const { selfServiceData, updateSelfServiceData } = selfServiceContext;
  const defaultValues = selfServiceData.kycData;

  const form = useForm<KYCFormInput>({
    resolver: zodResolver(kycFormSchema),
    mode: "onBlur",
    defaultValues,
  });

  const { handleSubmit } = form;

  const onSubmitHandler = async (value: KYCFormInput) => {
    setIsLoading(true);
    try {
      updateSelfServiceData("kycData", value);
      nextStep();
    } catch (error: any) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("error");
      current.set("error", error?.message);

      const path = current.toString();
      const query = path ? `?${path}` : "";
      router.push(`${pathname}${query}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="space-y-8 lg:space-y-12"
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
              name="firstName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Legal First Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your legal first name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Legal Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your legal last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Date Of Birth</FormLabel>
                  <FormControl>
                    <CalendarDatePicker field={field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your date of birth.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full flex-col gap-6 md:grid md:grid-cols-2 md:gap-4">
            <Button
              type="button"
              variant="beigeOutline"
              className="lg-px-4.5 px-3 py-2 2xl:py-2.5"
              onClick={skipStep}
            >
              <span className="font-default text-sm font-medium normal-case leading-5 text-gray-3700 2xl:text-base 2xl:leading-6">
                I&apos;ll do it later
              </span>
            </Button>
            <Button
              type="submit"
              loading={isLoading}
              spinnerColor="fill-primary-100"
              loadingText="Saving progress..."
              loadingBgColor="current-color"
              loadingTextClassName="text-inherit"
              variant="primaryFilled"
              className="lg-px-4.5 px-3 py-2 2xl:py-2.5"
            >
              <span className="font-default text-sm font-medium leading-5 text-white group-hover:text-primary-100 2xl:text-base 2xl:leading-6">
                Save
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
