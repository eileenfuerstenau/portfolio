import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Eileen Fuerstenau | Web Developer from Hamburg | Personal Website",
  description:
    "Explore the digital journey of Eileen Fuerstenau, a passionate female Web Developer. Dive into her CV, discover her projects, and gain insights into her outlook on life and the world in the tech industry.",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Eileen",
    "Fuerstenau",
    "Fürstenau",
    "Web Developer",
    "Hamburg",
    "Female Developer",
    "Frontend Development",
    "Agile Software Development",
    "Web Development",
    "Tech Industry",
    "Digital Journey",
    "Passionate Developer",
    "Tech Enthusiast",
    "Software Engineering",
    "Web Engineering",
    "Speaker",
    "Coding",
    "Software Developer",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Eileen Fuerstenau" }],
  creator: "Eileen Fuerstenau",
  publisher: "Eileen Fuerstenau",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eileen-fuerstenau.dev"),
  openGraph: {
    title: "Eileen Fuerstenau",
    description:
      "Explore the digital journey of Eileen Fuerstenau, a passionate female Web Developer. Dive into her CV, discover her projects, and gain insights into her outlook on life and the world in the tech industry.",
    images: [
      {
        url: "/openGraphImage.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Eileen Fuerstenau - Web Developer",
  },
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
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  );
}
