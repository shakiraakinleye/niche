import { cn } from "@/client/lib/utils";
import { ShopType } from "@/client/types/shop";

import { Avatar } from "../common/avatar";

type ShopAvatarNameCardProps = {
  shopProfile: ShopType;
  showGreeting?: boolean;
  containerClassName?: string;
};

export const ShopAvatarNameCard = ({
  shopProfile,
  showGreeting = true,
  containerClassName,
}: ShopAvatarNameCardProps) => {
  const { shopName, image } = shopProfile;

  return (
    <div className={cn("flex items-center gap-4", containerClassName)}>
      <Avatar src={image} alt={shopName} avatarClassName="inline-block" />
      <div className="flex flex-col font-display text-sm leading-5 2xl:text-base">
        {showGreeting && <span className="text-gray-3000">Hello</span>}
        <span className="font-bold capitalize text-dark-100">{shopName}</span>
      </div>
    </div>
  );
};
