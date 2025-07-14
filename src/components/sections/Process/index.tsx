"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Cal from "@calcom/embed-react";
import { CAL_CONFIG } from "@/lib/cal-config";
import { Phone, Target, Rocket, TrendingUp, CheckCircle } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description:
      "We start with a comprehensive discovery call to understand your business needs, challenges, and goals. Our experts analyze your current processes and identify AI opportunities.",
    icon: Phone,
    color: "bg-blue-500",
    features: [
      "Business needs assessment",
      "Current process analysis",
      "AI opportunity identification",
      "ROI potential evaluation",
    ],
  },
  {
    id: 2,
    title: "Strategic Planning",
    description:
      "Based on our discovery, we develop a customized AI strategy tailored to your business objectives. We create detailed roadmaps and implementation plans.",
    icon: Target,
    color: "bg-purple-500",
    features: [
      "Custom AI strategy development",
      "Technology stack selection",
      "Implementation roadmap",
      "Resource planning",
    ],
  },
  {
    id: 3,
    title: "Implementation & Deployment",
    description:
      "Our development team brings your AI strategy to life with rapid prototyping and iterative development. We ensure seamless integration with your existing systems.",
    icon: Rocket,
    color: "bg-green-500",
    features: [
      "Rapid prototyping",
      "Iterative development",
      "System integration",
      "Quality assurance",
    ],
  },
  {
    id: 4,
    title: "Optimization & Growth",
    description:
      "We continuously monitor, optimize, and scale your AI solutions to maximize performance and drive ongoing business growth and efficiency improvements.",
    icon: TrendingUp,
    color: "bg-orange-500",
    features: [
      "Performance monitoring",
      "Continuous optimization",
      "Scalability planning",
      "Growth strategies",
    ],
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
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
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a systematic approach to ensure your AI transformation is
            successful, from initial consultation to ongoing optimization and
            growth.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg border-4 border-background">
                      {step.id}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={cn("p-3 rounded-lg text-white", step.color)}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <p className="text-muted-foreground text-sm mb-2">
                      {step.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {step.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2 text-xs"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-background rounded-2xl p-8 border shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your discovery call today and let's explore how AI can
              transform your business.
            </p>
            <button
              data-cal-link="luis-sanchez-f4rxbu/30min"
              data-cal-config='{"theme":"dark"}'
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
            >
              Book 30 Minute Discovery Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
