import { LogOut, User, LucideIcon } from "lucide-react";
// import { signOut } from "next-auth/react";

import { dashboardIcons } from "@/client/data/common";
import { dashboardRoutes, gettingStartedRoute } from "@/client/data/navigation";
import { cn } from "@/client/lib/utils";
import { DashboardNavItemType } from "@/client/types/navigation";

import { Button } from "../../atoms/button";
import { LinkButton } from "../../atoms/link-button";

export const DashboardNavItem = ({
  route,
  path,
}: {
  route: DashboardNavItemType;
  path: string;
}) => {
  const { title, href } = route;
  const RouteIcon: LucideIcon = dashboardIcons.get(title);
  return (
    <LinkButton
      variant={
        path === href || path.startsWith(href, 18) ? "default" : "beigeOutline"
      }
      href={href}
      className={cn(
        "border-none md:px-3 md:py-2 2xl:p-4",
        path === href || path.startsWith(title.split(" ").join("-"), 11)
          ? "text-primary-100 md:bg-primary-100 md:text-white"
          : "text-gray-2900"
      )}
    >
      <p className="flex grow flex-col items-center gap-1.5 md:flex-row md:items-start lg:gap-2">
        <RouteIcon
          className="h-5 w-5 shrink-0 text-inherit 2xl:h-6 2xl:w-6"
          strokeWidth={1.5}
        />
        <span className="text-center font-default text-xxs font-medium leading-4 text-inherit md:text-left md:text-sm md:leading-5 2xl:text-base 2xl:leading-6">
          {title}
        </span>
      </p>
    </LinkButton>
  );
};

type NavItemProps = {
  isOnboardingComplete: boolean | undefined;
  path: string;
};

export const MobileDashboardBottomNavItems = ({
  isOnboardingComplete,
  path,
}: NavItemProps) => {
  return (
    <>
      {!isOnboardingComplete && (
        <DashboardNavItem
          key={`getting-started-dashboard-route`}
          route={gettingStartedRoute}
          path={path}
        />
      )}
      {dashboardRoutes
        .filter(
          (route) =>
            route.title === "dashboard" ||
            route.title === "products" ||
            route.title === "orders" ||
            (isOnboardingComplete && route.title === "settings")
        )
        .map((route) => {
          return (
            <DashboardNavItem
              key={`${route.title}-dashboard-route`}
              route={route}
              path={path}
            />
          );
        })}
    </>
  );
};

export const MobileDashboardSideNavItems = ({
  isOnboardingComplete,
  path,
}: NavItemProps) => {
  return (
    <>
      {dashboardRoutes
        .filter(
          (route) =>
            route.title === "payouts" ||
            (!isOnboardingComplete && route.title === "settings")
        )
        .map((route) => {
          const { title, href } = route;
          const RouteIcon: LucideIcon = dashboardIcons.get(title);
          return (
            <LinkButton
              key={`${title}-dashboard-route`}
              variant={
                path === href || path.startsWith(title, 18)
                  ? "default"
                  : "beigeOutline"
              }
              href={href}
              className={cn(
                "border-none p-2",
                path === href || path.startsWith(title.split(" ").join("-"), 18)
                  ? "bg-primary-100 text-white"
                  : "text-gray-2900"
              )}
            >
              <p className="flex grow items-start gap-2">
                <RouteIcon
                  className="h-5 w-5 shrink-0 text-inherit"
                  strokeWidth={1.5}
                />
                <span className="font-default text-sm font-medium leading-5 text-inherit">
                  {title}
                </span>
              </p>
            </LinkButton>
          );
        })}
    </>
  );
};

export const DesktopDashboardNavItems = ({
  isOnboardingComplete,
  path,
}: NavItemProps) => {
  return (
    <>
      {!isOnboardingComplete && (
        <DashboardNavItem
          key={`getting-started-dashboard-route`}
          route={gettingStartedRoute}
          path={path}
        />
      )}
      {dashboardRoutes.map((route) => {
        return (
          <DashboardNavItem
            key={`${route.title}-dashboard-route`}
            route={route}
            path={path}
          />
        );
      })}
    </>
  );
};

export const DashboardExitNavItems = () => {
  return (
    <div className="flex flex-col gap-3 border-t border-t-gray-3100 p-2 lg:p-3">
      <LinkButton
        type="button"
        variant="beigeOutline"
        className="border-none p-2 lg:px-4"
        href="/"
      >
        <p className="flex shrink-0 grow items-center gap-2 text-gray-2900">
          <User
            className=" h-5 w-5 rounded-smd border-1.5 border-gray-2900 text-inherit 2xl:h-6 2xl:w-6"
            strokeWidth={1.5}
          />
          <span className="font-default text-sm font-medium leading-5 text-inherit 2xl:text-base 2xl:leading-6">
            Switch to Buyer
          </span>
        </p>
      </LinkButton>
      <Button
        type="button"
        variant="beigeOutline"
        className="border-none p-2 lg:px-4"
        // onClick={() => signOut()}
      >
        <p className="flex shrink-0 grow items-center gap-2 text-gray-2900">
          <LogOut
            className="mw-5 h-5 rotate-180 text-inherit 2xl:h-6 2xl:w-6"
            strokeWidth={1.5}
          />
          <span className="font-default text-sm font-medium leading-5 text-inherit 2xl:text-base 2xl:leading-6">
            Logout
          </span>
        </p>
      </Button>
    </div>
  );
};
