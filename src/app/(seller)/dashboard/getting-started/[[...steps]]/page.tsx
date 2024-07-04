"use client";

import { useState, useEffect } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

import { HorizontalProgressBar } from "@/client/components/atoms/horizontal-progress-bar";
import { useDemoModal } from "@/client/components/molecules/common/demo-modal";
import { FaqsWithArrowButton } from "@/client/components/molecules/common/faqs";
import { SupportCTA } from "@/client/components/molecules/common/support-cta";
import { OnboardingPrompt } from "@/client/components/molecules/onboarding/onboarding-prompt";
import { FinishOnboardingPages } from "@/client/components/organisms/onboarding/finish-onboarding-pages";
import { GettingStartedSkeleton } from "@/client/components/skeleton/getting-started-skeleton";
import { useOnboardingContext } from "@/client/context/onboarding-context";
import {
  selfServices,
  managedServices,
} from "@/client/data/seller-service-type";
import { HeaderType, PromptType } from "@/client/types/onboarding";

export default function GettingStarted() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  const { startContext, checkOnboardingCompleted } = useOnboardingContext();
  const service = startContext.startData.selectService?.service?.toLowerCase();
  const { filledForms, isOnboardingComplete } = checkOnboardingCompleted();

  // check if this page is allowed
  useEffect(() => {
    const check = () => {
      if (service === undefined) {
        router.replace("/sell-on-niche/start");
      } else {
        setIsLoading(false);
        if (isOnboardingComplete) {
          setTimeout(() => router.replace("/dashboard"), 30000);
        }
      }
    };
    setTimeout(() => setIsChecking(true), 2000);
    isChecking && check();
  }, [isLoading, isChecking, service, isOnboardingComplete, router]);

  const steps: string[] = [];
  let gettingStartedPrompts: PromptType[] = [];
  let headers: HeaderType[] = [];

  if (service === "self services") {
    selfServices.steps.forEach((step) => steps.push(step));
    gettingStartedPrompts = selfServices.prompts;
    headers = selfServices.headers;
  }
  if (service === "managed services") {
    managedServices.steps.forEach((step) => steps.push(step));
    gettingStartedPrompts = managedServices.prompts;
    headers = managedServices.headers;
  }

  const stepsTransform = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex > -1) {
      return steps[stepIndex];
    }
    return steps[0];
  };

  const createStepRouteSchema = (steps: string[]) => {
    return z.object({
      step: z
        .array(z.string())
        .refine(
          (val) => {
            return val.every((step) => steps.includes(step));
          },
          { message: "Invalid step names found in the 'steps' array." }
        )
        .default([steps[0]]),
    });
  };

  const stepRouteSchema = createStepRouteSchema(steps);
  const path = pathname.split("/").pop();
  const result = stepRouteSchema.safeParse({ step: [path] });
  const currentStep = result.success ? result.data.step[0] : steps[0];
  const currentStepIndex = steps.indexOf(currentStep);

  const goToIndex = (index: number) => {
    const newStep = steps[index];
    const newRoute = `/dashboard/getting-started/${stepsTransform(newStep)}`;
    router.push(newRoute);
    if (pathname === newRoute) setShowDemoModal(true);
  };

  const nextIndex = (index: number) => {
    // this changes if content of steps changes
    const lastIndex = steps.length - 1;
    if (Object.keys(filledForms).length === lastIndex) {
      goToIndex(lastIndex);
    } else {
      if (index === lastIndex) {
        skipStep();
      } else {
        goToIndex(index);
      }
    }
  };

  const skipStep = () => {
    setShowDemoModal(false);
  };

  const endOnboarding = () => {
    if (isOnboardingComplete) {
      router.replace(`/dashboard`);
    }
  };

  const numberOfForms = gettingStartedPrompts.length;

  const onboardingProgress = () => {
    let count = -2;
    for (const key in filledForms) {
      if (filledForms[key] !== undefined) count++;
    }
    const progress = count < 0 ? 0 : count;
    return progress;
  };

  const onboardingPages = (
    <FinishOnboardingPages
      currentStep={currentStep}
      currentStepIndex={currentStepIndex}
      searchParams={searchParams}
      service={service}
      headers={headers}
      goToIndex={goToIndex}
      nextIndex={nextIndex}
      skipStep={skipStep}
      endOnboarding={endOnboarding}
      numberOfForms={numberOfForms}
      onboardingProgress={onboardingProgress}
    />
  );

  const { setShowDemoModal, DemoModal } = useDemoModal(onboardingPages, true);

  if (isLoading) {
    return <GettingStartedSkeleton />;
  }

  return (
    <section className="h-full md:p-4 lg:p-6 2xl:p-10">
      <div className="flex flex-col gap-8 rounded-xlg px-5 py-12 md:gap-6 md:border md:border-zinc-200 md:bg-white md:p-4 lg:p-6 2xl:gap-8 2xl:px-10 2xl:py-8">
        <div className="flex flex-col gap-8 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 2xl:gap-8 3xl:max-w-4xl ">
          <div className="flex flex-col gap-5 md:gap-4 2xl:gap-5">
            <h1 className="2xl::text-2xl font-display text-lg font-semibold leading-7 tracking-tight text-dark-100 lg:text-xl 2xl:leading-8">
              Get Started With Your Niche Shop!
            </h1>
            <p className="font-default text-xs leading-5 text-gray-3600 lg:font-medium 2xl:text-sm">
              Congratulations on becoming a Niche seller! We&apos;re thrilled to
              have you as part of our community. Complete the following steps to
              set up your shop on niche and start selling.
            </p>
          </div>

          <HorizontalProgressBar
            maxSteps={numberOfForms}
            currentStep={onboardingProgress()}
          />

          <ul className="flex flex-col gap-4 2xl:gap-5">
            {gettingStartedPrompts?.map((prompt, promptIndex) => {
              const isFormFilled = filledForms[prompt.contextId] !== undefined;
              return (
                <OnboardingPrompt
                  key={`getting-started-${prompt.title}`}
                  promptIndex={promptIndex}
                  steps={steps}
                  goToIndex={goToIndex}
                  prompt={prompt}
                  isFormFilled={isFormFilled}
                />
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-lg font-medium leading-10 tracking-tight text-dark-100">
              Need to know
            </h2>
            <p className="font-default text-sm leading-5 text-gray-3600 lg:font-medium">
              Everything you need to know about selling on Niche
            </p>
          </div>

          <FaqsWithArrowButton />

          <div className="mt-8 flex justify-center">
            <SupportCTA buttonVariant="primaryFilled" />
          </div>
        </div>
      </div>
      <DemoModal />
    </section>
  );
}
