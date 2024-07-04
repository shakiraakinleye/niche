import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const GettingStartedSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#f1f5f9" highlightColor="#f8fafc">
      <section className="h-full w-full md:p-4 lg:p-6 2xl:p-10">
        <div className="flex w-full flex-col gap-8 rounded-xlg px-5 py-12 md:gap-6 md:border md:border-zinc-200 md:bg-white md:p-4 lg:p-6 2xl:gap-8 2xl:px-10 2xl:py-8">
          <div className="flex w-full flex-col gap-8 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 2xl:gap-8 3xl:max-w-4xl ">
            <div className="flex w-full flex-col gap-5 md:gap-4 2xl:gap-5">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-16 w-2/3" />
            </div>

            <div className="hidden lg:block">
              <Skeleton className="h-5 w-full lg:w-1/2" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-40 w-2/3" />
            </div>

            <div className="flex flex-col gap-2">
              <Skeleton className="h-10 w-full lg:w-1/2" />
              <Skeleton className="h-40 w-full lg:w-2/3" />
            </div>

            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <Skeleton className="h-10 w-full lg:w-1/2" />
                <Skeleton className="h-10 w-full lg:w-2/3" />
              </div>
            ))}

            <div className="mt-8 flex justify-center">
              <Skeleton className="h-40 w-full lg:w-2/3" />
            </div>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  );
};
