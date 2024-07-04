"use client";

import { ReactNode, useState } from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/client/lib/utils";
import Leaflet from "@/components/molecules/common/leaflet";
import useWindowSize from "@/lib/hooks/use-window-size";

export default function Tooltip({
  children,
  content,
  fullWidth,
  triggerClassName,
  contentClassName,
}: {
  children: ReactNode;
  content: ReactNode | string;
  fullWidth?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
}) {
  const [openTooltip, setOpenTooltip] = useState(false);

  const { isMobile, isTablet, isDesktop } = useWindowSize();

  return (
    <>
      {(isMobile || isTablet) && (
        <button
          type="button"
          className={`${fullWidth ? "w-full" : "inline-flex"}`}
          onClick={() => setOpenTooltip(true)}
        >
          {children}
        </button>
      )}
      {openTooltip && (isMobile || isTablet) && (
        <Leaflet setShow={setOpenTooltip}>
          {typeof content === "string" ? (
            <span className="flex min-h-[150px] w-full items-center justify-center bg-white px-10 text-center text-sm text-gray-700">
              {content}
            </span>
          ) : (
            content
          )}
        </Leaflet>
      )}
      {isDesktop && (
        <TooltipPrimitive.Provider delayDuration={100}>
          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger
              className={cn("inline-flex cursor-pointer", triggerClassName)}
              // asChild
            >
              {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content
              sideOffset={4}
              side="top"
              className={cn(
                "z-30 animate-slide-up-fade items-center overflow-hidden rounded-md border border-gray-200 bg-white drop-shadow-lg",
                contentClassName
              )}
            >
              <TooltipPrimitive.Arrow className="fill-current text-white " />
              {typeof content === "string" ? (
                <div className="p-5">
                  <span className="block max-w-xs text-center text-sm text-gray-700">
                    {content}
                  </span>
                </div>
              ) : (
                content
              )}
              <TooltipPrimitive.Arrow className="fill-current text-white" />
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
      )}
    </>
  );
}
