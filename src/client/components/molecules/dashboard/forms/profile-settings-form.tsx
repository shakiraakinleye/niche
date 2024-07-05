"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import validator from "validator";
import { object, string, TypeOf } from "zod";

import { Button } from "@/components/atoms/button";
import { TransparentInput } from "@/components/atoms/input";
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
import { toastMessage } from "../../common/toast";

export const ProfileSettingsSchema = object({
  fullName: string({
    required_error: "Please enter your full name.",
  })
    .trim()
    .min(1, { message: "Please enter your full name" }),

  email: string({
    required_error: "Please enter your email address",
  })
    .trim()
    .min(1, { message: "Please enter your email address" })
    .email("Please enter a valid email address"),

  phoneNumber: string({
    required_error: "Please enter a registered phone number",
    invalid_type_error: "Invalid phone number",
  }).refine((value) => {
    return validator.isMobilePhone(value);
  }, "Invalid phone number"),

  shopContactNumber: string({
    required_error: "Please enter your shop's contact number",
    invalid_type_error: "Invalid phone number",
  }).refine((value) => {
    return validator.isMobilePhone(value);
  }, "Invalid phone number"),

  shippingAddress: string({
    required_error: "Please enter your shipping address",
  })
    .trim()
    .min(1, { message: "Please enter your shipping address" }),
});

export type ProfileSettingsInput = TypeOf<typeof ProfileSettingsSchema>;

export const ProfileSettingsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onSubmitHandler = async (value: ProfileSettingsInput) => {
    console.log("value", value);
    setIsLoading(true);
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

  const form = useForm<ProfileSettingsInput>({
    resolver: zodResolver(ProfileSettingsSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "Jane Doe",
      email: "example@domain.com",
      phoneNumber: "08145955575",
      shopContactNumber: "08060552555",
      shippingAddress: "16, Alhaji Lawal Street, Moshalashi, Lagos State",
    },
  });

  const { handleSubmit, control } = form;

  return (
    <div>
      <h2 className="mb-6 text-center font-display text-sm font-semibold leading-5 tracking-tight015 text-black md:text-left 2xl:mb-8 2xl:text-base 2xl:leading-6">
        Profile
      </h2>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col space-y-8 lg:space-y-10"
        >
          <div className="space-y-5">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <TransparentInput type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Change your full name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <TransparentInput type="email" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Change your email address
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="phoneNumber"
              render={() => (
                <FormItem className="space-y-2">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneNumberInput
                      control={form.control}
                      name="phoneNumber"
                      inputComponent={TransparentInput}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Change your phone number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="shopContactNumber"
              render={() => (
                <FormItem className="space-y-2">
                  <FormLabel>Shop Contact Number</FormLabel>
                  <FormControl>
                    <PhoneNumberInput
                      control={form.control}
                      name="shopContactNumber"
                      inputComponent={TransparentInput}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Change your shop&apos;s contact number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="shippingAddress"
              render={({ field: { onChange, ...props } }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Shipping Address</FormLabel>
                  <FormControl>
                    <TransparentInput
                      type="text"
                      value={props.value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Change your shipping address.
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
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
};
