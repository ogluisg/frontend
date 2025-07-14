import { CalPopupInitializer } from "@/components/CalPopupInitializer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanflow AI - Intelligent Solutions for Your Business",
  description:
    "Transform your business with cutting-edge AI solutions. We specialize in chatbots, automation, voice receptionists, and intelligent workflow systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/512x512.png" sizes="512x512" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CalPopupInitializer />
        {children}
      </body>
    </html>
  );
}
