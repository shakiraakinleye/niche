import React, { FC, useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { ImageDropzone } from "@/client/components/atoms/image-dropzone";
import { SelectInput } from "@/client/components/atoms/select-input";
import { Textarea } from "@/client/components/atoms/textarea-input";
import { useOnboardingContext } from "@/client/context/onboarding-context";
import {
  productVariants,
  productCategories,
  productConditions,
  productCurrencies,
} from "@/client/data/common";
import { defaultNumberInputIncrementDecrementHandler } from "@/client/lib/utils";
import { Button } from "@/components/atoms/button";
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

import { AddVariant } from "../../common/add-variant";
import {
  NewProductFormInput,
  newProductSchema,
} from "../../common/new-product-form";
import { toastMessage } from "../../common/toast";

type AddListingFormProps = {
  nextStep: () => void;
  skipStep: () => void;
};

export const AddListingForm: FC<AddListingFormProps> = ({
  nextStep,
  skipStep,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { addFirstListingContext } = useOnboardingContext();
  const { isFirstListingAdded, updateFirstListingAdded } =
    addFirstListingContext;

  const form = useForm<NewProductFormInput>({
    resolver: zodResolver(newProductSchema),
    mode: "onBlur",
  });
  const { handleSubmit, setValue, watch, register, unregister, resetField } =
    form;

  const onSubmitHandler = async (value: NewProductFormInput) => {
    setIsLoading(true);
    // const data = {
    //   key: "", //generate id to use as key
    //   value: value,
    // };

    try {
      // todo - push data to products db and if successful, proceed
      nextStep();
      toastMessage(
        "New product added",
        "You have added your first product",
        "success"
      );
      updateFirstListingAdded();
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

  const categories = Object.keys(productCategories);

  const categoryWatchOutput = watch("category");

  useEffect(() => {
    if (categoryWatchOutput) {
      const subcategories = productCategories[categoryWatchOutput];
      resetField("subcategory");
      if (subcategories) {
        register("subcategory");
      } else {
        // const omitSubcategoryFieldSchema: any = addListingSchema.omit({ subcategory: true });
        unregister("subcategory");
      }
    }
  }, [categoryWatchOutput, register, unregister, resetField]);
  // to-fix: schema should include subcategory if there are subcategories and should exclude if there are not

  const SubcatgeoryField = () => {
    const subcategories = productCategories[categoryWatchOutput];

    return (
      <>
        {categoryWatchOutput !== undefined && subcategories.length >= 1 && (
          <FormField
            control={form.control}
            name="subcategory"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel>Product subcategory</FormLabel>
                <FormControl>
                  <SelectInput
                    options={subcategories}
                    placeholderText="Select option"
                    triggerClassName="bg-transparent rounded-smd border border-solid border-gray-2700"
                    props={field}
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  Select the product&apos;s sub-category.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </>
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className=" flex flex-col gap-y-8 lg:gap-y-10"
      >
        <div className="space-y-6">
          <h3 className="font-default text-base font-medium leading-5.5 text-black">
            Product
          </h3>
          <div className="space-y-5 lg:space-y-2.5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <TransparentInput
                      type="text"
                      placeholder="Name of your product"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter the product&apos;s name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 rounded-smd border border-solid border-gray-2700 bg-transparent placeholder:text-gray-1300/45 focus:border-none md:h-36 lg:h-40 2xl:h-40"
                      placeholder="You are encouraged to add the brand and material to description. Your description can help you sell a product."
                      {...field}
                    ></Textarea>
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter a description of the product.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormLabel>
                Product Images
                <span className="text-xxs lg:text-xs">
                  {" "}
                  - Add at least 2 images
                </span>
              </FormLabel>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 lg:gap-x-10">
                <FormField
                  control={form.control}
                  name="image1"
                  render={() => (
                    <FormItem className=" space-y-2">
                      <FormControl>
                        <ImageDropzone fieldName="image1" setValue={setValue} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Add images of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image2"
                  render={() => (
                    <FormItem className="space-y-2">
                      <FormControl>
                        <ImageDropzone fieldName="image2" setValue={setValue} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Add images of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image3"
                  render={() => (
                    <FormItem className=" space-y-2">
                      <FormControl>
                        <ImageDropzone fieldName="image3" setValue={setValue} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Add images of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image4"
                  render={() => (
                    <FormItem className="space-y-2">
                      <FormControl>
                        <ImageDropzone fieldName="image4" setValue={setValue} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Add images of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
              <FormLabel>Price</FormLabel>

              <div className="flex items-end space-x-4">
                <FormField
                  control={form.control}
                  defaultValue={productCurrencies[0]}
                  name="currency"
                  render={({ field }) => (
                    <FormItem className="min-w-[100px] max-w-[100px] md:min-w-[120px] md:max-w-[120px]">
                      <FormControl>
                        <SelectInput
                          options={productCurrencies}
                          triggerClassName="lg:text-xs flex-inital bg-transparent rounded-smd border border-solid border-gray-2600/30"
                          props={field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter the product&apos;s price.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormControl>
                        <TransparentInput
                          type="number"
                          onKeyDown={(e) =>
                            defaultNumberInputIncrementDecrementHandler(e)
                          }
                          onWheel={(e) =>
                            defaultNumberInputIncrementDecrementHandler(e)
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter the product&apos;s price.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="space-y-2 ">
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <TransparentInput
                      type="number"
                      onKeyDown={(e) =>
                        defaultNumberInputIncrementDecrementHandler(e)
                      }
                      onWheel={(e) =>
                        defaultNumberInputIncrementDecrementHandler(e)
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter the quanitity of the product you have.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <TransparentInput type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter the product&apos;s brand.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-default text-base font-medium leading-5.5 text-black">
            Category
          </h3>
          <div className="space-y-5 lg:space-y-2.5">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>Product Category</FormLabel>
                  <FormControl>
                    <SelectInput
                      options={categories}
                      placeholderText="Select option"
                      triggerClassName="bg-transparent rounded-smd border border-solid border-gray-2700"
                      props={field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select the product&apos;s category.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubcatgeoryField />

            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>Condition</FormLabel>
                  <FormControl>
                    <SelectInput
                      options={productConditions}
                      placeholderText="Select option"
                      triggerClassName="bg-transparent rounded-smd border border-solid border-gray-2700"
                      props={field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Select the product&apos;s condition.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <AddVariant form={form} variants={productVariants} />

        <div className="mt-4 flex w-full flex-col gap-6 md:mt-6 md:grid md:grid-cols-2 md:gap-4 2xl:mt-12">
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
              Create Product
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
};
