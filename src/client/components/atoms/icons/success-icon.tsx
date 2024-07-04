import { CheckCircle } from "lucide-react";

export const SuccessIcon = () => {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border-8 border-green-1300 bg-green-1400">
      <CheckCircle className="h-6 w-6 stroke-green-1500" />
    </span>
  );
};
