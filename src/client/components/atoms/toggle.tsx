import { Switch } from "@headlessui/react";

import { cn } from "@/client/lib/utils";

export const Toggle = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: any;
}) => {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        enabled ? "bg-green-600" : "bg-red-500",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          enabled ? "translate-x-5" : "translate-x-0",
          "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};
