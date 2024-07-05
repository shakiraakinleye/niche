import { Dispatch, SetStateAction } from "react";

import { ProductType } from "@/client/types/product";

import { NewProductForm } from "../../common/new-product-form";

export const AddProduct = ({
  setShowAddProductForm,
  setSelectedProduct,
  productData,
}: {
  setShowAddProductForm: Dispatch<SetStateAction<boolean>>;
  setSelectedProduct: Dispatch<SetStateAction<null>>;
  productData?: ProductType;
}) => {
  const onSubmit = (data: { key: string; value: object }) => {
    console.log("data", data);
    // todo - push data to products db
    setShowAddProductForm(false);
    setSelectedProduct(null);
  };
  const onCancel = () => {
    setShowAddProductForm(false);
    setSelectedProduct(null);
  };

  return (
    <div className="rounded-t-xlg bg-white px-4 pb-6 pt-2 md:px-4 md:pb-10 md:pt-3 lg:p-0">
      <NewProductForm
        title={productData ? "Edit Product" : "New Product"}
        productData={productData}
        onSubmit={onSubmit}
        onCancel={onCancel}
        saveButtonText="Save"
        cancelButtonText="Cancel"
      />
    </div>
  );
};
