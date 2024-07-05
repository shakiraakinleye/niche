// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";

import { AccountMenu } from "@/client/components/layout/navigation/account-menu";
import { ToastWrapper } from "@/client/components/molecules/common/toast";
import { playfairDisplay, dmSans } from "@/client/fonts";
import Nav from "@/components/layout/nav";

export const metadata = {
  metadataBase: new URL("https://niche.com"),
  title: "Niche - Sell your brand. Sell your products. Buy what you love.",
  description: "Sell your brand. Sell your products. Buy what you love.",
  twitter: {
    card: "summary_large_image",
    title: "Niche - Sell your brand. Sell your products. Buy what you love.",
    description: "Sell your brand. Sell your products. Buy what you love.",
    creator: "@niche",
  },
};

export const viewport = {
  themeColor: "#FFF",
};

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          "flex min-h-screen flex-col scroll-smooth bg-beige-100",
          playfairDisplay.variable,
          dmSans.variable
        )}
        suppressHydrationWarning={true}
      >
        <Nav />
        <main className="flex w-full max-w-screen-xl grow items-start gap-x-12 pt-20 md:px-6 md:pb-6 md:pt-24 lg:pt-30 xl:mx-auto xl:px-12 xl:pt-32 2xl:gap-x-16 2xl:px-16 2xl:pt-36">
          <div className="hidden w-60 max-w-screen-xxs flex-col gap-y-4 rounded-lg border border-gray-3900 bg-white px-4 py-6 shadow-dropdown lg:flex 2xl:gap-y-6 2xl:py-8">
            <AccountMenu showActive={true} />
          </div>
          <div className="grow self-stretch overflow-hidden rounded-lg border border-gray-3900 bg-white">
            {children}
          </div>
        </main>
        <ToastWrapper />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
