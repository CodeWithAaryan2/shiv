import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Shiv Enterprises | Road Construction & Infrastructure Company in India",
  description:
    "Shiv Enterprises is a leading construction and infrastructure company in India specializing in road construction, material supply, and civil engineering projects since 2020.",
  keywords: [
    "Shiv Enterprises",
    "Shiv Enterprises construction",
    "road construction company in India",
    "infrastructure company India",
    "civil construction contractor",
    "material trading company",
    "bitumen supplier India",
    "road contractor Uttar Pradesh",
    "construction company Prayagraj"
  ],
  authors: [{ name: "Shiv Enterprises" }],
  openGraph: {
    title: "Shiv Enterprises | Building India's Infrastructure",
    description:
      "Trusted construction and infrastructure partner delivering quality road and civil projects across India.",
    url: "https://www.shiventerprisees.com",
    siteName: "Shiv Enterprises",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shiv Enterprises Construction Company"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
