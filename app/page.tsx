import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FEATURES, CTA } from "@/lib/constants";
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
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              {CTA.badge}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn Your Guest TV Into a{" "}
              <span className="text-emerald-400">Welcome Experience</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl">
              Personalized greetings, instant WiFi, local recommendations, and
              streaming apps - all on one screen. Delight your vacation rental
              guests from the moment they arrive.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href={CTA.href}>
                  {CTA.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
                <Link href="/demo">Try the Demo</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Free shipping
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Cancel anytime
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
                <Link href={CTA.href}>
                  {CTA.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <Link href="/demo">Try the Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
