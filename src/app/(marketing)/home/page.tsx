import React from "react";

import {
  HeroSection,
  PopularSection,
  ReviewSection,
  CTASection,
  ShopByCategory,
  ShopsSection,
} from "@/client/components/organisms/home/buyer";
import { reviews } from "@/client/data/sample";
import { StartShoppingBanner } from "@/components/molecules/home/start-shopping-banner";
import { SubscriptionCTABanner } from "@/components/molecules/home/subscription-cta-banner";

export default async function BuyerHomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ShopByCategory />
      <ShopsSection />
      <PopularSection />
      <section className="bg-gray-1200 py-28 pt-16 lg:pt-20 2xl:py-32 2xl:pt-25">
        <CTASection />
        <ReviewSection reviews={reviews} />
        <SubscriptionCTABanner />
      </section>
      <StartShoppingBanner />
    </div>
  );
}
