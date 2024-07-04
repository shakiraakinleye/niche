import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { cn } from "@/client/lib/utils";

export type CategoryProps = {
  category: {
    title: string;
    image: StaticImageData;
    href: string;
  };
  className?: string;
};
export const CategoryCard = ({ category, className }: CategoryProps) => {
  return (
    <Link
      href={category.href}
      className={cn(
        "group flex flex-col items-stretch gap-2 md:min-w-[240px] md:max-w-[240px] md:gap-3 lg:gap-4 xl:min-w-[256px] xl:max-w-[256px] xl:gap-5 2xl:min-w-[280px] 2xl:max-w-[280px] 2xl:gap-6",
        className
      )}
    >
      <div className="h-40 overflow-hidden rounded-smd md:h-52 lg:h-64 lg:min-w-full lg:max-w-full xl:h-70 2xl:h-75">
        <Image
          src={category.image}
          alt={category.title}
          className="min-h-full min-w-full object-cover transition-all group-hover:scale-110"
        />
      </div>
      <h3 className="font-default text-sm font-medium capitalize leading-5 tracking-tight015 text-dark-300 md:text-base md:leading-6 xl:text-lg 2xl:text-xl 2xl:font-bold 2xl:leading-7">
        {category.title}
      </h3>
    </Link>
  );
};
