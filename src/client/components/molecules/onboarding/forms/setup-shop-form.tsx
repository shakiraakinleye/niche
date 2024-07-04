import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import validator from "validator";
import { object, string, TypeOf } from "zod";

import { CheckboxInput } from "@/client/components/atoms/checkbox-input";
import { SelectInput } from "@/client/components/atoms/select-input";
import { useOnboardingContext } from "@/client/context/onboarding-context";
import {
  approvedLagosLocations,
  otherPlatformOptions,
} from "@/client/data/common";
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
import { ResponseBox } from "../../common/response-box";

export const setupShopSchema = object({
  shopContactNumber: string({
    required_error: "Please enter your shop's contact number",
    invalid_type_error: "Invalid phone number",
  }).refine((value) => {
    return validator.isMobilePhone(value);
  }, "Invalid phone number"),

  pickupLocation: string({
    required_error: "Please select your pickup location",
  }),

  pickupAddress: string({
    required_error: "Please enter your shipping address",
  })
    .trim()
    .min(1, "Please enter your shipping address"),

  otherPlatform: string({
    required_error: "Please select any other platform where you sell",
  }),

  instagramUsername: string().optional(),
});

export type SetupShopInput = TypeOf<typeof setupShopSchema>;

type SetupShopFormProps = {
  nextStep: () => void;
  skipStep: () => void;
};

export const SetupShopForm: FC<SetupShopFormProps> = ({
  nextStep,
  skipStep,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { startContext, selfServiceContext } = useOnboardingContext();
  const phoneNumber = startContext.startData.start?.phoneNumber;
  const { selfServiceData, updateSelfServiceData } = selfServiceContext;
  const defaultValues = selfServiceData.setupShopData;

  const form = useForm<SetupShopInput>({
    resolver: zodResolver(setupShopSchema),
    mode: "onBlur",
    defaultValues,
  });

  const { handleSubmit } = form;

  const onSubmitHandler = async (value: SetupShopInput) => {
    setIsLoading(true);
    try {
      updateSelfServiceData("setupShopData", value);
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
              name="shopContactNumber"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Shop Contact Number </FormLabel>
                  <FormControl>
                    <div className="space-y-3">
                      <PhoneNumberInput
                        control={form.control}
                        name="shopContactNumber"
                        inputComponent={Input}
                      />

                      <CheckboxInput
                        label="Same as Phone Number"
                        name="sameAsPhoneNumber"
                        checked={
                          phoneNumber ? field.value === phoneNumber : false
                        }
                        onChange={(e) =>
                          field.onChange(e.target.checked ? phoneNumber : "")
                        }
                      />
                    </div>
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your shop&apos;s contact number.
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
                  <FormLabel>
                    Pickup Address
                    <span className="text-xxs lg:text-xs">
                      (Where to pick up when you make a sale)
                    </span>
                  </FormLabel>
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
              name="otherPlatform"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <FormLabel htmlFor="otherPlatform">
                    Where else do you sell
                  </FormLabel>
                  <FormControl>
                    <SelectInput
                      options={otherPlatformOptions}
                      placeholderText="Select option"
                      props={field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select any other platform where you sell.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagramUsername"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    Instagram Username
                    <span className="text-xxs lg:text-xs"> (Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your instagram username (optional).
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
