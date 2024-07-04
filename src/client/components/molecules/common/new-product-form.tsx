import React, { FC, useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, TypeOf, array, any } from "zod";

import {
  productVariants,
  productCategories,
  productConditions,
  productCurrencies,
} from "@/client/data/common";
import { defaultNumberInputIncrementDecrementHandler } from "@/client/lib/utils";
import { ProductType } from "@/client/types/product";
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

import { toastMessage } from "./toast";
import { ImageDropzone } from "../../atoms/image-dropzone";
import { SelectInput } from "../../atoms/select-input";
import { Textarea } from "../../atoms/textarea-input";
import { AddVariant } from "../common/add-variant";

export const newProductSchema = object({
  name: string({
    required_error: "Please enter a product name",
  })
    .trim()
    .min(1, { message: "Please enter a product name" }),

  description: string().optional(),

  image1: any(),
  // image1: string({
  //   required_error: "Please add an image",
  // }),
  image2: string({
    required_error: "Please add an image",
  }),
  image3: string().optional(),
  image4: string().optional(),
  // improve image validation

  currency: string({
    required_error: "Please select a currency",
  }),

  price: string({
    required_error: "Please enter product price",
    invalid_type_error: "Please enter a valid product price",
  })
    .trim()
    .min(1, { message: "Please enter product price" })
    .refine((value) => {
      const priceRegex = /^[0-9]+(?:\.[0-9]+)?$/;
      return priceRegex.test(value[1]);
    }, "Please enter a valid price"),

  quantity: string({
    required_error: "Please enter the quantity of the product available",
  })
    .trim()
    .min(1, { message: "Please enter the quantity of the product available" })
    .regex(/^\d+$/, { message: "Please enter a valid quantity" }),

  brand: string({
    required_error: "Please enter the brand of your product",
  })
    .trim()
    .min(1, { message: "Please enter the brand of your product" }),

  category: string({
    required_error: "Please select a product category",
  }),

  subcategory: string({
    required_error: "Please select a sub-category",
  }).optional(),
  // to-fix this should not be optional

  condition: string({
    required_error: "Please select product condition",
  }),

  size: array(
    object({
      value: string().trim().min(1, { message: "Input a size to empty field" }),
    })
  ).optional(),

  color: array(
    object({
      value: string()
        .trim()
        .min(1, { message: "Input a color to empty field" }),
    })
  ).optional(),
});

export type NewProductFormInput = TypeOf<typeof newProductSchema>;

export type NewProductFormProps = {
  title?: string;
  subtitle?: string;
  saveButtonText: string;
  cancelButtonText: string;
  footer?: React.ReactNode;
  onSubmit: any;
  onCancel: any;
  productData?: ProductType;
};

export const NewProductForm: FC<NewProductFormProps> = ({
  title,
  subtitle,
  saveButtonText,
  cancelButtonText,
  footer,
  onSubmit,
  onCancel,
  productData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<NewProductFormInput>({
    resolver: zodResolver(newProductSchema),
    mode: "onBlur",
  });
  const {
    handleSubmit,
    setValue,
    reset,
    watch,
    register,
    unregister,
    resetField,
  } = form;

  useEffect(() => {
    if (productData) {
      reset({
        ...productData,
        // currency: productData.currency.toString(),
        price: productData.price.toString(),
        quantity: productData.quantity.toString(),
        size: productData?.size?.map((s) => {
          const sObj = {
            value: s,
          };
          return sObj;
        }),
        color: productData?.color?.map((c) => {
          const cObj = {
            value: c,
          };
          return cObj;
        }),
        image1: productData?.image1,
      });
    }
  }, [productData, reset]);

  const onSubmitHandler = async (value: NewProductFormInput) => {
    setIsLoading(true);
    const data = {
      key: "add-listing", //the key/id should be from the defaultValues if editing or generate new one if new product
      value: value,
    };

    try {
      onSubmit(data); // todo - push data to products db and if successful, proceed
      const toastTitle = productData ? "Changes Saved" : "New Product Added";
      toastMessage(toastTitle, "", "success");
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

  const onCancelHandler = () => {
    reset();
    onCancel();
  };

  const categories = Object.keys(productCategories);

  const categoryWatchOutput = watch("category");
  // const categoryWatchOutput = watch('category') as CategoryKeys;

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
        {categoryWatchOutput !== undefined && subcategories?.length >= 1 && (
          <FormField
            control={form.control}
            name="subcategory"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel>Product Subcategory</FormLabel>
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
    <div className="rounded-xlg bg-white py-4 lg:px-8 lg:py-6 xl:px-10 xl:py-8">
      {(title || subtitle) && (
        <div className="mb-6 hidden flex-col items-center space-y-4 lg:flex 2xl:mb-8">
          <h1 className="font-display text-xl font-semibold leading-7 tracking-tight text-black 2xl:text-2xl 2xl:leading-8">
            {title}
          </h1>
          <h2 className="font-display text-sm font-semibold leading-5.5 tracking-tight015 text-gray-2500 2xl:text-base">
            {subtitle}
          </h2>
        </div>
      )}

      <span>{JSON.stringify(form.watch(), null, 5)}</span>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className=" flex flex-col gap-y-8 lg:gap-y-10"
        >
          <div className="space-y-6">
            <h3 className="font-default text-base font-medium leading-5.5 text-black">
              Product
            </h3>
            <div className="space-y-5 lg:space-y-2.5 lg:rounded-smd lg:border lg:border-gray-2600/30 lg:px-8 lg:py-5">
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
                <FormLabel>Product Images</FormLabel>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4 lg:gap-x-10">
                  <FormField
                    control={form.control}
                    name="image1"
                    render={() => (
                      <FormItem className=" space-y-2">
                        <FormControl>
                          <ImageDropzone
                            fieldName="image1"
                            setValue={setValue}
                          />
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
                          <ImageDropzone
                            fieldName="image2"
                            setValue={setValue}
                          />
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
                          <ImageDropzone
                            fieldName="image3"
                            setValue={setValue}
                          />
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
                          <ImageDropzone
                            fieldName="image4"
                            setValue={setValue}
                          />
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

              <div className="flex flex-col space-y-5 lg:grid lg:grid-cols-2 lg:space-x-10 lg:space-y-0 2xl:space-x-13">
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
                    <FormItem className="grow space-y-2">
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
              </div>

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
            <div className="space-y-5 lg:space-y-2.5 lg:rounded-smd lg:border lg:border-gray-2600/30 lg:px-8 lg:py-5">
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

          <div className="pb-6 pt-10 md:pb-8 md:pt-14 lg:pb-12 lg:pt-20 2xl:pb-15 2xl:pt-30">
            <div className="flex justify-between">
              <Button
                type="submit"
                loading={isLoading}
                variant="primaryFilled"
                size="sm"
                spinnerColor="fill-primary-100"
                loadingText="Saving progress..."
                loadingBgColor="current-color"
                loadingTextClassName="text-inherit"
                className="font-default text-base font-bold leading-7 text-white hover:text-primary-100 xl:text-lg 2xl:text-xl"
              >
                {saveButtonText}
              </Button>
              <Button
                type="button"
                onClick={() => onCancelHandler()}
                variant="outline"
                size="wide"
                className="font-default text-sm font-medium leading-5 text-dark-600 hover:bg-gray-1200 "
              >
                {cancelButtonText}
              </Button>
            </div>
          </div>
        </form>
      </Form>
      {footer}
    </div>
  );
};
