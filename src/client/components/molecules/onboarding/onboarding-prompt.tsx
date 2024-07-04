import { ChevronRight } from "lucide-react";

import { cn } from "@/client/lib/utils";

import { Button } from "../../atoms/button";

export type OnboardingPromptProps = {
  promptIndex: number;
  steps: string[];
  goToIndex: any;
  prompt: any;
  isFormFilled: boolean;
};

export const OnboardingPrompt = ({
  promptIndex,
  steps,
  goToIndex,
  prompt,
  isFormFilled,
}: OnboardingPromptProps) => {
  const marker = promptIndex + 1;

  return (
    <li>
      <Button
        className="flex w-full items-center justify-between gap-2 px-2 py-2 font-default hover:bg-gray-100 md:gap-4 lg:gap-6 2xl:gap-8 2xl:py-3"
        onClick={() => {
          goToIndex(steps.indexOf(prompt.steps[0]));
        }}
      >
        <p
          className={cn(
            "flex h-6 w-6 shrink-0 items-center justify-center self-start rounded-full border border-gray-2400 2xl:h-7.5 2xl:w-7.5",
            isFormFilled
              ? "border-primary-100 bg-primary-100"
              : "border-gray-2400 bg-transparent"
          )}
        >
          <span
            className={cn(
              "font-default text-xs  font-medium 2xl:text-sm",
              isFormFilled ? "text-white" : "text-gray-3700"
            )}
          >
            {marker}
          </span>
        </p>
        <div className="flex grow flex-col items-start gap-2 text-left">
          <h3 className="gray-text-3700 text-sm font-medium leading-5 2xl:text-base">
            {prompt.title}
          </h3>
          <p className="text-xxs normal-case leading-5 text-gray-3600 2xl:text-xs">
            {prompt.description}
          </p>
        </div>
        <ChevronRight
          className="h-4 w-4 shrink-0 stroke-gray-3600"
          strokeWidth="1.5"
        />
      </Button>
    </li>
  );
};

// export const DesktopPrompt = ({
//   promptIndex,
//   steps,
//   goToIndex,
//   prompt,
// }: OnboardingPromptProps) => {
//   const marker = promptIndex + 1;
//   return (
//     <li>
//       <Button
//         className="flex w-full items-center justify-between gap-4 px-2 py-2 font-default hover:bg-gray-100 lg:gap-6 2xl:gap-8 2xl:py-3"
//         onClick={() => {
//           goToIndex(steps.indexOf(prompt.steps[0]));
//         }}
//       >
//         <p className="flex h-6 w-6 shrink-0 items-center justify-center self-start rounded-full border border-gray-2400 text-xs font-medium text-gray-3700 2xl:h-7.5 2xl:w-7.5 2xl:text-sm">
//           <span>{marker}</span>
//         </p>
//         <div className="flex grow flex-col items-start gap-2 text-left">
//           <h3 className="gray-text-3700 text-sm font-medium leading-5 2xl:text-base">
//             {prompt.title}
//           </h3>
//           <p className="text-xxs normal-case leading-5 text-gray-3600 2xl:text-xs">
//             {prompt.description}
//           </p>
//         </div>
//         <ChevronRight
//           className="h-4 w-4 shrink-0 stroke-gray-3600"
//           strokeWidth="1.5"
//         />
//       </Button>
//     </li>
//   );
// };

// export type MobilePromptProps = OnboardingPromptProps & {
//   isLastChild: boolean;
// };

// export const MobilePrompt = ({
//   isFormFilled,
//   isLastChild,
//   promptIndex,
//   steps,
//   goToIndex,
//   prompt,
// }: MobilePromptProps) => {
//   const marker = promptIndex + 1;
//   return (
//     <li>
//       <Button
//         className="flex w-full items-center justify-between gap-2 px-2 font-default hover:bg-gray-100 "
//         onClick={() => {
//           goToIndex(steps.indexOf(prompt.steps[0]));
//         }}
//       >
//         <div className="relative min-w-[32px] self-stretch">
//           <p
//             className={cn(
//               "absolute left-0 top-0 z-20 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
//               isFormFilled
//                 ? "border-primary-100 bg-primary-100"
//                 : "border-gray-2400 bg-transparent",
//             )}
//           >
//             <span
//               className={cn(
//                 "font-default text-xs font-medium",
//                 isFormFilled ? "text-white" : "text-gray-3700",
//               )}
//             >
//               {marker}
//             </span>
//           </p>
//           {!isLastChild && (
//             <p
//               className={cn(
//                 "absolute left-2.5 top-0 h-full w-0.5 border-l border-dashed bg-red-500",
//                 isFormFilled ? "border-l-primary-100" : "border-l-gray-100",
//               )}
//             ></p>
//           )}
//         </div>

//         <div className="flex grow flex-col items-start gap-2 pb-6 text-left">
//           <h3 className="gray-text-3700 text-sm font-medium leading-5">
//             {prompt.title}
//           </h3>
//           <p className="text-xxs normal-case leading-5 text-gray-3600">
//             {prompt.description}
//           </p>
//         </div>
//         <ChevronRight
//           className="h-4 w-4 shrink-0 stroke-gray-3600"
//           strokeWidth="1.5"
//         />
//       </Button>
//     </li>
//   );
// };
