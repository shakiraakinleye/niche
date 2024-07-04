import {
  User,
  Lock,
  Store,
  Wallet,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { settingsPages } from "@/client/data/navigation";

const pageIcons = [User, Lock, Store, Wallet];

export default function SettingsPage() {
  return (
    <div className="flex min-h-full flex-col gap-8 pt-4 lg:hidden">
      <span className="self-center font-display text-base font-medium leading-5 tracking-tight text-black">
        Settings
      </span>
      <ul className="flex grow flex-col gap-2 rounded-xlg border border-zinc-200 bg-white p-4">
        {settingsPages.map((page, index) => {
          const PageIcon: LucideIcon = pageIcons[index];
          return (
            <li key={page}>
              <Link
                href={`settings/${page}`}
                className="group flex items-center justify-between gap-2 p-3 hover:opacity-80"
              >
                <PageIcon
                  className="h-5 w-5 grow-0 stroke-dark-400"
                  strokeWidth="1.5"
                />
                <span className="line-clamp-1 inline-block grow font-default text-sm capitalize leading-5 text-dark-800">
                  {page}
                </span>
                <ChevronRight
                  className="h-3.5 w-3.5 grow-0 stroke-dark-400"
                  strokeWidth="1.5"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
