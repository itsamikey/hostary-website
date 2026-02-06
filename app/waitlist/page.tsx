"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Tv, Wifi, MapPin, ShieldCheck } from "lucide-react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Launching Soon
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Be the First to{" "}
            <span className="text-emerald-600">Welcome Your Guests</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Hostary transforms your vacation rental TV into a personalized guest
            experience. Join the waitlist to get early access and exclusive launch
            pricing.
          </p>

          {status === "success" ? (
            <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-8">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold text-emerald-900">
                You&apos;re on the list!
              </h2>
              <p className="mt-2 text-emerald-700">
                We&apos;ll notify you as soon as Hostary is ready. In the meantime,
                check out what your guests will experience.
              </p>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/demo">
                  Try the Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-lg flex-1"
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap"
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}

          {status !== "success" && (
            <p className="mt-4 text-sm text-gray-400">
              No spam. We&apos;ll only email you when we launch.
            </p>
          )}
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">
            What&apos;s Coming
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Tv,
                title: "Welcome Screens",
                description: "Personalized greetings for every guest",
              },
              {
                icon: Wifi,
                title: "Instant WiFi",
                description: "QR code scan to connect — no typing",
              },
              {
                icon: MapPin,
                title: "Local Guide",
                description: "Restaurants and attractions nearby",
              },
              {
                icon: ShieldCheck,
                title: "Auto-Reset",
                description: "Streaming apps reset on checkout",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <item.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">
                Preview the Guest Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
