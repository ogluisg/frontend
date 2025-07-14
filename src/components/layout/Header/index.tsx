"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeaderProps } from "./types";
import { Navigation } from "./Navigation";
import { Button } from "@/components/ui/Button";

const defaultNavigation = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
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
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                AI
              </span>
            </div>
            <span className="font-bold text-xl">Agency</span>
          </Link>

          {/* Navigation */}
          <Navigation items={navigation} />

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
