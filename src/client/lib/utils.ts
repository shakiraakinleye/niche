"use client";

import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { intlFormat } from "date-fns";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { DateTimeFormatOptions } from "../types/date";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkPasswordLength = (password: string) => {
  if (password !== undefined) {
    return password.length >= 8;
  } else return false;
};

export const checkPasswordCharacters = (password: string) => {
  const format = /[\W_]/;

  if (password !== undefined) {
    return format.test(password);
  } else return false;
};

export const defaultNumberInputIncrementDecrementHandler = (e: any) => {
  const arrowKeys = ["ArrowUp", "ArrowDown"];
  if (arrowKeys.includes(e.key)) {
    e.preventDefault();
  }

  if (e.type === "wheel") {
    e.currentTarget.blur();
  }
};

export const CustomImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const dateTimeFormatter = (date: string) => {
  try {
    const dateObj = new Date(date);

    const options: DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Africa/Lagos",
    };

    const dateStr = (options: DateTimeFormatOptions) => {
      const output = intlFormat(dateObj, options, { locale: "en-NG" });
      return output;
    };

    if (isNaN(dateObj.getTime())) {
      throw new Error("Invalid date");
    }

    const completeDateString = dateStr(options);
    const dayMonthString = dateStr({
      day: options.day,
      month: options.month,
      timeZone: options.timeZone,
    });
    const weekdayMonthString = dateStr({
      weekday: options.weekday,
      day: options.day,
      month: options.month,
      timeZone: options.timeZone,
    });
    const timeString = dateStr({
      hour12: true,
      hour: options.hour,
      minute: options.minute,
      timeZone: options.timeZone,
    });

    const localDate = new Date(completeDateString);
    // numeric date
    const year = localDate.getFullYear();
    const month = (localDate.getMonth() + 1).toString().padStart(2, "0");
    const day = localDate.getDate().toString().padStart(2, "0");
    const weekday = localDate.getUTCDay();
    // time
    const hour = localDate.getHours();
    const minute = localDate.getMinutes();

    return {
      completeDateString,
      dayMonthString,
      weekdayMonthString,
      timeString,
      year,
      month,
      day,
      weekday,
      hour,
      minute,
    };
  } catch (error) {
    console.error("Error formatting date:", error);

    return {
      completeDateString: "Invalid Date",
      dayMonthString: "Invalid Date",
      weekdayMonthString: "Invalid Date",
      timeString: "Invalid Time",
      year: "Invalid Date",
      month: "Invalid Date",
      day: "Invalid Date",
      weekday: "Invalid Date",
      hour: "Invalid Time",
      minute: "Invalid Time",
    };
  }
};

// export const priceFormatter = (
//   price: number,
//   currencyType?: string,
//   currencyDisplay?: string
// ) => {
//   const type = currencyType ? currencyType : "NGN";
//   const display = currencyDisplay ? currencyDisplay : "code";

//   const formattedPrice = new Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: type,
//     currencyDisplay: display,
//     useGrouping: true,
//     minimumFractionDigits: price % 1 === 0 ? 0 : 2,
//   }).format(price);

//   return formattedPrice;
// };

type CurrencyDisplay = "symbol" | "narrowSymbol" | "code" | "name";

export const priceFormatter = (
  price: number,
  currencyType: string = "NGN",
  currencyDisplay: CurrencyDisplay = "code"
): string => {
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currencyType,
    currencyDisplay: currencyDisplay,
    useGrouping: true,
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);

  return formattedPrice;
};

// if there is a change here, change in startform schema too
export const checkShopNameCharacter = (shopname: string) => {
  const format = /^[A-Za-z0-9]+$/; //lowercases, uppercases and digits

  if (shopname !== undefined && shopname.length > 0) {
    return format.test(shopname);
  } else return false;
};

export const checkShopNameUppercase = (shopname: string) => {
  const format = /^[A-Z].*$/;

  if (shopname !== undefined && shopname.length > 0) {
    return format.test(shopname);
  } else return false;
};

export const checkShopNameLength = (shopname: string) => {
  if (shopname !== undefined) {
    return shopname.length >= 3 && shopname.length <= 20;
  } else return false;
};

export async function copyToClipboard(text: string) {
  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    await navigator.clipboard.writeText(text);
  }
}

export const SetErrorMessage = (errorMessage: string) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const current = new URLSearchParams(Array.from(searchParams.entries()));
  current.delete("error");
  current.set("error", errorMessage);

  const path = current.toString();
  const query = path ? `?${path}` : "";
  router.push(`${pathname}${query}`);
};
