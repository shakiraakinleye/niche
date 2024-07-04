import {
  HeroSection,
  UseNicheSection,
  NicheOffersSection,
  ChooseNicheSection,
  GettingStartedSection,
  SupportSection,
  GetStartedBanner,
} from "@/client/components/organisms/home/seller";

export default function SellerHomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <UseNicheSection />
      <NicheOffersSection />
      <ChooseNicheSection />
      <GettingStartedSection />
      <SupportSection />
      <GetStartedBanner />
    </div>
  );
}
