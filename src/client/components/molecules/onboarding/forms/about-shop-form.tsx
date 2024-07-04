import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { useOnboardingContext } from "@/client/context/onboarding-context";
import { hearAboutOptions } from "@/client/data/common";
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

import { ImageDropzone } from "../../../atoms/image-dropzone";
import { SelectInput } from "../../../atoms/select-input";
import { Textarea } from "../../../atoms/textarea-input";
import { ResponseBox } from "../../common/response-box";

export const aboutShopSchema = object({
  aboutShop: string({
    required_error: "Please enter few sentences about your shop.",
  })
    .trim()
    .min(1, "Please enter few sentences about your shop"),

  shopImage: string({
    required_error: "Please add an image",
  }),

  hearAboutNiche: string({
    required_error: "Please select how you heard about Niche",
  }),
});

export type AboutShopInput = TypeOf<typeof aboutShopSchema>;

type AboutShopFormProps = {
  nextStep: () => void;
  skipStep: () => void;
};

export const AboutShopForm: FC<AboutShopFormProps> = ({
  nextStep,
  skipStep,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { selfServiceContext } = useOnboardingContext();
  const { selfServiceData, updateSelfServiceData } = selfServiceContext;
  const defaultValues = selfServiceData.aboutShopData;

  const form = useForm<AboutShopInput>({
    resolver: zodResolver(aboutShopSchema),
    mode: "onBlur",
    defaultValues,
  });

  const { handleSubmit, setValue } = form;

  const onSubmitHandler = async (value: AboutShopInput) => {
    setIsLoading(true);
    try {
      updateSelfServiceData("aboutShopData", value);
      if (nextStep) {
        nextStep();
      }
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
              name="aboutShop"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    Tell us about your shop (You can edit this at anytime)
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field}></Textarea>
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter few sentences about your shop (You can edit this at
                    anytime).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormLabel>
                Please provide a product picture as cover picture for your shop
              </FormLabel>
              <div className="space-y-3">
                <h6 className="(12px) font-default text-xxs leading-4 text-gray-1300 lg:text-xs">
                  Your picture must:
                </h6>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gray-2400"></span>
                    <span className="(10px) font-default text-xxs leading-4 text-gray-1300">
                      Have high resolution, so it is clear and crisp
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gray-2400"></span>
                    <span className="(10px) font-default text-xxs leading-4 text-gray-1300">
                      Be well lit, bright and natural lighting
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gray-2400"></span>
                    <span className="(10px) font-default text-xxs leading-4 text-gray-1300">
                      Not be more than 25MB
                    </span>
                  </li>
                </ul>
              </div>
              <FormField
                control={form.control}
                name="shopImage"
                render={() => (
                  <FormItem className=" space-y-2">
                    <FormControl>
                      <ImageDropzone
                        fieldName="shopImage"
                        setValue={setValue}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Add a cover image for your shop.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="hearAboutNiche"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                  <FormLabel htmlFor="hearAboutNiche">
                    How did you hear about Niche
                  </FormLabel>
                  <FormControl>
                    <SelectInput
                      options={hearAboutOptions}
                      placeholderText="Select option"
                      props={field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select how you heard about Niche.
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
