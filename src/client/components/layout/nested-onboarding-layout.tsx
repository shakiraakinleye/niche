"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/client/lib/utils";

// todo ensure this page don't show when not auth in middleware...

export type NestedLayoutProps = {
  children: React.ReactNode;
  backgroundImage?: StaticImageData;
};

export default function NestedOnboardingLayout({
  backgroundImage,
  children,
}: NestedLayoutProps) {
  const path = usePathname().split("/").pop();
  // console.log(lang);
  return (
    <div
      className={cn(
        "relative flex min-h-full justify-center",
        path !== "add-listing" && "md:px-12 lg:grid lg:grid-cols-5 lg:px-0"
      )}
    >
      {backgroundImage && (
        <div
          className={cn(
            "hidden",
            path !== "add-listing" &&
              "sm:contents lg:relative lg:col-span-3 lg:block"
          )}
        >
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt="background-img"
            priority={true}
          />
        </div>
      )}
      <div
        className={cn(
          "relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-10 lg:px-12 2xl:px-16",
          path === "add-listing"
            ? "w-full lg:border lg:border-zinc-200 lg:bg-beige-400"
            : "lg:col-span-2"
        )}
      >
        <div
          className={cn(
            "mx-auto w-full sm:px-4 md:px-0",
            path !== "add-listing" &&
              "max-w-md md:w-112 md:max-w-md lg:w-full lg:max-w-5xl"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
