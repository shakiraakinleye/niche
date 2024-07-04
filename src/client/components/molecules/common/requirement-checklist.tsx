import { CheckCircle } from "lucide-react";

import {
  checkPasswordLength,
  checkPasswordCharacters,
  checkShopNameCharacter,
  checkShopNameLength,
  cn,
} from "@/client/lib/utils";

export const RequirementChecklist = ({
  item,
  checks,
}: {
  item: string;
  checks: { check: (item: string) => boolean; requirement: string }[];
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      {checks.map((check) => {
        return (
          <p key={check.requirement} className="flex items-center gap-3">
            <CheckCircle
              className={cn(
                "h-4 w-4",
                check.check(item) ? "text-green-500" : "text-gray-2200"
              )}
              strokeWidth={1.5}
            />
            <span className="font-default text-xxs leading-3 text-gray-1300">
              {check.requirement}
            </span>
          </p>
        );
      })}
    </div>
  );
};

// password
const passwordChecks = [
  {
    check: checkPasswordLength,
    requirement: "Password needs to be at least 8 characters long",
  },
  {
    check: checkPasswordCharacters,
    requirement: "Password should include at least one special character",
  },
];
export const PasswordRequirementChecklist = ({
  password,
}: {
  password: string;
}) => {
  return <RequirementChecklist item={password} checks={passwordChecks} />;
};

// shopname
const shopnameChecks = [
  {
    check: checkShopNameLength,
    requirement: "Shopname should include 3 - 20 characters",
  },
  {
    check: checkShopNameCharacter,
    requirement: "Shopname cannot include space or special character",
  },
];
export const ShopnameRequirementChecklist = ({
  shopname,
}: {
  shopname: string;
}) => {
  return <RequirementChecklist item={shopname} checks={shopnameChecks} />;
};
