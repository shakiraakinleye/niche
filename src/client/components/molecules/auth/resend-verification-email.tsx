"use client";

import { useSearchParams } from "next/navigation";

import { SetErrorMessage } from "@/client/lib/utils";
import { Button } from "@/components/atoms/button";

import { ResponseBox } from "../common/response-box";

export const ResendVerificationEmail = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const resendVerificationEmail = async () => {
    try {
      if (!email) throw new Error("No email provided");
      // if (response) {
      //   console.log(
      //     "Verification email successfully sent. Please check your inbox.",
      //   );
      // } else {
      // SetErrorMessage("something went wrong");
      // }
    } catch (e: any) {
      const errorMessage = e?.shape?.message ?? "";
      SetErrorMessage(errorMessage);
    }
  };

  return (
    <>
      {searchParams?.get("error") && (
        <ResponseBox
          responseTitle="An error occurred while logging you in"
          responseDescription={searchParams?.get("error")}
          type="error"
        />
      )}
      {!email ? (
        <ResponseBox
          responseTitle="Something went wrong"
          responseDescription="No email provided"
          type="error"
        />
      ) : (
        <div>
          <h2 className="mb-8 pr-6 font-default text-sm leading-5 text-gray-1300 lg:mb-10 lg:text-base lg:leading-5.5 2xl:mb-12">
            We sent an email to{" "}
            <span className="text-primary-100">{email}. </span>
            Please click the link in the email to activate your account.
          </h2>
          <p className="font-default text-sm leading-5 text-gray-2100 lg:text-base">
            You didn&apos;t receive an email or your link expired?
          </p>
          <Button
            onClick={resendVerificationEmail}
            variant="primaryFilled"
            size="smFull"
            className="mt-2 font-default text-base font-bold leading-7 text-white hover:text-primary-100 xl:text-lg 2xl:text-xl"
          >
            Request a new verification mail
          </Button>
        </div>
      )}
    </>
  );
};
