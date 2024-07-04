import { HelpCircle, Bell } from "lucide-react";
import Link from "next/link";

import { dashboardIcons } from "@/client/data/common";
import useWindowSize from "@/client/lib/hooks/use-window-size";
import { dateTimeFormatter } from "@/client/lib/utils";
import { cn } from "@/client/lib/utils";

import { LinkButton } from "../../atoms/link-button";
import Tooltip from "../../organisms/common/tooltip";

export const ViewShopButton = ({
  className,
  shopName,
}: {
  className?: string;
  shopName: string;
}) => {
  const { isDesktop } = useWindowSize();

  return (
    <LinkButton
      href={`/shop/${shopName.toLowerCase()}`}
      variant={isDesktop ? "beigeOutline" : "beigeFilled"}
      className={cn(
        "inline-block shrink-0 px-4 py-2 font-default text-sm font-bold leading-5 text-tertiary-100 md:leading-6 lg:text-base 2xl:px-6 2xl:py-3",
        className
      )}
    >
      View Shop
    </LinkButton>
  );
};

export const DashboardHelpButton = ({
  supportLinks,
}: {
  supportLinks: any;
}) => {
  const supportList = (
    <ul className="flex flex-col gap-2 px-6 pb-6 pt-4 2xl:gap-4 2xl:px-8 2xl:pb-12 2xl:pt-6">
      {supportLinks.map((link: any) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className="inline-block w-full font-default text-sm leading-6.5 tracking-tight012 text-dark-500 hover:text-dark-500/80 2xl:text-lg "
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Tooltip
      content={supportList}
      triggerClassName="inline-flex items-center focus:border-transparent focus:outline-0 focus:ring-0"
      contentClassName="bg-white rounded-2xl mr-5"
    >
      <HelpCircle strokeWidth={1.5} className="h-6 w-6 text-zinc-700" />
    </Tooltip>
  );
};

export const DashboardNotificationButton = ({
  notifications,
}: {
  notifications: any;
}) => {
  const notificationsList = (
    <ul className="flex flex-col">
      {notifications.map((notification: any) => {
        const { id, category, title, content, href, date } = notification;
        const NotificationIcon = dashboardIcons.get(category);
        const { dayMonthString, timeString } = dateTimeFormatter(date);

        return (
          <li key={id}>
            <Link
              href={href}
              className="group flex gap-2 px-2.5   py-1.5 hover:bg-gray-100 md:px-4 md:py-2 2xl:gap-2.5 "
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xlg border-2 border-dark-700 bg-dark-700 2xl:h-10 2xl:w-10">
                <NotificationIcon
                  className="h-4 w-4 text-white 2xl:h-5 2xl:w-5"
                  strokeWidth={1.5}
                />
              </span>
              <div className="flex grow flex-col gap-1">
                <p className="flex gap-2.5 font-default leading-6 tracking-tight">
                  <span className="text-sm font-semibold text-black 2xl:text-base">
                    {title}
                  </span>
                  <span className="text-xs text-gray-2900 2xl:text-sm">
                    {dayMonthString} at {timeString}
                  </span>
                </p>
                <p className="font-default text-xs leading-5 tracking-tight005 text-black 2xl:text-sm ">
                  {content}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Tooltip
      content={notificationsList}
      triggerClassName="inline-flex items-center focus:border-transparent focus:outline-0 focus:ring-0"
      contentClassName="bg-white rounded-2xl max-w-sm mr-5"
    >
      <p className="relative">
        <Bell strokeWidth={1.5} className="h-6 w-6 text-zinc-700" />
        <span className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 font-default text-xxs font-bold text-white">
          {notifications.length}
        </span>
      </p>
    </Tooltip>
  );
};

// fix - links type
