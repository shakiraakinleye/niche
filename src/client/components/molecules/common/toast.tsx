import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  LucideIcon,
} from "lucide-react";
import { toast, ToastContainer, Slide } from "react-toastify";

import { cn } from "@/client/lib/utils";

import "react-toastify/dist/ReactToastify.css";
import "../../../../app/customs.css";

export type ToastColors = {
  iconColor: string;
  bgColor: string;
  titleColor: string;
  bodyColor?: string;
};

export const errorColors: ToastColors = {
  iconColor: "stroke-red-500",
  bgColor: "bg-red-100",
  titleColor: "text-red-800",
  bodyColor: "text-red-700",
};

export const successColors: ToastColors = {
  iconColor: "stroke-green-500",
  bgColor: "bg-green-100",
  titleColor: "text-green-800",
  bodyColor: "text-green-700",
};

export const warningColors: ToastColors = {
  iconColor: "stroke-yellow-500",
  bgColor: "bg-yellow-100",
  titleColor: "text-yellow-800",
  bodyColor: "text-yellow-700",
};

export const defaultColors: ToastColors = {
  iconColor: "stroke-gray-500",
  bgColor: "bg-white",
  titleColor: "text-black",
  bodyColor: "text-gray-700",
};

export type ToastContentProps = {
  title: string;
  body?: string | (() => JSX.Element);
  type?: "error" | "success" | "warning";
};

export const toastMessage = (
  title: string,
  body?: string | React.ReactNode | undefined,
  type?: "error" | "success" | "warning" | undefined
) => {
  let colors: ToastColors, Icon: LucideIcon;

  switch (type) {
    case "error":
      colors = errorColors;
      Icon = XCircle;
      break;
    case "success":
      colors = successColors;
      Icon = CheckCircle;
      break;
    case "warning":
      colors = warningColors;
      Icon = AlertTriangle;
      break;
    default:
      colors = defaultColors;
      Icon = Info;
  }

  const ToastContent = () => {
    return (
      <div
        className={cn(
          "flex min-h-[64px] items-start gap-3 p-4 2xl:gap-2.5",
          colors.bgColor
        )}
      >
        <Icon
          className={cn("h-5 w-5 shrink-0", colors.iconColor)}
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <div>
          <h4
            className={cn(
              "font-default text-sm leading-5 tracking-tight",
              colors.titleColor
            )}
          >
            {title}
          </h4>
          {body && (
            <div
              className={cn(
                "mt-1 font-default text-xs leading-4 tracking-tight005",
                colors.bodyColor
              )}
            >
              {body}
            </div>
          )}
        </div>
      </div>
    );
  };

  toast(<ToastContent />, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
  });
};

// container
export const ToastWrapper = () => {
  return (
    <ToastContainer
      autoClose={3000}
      limit={3}
      closeButton={false}
      transition={Slide}
    />
  );
};
