"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/client/components/atoms/button";
import { TransparentInput } from "@/client/components/atoms/input";
import { SelectInput } from "@/client/components/atoms/select-input";
import { bankOptions } from "@/client/data/sample";
import { defaultNumberInputIncrementDecrementHandler } from "@/client/lib/utils";

import { toastMessage } from "../../common/toast";
import {
  setupPayoutSchema,
  SetupPayoutInput,
} from "../../onboarding/forms/setup-payout-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../react-hook-form/form";

export const PayoutSettingsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onSubmitHandler = async (value: SetupPayoutInput) => {
    setIsLoading(true);
    // const data = {
    //   key: "setup-payout",
    //   value: value,
    // };

    try {
      // todo - save in db the display alert
      toastMessage("Your changes have been saved", "", "success");
    } catch (error: any) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("error");
      current.set("error", error?.message);

      const path = current.toString();
      const query = path ? `?${path}` : "";
      router.push(`${pathname}${query}`);
      toastMessage("An error occured", error?.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<SetupPayoutInput>({
    resolver: zodResolver(setupPayoutSchema),
    mode: "onBlur",
    defaultValues: {
      bankName: "GTB",
      accountName: "Jane Doe",
      accountNumber: "4389096754",
    },
  });

  const { handleSubmit } = form;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 2xl:mb-8">
        <h2 className="text-center font-display text-sm font-semibold leading-5 tracking-tight015 text-black md:text-left 2xl:text-base 2xl:leading-6">
          Payouts
        </h2>
        <h3 className="font-default text-xxs leading-4 text-black 2xl:text-xs 2xl:leading-5">
          Change your payout destination account
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col space-y-8 lg:space-y-10"
        >
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
                      triggerClassName="bg-transparent rounded-smd border border-solid border-gray-2700 text-dark-100"
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
                    <TransparentInput type="text" {...field} />
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
                    <TransparentInput
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

          <Button
            type="submit"
            loading={isLoading}
            variant="primaryFilled"
            size="sm"
            spinnerColor="fill-primary-100"
            loadingText="Saving changes..."
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="self-stretch font-default text-xs font-medium leading-5 text-white hover:text-primary-100 md:self-end 2xl:text-sm"
          >
            Save changes
          </Button>
        </form>
      </Form>
    </div>
  );
};
// todo - replace bank options
