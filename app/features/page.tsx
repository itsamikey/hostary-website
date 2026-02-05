import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG, FEATURES } from "@/lib/constants";
import {
  Hand,
  Wifi,
  FileText,
  MapPin,
  Tv,
  CloudSun,
  LayoutDashboard,
  ArrowRight,
  Check,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: "Personalized welcome screens, instant WiFi connection via QR code, local dining recommendations, streaming apps, and property info - all on your guest's TV.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hand,
  Wifi,
  FileText,
  MapPin,
  Tv,
  CloudSun,
  LayoutDashboard,
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Everything Your Guests Need, On One Screen
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete guest communication platform built for vacation rentals.
            Transform any Android TV into a personalized guest concierge.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {FEATURES.map((feature, index) => {
        const Icon = iconMap[feature.icon] || Monitor;
        const isEven = index % 2 === 0;

        return (
          <section
            key={feature.id}
            className={index % 2 === 1 ? "bg-muted/30" : ""}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex flex-col justify-center ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {feature.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder */}
                <div
                  className={`flex items-center justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Card className="w-full max-w-md overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Icon className="mx-auto h-16 w-16 opacity-50" />
                        <p className="mt-4 text-sm">
                          Screenshot placeholder for {feature.title}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              And Much More
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built with attention to detail for the best guest experience
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Real-time Sync",
                description: "Changes appear on the TV instantly",
              },
              {
                title: "Multiple Themes",
                description: "Modern, Shimmer, and Twilight display options",
              },
              {
                title: "Easy Device Pairing",
                description: "Simple 6-digit codes for instant setup",
              },
              {
                title: "Reservation Tracking",
                description: "Automatic guest check-in and check-out",
              },
              {
                title: "Activity Dashboard",
                description: "See device status and guest activity",
              },
              {
                title: "Custom Branding",
                description: "Match your property's look and feel",
              },
              {
                title: "Time-based Greetings",
                description: "Good morning, afternoon, or evening",
              },
              {
                title: "Secure & Private",
                description: "Guest data protected and isolated",
              },
            ].map((item) => (
              <Card key={item.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            See Hostary in Action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Start your 14-day free trial and transform how your guests
            experience your property.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href={`${SITE_CONFIG.appUrl}/signup`}>
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
