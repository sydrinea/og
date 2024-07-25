import type { Metadata, Viewport } from "next";
import { Inclusive_Sans, Recursive } from "next/font/google";
import "./globals.css";

const inclusiveSans = Inclusive_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inclusive-sans",
  display: "swap",
});

const recursiveMono = Recursive({
  subsets: ["latin"],
  variable: "--font-recursive-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenGraph Images",
  description: "OpenGraph image generator for sydneyn.dev",
};

export const viewport: Viewport = {
  themeColor: "#ea76cb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inclusiveSans.variable} ${recursiveMono.variable} latte dark:macchiato bg-base text-lg`}
    >
      <body>{children}</body>
    </html>
  );
}
