import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { SelectInput } from "@/client/components/atoms/select-input";
import { useOnboardingContext } from "@/client/context/onboarding-context";
import { approvedLagosLocations } from "@/client/data/common";
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

import { CalendarDatePicker } from "../../common/date-picker";
import { ResponseBox } from "../../common/response-box";

export const pickupRequestSchema = object({
  pickupDate: string({
    required_error: "Please enter a date for pickup",
  }).refine((value) => {
    const today = Date.now();
    const pickupDate = Date.parse(value);
    const days = (pickupDate - today) / 86400000;
    return days >= 0.9;
  }, "Please select a future date"),

  pickupLocation: string({
    required_error: "Please select your pickup location",
  }),

  pickupAddress: string({
    required_error: "Please enter your pickup address",
  })
    .trim()
    .min(1, "Please enter your pickup address"),

  productQuantity: string({
    required_error: "Please enter the quantity of products for pickup",
  }).refine((value) => {
    return +value >= 15;
  }, "Please enter a minimum quantity of 15"),
});

export type PickupRequestFormInput = TypeOf<typeof pickupRequestSchema>;

type PickupRequestFormProps = {
  nextStep: () => void;
  skipStep: () => void;
};

export const PickupRequestForm: FC<PickupRequestFormProps> = ({
  nextStep,
  skipStep,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { managedServiceContext } = useOnboardingContext();
  const { updateManagedServiceData, managedServiceData } =
    managedServiceContext;
  const defaultValues = managedServiceData.pickupRequestData;

  const form = useForm<PickupRequestFormInput>({
    resolver: zodResolver(pickupRequestSchema),
    mode: "onBlur",
    defaultValues,
  });

  const onSubmitHandler = async (value: PickupRequestFormInput) => {
    setIsLoading(true);
    try {
      updateManagedServiceData("pickupRequestData", value);
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
  const { handleSubmit } = form;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="relative space-y-8 lg:space-y-12"
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
              name="pickupDate"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Preferred Pickup Date</FormLabel>
                  <FormControl>
                    <CalendarDatePicker field={field} />
                  </FormControl>
                  <FormDescription className="flex items-center gap-1 text-gray-1300">
                    <AlertCircle className="h-3 w-3 text-inherit" />
                    <span className="text-xxs  text-inherit">
                      Pick up may not be on the exact date selected.
                    </span>
                  </FormDescription>
                  <FormDescription className="sr-only">
                    Enter a preferred date for pickup.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Pickup Location</FormLabel>
                  <FormControl>
                    <SelectInput
                      options={approvedLagosLocations}
                      placeholderText="Select location"
                      props={field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select your pickup location.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pickupAddress"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Pickup Address</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your pickup address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productQuantity"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    Quantity of Products
                    <span className="text-xxs lg:text-xs">
                      {" "}
                      (Minimum of 15)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      type="number"
                      inputClassName="appearance-none"
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
                    Enter the quantity of products for pickup.
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
