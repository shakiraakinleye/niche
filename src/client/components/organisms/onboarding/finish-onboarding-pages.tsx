import { ResponseBox } from "@/client/components/molecules/common/response-box";
import {
  AboutShopForm,
  AddListingForm,
  KYCForm,
  PickupRequestForm,
  SetupPayoutForm,
  SetupShopForm,
} from "@/client/components/molecules/onboarding/forms";
import { OnboardingCompletedMessage } from "@/client/components/molecules/onboarding/onboarding-completed-message";
import { StepCard } from "@/client/components/molecules/onboarding/steps";
import { WelcomeSeller } from "@/client/components/molecules/onboarding/welcome-seller";
import { HeaderType } from "@/client/types/onboarding";

import { HorizontalProgressBar } from "../../atoms/horizontal-progress-bar";

export type FinishOnboardingPagesProps = {
  currentStepIndex: number;
  currentStep: string;
  searchParams: any;
  service: string | undefined;
  headers: HeaderType[];
  goToIndex: (index: number) => void;
  nextIndex: (index: number) => void;
  skipStep: () => void;
  endOnboarding: () => void;
  numberOfForms: number;
  onboardingProgress: () => number;
};

export const FinishOnboardingPages = ({
  currentStepIndex,
  currentStep,
  searchParams,
  service,
  headers,
  goToIndex,
  nextIndex,
  skipStep,
  endOnboarding,
  numberOfForms,
  onboardingProgress,
}: FinishOnboardingPagesProps) => {
  let OnboardingSteps;

  if (service === "self services") {
    OnboardingSteps = (
      <>
        {currentStep === "welcome" && (
          <WelcomeSeller nextStep={() => nextIndex(1)} skipStep={skipStep} />
        )}
        {currentStep === "setup-shop" && (
          <SetupShopForm nextStep={() => nextIndex(2)} skipStep={skipStep} />
        )}
        {currentStep === "about-shop" && (
          <AboutShopForm nextStep={() => nextIndex(3)} skipStep={skipStep} />
        )}
        {currentStep === "kyc" && (
          <KYCForm nextStep={() => nextIndex(4)} skipStep={skipStep} />
        )}
        {currentStep === "setup-payout" && (
          <SetupPayoutForm nextStep={() => nextIndex(5)} skipStep={skipStep} />
        )}
        {currentStep === "add-listing" && (
          <AddListingForm nextStep={() => nextIndex(6)} skipStep={skipStep} />
        )}
        {currentStep === "application-completed" && (
          <OnboardingCompletedMessage
            title="Application completed!"
            subtitle="Congratulations on completing your application. You may start selling on Niche!"
            skipStep={skipStep}
            endOnboarding={endOnboarding}
          />
        )}
      </>
    );
  }

  if (service === "managed services") {
    OnboardingSteps = (
      <>
        {currentStep === "pickup-request" && (
          <PickupRequestForm
            nextStep={() => goToIndex(1)}
            skipStep={skipStep}
          />
        )}
        {currentStep === "pickup-request-completed" && (
          <OnboardingCompletedMessage
            title="Pickup Request Sent!"
            subtitle="Your pickup request has been successfully submitted. Our team will review it and make the necessary arrangements. 
              We will contact you shortly to confirm the pickup details and provide further updates."
            skipStep={skipStep}
            endOnboarding={endOnboarding}
          />
        )}
      </>
    );
  }

  return (
    <div className="max-h-[80%] w-full overflow-scroll rounded-2xl bg-white p-6 scrollbar-hide md:max-w-md md:border md:border-gray-200 md:shadow-modalXl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      {currentStep !== "welcome" &&
        currentStep !== "application-completed" &&
        currentStep !== "pickup-request-completed" && (
          <>
            <header className="mb-2 space-y-3 md:space-y-4">
              {currentStepIndex > 0 && (
                <HorizontalProgressBar
                  maxSteps={numberOfForms}
                  currentStep={onboardingProgress()}
                />
              )}
              {headers[currentStepIndex]?.title && (
                <h1 className="font-display text-lg font-semibold leading-6 tracking-tight text-dark-100 md:text-xl md:leading-7 xl:text-2xl xl:leading-8">
                  {headers[currentStepIndex].title}
                </h1>
              )}
            </header>

            <div className="mb-6 lg:mb-8">
              {searchParams?.get("error") ? (
                <ResponseBox
                  responseTitle="An error occurred"
                  responseDescription={searchParams?.get("error")}
                  type="error"
                />
              ) : (
                headers[currentStepIndex]?.subtitle && (
                  <h2 className="font-display text-sm font-semibold leading-5 tracking-tight015 text-gray-2500 lg:text-base lg:leading-5.5">
                    {headers[currentStepIndex].subtitle}
                  </h2>
                )
              )}
            </div>
          </>
        )}

      <StepCard>{OnboardingSteps}</StepCard>
    </div>
  );
};
