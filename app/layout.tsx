import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { BRAND_CONFIG } from "@/lib/brand";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: BRAND_CONFIG.name,
  description: BRAND_CONFIG.offer.subheadline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
