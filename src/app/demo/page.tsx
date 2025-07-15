import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatbotDemo } from "@/components/features/chatbot/ChatbotDemo";
import { WorkflowBuilder } from "@/components/features/automation/WorkflowBuilder";
import { VoiceDemo } from "@/components/features/voice-receptionist/VoiceDemo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MessageSquare, Zap, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try Our AI Solutions - Interactive Demos",
  description:
    "Experience the power of our AI technology with interactive demos. Try our AI chatbot, automation workflows, and voice receptionist to see how our solutions can transform your business operations.",
  keywords: [
    "AI demo",
    "chatbot demo",
    "automation demo",
    "voice AI demo",
    "interactive AI",
    "AI testing",
    "business AI tools",
    "AI workflow demo",
  ],
  openGraph: {
    title: "Try Our AI Solutions - Interactive Demos",
    description:
      "Experience the power of our AI technology with interactive demos. Try our AI chatbot, automation workflows, and voice receptionist.",
    url: "https://sanflow.co/demo",
    images: [
      {
        url: "/demo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanflow AI Interactive Demos",
      },
    ],
  },
  twitter: {
    title: "Try Our AI Solutions - Interactive Demos",
    description:
      "Experience the power of our AI technology with interactive demos. Try our AI chatbot, automation workflows, and voice receptionist.",
    images: ["/demo-twitter-image.png"],
  },
  alternates: {
    canonical: "/demo",
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Try Our AI Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of our AI technology with these interactive
              demos. See how our solutions can transform your business
              operations.
            </p>
          </div>

          {/* Demo Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Chatbot Demo */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                  <span>AI Chatbot</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChatbotDemo />
              </CardContent>
            </Card>

            {/* Automation Demo */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span>AI Automation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <WorkflowBuilder />
              </CardContent>
            </Card>

            {/* Voice Demo */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-purple-500" />
                  <span>Voice Receptionist</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <VoiceDemo />
              </CardContent>
            </Card>
          </div>

          {/* Features Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
              <p className="text-muted-foreground">
                Our AI chatbots provide instant responses to customer inquiries,
                ensuring your business never sleeps.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Automated Workflows</h3>
              <p className="text-muted-foreground">
                Streamline your business processes with intelligent automation
                that learns and adapts to your needs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Professional Voice AI</h3>
              <p className="text-muted-foreground">
                Handle calls professionally with our AI voice receptionist that
                provides exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
