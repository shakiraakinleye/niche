import {
  SliderProvider,
  SliderTrack,
  SliderButton,
  useSlider,
} from "@faceless-ui/slider";
import { Transition } from "@headlessui/react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import { cn } from "@/client/lib/utils";

export type SliderProps = {
  children: React.ReactNode;
  containerClassName?: string;
  trackClassName?: string;
  showSlideButtons: boolean;
};

const TrackAndButtons = ({
  children,
  containerClassName,
  trackClassName,
  showSlideButtons,
}: SliderProps) => {
  const { currentSlideIndex } = useSlider();
  const firstSlideVisible = currentSlideIndex === 0;

  return (
    <div className={cn("relative max-w-full", containerClassName)}>
      <SliderTrack
        className={cn(
          "flex snap-x snap-mandatory flex-nowrap items-stretch gap-4 scroll-smooth scrollbar-hide xl:gap-6 2xl:gap-8",
          trackClassName
        )}
      >
        {children}
      </SliderTrack>

      {showSlideButtons && (
        <>
          <Transition
            show={!firstSlideVisible}
            enter="transition duration-150 ease-out"
            enterFrom="opacity-50 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition duration-100 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-50 scale-75"
            className="absolute left-8 top-1/3 z-20 md:left-12 lg:left-25"
          >
            <SliderButton
              direction="prev"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-2md hover:bg-gray-100 md:h-10 md:w-10 2xl:h-16 2xl:w-16"
            >
              <ChevronLeft className="h-4 w-4 text-dark-400 md:h-5 md:w-5 2xl:h-7 2xl:w-7" />
            </SliderButton>
          </Transition>

          <SliderButton
            direction="next"
            className="absolute right-8 top-1/3 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-2md hover:bg-gray-100 md:right-12 md:h-10 md:w-10 lg:right-25 2xl:h-16 2xl:w-16"
          >
            <ChevronRight className="h-4 w-4 text-dark-400 md:h-5 md:w-5 2xl:h-7 2xl:w-7" />
          </SliderButton>
        </>
      )}
    </div>
  );
};

export const Slider = ({
  children,
  containerClassName,
  trackClassName,
  showSlideButtons,
}: SliderProps) => {
  return (
    <SliderProvider slidesToShow={2}>
      <TrackAndButtons
        containerClassName={containerClassName}
        trackClassName={trackClassName}
        showSlideButtons={showSlideButtons}
      >
        {children}
      </TrackAndButtons>
    </SliderProvider>
  );
};
