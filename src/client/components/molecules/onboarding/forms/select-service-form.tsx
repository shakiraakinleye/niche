import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { SelectInput } from "@/client/components/atoms/select-input";
import { useOnboardingContext } from "@/client/context/onboarding-context";
import { Button } from "@/components/atoms/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

import { RadioCards } from "../../common/radio-cards";
import { ResponseBox } from "../../common/response-box";

const serviceOptions = [
  {
    title: "Self Services",
    description:
      "Take full control of your shop, managing listings and order independently.",
  },
  {
    title: "Managed Services",
    description:
      "Niche handles shop management, all you need to do is to make pickup requests. Enjoy dedicated support for a seamless customer experience.",
  },
];

export const selectServiceSchema = object({
  service: string({
    required_error: "Please select your preferred service.",
    invalid_type_error: "Please select your preferred service.",
  }),
  location: string({
    required_error: "Please select your location",
  }),
});

export type SelectServiceInput = TypeOf<typeof selectServiceSchema>;

type SelectServiceFormProps = {
  nextStage: () => void;
};

export const SelectServiceForm: FC<SelectServiceFormProps> = ({
  nextStage,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const {
    startContext: { updateStartData },
  } = useOnboardingContext();

  const onSubmitHandler = async (value: SelectServiceInput) => {
    try {
      setIsLoading(true);
      updateStartData("selectService", value);
      nextStage();
    } catch (error: any) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("error");
      current.set("error", error?.message);

      const path = current.toString();
      const query = path ? `?${path}` : "";
      router.push(`${pathname}${query}`);
    } finally {
      // setIsLoading(false);
    }
  };

  const form = useForm<SelectServiceInput>({
    resolver: zodResolver(selectServiceSchema),
    mode: "onBlur",
    defaultValues: {
      location: "Lagos",
    },
  });

  const { handleSubmit } = form;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col items-center gap-y-10 lg:gap-y-12"
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

          <div className="space-y-6 lg:space-y-8">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Select a service</FormLabel>
                  <FormControl>
                    <RadioCards options={serviceOptions} props={field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select your preferred service.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>
                    Pickup Location
                    <span className="text-xxs lg:text-xs">
                      (pick up location when you make a sale)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <SelectInput
                      options={["Lagos"]}
                      placeholderText="Select Location"
                      props={field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select your location
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
            loadingText="Creating..."
            loadingBgColor="current-color"
            loadingTextClassName="text-inherit"
            className="w-1/2 font-default text-sm font-medium leading-5 text-white hover:text-primary-100 xl:text-sm 2xl:text-base 2xl:leading-6"
          >
            Create shop
          </Button>
        </form>
      </Form>
    </>
  );
};
