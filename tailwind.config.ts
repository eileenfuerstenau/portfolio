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
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      backgroundImage: {
        hero: "url('/heroLines.svg')",
        heroBlock: "url('/heroBlock.svg')",
      },
      fontFamily: {
        sans: ["var(--font-urbanist)"],
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
