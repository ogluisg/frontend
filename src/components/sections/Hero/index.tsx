"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeroProps } from "./types";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Star } from "lucide-react";

const defaultHero: HeroProps = {
  title: "Transform Your Business with AI-Powered Solutions",
  subtitle:
    "We help businesses automate, engage customers, and scale operations with cutting-edge AI technology including chatbots, automation workflows, and voice receptionists.",
  ctaText: "Get Started Today",
  ctaLink: "/contact",
};

export function Hero({
  title = defaultHero.title,
  subtitle = defaultHero.subtitle,
  ctaText = defaultHero.ctaText,
  ctaLink = defaultHero.ctaLink,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              <Star className="h-4 w-4 fill-current" />
              <span>Trusted by 500+ businesses worldwide</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group flex items-center gap-2"
                asChild
              >
                <a href="/demo" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border">
              <div className="grid grid-cols-2 gap-4">
                {/* AI Chatbot Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-background rounded-lg p-4 border shadow-sm"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">AI Chatbot</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-3/4" />
                    <div className="h-2 bg-muted rounded w-1/2" />
                  </div>
                </motion.div>

                {/* Automation Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-background rounded-lg p-4 border shadow-sm"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Automation</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-full" />
                    <div className="h-2 bg-muted rounded w-2/3" />
                  </div>
                </motion.div>

                {/* Voice Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-background rounded-lg p-4 border shadow-sm"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Voice AI</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-4/5" />
                    <div className="h-2 bg-muted rounded w-3/4" />
                  </div>
                </motion.div>

                {/* Analytics Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-background rounded-lg p-4 border shadow-sm"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Analytics</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-1/2" />
                    <div className="h-2 bg-muted rounded w-3/4" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
