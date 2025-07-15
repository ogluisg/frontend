import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sanflow AI Business Solutions",
            description:
              "Transform your business with cutting-edge AI solutions including chatbots, automation, voice receptionists, and intelligent workflow systems.",
            provider: {
              "@type": "Organization",
              name: "Sanflow AI",
              url: "https://sanflow.co",
            },
            serviceType: [
              "AI Chatbot Development",
              "Business Process Automation",
              "Voice AI Solutions",
              "Workflow Optimization",
            ],
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Solutions Catalog",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Chatbot",
                    description:
                      "24/7 customer support with intelligent AI chatbots",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Automation",
                    description:
                      "Streamline workflows with intelligent automation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Voice Receptionist",
                    description:
                      "Professional AI voice assistant for call handling",
                  },
                },
              ],
            },
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="process">
          <Process />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
