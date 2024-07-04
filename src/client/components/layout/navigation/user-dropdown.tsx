"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { cn } from "@/client/lib/utils";
import Popover from "@/components/organisms/common/popover";

import { AccountMenu } from "./account-menu";
import { Button } from "../../atoms/button";

export default function UserDropdown({ session }: { session: any }) {
  const { email, image, name } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);

  if (!email) return null;

  return (
    <>
      {/* mobile */}
      <div className="relative inline-block lg:hidden">
        <Image
          alt={email || ""}
          src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
          width={24}
          height={24}
        />
      </div>

      {/* desktop */}
      <div className="relative hidden text-left lg:block">
        <Popover
          content={
            <div className="w-full rounded-md bg-white p-2 sm:w-56">
              <AccountMenu />
            </div>
          }
          align="end"
          openPopover={openPopover}
          setOpenPopover={setOpenPopover}
        >
          <Button
            type="button"
            borderRadius="none"
            onClick={() => setOpenPopover(!openPopover)}
            className="gap-x-2 transition-all duration-75 2xl:gap-x-2.5"
          >
            <Image
              alt={email || ""}
              src={
                image || `https://avatars.dicebear.com/api/micah/${email}.svg`
              }
              width={24}
              height={24}
            />
            <div className="hidden items-center gap-x-2 lg:flex 2xl:gap-x-2.5">
              <p className="font-default text-xs font-medium leading-4 text-dark-600 2xl:text-sm 2xl:leading-5">
                Hi, {name}
              </p>
              <ChevronDown
                className={cn(
                  "h-4 w-4 stroke-dark-400 transition-transform",
                  openPopover && "rotate-180"
                )}
                strokeWidth={1.5}
              />
            </div>
          </Button>
        </Popover>
      </div>
    </>
  );
}

// fix - extract firstname from "name"
