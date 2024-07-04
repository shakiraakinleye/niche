// import "../../globals.css"''
// import "../customs.css";
// commented because its present in app layout
// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";

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
};

export const viewport = {
  themeColor: "#FFF",
};

export default function SellerLayout({
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
            "flex min-h-screen flex-col scroll-smooth bg-beige-100",
            playfairDisplay.variable,
            dmSans.variable
          )}
          suppressHydrationWarning={true}
        >
          {children}
          <ToastWrapper />
          {/* <Analytics /> */}
        </body>
      </OnboardingDataProvider>
      {/* </SessionProvider> */}
    </html>
  );
}
