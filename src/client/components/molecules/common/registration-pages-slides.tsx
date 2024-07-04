"use client";

import {
  SliderProvider,
  SliderTrack,
  Slide,
  DotNav,
} from "@faceless-ui/slider";

import { registrationPagesSlidesData } from "@/client/data/common";

export const RegistrationPagesSlides = () => {
  return (
    <div className="absolute bottom-0 right-0 hidden w-64 max-w-[256px] items-center justify-center bg-red-1200 px-10 py-8 lg:flex xl:w-80 xl:max-w-xs xl:px-12 xl:py-10 2xl:w-96 2xl:max-w-sm 2xl:px-15 2xl:py-12">
      <SliderProvider
        slidesToShow={1}
        scrollable
        autoPlay
        scrollSnap
        autoplaySpeed={3000}
        pauseOnHover
      >
        <div className="flex flex-col space-y-5 xl:space-y-8 2xl:space-y-10">
          <SliderTrack className="flex h-full w-full snap-x snap-mandatory flex-nowrap items-stretch scroll-smooth scrollbar-hide">
            <>
              {registrationPagesSlidesData.map((slide, slideIndex) => {
                return (
                  <Slide
                    index={slideIndex}
                    key={slide.title}
                    className="flex flex-col space-y-2 2xl:space-y-3"
                  >
                    <h3 className="font-display text-xl font-semibold tracking-tight text-white 2xl:text-2xl">
                      {slide.title}
                    </h3>
                    <p className="leading-20 font-default text-sm text-pink-1200 2xl:text-base">
                      {slide.description}
                    </p>
                  </Slide>
                );
              })}
            </>
          </SliderTrack>

          <DotNav
            className="flex items-center space-x-1 transition-colors 2xl:space-x-2"
            dotClassName="w-2 h-2 2xl:w-2.5 2xl:h-2.5 bg-white/70 rounded-full"
            activeDotClassName="scale-125"
          />
        </div>
      </SliderProvider>
    </div>
  );
};
