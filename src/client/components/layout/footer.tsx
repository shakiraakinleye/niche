import { footerNavigation } from "@/client/data/navigation";
import { FooterCardDesktop } from "@/components/molecules/common/footer-card-desktop";
import { FooterCardMobile } from "@/components/molecules/common/footer-card-mobile";
import { FooterCopyright } from "@/components/molecules/common/footer-copyright";
import { SubscriptionForm } from "@/components/molecules/common/subscription-form";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-dark-100">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-4.5 py-7.5 md:px-6 md:py-8 lg:gap-5 lg:px-12 lg:py-10 xl:px-16 xl:py-12 2xl:px-20 2xl:py-16 ">
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-4 md:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:pb-6 xl:gap-32 2xl:gap-40">
            <p className="font-default text-base leading-5.5 text-white lg:hidden">
              Subscribe To Our Newsletter
            </p>
            <div className="hidden flex-col gap-3 lg:flex 2xl:gap-4">
              <h4 className="font-default text-xl font-bold leading-7 tracking-tight012 text-white 2xl:text-2xl 2xl:leading-8">
                Join our Community
              </h4>
              <p className="font-default text-base font-medium leading-5.5 tracking-tight012 text-gray-1500 2xl:text-lg 2xl:leading-6.5">
                By subscribing, you will receive regular updates on products and
                promotions, as well as exclusive contents and offers. No spam.
              </p>
            </div>
            <SubscriptionForm />
          </div>
          <ul className="space-y-4 md:space-y-6 lg:hidden">
            {footerNavigation.map((item) => {
              return <FooterCardMobile key={item.title} footerItem={item} />;
            })}
          </ul>
          <ul className="hidden grid-cols-5 gap-y-8 space-x-4 border-y border-y-gray-1500 py-6 lg:grid 2xl:gap-y-10 2xl:space-x-5">
            {footerNavigation.map((item) => {
              return <FooterCardDesktop key={item.title} footerItem={item} />;
            })}
          </ul>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
