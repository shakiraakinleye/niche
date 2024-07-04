import { CategoriesSlider } from "@/client/components/molecules/home/category/categories-slider";

export const ShopByCategory = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-4.5 pb-8 pt-10 md:px-6 lg:px-0 lg:py-16 lg:pl-8  xl:py-20 xl:pl-12 2xl:gap-10 2xl:py-25 2xl:pl-16">
        <h2 className="font-display text-xl font-bold leading-10 tracking-tight01 text-dark-200 lg:text-2xl 2xl:text-2xxl">
          Shop By Category
        </h2>
        <CategoriesSlider />
      </div>
    </section>
  );
};
