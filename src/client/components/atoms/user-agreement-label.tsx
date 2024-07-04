import Link from "next/link";

import { FormLabel } from "../molecules/react-hook-form/form";

export const UserAgreementLabel = (
  <FormLabel className="inline-block !text-xs 2xl:!text-sm">
    I agree to the terms and conditions as set out by the&nbsp;
    <Link href="#" className="italic text-primary-100">
      Niche user agreement
    </Link>
  </FormLabel>
);
