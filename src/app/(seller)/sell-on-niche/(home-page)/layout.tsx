import { Suspense } from "react";

import SellerHomeNav from "@/client/components/layout/seller-home-nav";
import { Footer } from "@/components/layout/footer";

export default function SellOnNicheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback="...">
        <SellerHomeNav />
      </Suspense>
      <main className="flex w-full flex-col overflow-x-hidden lg:items-center lg:justify-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
