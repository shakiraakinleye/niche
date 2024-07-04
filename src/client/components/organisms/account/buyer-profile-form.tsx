"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import validator from "validator";
import { object, string, TypeOf } from "zod";

import { Button } from "@/components/atoms/button";
import { TransparentInput, PasswordInput } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

import { PhoneNumberInput } from "../../molecules/common/phone-number-input";
import { PasswordRequirementChecklist } from "../../molecules/common/requirement-checklist";
import { toastMessage } from "../../molecules/common/toast";

export const BuyerProfileSchema = object({
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

  shippingAddress: string({
    required_error: "Please enter your shipping address",
  })
    .trim()
    .min(1, { message: "Please enter your shipping address" }),

  token: string(),
  currentPassword: string({ required_error: "Current password is required" })
    .min(8, "Current password must be more than 8 characters")
    .max(32, "Current password must be less than 32 characters"),

  newPassword: string({ required_error: "New password is required" })
    .min(8, "New password must be more than 8 characters")
    .max(32, "New password must be less than 32 characters"),

  confirmPassword: string({ required_error: "Confirm password is required" }),
}).refine((values) => values.newPassword === values.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type BuyerProfileInput = TypeOf<typeof BuyerProfileSchema>;

export const BuyerProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const onSubmitHandler = async (data: BuyerProfileInput) => {
    console.log("data", data);
    setIsLoading(true);
    try {
      // todo - save in db then display alert
      // if (response) {
      //   router.push(`${pathname}?success=${encodeURIComponent(true)}`);
      // toastMessage(
      //   "We've reset your password",
      //   "Login to your account with your new password",
      //   "success",
      //   );
      // }
      toastMessage("Your changes have been saved", "", "success");
    } catch (error: any) {
      toastMessage("An error occured", error?.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<BuyerProfileInput>({
    resolver: zodResolver(BuyerProfileSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "Jane Doe",
      email: "example@domain.com",
      phoneNumber: "+2348144556677",
      shippingAddress: "16, Alhaji Lawal Street, Moshalashi, Lagos State",
      currentPassword: "password",
    },
  });

  const { handleSubmit, control, register } = form;

  const token = searchParams.get("token");

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-col gap-y-4 border-b border-b-gray-3900 px-5 py-4 md:px-6 md:py-5 2xl:gap-y-6 2xl:px-10 2xl:py-7">
            <h2 className="font-display text-sm font-semibold leading-5 tracking-tight015 text-black 2xl:mb-8 2xl:text-base 2xl:leading-6">
              Profile
            </h2>
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
                        control={control}
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
          </div>

          <div className="flex flex-col gap-y-4 px-5 py-4 md:px-6 md:py-5 2xl:gap-y-6 2xl:px-10 2xl:py-7">
            <h2 className="font-display text-sm font-semibold leading-5 tracking-tight015 text-black 2xl:mb-8 2xl:text-base 2xl:leading-6">
              Password
            </h2>
            <h3 className="font-default text-xxs leading-4 text-black 2xl:text-xs 2xl:leading-5">
              Enter your current password to change your password and set a new
              one.
            </h3>
            <div className="flex flex-col gap-y-5">
              <input
                type="hidden"
                className="hidden"
                value={token ?? ""}
                {...register("token")}
              />
              <FormField
                control={control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        inputClassName="bg-transparent rounded-smd border border-solid border-gray-2700 placeholder:text-gray-1300/45 focus:border-none"
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter your password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        inputClassName="bg-transparent rounded-smd border border-solid border-gray-2700 placeholder:text-gray-1300/45 focus:border-none"
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Confirm your password.
                    </FormDescription>
                    <FormMessage />
                    <PasswordRequirementChecklist password={field.value} />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        inputClassName="bg-transparent rounded-smd border border-solid border-gray-2700 placeholder:text-gray-1300/45 focus:border-none"
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Confirm your password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex items-center px-5 pb-10 pt-6 md:justify-end md:px-6 md:pb-12 md:pt-8 2xl:px-10 2xl:pb-15 2xl:pt-10">
            <Button
              type="submit"
              loading={isLoading}
              variant="primaryFilled"
              size="sm"
              spinnerColor="fill-primary-100"
              loadingText="Saving changes..."
              loadingBgColor="current-color"
              loadingTextClassName="text-inherit"
              className="w-full font-default text-xs font-medium leading-5 text-white hover:text-primary-100 md:w-fit 2xl:text-sm"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
