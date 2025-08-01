"use client";

import { BackButton } from "@/client/components/molecules/common/back-button";
import { PayoutSettingsForm } from "@/client/components/molecules/dashboard/forms";

export default function PayoutsSettingsPageMobile() {
  return (
    <div className="flex flex-col gap-4 p-4 md:px-8 md:pb-3 md:pt-6">
      <BackButton title="Settings" href="/dashboard/settings" />
      <PayoutSettingsForm />
    </div>
  );
}
