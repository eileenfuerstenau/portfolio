import { Urbanist } from "next/font/google";

export const urbanist_init = Urbanist({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const urbanist = urbanist_init.variable;
