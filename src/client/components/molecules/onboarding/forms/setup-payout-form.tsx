import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { SelectInput } from "@/client/components/atoms/select-input";
import { useOnboardingContext } from "@/client/context/onboarding-context";
import { bankOptions } from "@/client/data/sample";
import { defaultNumberInputIncrementDecrementHandler } from "@/client/lib/utils";
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

import { ResponseBox } from "../../common/response-box";

export const setupPayoutSchema = object({
  bankName: string({
    required_error: "Please select a bank.",
  }),

  accountName: string({
    required_error: "Please enter your bank account name",
  })
    .trim()
    .min(1, "Please enter your bank account name"),

  accountNumber: string({
    required_error: "Please enter your bank account number",
  }).regex(/^\d{10}$/, { message: "Please enter a valid account number" }),
});

export type SetupPayoutInput = TypeOf<typeof setupPayoutSchema>;

type SetupPayoutFormProps = {
  nextStep: () => void;
  skipStep: () => void;
};
export const SetupPayoutForm: FC<SetupPayoutFormProps> = ({
  nextStep,
  skipStep,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { selfServiceContext } = useOnboardingContext();
  const { selfServiceData, updateSelfServiceData } = selfServiceContext;
  const defaultValues = selfServiceData.setupPayoutData;

  const form = useForm<SetupPayoutInput>({
    resolver: zodResolver(setupPayoutSchema),
    mode: "onBlur",
    defaultValues,
  });

  const { handleSubmit } = form;

  const onSubmitHandler = async (value: SetupPayoutInput) => {
    setIsLoading(true);
    try {
      updateSelfServiceData("setupPayoutData", value);
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
              name="bankName"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>Bank Name</FormLabel>
                  <FormControl>
                    <SelectInput
                      options={bankOptions}
                      placeholderText="Select a bank"
                      props={field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select your bank&apos;s name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Bank Account Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your bank account name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Bank Account Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onKeyDown={(e) =>
                        defaultNumberInputIncrementDecrementHandler(e)
                      }
                      onWheel={(e) =>
                        defaultNumberInputIncrementDecrementHandler(e)
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your bank account number
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
// todo - replace bank options
