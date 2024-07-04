import { BackButton } from "@/client/components/molecules/common/back-button";
import { BuyerProfileForm } from "@/client/components/organisms/account/buyer-profile-form";

export default async function MyProfile() {
  return (
    <div className="overflow-hidden">
      <div className="px-4 py-6 md:px-6 lg:hidden">
        <BackButton title="Back" href="/account" linkClassName="text-sm" />
      </div>
      <h1 className="w-full border-b border-b-gray-3900 px-5 pb-5 text-center font-display text-sm font-medium tracking-tight012 text-black md:px-6 md:pb-6 md:text-base lg:py-4 lg:text-left lg:text-lg lg:font-semibold xl:py-6 2xl:px-10 2xl:py-8 2xl:text-xl">
        My Account
      </h1>
      <BuyerProfileForm />
    </div>
  );
}
