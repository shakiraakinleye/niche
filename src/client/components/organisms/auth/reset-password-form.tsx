"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { ResponseBox } from "@/client/components/molecules/common/response-box";
import { SetErrorMessage } from "@/client/lib/utils";
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

import { PasswordRequirementChecklist } from "../../molecules/common/requirement-checklist";

const resetPasswordSchema = object({
  token: string(),
  password: string({ required_error: "Password is required" })
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: string({ required_error: "Confirm Password is required" }),
}).refine((values) => values.password === values.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;

export const ResetPasswordForm: NextPage = () => {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ResetPasswordInput) => {
    try {
      setIsLoading(true);
      // if (response) {
      //   router.push(`${pathname}?success=${encodeURIComponent(true)}`);
      // }
    } catch (e: any) {
      const errorMessage = e?.shape?.message ?? "";
      SetErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onBlur",
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<ResetPasswordInput> = (values) => {
    // 👇 Execute the Mutation
    onSubmit(values);
  };

  const token = searchParams.get("token");

  return (
    <>
      <div className="mb-8 lg:mb-10 2xl:mb-12">
        {searchParams?.get("error") && (
          <ResponseBox
            responseTitle="An error occurred"
            responseDescription={searchParams?.get("error")}
            type="error"
          />
        )}
        {searchParams?.get("success") && (
          <ResponseBox
            responseTitle="We've reset your password, login to you account with your new password."
            type="success"
          />
        )}
        {!searchParams?.get("error") && !searchParams?.get("success") && (
          <h2 className="pr-6 font-default text-sm leading-5 text-gray-2100 lg:text-base lg:leading-5.5">
            Create a new password
          </h2>
        )}
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="space-y-8 lg:space-y-10"
        >
          <div className="space-y-5">
            <input
              type="hidden"
              value={token ?? ""}
              {...form.register("token")}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your password.
                  </FormDescription>
                  <FormMessage />
                  <PasswordRequirementChecklist password={field.value} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
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
            size="smFull"
            spinnerColor="fill-primary-100"
            loadingText="Resetting password..."
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="font-default text-base font-bold leading-7 text-white hover:text-primary-100 xl:text-lg 2xl:text-xl"
          >
            Reset Password
          </Button>
        </form>
      </Form>
      {process.env.NEXT_PUBLIC_SIGNUP_DISABLED !== "1" && (
        <div className="mt-4 font-default text-base leading-5 text-gray-2100 lg:mt-6 lg:justify-start 2xl:mt-8">
          Don&apos;t have an account?&nbsp;
          <Link
            href="/sign-up"
            className="font-bold text-primary-100 hover:text-primary-100/70"
          >
            Sign up here
          </Link>
        </div>
      )}
    </>
  );
};
