"use client";

import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

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

import { Button } from "../../atoms/button";

export const subscriptionFormSchema = object({
  email: string().email("Invalid email").optional(),
});

export type SubscriptionFormInput = TypeOf<typeof subscriptionFormSchema>;

export const SubscriptionForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<SubscriptionFormInput>({
    resolver: zodResolver(subscriptionFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, resetField } = form;

  const onSubmitHandler = (value: SubscriptionFormInput) => {
    console.log(value.email);
    // do something with the email
    resetField("email");
    setIsSubmitted(true);
  };

  const Success = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }, []);

    return <>{isSubmitted && <span className="lowercase">d!</span>}</>;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full max-w-md rounded-4xl border border-white bg-white"
      >
        <div className="flex items-center py-1 pl-2 pr-1 md:pl-3 lg:pl-4 xl:pl-5 2xl:pl-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex grow items-center space-y-0">
                <FormControl>
                  <>
                    <Mail className="h-4 w-4 shrink-0 text-black md:h-5 md:w-5 xl:h-6 xl:w-6" />

                    <FormLabel className="sr-only">Email</FormLabel>
                    <TransparentInput
                      className="appearance-none border-none font-default text-xs leading-4 tracking-tight012 text-black placeholder:text-black focus:border-transparent focus:outline-0 focus:ring-0 focus-visible:ring-0 lg:text-sm lg:leading-5"
                      type="email"
                      placeholder="Email address"
                      {...field}
                    />
                  </>
                </FormControl>
                <FormDescription className="sr-only">
                  Enter your email address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            borderRadius="large"
            size="md"
            className="border-2 border-dark-300 bg-dark-100 hover:bg-transparent lg:bg-transparent lg:hover:bg-dark-100"
          >
            <span className="lg:active-hover:text-white z-10 font-default text-xs font-medium capitalize leading-4 text-white group-hover:text-dark-300 group-active:text-dark-300 lg:text-sm lg:leading-5 lg:text-dark-300 lg:group-hover:text-white">
              Subscribe
              <Success />
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

// todo - handle email collected
