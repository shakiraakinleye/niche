import headlessui from "@headlessui/tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";
import { defineConfig } from "windicss/helpers";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/client/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      backgroundImage: {
        "waitlist-background":
          "linear-gradient(to right bottom, rgba(225, 225, 225, 0.9), rgba(225, 225, 225, 1)), url('/waitlist-bg-image.jpg')",
        "text-backgradient":
          "linear-gradient(to bottom right, rgba(27, 27, 35, 1), rgba(225, 94, 3, 1))",
        "text-backgradient2":
          "linear-gradient(to bottom right, #1B1B23 9.1%, #040474 68.78%)",
        "start-selling-banner-bg": "url('../public/shopping-banner-bg.png')",
        "getting-started-section-gradient":
          "linear-gradient(to right, rgba(68, 188, 255, 0.11) -0.55%, rgba(68, 176, 255, 0.11) 22.86%, rgba(255, 68, 236, 0.11) 48.36%, rgba(255, 68, 236, 0.11) 73.33%, rgba(255, 103, 94, 0.11) 99.34%)",
      },
      fontFamily: {
        display: ["var(--font-playfairDisplay)", "system-ui", "sans-serif"],
        default: ["var(--font-dmSans)", "system-ui", "sans-serif"],
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      colors: {
        beige: {
          100: "#FBFCF8",
          200: "#F5F5DC",
          300: "#FFDECC",
          400: "#F6F6F6",
          500: "#F8F6F4",
        },
        primary: {
          100: "#FF5E03",
          200: "#FFDCC8",
        },
        secondary: {
          100: "#D6EAB6",
        },
        tertiary: {
          100: "#040474",
          200: "#667BF1",
          300: "#3535A1",
        },
        gray: {
          150: "#F9F9F9",
          1000: "#6B7280",
          1100: "#4D4D69",
          1200: "#F0F1F3",
          1300: "#787878",
          1400: "#9999A9",
          1500: "#CCCCD4",
          1600: "rgba(217, 217, 217, 0.15)",
          1700: "#ADADAD",
          1800: "#ECECEC",
          1900: "#9C9C9C",
          2000: "#ABABAB",
          2100: "#757575",
          2200: "#BBBBC7",
          2300: "#929292",
          2400: "#D9D9D9",
          2500: "#666666",
          2600: "#B9B6B6",
          2700: "#E7E7E7",
          2800: "#EDEDED",
          2900: "#7C7C7C",
          3000: "#A5AAAE",
          3100: "#D1D1D1",
          3200: "#DCD7D7",
          3300: "#C1C1C1",
          3400: "#ECEFF1",
          3500: "#C5CAD3",
          3600: "#667085",
          3700: "#344054",
          3800: "#67677F",
          3900: "#F2F4F7",
        },
        dark: {
          100: "#1A1A3E",
          200: "#010129",
          300: "#0B091B",
          400: "#292D32",
          500: "#343454",
          600: "#222222",
          700: "#1B1B1B",
          800: "#191D23",
          900: "#231B47",
          1000: "#0F172A",
          1100: "#334155",
        },
        lemon: {
          100: "#DCEDC1",
          200: "#68853A",
        },
        mint: {
          100: "#A8E6CF",
          200: "#3CB286",
        },
        pink: {
          1000: "#F07C95",
          1100: "#FFCCD7",
          1200: "#FFC2D0",
        },
        red: {
          1000: "#701529",
          1100: "#802035",
          1200: "#C50932",
        },
        green: {
          1000: "#10620E",
          1100: "#043703",
          1200: "#49D147",
          1300: "#ECFDF3",
          1400: "#D1FADF",
          1500: "#039855",
        },
        yellow: {
          1000: "#F8D98B",
          1100: "#966B00",
          1200: "#E8AA42",
        },
        teal: {
          1000: "#025464",
        },
        // light mode
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "none",
            // DEFAULT: "#e4e4e7",
          },
          ring: {
            DEFAULT: "none",
            // DEFAULT: "#e4e4e7",
          },
          content: {
            subtle: "#9ca3af", // gray-400
            // DEFAULT: "#6b7280", // gray-500
            DEFAULT: "52525B", // gray-600
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
          },
          background: {
            muted: "#131A2B",
          },
        },
      },
      borderRadius: {
        smd: "5px",
        xlg: "10px",
        "2xxl": "20px",
        "4xl": "32px",
        "5xl": "40px",
        large: "50px",
        100: "100px",
        // tremor
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      lineHeight: {
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.25: "1.8125rem",
        8.25: "2.0625rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16.5: "4.125rem",
        22: "5.5rem",
        40: "7.5rem",
      },
      spacing: {
        0.25: "0.063rem",
        1.25: "5px",
        2.5: "0.625rem",
        3.7: "0.9375rem",
        4.5: "1.125rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        9: "2.25rem",
        13: "3.25rem",
        15: "3.75rem",
        15.5: "3.875rem",
        18: "4.5rem",
        20.5: "5.125rem",
        21: "5.25rem",
        22: "5.5rem",
        22.5: "5.625rem",
        25: "6.25rem",
        26: "6.5rem",
        28.25: "7.06rem",
        30: "7.5rem",
        33: "8.25rem",
        34: "8.375rem",
        37.5: "9.375rem",
        45: "11.25rem",
        49: "12.25rem",
        50: "12.5rem",
        67.5: "16.875rem",
        70: "17.5rem",
        72.5: "18.125rem",
        75: "18.75rem",
        79.5: "19.875rem",
        78.5: "19.625rem",
        85: "21.25rem",
        87.5: "21.875rem",
        88: "22rem",
        90: "22.5rem",
        100: "25rem",
        105: "26.25rem",
        107: "26.75rem",
        112: "28rem",
        112.5: "28.125rem",
        113: "28.25rem",
        119: "29.75rem",
        120: "30rem",
        130: "32.5rem",
        150: "37.5rem",
        152: "38rem",
        155: "38.75rem",
        180: "45rem",
        195: "48.75rem",
        200: "50rem",
      },
      opacity: {
        35: ".35",
        45: ".45",
      },
      fontSize: {
        xxs: "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1.0625rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "2xxl": "1.75rem",
        "3xl": "1.875rem",
        "3xxl": "2rem",
        "4xl": "2.25rem",
        "4xxl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "6xxl": "4rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
        "10xl": "9.5rem",
        // tremor
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1rem", { lineHeight: "1.5rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      letterSpacing: {
        tight015: "-0.015em",
        tight012: "-0.012em",
        tight01: "-0.01em",
        tight005: "-0.005em",
        wide006: "0.0625em",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      screens: {
        xxs: "240px",
        xs: "300px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      boxShadow: {
        "2md": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        cardLg:
          "0px 8px 10px -6px rgba(0, 0, 0, 0.05), 0px 20px 25px -5px rgba(0, 0, 0, 0.05), 0px 0px 0px 2px rgba(255, 94, 3, 0.10)",
        modalXl:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        popup: "0px 0px 80px 0px rgba(174, 168, 168, 0.25)",
        dropdown:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        // tremor - light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // tremor - dark
        // "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        // "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        // "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      dropShadow: {
        "2md": "0px 4px 4px rgba(215, 202, 202, 0.25)",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [
    forms,
    typography,
    scrollbarHide,
    headlessui,
    defineConfig(({ addVariant }: { addVariant: any }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
export default config;
