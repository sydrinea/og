import type { Metadata } from "next";
import { Inclusive_Sans } from "next/font/google";
import "./globals.css";

const inclusiveSans = Inclusive_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "og.sydneyn.dev",
  description: "OpenGraph image generator for sydneyn.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="latte dark:macchiato bg-base">
      <body className={inclusiveSans.className}>{children}</body>
    </html>
  );
}
