import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle2,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hand,
  Wifi,
  FileText,
  MapPin,
  Tv,
  CloudSun,
  LayoutDashboard,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-4 w-fit">
                Free device with annual plans - Cancel anytime
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Turn Your Guest TV Into a{" "}
                <span className="text-primary">Welcome Experience</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Personalized greetings, instant WiFi, local recommendations, and
                streaming apps - all on one screen. Delight your vacation rental
                guests from the moment they arrive.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href={`${SITE_CONFIG.appUrl}/signup`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/features">See How It Works</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Free shipping
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* TV Mockup */}
              <div className="relative">
                <div className="rounded-xl border-8 border-foreground/90 bg-foreground/90 p-2 shadow-2xl">
                  <div className="aspect-video w-full max-w-lg overflow-hidden rounded bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
                    <div className="flex h-full flex-col items-center justify-center p-8 text-white">
                      <p className="text-lg opacity-80">Welcome</p>
                      <p className="mt-2 text-3xl font-bold">Sarah & Mike</p>
                      <p className="mt-4 text-sm opacity-60">
                        Your stay begins now
                      </p>
                      <div className="mt-8 flex gap-4">
                        <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
                          <Wifi className="h-6 w-6" />
                        </div>
                        <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
                          <CloudSun className="h-6 w-6" />
                        </div>
                        <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
                          <MapPin className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* TV Stand */}
                <div className="mx-auto h-4 w-32 rounded-b-lg bg-foreground/90" />
                <div className="mx-auto h-2 w-48 rounded-full bg-foreground/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your guests deserve better than a generic TV
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Guests struggle to connect to WiFi, miss your house rules, and
              never discover the best local spots. Hostary transforms your
              TV into a personalized guest concierge.
            </p>
          </div>
        </div>
      </section>

      {/* Streaming Reset Callout */}
      <section className="border-y bg-gradient-to-r from-green-50 to-emerald-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  No More Forgotten Netflix Logins
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Streaming apps automatically reset on guest checkout. All account
                  data is cleared - no awkward calls, no privacy issues, no manual
                  resets needed.
                </p>
              </div>
            </div>
            <Button variant="outline" className="shrink-0" asChild>
              <Link href="/features#streaming">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything your guests need, on one screen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A complete guest experience platform built for vacation rentals
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.slice(0, 6).map((feature) => {
              const Icon = iconMap[feature.icon] || Monitor;
              return (
                <Card key={feature.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/features">
                View All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Up and running in minutes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple setup, powerful results
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Set up your property",
                description:
                  "Add your property details, WiFi credentials, house rules, and local recommendations in our admin dashboard.",
              },
              {
                step: "2",
                title: "Connect your device",
                description:
                  "Get your Hostary device (free with annual plans), plug it into your TV, connect to WiFi, and enter the pairing code. Your guest dashboard appears instantly.",
              },
              {
                step: "3",
                title: "Guests arrive to a welcome",
                description:
                  "Guests see a personalized greeting, scan to connect to WiFi, browse local recommendations, and access their favorite streaming apps.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              All features included. Choose based on your property count.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-2xl font-bold">
              <span>Starting at $14/month</span>
            </div>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/pricing">
                View Pricing Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to elevate your guest experience?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Join property managers who are transforming how guests experience
              their vacation rentals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href={`${SITE_CONFIG.appUrl}/signup`}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
