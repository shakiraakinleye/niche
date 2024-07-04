"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

import { HorizontalProgressBar } from "@/client/components/atoms/horizontal-progress-bar";
import { ResponseBox } from "@/client/components/molecules/common/response-box";
import {
  StartForm,
  SelectServiceForm,
} from "@/client/components/molecules/onboarding/forms";
import { StepCard } from "@/client/components/molecules/onboarding/steps";

const INITIAL_STEP = "start";

const steps = ["start", "select-service"] as const;

const onboardingStepTransform = (step: (typeof steps)[number]) => {
  const stepIndex = steps.indexOf(step);
  if (stepIndex > -1) {
    return steps[stepIndex];
  }
  return INITIAL_STEP;
};

const stepRouteSchema = z.object({
  step: z.array(z.enum(steps)).default([INITIAL_STEP]),
});

export type OnboardingDataType = {
  key: string;
  value: object;
};

export default function StartOnboardingPages() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const path = pathname.split("/").pop();
  const result = stepRouteSchema.safeParse({ step: [path] });
  const currentStep = result.success ? result.data.step[0] : INITIAL_STEP;
  const currentStepIndex = steps.indexOf(currentStep);

  const goToIndex = (index: number) => {
    const newStep = steps[index];
    router.push(`/sell-on-niche/${onboardingStepTransform(newStep)}`);
  };

  const nextStage = () => {
    router.push(`/dashboard/getting-started`);
  };

  const headers = [
    { title: "Let’s get started!", subtitle: "Tell us about you" },
    {
      title:
        "Great! Now let's select the type of service you prefer and location",
    },
  ];

  return (
    <section className="min-h-screen">
      <div className="w-full">
        <header className="mb-3 space-y-8 md:space-y-10 2xl:mb-4 2xl:space-y-12">
          <HorizontalProgressBar
            maxSteps={steps.length}
            currentStep={currentStepIndex + 1}
          />
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
              <h2 className="pr-6 font-display text-sm font-semibold leading-5 tracking-tight015 text-dark-100 lg:text-base lg:leading-5.5">
                {headers[currentStepIndex].subtitle}
              </h2>
            )
          )}
        </div>

        <div className="relative">
          <StepCard>
            {currentStep === "start" && (
              <StartForm nextStep={() => goToIndex(1)} />
            )}
            {currentStep === "select-service" && (
              <SelectServiceForm nextStage={nextStage} />
            )}
          </StepCard>
        </div>
      </div>
    </section>
  );
}
