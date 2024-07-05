import { useState, Dispatch, SetStateAction } from "react";

import { Trash } from "lucide-react";
import { useFieldArray, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/molecules/react-hook-form/form";

import { Button } from "../../atoms/button";
import { TransparentInput } from "../../atoms/input";
import { ProductVariantDisplay } from "../../atoms/product-variant-display";
import { SelectInput } from "../../atoms/select-input";

export const VariantSelector = ({
  variants,
  variantSelectionHandler,
}: {
  variants: string[];
  variantSelectionHandler: (e: any) => void;
}) => {
  const props = {
    onChange: variantSelectionHandler,
    name: "variant",
  };
  return (
    <SelectInput
      options={variants}
      props={props}
      placeholderText="Select option"
      triggerClassName="lg:bg-transparent lg:rounded-smd lg:border lg:border-solid lg:border-gray-2700"
    />
  );
};

export const DisplayAddedVariants = ({
  variant,
  fieldValues,
  setIsEditing,
}: {
  variant: string;
  fieldValues: { value: string }[];
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}) => {
  const editVariantHandler = () => {
    setIsEditing(true);
  };

  if (fieldValues && fieldValues.length > 0) {
    const variantValues = fieldValues.map((value) => {
      return value.value;
    });
    return (
      <div className="flex items-end justify-between lg:items-center">
        <ProductVariantDisplay
          variant={variant}
          variantValues={variantValues}
        />
        <Button
          type="button"
          borderRadius="full"
          onClick={() => editVariantHandler()}
          className="2xl:txt-base border border-gray-1300 bg-white px-4 py-1 font-default text-sm leading-5 text-gray-1300 hover:bg-gray-1300 hover:text-white 2xl:px-5 2xl:py-1.5 2xl:leading-6"
        >
          Edit
        </Button>
      </div>
    );
  }

  return null;
};

export const ShowVariantForm = ({
  form,
  selectedVariant,
  closeVariantForm,
}: {
  form: any;
  selectedVariant: string;
  closeVariantForm: (selectedVariant: string) => void;
}) => {
  const { reset, control } = form;

  const {
    fields: sizeFields,
    append: appendSize,
    remove: removeSize,
  } = useFieldArray({
    control,
    name: "size",
  });
  const {
    fields: colorFields,
    append: appendColor,
    remove: removeColor,
  } = useFieldArray({
    control,
    name: "color",
  });

  let variantFields: FieldValues[];
  let appendVariant: any;
  let removeVariant: any;

  switch (selectedVariant) {
    case "size":
      variantFields = sizeFields;
      appendVariant = appendSize;
      removeVariant = removeSize;
      break;
    case "color":
      variantFields = colorFields;
      appendVariant = appendColor;
      removeVariant = removeColor;
      break;
    default:
      variantFields = [];
      appendVariant = null;
      removeVariant = null;
  }

  const closeVariantFormHandler = () => {
    closeVariantForm(selectedVariant);
  };

  const deleteVariantHandler = () => {
    reset({ [selectedVariant]: [] });
    closeVariantFormHandler();
  };

  return (
    <FormField
      control={form.control}
      name={selectedVariant}
      defaultValue={[]}
      render={({ field: { onChange, value } }) => (
        <FormItem className="space-y-4">
          <div className="flex flex-col gap-4">
            <FormLabel>Variant</FormLabel>
            <div className="flex gap-6">
              <TransparentInput
                placeholder={selectedVariant}
                disabled
                className="capitalize disabled:opacity-100"
              />
              <Button type="button" onClick={() => deleteVariantHandler()}>
                <Trash
                  className="h-6 w-6 text-dark-400 hover:text-red-1200"
                  strokeWidth="1.5"
                />
              </Button>
            </div>
          </div>

          <FormControl>
            <div className="flex flex-col gap-1">
              <FormLabel>Variant value</FormLabel>
              <div>
                {variantFields.map((field, index) => (
                  <div key={field.id} className="flex gap-6">
                    <TransparentInput
                      type="text"
                      onChange={(e) => {
                        const updatedValues = [...value];
                        updatedValues[index].value = e.target.value;
                        onChange(updatedValues);
                      }}
                      defaultValue={field.value}
                      className="xl:text-sm"
                    />
                    <Button type="button" onClick={() => removeVariant(index)}>
                      <Trash
                        className="h-6 w-6 text-dark-400  hover:text-red-1200"
                        strokeWidth="1.5"
                      />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="beigeOutline"
                  onClick={() => appendVariant({ value: "" })}
                  className="h-10 w-full justify-start px-3 py-2 font-default text-xs text-gray-1300/45 md:text-sm lg:h-12 2xl:h-14"
                >
                  Add value
                </Button>
              </div>
            </div>
          </FormControl>
          <FormDescription className="sr-only">
            Select a variant.
          </FormDescription>
          <FormMessage />
          <Button
            type="button"
            variant="outline"
            onClick={() => closeVariantFormHandler()}
            className="mt-8 px-6 py-3 font-default text-xs font-medium leading-4 text-dark-600 2xl:text-sm 2xl:leading-5"
          >
            Done
          </Button>
        </FormItem>
      )}
    />
  );
};

export const AddVariant = ({
  form,
  variants,
}: {
  form: any;
  variants: string[];
}) => {
  const [showVariantSelector, setShowVariantSelector] = useState(false);
  const [isEditingSize, setIsEditingSize] = useState(false);
  const [isEditingColor, setIsEditingColor] = useState(false);

  const { watch } = form;
  const sizeFieldValues = watch("size");
  const colorFieldValues = watch("color");

  const variantSelectionHandler = (value: string) => {
    const selected = value;
    setShowVariantSelector(false);
    switch (selected) {
      case "size":
        setIsEditingSize(true);
        break;
      case "color":
        setIsEditingColor(true);
        break;
    }
  };

  const closeVariantForm = (selected: string) => {
    switch (selected) {
      case "size":
        setIsEditingSize(false);
        break;
      case "color":
        setIsEditingColor(false);
        break;
    }
  };

  const displayVariantFieldDescriptionText = () => {
    if (
      showVariantSelector ||
      isEditingSize ||
      isEditingColor ||
      sizeFieldValues?.length > 0 ||
      colorFieldValues?.length > 0
    )
      return false;
    else return true;
  };

  return (
    <div className="space-y-6">
      <h3 className="font-default text-base font-medium leading-5.5 text-black">
        Variants
      </h3>
      <div className=":border-gray-2600/30 flex flex-col gap-y-5 rounded-smd border bg-white px-5 py-3 lg:space-y-2.5 lg:px-8 lg:py-5">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col items-center justify-between gap-y-6 lg:flex-row">
            {/* <div className={cx("flex flex-col items-center justify-between gap-y-6 lg:flex-row", displayVariantFieldDescriptionText() && "justify-start" )}> */}
            {displayVariantFieldDescriptionText() && (
              <>
                <p className="font-default text-sm leading-5 text-gray-2300 lg:hidden">
                  Add Variants if this product comes in different options, like
                  size or colors.
                </p>
                <p className="hidden font-default text-sm font-medium leading-8 text-gray-1300 lg:inline-block">
                  Product Variants
                </p>
              </>
            )}
            {!showVariantSelector && (
              <Button
                type="button"
                onClick={() => setShowVariantSelector(true)}
                className="font-default text-sm font-bold leading-8 text-tertiary-100 transition-colors hover:text-tertiary-100/70"
              >
                +Add variants
              </Button>
            )}
          </div>
          <div className="flex flex-col gap-y-4 empty:hidden ">
            {showVariantSelector && (
              <VariantSelector
                variants={variants}
                variantSelectionHandler={variantSelectionHandler}
              />
            )}

            {isEditingSize ? (
              <ShowVariantForm
                form={form}
                selectedVariant={"size"}
                closeVariantForm={closeVariantForm}
              />
            ) : (
              <DisplayAddedVariants
                variant="size"
                fieldValues={sizeFieldValues}
                setIsEditing={setIsEditingSize}
              />
            )}
            {isEditingColor ? (
              <ShowVariantForm
                form={form}
                selectedVariant={"color"}
                closeVariantForm={closeVariantForm}
              />
            ) : (
              <DisplayAddedVariants
                variant="color"
                fieldValues={colorFieldValues}
                setIsEditing={setIsEditingColor}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
