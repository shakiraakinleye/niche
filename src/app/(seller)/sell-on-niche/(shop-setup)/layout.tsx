import Image from "next/image";

import { BrandTextLogo } from "@/client/components/atoms/brand-text-logo";
import backgroundImage1 from "@/client/images/background-seller-onboarding-1.png";

// todo ensure this page don't show when not auth in middleware...

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-full justify-center md:px-12 lg:grid lg:grid-cols-7 lg:px-0">
      <div className="hidden sm:contents lg:relative lg:col-span-4 lg:block">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundImage1}
          alt="background-img"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-10 lg:col-span-3 lg:px-12 2xl:px-16">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-112 md:max-w-md md:px-0 lg:w-full lg:max-w-5xl">
          <div className="mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
            <BrandTextLogo />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
