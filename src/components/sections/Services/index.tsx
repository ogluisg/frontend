"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Service } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Cal from "@calcom/embed-react";
import { CAL_CONFIG } from "@/lib/cal-config";
import { MessageSquare, Zap, Phone, ArrowRight } from "lucide-react";

const services: Service[] = [
  {
    id: "chatbot",
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI that engages customers 24/7, answers questions, and drives conversions.",
    icon: "MessageSquare",
    features: [
      "Natural language processing",
      "Multi-language support",
      "Integration with CRM systems",
      "Analytics and insights",
      "Customizable responses",
      "Seamless handoff to humans",
    ],
    pricing: [],
    demoUrl: "/demo/chatbot",
  },
  {
    id: "automation",
    title: "AI Automation Workflows",
    description:
      "Streamline your business processes with intelligent automation that learns and adapts to your needs.",
    icon: "Zap",
    features: [
      "Visual workflow builder",
      "Pre-built templates",
      "Third-party integrations",
      "Real-time monitoring",
      "Error handling",
      "Scalable architecture",
    ],
    pricing: [],
    demoUrl: "/demo/automation",
  },
  {
    id: "voice-receptionist",
    title: "AI Voice Receptionist",
    description:
      "Professional voice AI that handles calls, routes inquiries, and provides exceptional customer service.",
    icon: "Phone",
    features: [
      "Natural voice synthesis",
      "Call routing and screening",
      "Voice recognition",
      "Call analytics",
      "Integration with phone systems",
      "Custom voice branding",
    ],
    pricing: [],
    demoUrl: "/demo/voice",
  },
];

const iconMap = {
  MessageSquare,
  Zap,
  Phone,
};

export function Services() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered
            tools designed to automate, engage, and scale your operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                              <span>{feature}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col space-y-3">
                      <Link href={`/services/${service.id}`}>
                        <Button className="group w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <Link href="/demo">
                        <Button variant="outline" size="sm" className="w-full">
                          Try Demo
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-background rounded-2xl p-8 border shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that have already transformed their
              operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-cal-link="luis-sanchez-f4rxbu/30min"
                data-cal-config='{"theme":"dark"}'
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
              >
                Book 30 Minute Discovery Call
              </button>
              <Link href="/demo">
                <Button variant="outline" size="lg">
                  View Demos
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
