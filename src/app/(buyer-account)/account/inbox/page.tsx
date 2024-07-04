"use client";

import { BackButton } from "@/client/components/molecules/common/back-button";
import { NoNotificationPage } from "@/client/components/organisms/account/no-notification-page";
import { NotificationCard } from "@/client/components/organisms/account/notification-card";
import { buyerNotifications } from "@/client/data/sample";

export default function MyInbox() {
  const listIsEmpty = buyerNotifications.length <= 0;
  return (
    <div className="overflow-hidden">
      <div className="px-4 py-6 md:px-6 lg:hidden">
        <BackButton title="Back" href="/account" linkClassName="text-sm" />
      </div>
      <h1 className="w-full border-b border-b-gray-3900 px-5 pb-5 text-center font-display text-sm font-medium tracking-tight012 text-black md:px-6 md:pb-6 md:text-base lg:py-4 lg:text-left lg:text-lg lg:font-semibold xl:py-6 2xl:px-10 2xl:py-8 2xl:text-xl">
        My Inbox
      </h1>
      {listIsEmpty ? (
        <NoNotificationPage />
      ) : (
        <ul className="flex flex-col gap-3 p-2 md:gap-4 md:p-4 2xl:gap-5 2xl:px-5 2xl:py-8">
          {buyerNotifications.map((notification) => {
            return (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
