// import "../../globals.css";
// import "../../customs.css";
// commented because its present in app layout
// import { Analytics } from "@vercel/analytics/react";

import cx from "classnames";

import {
  SellerDashboardTopNav,
  SellerDashboardSideDesktopNav,
  SellerDashboardBottomNav,
} from "@/client/components/layout/seller-dashboard";
import { ToastWrapper } from "@/client/components/molecules/common/toast";
import { OnboardingDataProvider } from "@/client/context/onboarding-context";
import { playfairDisplay, dmSans } from "@/client/fonts";

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
  viewport: {
    themeColor: "#FFF",
  },
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <SessionProvider> */}
      <OnboardingDataProvider>
        <body
          className={cx(
            "max-w-screen flex h-full flex-col scroll-smooth bg-beige-100",
            playfairDisplay.variable,
            dmSans.variable
          )}
          suppressHydrationWarning={true}
        >
          <main className="relative flex min-h-full">
            <SellerDashboardSideDesktopNav />
            <div className="relative mb-20 flex w-full flex-col md:mb-0">
              <SellerDashboardTopNav />
              {children}
            </div>
            <SellerDashboardBottomNav />
          </main>
          {/* <Analytics /> */}
          <ToastWrapper />
        </body>
      </OnboardingDataProvider>
      {/* </SessionProvider> */}
    </html>
  );
}
