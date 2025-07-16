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
  title: "og:image for Sydney Newmark",
  description: "custom social media embeds",
  openGraph: {
    images: [
      `https://og.sydneyn.dev/api/og?title=${encodeURIComponent(
        "og:image"
      )}&description=${encodeURIComponent("custom social media embeds")}`,
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#7287fd",
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
