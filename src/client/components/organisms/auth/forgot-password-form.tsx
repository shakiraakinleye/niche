"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { SetErrorMessage } from "@/client/lib/utils";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

import { ResponseBox } from "../../molecules/common/response-box";

const forgotPasswordSchema = object({
  email: string(),
});

type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>;

export const ForgotPasswordForm: NextPage = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ForgotPasswordInput) => {
    console.log("data", data);
    try {
      setIsLoading(true);
      // if (response) {
      //   router.replace(`/forgot-password?success=${true}`);
      // }
    } catch (e: any) {
      const errorMessage = e?.shape?.message ?? "";
      SetErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
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

  const onSubmitHandler: SubmitHandler<ForgotPasswordInput> = (values) => {
    // 👇 Execute the Mutation
    onSubmit(values);
  };

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
            responseTitle="We've sent you a password reset link"
            type="success"
          />
        )}
        {!searchParams?.get("error") && !searchParams?.get("success") && (
          <h2 className="pr-6 font-default text-sm leading-5 text-gray-2100 lg:text-base lg:leading-5.5">
            Enter the email address linked to your Niche account and we&apos;ll
            send you a link to reset your password
          </h2>
        )}
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="space-y-8 lg:space-y-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndeo@gmail.com"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  Enter your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            loading={isLoading}
            variant="primaryFilled"
            size="smFull"
            spinnerColor="fill-primary-100"
            loadingText="Sending link..."
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="font-default text-base font-bold leading-7 text-white hover:text-primary-100 xl:text-lg 2xl:text-xl"
          >
            Submit
          </Button>
        </form>
      </Form>
      <div className="mt-4 font-default text-base leading-5 text-gray-2100 lg:mt-6 lg:justify-start 2xl:mt-8">
        Remember your password?&nbsp;
        <Link
          href="/log-in"
          className="font-bold text-primary-100 hover:text-primary-100/70"
        >
          Back to Login
        </Link>
      </div>
    </>
  );
};
