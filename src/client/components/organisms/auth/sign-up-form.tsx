"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import { object, string, TypeOf, boolean } from "zod";

import { ResponseBox } from "@/client/components/molecules/common/response-box";
import { SetErrorMessage } from "@/client/lib/utils";
import { Button } from "@/components/atoms/button";
import { Input, PasswordInput } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

import { CheckboxInput } from "../../atoms/checkbox-input";
import { UserAgreementLabel } from "../../atoms/user-agreement-label";
import { PhoneNumberInput } from "../../molecules/common/phone-number-input";
import { PasswordRequirementChecklist } from "../../molecules/common/requirement-checklist";

const validateUsernameRefine = async (value: string) => {
  // Perform async validation
  // const response = await api.checkUsername.mutate({ username: value });
  // if (!response.data.valid) {
  //   return false;
  // }
  // return true;
};

export const registerSchema = object({
  name: string({ required_error: "Name is required" }),

  email: string({ required_error: "Email is required" }).email("Invalid email"),

  username: string({
    required_error: "Username is required or already used.",
  })
    .trim()
    .min(1, { message: "Username is required" })
    .refine(validateUsernameRefine, "username has already been used."),

  phoneNumber: string({
    required_error: "Enter a registered phone number",
    invalid_type_error: "Invalid phone number",
  }).refine((value) => {
    return validator.isMobilePhone(value);
  }, "Invalid phone number"),

  password: string({ required_error: "Password is required" })
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),

  termsAgreement: boolean().refine((val) => val === true, {
    message: "Terms must be read and accepted",
  }),
});

export type RegisterInput = TypeOf<typeof registerSchema>;

export const SignUpForm: NextPage = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: RegisterInput) => {
    try {
      setIsLoading(true);
    } catch (e: any) {
      const errorMessage = e?.shape?.message ?? "";
      SetErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    onSubmit(values);
  };

  return (
    <>
      <div className="mb-8 lg:mb-10 2xl:mb-12">
        {searchParams?.get("error") ? (
          <ResponseBox
            responseTitle="An error occurred while trying to register you"
            responseDescription={searchParams?.get("error")}
            type="error"
          />
        ) : (
          <h2 className="pr-6 font-default text-sm leading-5 text-gray-2100 lg:text-base lg:leading-5.5">
            Create your free account
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
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your full name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="niche" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.com"
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneNumberInput
                      control={form.control}
                      name="phoneNumber"
                      inputComponent={Input}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your phone number
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
                  <PasswordRequirementChecklist password={field.value} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="termsAgreement"
              defaultValue={false}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="sr-only">
                    User Agreement Checkbox
                  </FormLabel>
                  <FormControl>
                    <CheckboxInput
                      label={UserAgreementLabel}
                      name={field.name}
                      onChange={() => field.onChange(!field.value)}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Terms must be read and accepted.
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
            loadingText="Signing you up..."
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="font-default text-base font-bold leading-7 text-white hover:text-primary-100 xl:text-lg 2xl:text-xl"
          >
            Submit
          </Button>
        </form>
      </Form>

      <div className="mt-4 font-default text-base leading-5 text-gray-2100 lg:mt-6 lg:justify-start 2xl:mt-8">
        Already have an account?&nbsp;
        <Link
          href="/log-in"
          className="font-bold text-primary-100 hover:text-primary-100/70"
        >
          Log in here
        </Link>
      </div>
    </>
  );
};
