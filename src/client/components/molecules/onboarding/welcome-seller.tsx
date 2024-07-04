import { Button } from "../../atoms/button";
import { SuccessIcon } from "../../atoms/icons/success-icon";

export type WelcomeProps = {
  nextStep: () => void;
  skipStep: () => void;
};

export const WelcomeSeller = ({ nextStep, skipStep }: WelcomeProps) => {
  return (
    <div className="space-y-6 overflow-hidden bg-white 2xl:space-y-8">
      <div className="flex flex-col items-center gap-5">
        <SuccessIcon />
        <div className="space-y-2 text-center">
          <h1 className="font-display text-lg font-semibold leading-8 tracking-tight text-dark-100 lg:text-xl 2xl:text-2xl">
            Get Started With Your Niche Shop!
          </h1>
          <p className="flex flex-col font-default text-xs leading-5 text-gray-3600 2xl:text-sm">
            <span>
              {" "}
              Congratulations on becoming a Niche seller! We&apos;re thrilled to
              have you as part of our community. This popup message will guide
              you through the next steps to make the most of your Niche selling
              experience.{" "}
            </span>
            <span className="font-bold">
              Note: Your shop can not go &quot;Live&quot; until shop setup is
              complete
            </span>
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 md:grid md:grid-cols-2 md:gap-4">
        <Button
          type="button"
          variant="beigeOutline"
          className="lg-px-4.5 px-3 py-2 2xl:py-2.5"
          onClick={skipStep}
        >
          <span className="font-default text-sm font-medium leading-5 text-gray-3700 2xl:text-base 2xl:leading-6">
            Skip
          </span>
        </Button>
        <Button
          type="button"
          variant="primaryFilled"
          className="lg-px-4.5 px-3 py-2 lg:py-2.5"
          onClick={nextStep}
        >
          <span className="font-default text-sm font-medium leading-5 text-white group-hover:text-primary-100 2xl:text-base 2xl:leading-6">
            Next
          </span>
        </Button>
      </div>
    </div>
  );
};
