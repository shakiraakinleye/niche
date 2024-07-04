export type DateTimeFormatOptions = {
  localeMatcher?: "best fit" | "lookup";
  weekday?: "narrow" | "short" | "long";
  era?: "narrow" | "short" | "long";
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  second?: "numeric" | "2-digit";
  timeZoneName?: "short" | "long";
  timeZone?: string;

  hour12?: boolean;
  formatMatcher?: "basic" | "best fit";
  hourCycle?: "h11" | "h12" | "h23" | "h24";
  numberingSystem?: string;
  calendar?: string;
};
