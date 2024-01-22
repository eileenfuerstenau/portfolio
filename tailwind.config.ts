import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { min: "1535px" },
      xl: { min: "1279px" },
      lg: { min: "1023px" },
      md: { min: "767px" },
      sm: { min: "639px" },
    },
    fontSize: {
      small: ["1rem", "1.25rem"],
      screenSmall: ["1rem", "1.4rem"],
      medium: ["1.25rem", "1.5rem"],
      screenMedium: ["1.25rem", "1.75rem"],
      isLarge: ["1.5rem", "1.75rem"],
      screenLarge: ["1.75rem", "2rem"],
      xlarge: ["1.75rem", "2.25rem"],
      screenXlarge: ["3rem", "3rem"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/heroLines.svg')",
        heroBlock: "url('/heroBlock.svg')",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
      },
      colors: {
        white: "#ffffff",
        lightOrange: "#FEB273",
        orange: "#FB6514",
        lightGrey: "#9090A7",
        darkGrey: "#171717",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#000000",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#FB6514",
            },
          },
        },
      },
    }),
  ],
};

export default tailwindConfig;
