"use client";

import { Slide } from "@faceless-ui/slider";

import { homepageProductCategories } from "@/client/data/common";
import { Slider } from "@/components/molecules/common/slider";

import { CategoryCard } from "./category-card";

export const CategoriesSlider = () => {
  return (
    <div className="max-w-full">
      <Slider showSlideButtons={true}>
        <>
          {homepageProductCategories.map((category, categoryIndex) => {
            return (
              <Slide
                index={categoryIndex}
                key={category.title}
                className="max-w-fit"
              >
                <CategoryCard category={category} />
              </Slide>
            );
          })}
        </>
      </Slider>
    </div>
  );
};
