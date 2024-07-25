import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
