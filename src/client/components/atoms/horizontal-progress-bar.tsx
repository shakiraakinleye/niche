import { FC } from "react";

type HorizontalProgressBarProps = {
  currentStep: number;
  maxSteps: number;
};

export const HorizontalProgressBar: FC<HorizontalProgressBarProps> = ({
  currentStep,
  maxSteps,
}: HorizontalProgressBarProps) => {
  const calculateProgressWidth = () => {
    if (currentStep >= 0) {
      return `${(currentStep / maxSteps) * 100}%`;
    } else return 0;
  };

  return (
    <div className="h-2 w-full overflow-hidden rounded-100 bg-gray-200">
      <div
        className="h-full bg-primary-100 transition-all duration-300"
        style={{ width: calculateProgressWidth() }}
      ></div>
    </div>
  );
};
