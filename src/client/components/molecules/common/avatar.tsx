import Image, { StaticImageData } from "next/image";

import { cn } from "@/client/lib/utils";

export type Avatar = {
  src: string | StaticImageData;
  alt: string;
};

export type AvatarProps = Avatar & {
  avatarClassName?: string;
};

export const Avatar = ({ src, alt, avatarClassName }: AvatarProps) => {
  return (
    <Image
      className={cn(
        "inline-block h-12 w-12 aspect-square object-cover rounded-full border-1.5 border-white ",
        avatarClassName
      )}
      src={src}
      alt={alt}
    />
  );
};

export const MultipleAvatars = ({ avatars }: { avatars: Avatar[] }) => {
  return (
    <div className="relative flex gap-4">
      {avatars.map((avatar, index) => {
        return (
          <Avatar
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            avatarClassName="first:scale-110 first:absolute first:top-1/2 first:left-1/2 first:-translate-x-1/2 first:-translate-y-1/2"
          />
        );
      })}
    </div>
  );
};
