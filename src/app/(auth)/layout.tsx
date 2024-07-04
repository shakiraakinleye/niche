// import "../globals.css";
// import "../customs.css";
// commented because its present in app layout
// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Image from "next/image";

import { BrandTextLogo } from "@/client/components/atoms/brand-text-logo";
import { RegistrationPagesSlides } from "@/client/components/molecules/common/registration-pages-slides";
import { ToastWrapper } from "@/client/components/molecules/common/toast";
import { playfairDisplay, dmSans } from "@/client/fonts";
import backgroundImage from "@/client/images/background-auth.jpg";

// todo ensure this page don't show when not auth in middleware...

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          "flex h-full flex-col scroll-smooth bg-beige-100",
          playfairDisplay.variable,
          dmSans.variable
        )}
        suppressHydrationWarning={true}
      >
        <main className="relative flex min-h-full justify-center md:px-12 lg:grid lg:grid-cols-5 lg:px-0">
          <div className="hidden sm:contents lg:relative lg:col-span-3 lg:block">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={backgroundImage}
              alt="background-img"
              priority={true}
            />
            <RegistrationPagesSlides />
          </div>
          <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-10 lg:col-span-2 lg:px-12 2xl:px-16">
            <div className="mx-auto w-full sm:px-4 md:px-0">
              <div className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20">
                <BrandTextLogo />
              </div>
              {children}
            </div>
          </div>
        </main>
        <ToastWrapper />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
