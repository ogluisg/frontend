"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationProps } from "./types";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navigation({ items, className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn("hidden md:flex items-center space-x-8", className)}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
