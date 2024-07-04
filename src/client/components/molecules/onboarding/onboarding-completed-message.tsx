import { Button } from "../../atoms/button";
import { SuccessIcon } from "../../atoms/icons/success-icon";

type OnboardingCompletedProps = {
  title: string;
  subtitle: string;
  skipStep: () => void;
  endOnboarding: () => void;
};

export const OnboardingCompletedMessage = ({
  title,
  subtitle,
  skipStep,
  endOnboarding,
}: OnboardingCompletedProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-6 overflow-hidden bg-white 2xl:gap-y-8">
      <div className="flex flex-col items-center gap-5">
        <SuccessIcon />
        <div className="space-y-2 text-center">
          <h1 className="font-display text-lg font-semibold leading-8 tracking-tight text-dark-100 lg:text-xl 2xl:text-2xl">
            {title}
          </h1>
          <p className="font-default text-xs leading-5 text-gray-3600 2xl:text-sm ">
            {subtitle}
          </p>
        </div>
      </div>

      <Button
        type="button"
        variant="primaryFilled"
        className="lg-px-4.5 w-full px-3 py-2 lg:w-2/3 2xl:py-2.5"
        onClick={() => {
          skipStep();
          endOnboarding();
        }}
      >
        <span className="font-default text-sm font-medium leading-5 text-white group-hover:text-primary-100 2xl:text-base 2xl:leading-6">
          Okay
        </span>
      </Button>
    </div>
  );
};
