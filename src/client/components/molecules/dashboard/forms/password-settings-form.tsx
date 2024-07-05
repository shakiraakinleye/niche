"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { Button } from "@/components/atoms/button";
import { PasswordInput } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

import { PasswordRequirementChecklist } from "../../common/requirement-checklist";
import { toastMessage } from "../../common/toast";

export const passwordSettingsSchema = object({
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

type PasswordSettingsInput = TypeOf<typeof passwordSettingsSchema>;

export const PasswordSettingsForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: PasswordSettingsInput) => {
    console.log("data", data);
    setIsLoading(true);
    try {
      // if (response) {
      //   router.push(`${pathname}?success=${encodeURIComponent(true)}`);
      //   toastMessage(
      //     "We've reset your password",
      //     "Login to your account with your new password",
      //     "success",
      //   );
      // }
    } catch (e: any) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("error");
      current.set("error", e?.shape?.message);

      const path = current.toString();
      const query = path ? `?${path}` : "";
      router.push(`${pathname}${query}`);
      toastMessage("An error occured", e?.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<PasswordSettingsInput>({
    resolver: zodResolver(passwordSettingsSchema),
    mode: "onBlur",
    defaultValues: {
      currentPassword: "password",
    },
  });

  const {
    reset,
    handleSubmit,
    control,
    register,
    formState: { isSubmitSuccessful },
  } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<PasswordSettingsInput> = (values) => {
    // 👇 Execute the Mutation
    onSubmit(values);
  };

  const token = searchParams.get("token");

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 2xl:mb-8">
        <h2 className="text-center font-display text-sm font-semibold leading-5 tracking-tight015 text-black md:text-left 2xl:text-base 2xl:leading-6">
          Password
        </h2>
        <h3 className="font-default text-xxs leading-4 text-black 2xl:text-xs 2xl:leading-5">
          Enter your current password to change your password and set a new one.
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-y-8 lg:gap-y-10"
        >
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
          <Button
            type="submit"
            loading={isLoading}
            variant="primaryFilled"
            size="sm"
            spinnerColor="fill-primary-100"
            loadingText="Updating password..."
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="self-stretch font-default text-xs font-medium leading-5 text-white hover:text-primary-100 md:self-end 2xl:text-sm"
          >
            Update Password
          </Button>
        </form>
      </Form>
    </div>
  );
};
