export type ProductVariantDisplayProps = {
  variant: string;
  variantValues: string[];
};

export const ProductVariantDisplay = ({
  variant,
  variantValues,
}: ProductVariantDisplayProps) => {
  return (
    <p className="flex flex-col items-start gap-3 font-default text-xs leading-5 tracking-tight01 text-black lg:flex-row lg:items-center lg:gap-4 lg:text-sm 2xl:gap-6 2xl:text-base 2xl:leading-6">
      <span className="font-medium capitalize">{variant}</span>
      <p className="flex items-center gap-1 lg:gap-2 2xl:gap-4">
        {variantValues.map((value) => {
          return (
            <span
              key={`${variant}-${value}`}
              className="flex items-center justify-center rounded-full bg-gray-3400 px-4 py-2 font-medium lg:font-bold"
            >
              {value}
            </span>
          );
        })}
      </p>
    </p>
  );
};
