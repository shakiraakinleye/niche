"use client";

import { useState, useContext } from "react";

import { Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

import { Button } from "@/client/components/atoms/button";
import { ImageDropzone } from "@/client/components/atoms/image-dropzone";
import { TransparentInput } from "@/client/components/atoms/input";
import { Textarea } from "@/client/components/atoms/textarea-input";
import { ShopContext, ShopContextType } from "@/client/context/shop-context";

import { ShopnameRequirementChecklist } from "../../common/requirement-checklist";
import { toastMessage } from "../../common/toast";
import { aboutShopSchema } from "../../onboarding/forms/about-shop-form";
import { startSchema } from "../../onboarding/forms/start-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../react-hook-form/form";

export const storefrontSettingsSchema = object({
  shopImage: string({
    required_error: "Please add a shop image",
  }),

  shopName: startSchema.shape.shopName,

  aboutShop: aboutShopSchema.shape.aboutShop,
});

export type StorefrontSettingsInput = TypeOf<typeof storefrontSettingsSchema>;

export const StorefrontSettingsForm = () => {
  const { shop, editShopName, editAbout, changeImage } = useContext(
    ShopContext
  ) as ShopContextType;

  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onSubmitHandler = async (value: StorefrontSettingsInput) => {
    setIsLoading(true);
    // const storeData = {
    //   key: "storefront-data",
    //   value: value,
    // };
    try {
      // if (shop.image !== value.shopImage) changeImage(value.shopImage);
      if (shop.shopName !== value.shopName) editShopName(value.shopName);
      if (shop.aboutShop !== value.aboutShop) editAbout(value.aboutShop);
      // todo - save in db then display alert
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

  const form = useForm<StorefrontSettingsInput>({
    resolver: zodResolver(storefrontSettingsSchema),
    mode: "onBlur",
    defaultValues: {
      // shopImage: shop.image,
      shopName: shop.shopName,
      aboutShop: shop.aboutShop,
    },
  });

  const { handleSubmit, setValue } = form;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 2xl:mb-8">
        <h2 className="text-center font-display text-sm font-semibold leading-5 tracking-tight015 text-black md:text-left 2xl:text-base 2xl:leading-6">
          Storefront
        </h2>
        <h3 className="font-default text-xxs leading-4 text-black 2xl:text-xs 2xl:leading-5">
          Edit your storefront profile and have the changes updated in minutes
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col space-y-8 lg:space-y-10"
        >
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="shopImage"
              render={({ field }) => (
                <FormItem className="items-start space-y-2">
                  <FormControl>
                    <ImageDropzone
                      type="avatarView"
                      fieldName="shopImage"
                      setValue={setValue}
                      initialValue={field.value}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Add a cover image for your shop.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shopName"
              render={({ field, fieldState: { isDirty } }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Shop Name</FormLabel>
                  <FormControl>
                    <TransparentInput
                      type="text"
                      {...field}
                      className="text-xs leading-4 text-black md:text-xs md:leading-5 lg:text-xs lg:leading-5 xl:text-xs 2xl:text-xs 2xl:leading-5"
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Change your shop name
                  </FormDescription>
                  <FormMessage />
                  <Transition
                    show={isDirty}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform -translate-y-5 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform translate-y-0 opacity-100"
                    leaveTo="transform -translate-y-5 opacity-0"
                  >
                    <ShopnameRequirementChecklist shopname={field.value} />
                  </Transition>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutShop"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>
                    Tell us about your shop (Do not exceed 250 words)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="rounded-smd border border-solid border-gray-2700 bg-transparent text-xs leading-4 text-black focus:border-none md:text-xs md:leading-5 lg:text-xs lg:leading-5 xl:text-xs 2xl:text-xs 2xl:leading-5"
                    ></Textarea>
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter few sentences about your shop.
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
            Save changes
          </Button>
        </form>
      </Form>
    </div>
  );
};
