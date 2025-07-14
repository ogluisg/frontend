"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeaderProps } from "./types";
import { Navigation } from "./Navigation";
import { Button } from "@/components/ui/Button";
import Cal from "@calcom/embed-react";
import { CAL_CONFIG } from "@/lib/cal-config";

const defaultNavigation = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Demo", href: "/demo" },
  { label: "Contact", href: "#contact" },
];

export function Header({
  navigation = defaultNavigation,
  transparent = false,
  sticky = true,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        transparent && "bg-transparent border-transparent",
        sticky && "sticky top-0 z-50"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo (Sanflow) */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Sanflow</span>
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
          </Link>

          {/* Navigation */}
          <Navigation items={navigation} />

          {/* CTA Button and AI badge on the right */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <button
                data-cal-link="luis-sanchez-f4rxbu/30min"
                data-cal-config='{"theme":"dark"}'
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3"
              >
                Book 30 Minute Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
