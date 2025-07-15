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
  title: {
    default: "Sanflow AI - Intelligent Solutions for Your Business",
    template: "%s | Sanflow AI",
  },
  description:
    "Transform your business with cutting-edge AI solutions. We specialize in chatbots, automation, voice receptionists, and intelligent workflow systems. Boost productivity and customer satisfaction with our AI-powered tools.",
  keywords: [
    "AI solutions",
    "business automation",
    "chatbot",
    "voice receptionist",
    "workflow automation",
    "artificial intelligence",
    "customer service AI",
    "business intelligence",
    "AI consulting",
    "digital transformation",
  ],
  authors: [{ name: "Sanflow AI Team" }],
  creator: "Sanflow AI",
  publisher: "Sanflow AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sanflow.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanflow.co",
    siteName: "Sanflow AI",
    title: "Sanflow AI - Intelligent Solutions for Your Business",
    description:
      "Transform your business with cutting-edge AI solutions. We specialize in chatbots, automation, voice receptionists, and intelligent workflow systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanflow AI - Intelligent Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanflow AI - Intelligent Solutions for Your Business",
    description:
      "Transform your business with cutting-edge AI solutions. We specialize in chatbots, automation, voice receptionists, and intelligent workflow systems.",
    images: ["/twitter-image.png"],
    creator: "@sanflowai",
    site: "@sanflowai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "AI Solutions",
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sanflow AI",
    "application-name": "Sanflow AI",
    "msapplication-config": "/browserconfig.xml",
  },
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sanflow AI",
              url: "https://sanflow.co",
              logo: "https://sanflow.co/logo.png",
              description:
                "Transform your business with cutting-edge AI solutions. We specialize in chatbots, automation, voice receptionists, and intelligent workflow systems.",
              foundingDate: "2024",
              sameAs: [
                "https://twitter.com/sanflowai",
                "https://linkedin.com/company/sanflow-ai",
                "https://facebook.com/sanflowai",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@sanflow.co",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />

        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sanflow AI",
              url: "https://sanflow.co",
              description:
                "Transform your business with cutting-edge AI solutions",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sanflow.co/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
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
