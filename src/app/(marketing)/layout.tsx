import { Suspense } from "react";

import "../globals.css";
// import "../customs.css";
// commented because its present in app layout
// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";

import { ToastWrapper } from "@/client/components/molecules/common/toast";
import { playfairDisplay, dmSans } from "@/client/fonts";
import { Footer } from "@/components/layout/footer";
import Nav from "@/components/layout/nav";

export const metadata = {
  title: "Niche - Sell your brand. Sell your products. Buy what you love.",
  description: "Sell your brand. Sell your products. Buy what you love.",
  twitter: {
    card: "summary_large_image",
    title: "Niche - Sell your brand. Sell your products. Buy what you love.",
    description: "Sell your brand. Sell your products. Buy what you love.",
    creator: "@niche",
  },
  // metadataBase: new URL("https://niche.com"),
  viewport: {
    themeColor: "#FFF",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <SessionProvider> */}
      <body
        className={cx(
          "flex min-h-screen flex-col scroll-smooth bg-beige-100",
          playfairDisplay.variable,
          dmSans.variable
        )}
        suppressHydrationWarning={true}
      >
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex w-full flex-col lg:items-center lg:justify-center">
          {children}
        </main>
        <Footer />
        <ToastWrapper />
        {/* <Analytics /> */}
      </body>
      {/* </SessionProvider> */}
    </html>
  );
}
