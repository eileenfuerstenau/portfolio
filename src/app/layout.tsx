import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Personal Website of Web Developer Eileen Fuerstenau from Hamburg",
  description:
    "Explore the digital journey of Eileen Fuerstenau, a passionate female Web Developer. Dive into her CV, discover her projects, and gain insights into her outlook on life and the world in the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="max-w-5xl my-0 mx-auto font-urbanist text-small md:text-screenSmall flex flex-col justify-center items-center text-balance">
            {" "}
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  );
}
