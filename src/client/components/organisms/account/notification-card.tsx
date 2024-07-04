import { dateTimeFormatter } from "@/client/lib/utils";
import { BuyerNotificationType } from "@/client/types/notification";

export const NotificationCard = ({
  notification,
}: {
  notification: BuyerNotificationType;
}) => {
  const { date, title, subtitle } = notification;
  const { dayMonthString } = dateTimeFormatter(date);

  return (
    <li className="flex flex-col items-start gap-2 rounded-smd border border-gray-3900 p-3 text-xs leading-4.5 md:p-4 md:text-sm md:leading-5 2xl:gap-2.5 2xl:p-5">
      <p className="font-display text-black">{dayMonthString}</p>
      <p className="font-default text-black">{title}</p>
      <p className="font-default text-gray-1300">{subtitle}</p>
    </li>
  );
};
