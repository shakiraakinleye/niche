"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/dist/client/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { SetErrorMessage } from "@/client/lib/utils";
import { Button } from "@/components/atoms/button";
import { Input, PasswordInput } from "@/components/atoms/input";
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

export const loginSchema = object({
  email: string({ required_error: "Please enter your email address" }).email(
    "Please enter a valid email address"
  ),
  password: string({ required_error: "Please enter your password" })
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password cannot exceed 32 characters"),
});

export type SigninInput = TypeOf<typeof loginSchema>;

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (value: SigninInput) => {
    setIsLoading(true);

    try {
      console.log(value);
    } catch (e: any) {
      const errorMessage = e?.shape?.message ?? "";
      SetErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<SigninInput>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const { handleSubmit } = form;

  return (
    <>
      <div className="mb-8 lg:mb-10 2xl:mb-12">
        {searchParams?.get("error") ? (
          <ResponseBox
            responseTitle="An error occurred while logging you in"
            responseDescription={searchParams?.get("error")}
            type="error"
          />
        ) : (
          <h2 className="pr-6 font-default text-sm leading-5 text-gray-2100 lg:text-base lg:leading-5.5">
            Enter your details below so you can get back to buying stuff you
            love
          </h2>
        )}
      </div>

      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="space-y-8 lg:space-y-10"
        >
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="email"
                      placeholder="johndoe@gmail.com"
                      type="email"
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

                  {process.env.NEXT_PUBLIC_PASSWORD_RESET_DISABLED !== "1" && (
                    <div className="transition-all duration-500 ease-in-out">
                      <Link
                        href="/forgot-password"
                        className="font-default text-sm font-medium leading-5 text-primary-100 hover:text-primary-100/70"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  )}
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
            loadingText="Signing in..."
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="font-default text-base font-bold leading-7 text-white hover:text-primary-100 xl:text-lg 2xl:text-xl"
          >
            Sign in
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
