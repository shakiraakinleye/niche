import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
// import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
