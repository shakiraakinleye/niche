import { AlertCircle, CheckCircle, LucideIcon } from "lucide-react";

import { cn } from "@/client/lib/utils";

export type ResponseBoxColors = {
  iconBgColor: string;
  textBgColor: string;
  titleColor: string;
  descColor?: string;
};

export const errorColors: ResponseBoxColors = {
  iconBgColor: "bg-pink-1000",
  textBgColor: "bg-pink-1100",
  titleColor: "text-red-1100",
  descColor: "text-red-1000",
};

export const successColors: ResponseBoxColors = {
  iconBgColor: "bg-green-1000",
  textBgColor: "bg-green-1200",
  titleColor: "text-green-1100",
  descColor: "text-green-1000",
};

export const defaultColors: ResponseBoxColors = {
  iconBgColor: "bg-gray-1000",
  textBgColor: "bg-gray-1200",
  titleColor: "text-gray-1100",
  descColor: "text-gray-1000",
};

export type ResponseBoxProps = {
  responseTitle: string;
  responseDescription?: string | null;
  type: string;
};

export const ResponseBox = ({
  responseTitle,
  responseDescription,
  type,
}: ResponseBoxProps) => {
  let colors: ResponseBoxColors, Icon: LucideIcon;

  switch (type) {
    case "error":
      colors = errorColors;
      Icon = AlertCircle;
      break;
    case "success":
      colors = successColors;
      Icon = CheckCircle;
      break;
    default:
      colors = defaultColors;
      Icon = AlertCircle;
  }

  return (
    <div className={cn("max-w-xs rounded-md p-4", colors.textBgColor)}>
      <div className="flex gap-3">
        <div
          className={cn(
            "flex h-7 w-7 flex-shrink-0 items-center justify-center self-start rounded-full lg:h-8 lg:w-8",
            colors.iconBgColor
          )}
        >
          <Icon
            className="h-4 w-4 text-white lg:h-5 lg:w-5"
            aria-hidden="true"
          />
        </div>
        <div className="self-center font-default text-xs leading-4">
          <h3 className={cn("font-medium", colors.titleColor)}>
            {responseTitle}
          </h3>
          {responseDescription && (
            <p className={cn("mt-1 space-y-1", colors.descColor)}>
              {responseDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
