import { supportAvatars } from "@/client/data/copy";
import { cn } from "@/client/lib/utils";

import { MultipleAvatars } from "./avatar";
import { LinkButton } from "../../atoms/link-button";

type Props = {
  buttonVariant: "primaryFilled" | "secondaryFilled";
};

export const SupportCTA = ({ buttonVariant }: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 px-5 text-center font-default md:max-w-sm">
      <div>
        <MultipleAvatars avatars={supportAvatars} />
      </div>
      <h4 className="leading-7.5 text-base font-medium text-dark-100">
        Still have questions?
      </h4>
      <p className="text-sm leading-7 text-gray-3600">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
      <LinkButton href="#" variant={buttonVariant} className="px-4.5 py-2.5">
        <span
          className={cn(
            "text-xs font-medium normal-case leading-6 text-white md:text-sm 2xl:text-base",
            buttonVariant === "primaryFilled" && "group-hover:text-primary-100",
            buttonVariant === "secondaryFilled" &&
              "group-hover:text-tertiary-100"
          )}
        >
          Get in touch
        </span>
      </LinkButton>
    </div>
  );
};
