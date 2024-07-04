"use client";

import { Tab } from "@headlessui/react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/client/lib/utils";

export const ProductImages = ({
  images,
  productName,
}: {
  images: StaticImageData[];
  productName: string;
}) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image, imageIndex) => (
            <Tab
              key={imageIndex}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-smd bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">
                    {productName}-{imageIndex}
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      src={image}
                      alt={`${productName}-${imageIndex}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={cn(
                      selected ? "ring-primary-100" : "ring-transparent",
                      "pointer-events-none absolute inset-0 rounded-md ring-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
        {images.map((image, imageIndex) => (
          <Tab.Panel key={imageIndex}>
            <Image
              src={image}
              alt={`${productName}-${imageIndex}`}
              className="h-full max-h-72 w-full rounded-smd object-cover object-center md:max-h-120"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
