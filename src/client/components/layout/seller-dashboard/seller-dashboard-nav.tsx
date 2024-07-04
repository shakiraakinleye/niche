"use client";

import { Fragment, useState, useContext } from "react";

import { Transition, Dialog } from "@headlessui/react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { useOnboardingContext } from "@/client/context/onboarding-context";
import { ShopContext, ShopContextType } from "@/client/context/shop-context";
import { supportLinks } from "@/client/data/navigation";
import { sellerDashboardNotifications } from "@/client/data/sample";
import useScroll from "@/client/lib/hooks/use-scroll";
import { cn } from "@/client/lib/utils";
import { ShopType } from "@/client/types/shop";

import {
  ViewShopButton,
  DashboardNotificationButton,
  DashboardHelpButton,
} from "./dashboard-nav-buttons";
import {
  MobileDashboardBottomNavItems,
  MobileDashboardSideNavItems,
  DesktopDashboardNavItems,
  DashboardExitNavItems,
} from "./dashboard-nav-items";
import { Button } from "../../atoms/button";
import { Toggle } from "../../atoms/toggle";
import { SearchBox } from "../../molecules/common/search-box";
import { toastMessage } from "../../molecules/common/toast";
import { ShopAvatarNameCard } from "../../molecules/shop/shop-avatar-name-card";

export const SellerDashboardSideDesktopNav = () => {
  const path = usePathname();
  const { shop } = useContext(ShopContext) as ShopContextType;
  const { checkOnboardingCompleted } = useOnboardingContext();
  const { isOnboardingComplete } = checkOnboardingCompleted();

  return (
    <nav className="sticky top-0 hidden max-h-screen w-52 shrink-0 flex-col border-r border-r-gray-3100 bg-white md:flex lg:w-60 2xl:w-72">
      <ShopAvatarNameCard
        containerClassName="md:px-4 md:pb-10 md:pt-8"
        shopProfile={shop}
      />
      <div className="flex grow flex-col px-4 md:gap-16 lg:gap-8 2xl:gap-16">
        <ul className="flex flex-col gap-3 px-2 transition-all lg:px-3">
          <DesktopDashboardNavItems
            path={path}
            isOnboardingComplete={isOnboardingComplete}
          />
        </ul>
        <DashboardExitNavItems />
      </div>
    </nav>
  );
};

export const SellerDashboardSideMobileNav = ({
  shopProfile,
}: {
  shopProfile: ShopType;
}) => {
  const path = usePathname();
  const { checkOnboardingCompleted } = useOnboardingContext();
  const { isOnboardingComplete } = checkOnboardingCompleted();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <nav className="md:hidden">
      <Button type="button" onClick={openMenu}>
        <span className="sr-only">Open side menu</span>
        <Menu className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20 md:hidden"
          onClose={closeMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-100 bg-opacity-10 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in duration-500"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="max-w-xxs h-full w-60 overflow-hidden rounded-tr-xlg bg-white shadow-xl">
                  <div className="flex flex-col items-start gap-4 px-5 py-6 ">
                    <ShopAvatarNameCard shopProfile={shopProfile} />
                    <ViewShopButton shopName={shopProfile.shopName} />
                  </div>
                  <ul className="flex flex-col gap-3 border-t border-t-gray-3100 px-2 py-4 pr-6 transition-all lg:px-3">
                    <MobileDashboardSideNavItems
                      path={path}
                      isOnboardingComplete={isOnboardingComplete}
                    />
                  </ul>
                  <DashboardExitNavItems />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
};

export const SellerDashboardTopNav = () => {
  const { checkOnboardingCompleted } = useOnboardingContext();
  const { isOnboardingComplete } = checkOnboardingCompleted();
  const { shop, disableShop, enableShop } = useContext(
    ShopContext
  ) as ShopContextType;
  const scrolled = useScroll(50);

  const toggleHandler = () => {
    const successTitle = "Status Switched";
    let successDesc;

    if (isOnboardingComplete) {
      if (shop.isLive) {
        disableShop();
        successDesc =
          "Your Shop is no longer 'Live'. You can change this later when you want.";
      }
      if (!shop.isLive) {
        enableShop();
        successDesc = "Your Shop is now 'Live'.";
      }
      toastMessage(successTitle, successDesc, "success");
    } else {
      toastMessage(
        "Error",
        "Shop can not go live until you have completed the seller onboarding process",
        "error"
      );
    }
  };

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-10 flex w-full items-center justify-between gap-10 px-5 py-5 shadow-2md shadow-gray-3200/20 transition-all lg:px-8 2xl:px-10 2xl:py-7",
          scrolled
            ? "border-b border-gray-200 bg-white/30 backdrop-blur-xl"
            : "bg-white"
        )}
      >
        <SellerDashboardSideMobileNav shopProfile={shop} />

        <SearchBox
          boxClassName="rounded-xlg"
          containerClassName="hidden md:block"
        />

        <div className="flex items-center gap-4">
          <DashboardNotificationButton
            notifications={sellerDashboardNotifications}
          />
          <DashboardHelpButton supportLinks={supportLinks} />

          <Toggle enabled={shop.isLive} onChange={toggleHandler} />

          <ViewShopButton
            className="hidden md:inline-block"
            shopName={shop.shopName}
          />
        </div>
      </nav>
    </>
  );
};

export const SellerDashboardBottomNav = () => {
  const { checkOnboardingCompleted } = useOnboardingContext();
  const { isOnboardingComplete } = checkOnboardingCompleted();
  const path = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid auto-cols-fr grid-flow-col items-center justify-between gap-2 bg-beige-400 px-3 pt-3 transition-all md:hidden">
      <MobileDashboardBottomNavItems
        path={path}
        isOnboardingComplete={isOnboardingComplete}
      />
    </nav>
  );
};
