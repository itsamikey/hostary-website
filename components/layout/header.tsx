"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG, CTA, LAUNCH_MODE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex cursor-pointer items-center gap-2">
          <Image
            src="/hostary-logo-black.png"
            alt={SITE_CONFIG.name}
            width={120}
            height={32}
            className="h-8 w-auto select-none"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center md:gap-4">
          {LAUNCH_MODE === "live" && (
            <Button variant="ghost" asChild>
              <Link href={`${SITE_CONFIG.appUrl}/login`}>Sign In</Link>
            </Button>
          )}
          <Button asChild>
            <Link href={CTA.href}>{CTA.label}</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            {LAUNCH_MODE === "live" && (
              <Button variant="outline" asChild className="w-full">
                <Link href={`${SITE_CONFIG.appUrl}/login`}>Sign In</Link>
              </Button>
            )}
            <Button asChild className="w-full">
              <Link href={CTA.href}>{CTA.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
