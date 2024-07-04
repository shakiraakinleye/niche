"use client";

import { Tab } from "@headlessui/react";
import cx from "classnames";
import { usePathname, useRouter } from "next/navigation";

import {
  ProfileSettingsForm,
  PasswordSettingsForm,
  PayoutSettingsForm,
  StorefrontSettingsForm,
} from "@/client/components/molecules/dashboard/forms";
import { settingsPages } from "@/client/data/navigation";

const pageContents = [
  {
    title: "profile",
    content: <ProfileSettingsForm />,
  },
  {
    title: "password",
    content: <PasswordSettingsForm />,
  },
  { title: "storefront", content: <StorefrontSettingsForm /> },
  { title: "payouts", content: <PayoutSettingsForm /> },
];

export default function DesktopSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/dashboard/settings").pop()?.split("/").pop();

  const tabChangeHandler = (tabIndex: number) => {
    const selectedTab = settingsPages[tabIndex];
    const route = `/dashboard/settings/${selectedTab}`;
    router.push(route);
  };
  const currentPageIndex = path ? settingsPages.indexOf(path) : 0;

  return (
    <section className="grow py-2 md:p-4 lg:p-6 2xl:p-10">
      <div className="h-full overflow-hidden rounded-xlg bg-transparent md:border md:border-zinc-200 md:bg-white md:px-6 md:pb-3 md:pt-6 lg:px-8 2xl:px-10 2xl:pb-4 2xl:pt-8">
        <div className="hidden w-full flex-col gap-4 md:flex 2xl:gap-6">
          <span className="self-start font-display text-xl font-semibold leading-8 tracking-tight text-black 2xl:text-2xl">
            Settings
          </span>

          <Tab.Group
            selectedIndex={currentPageIndex}
            onChange={(tabIndex) => tabChangeHandler(tabIndex)}
          >
            <Tab.List className="flex gap-16 border-b border-b-zinc-200 px-4 py-3 lg:gap-x-28 lg:px-6 2xl:gap-x-36 2xl:px-8">
              {settingsPages.map((page) => (
                <Tab
                  key={page}
                  className={({ selected }) =>
                    cx(
                      "pb-2 font-default text-base capitalize leading-5 text-dark-100 focus-visible:outline-0 focus-visible:ring-0 2xl:leading-6",
                      selected && "border-b-2 border-b-primary-100"
                    )
                  }
                >
                  {page}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {pageContents.map((page) => (
                <Tab.Panel
                  key={page.title}
                  className={cx(
                    "w-full max-w-xl rounded-xl bg-white lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
                  )}
                >
                  {page.content}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="h-full md:hidden">{children}</div>
      </div>
    </section>
  );
}
