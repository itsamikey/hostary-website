import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Hostary collects, uses, and protects your personal information. GDPR compliant privacy practices for our guest TV experience platform.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective Date: February 6, 2026 | Last Updated: February 6, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground">
            Hostary (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            located in Clovis, California, operates the Hostary platform
            including our website at hostary.app, our web application at
            app.hostary.app, and the Hostary TV device software. This Privacy
            Policy explains how we collect, use, store, and share your personal
            information when you use our Service.
          </p>
          <p className="mt-4 text-muted-foreground">
            In this policy, &quot;Service&quot; refers to the Hostary platform
            as a whole. &quot;You&quot; or &quot;user&quot; refers to hosts and
            property managers who use the Service. &quot;Guest&quot; refers to
            visitors staying at a vacation rental property managed through the
            Service.
          </p>

          {/* 1. Information We Collect */}
          <h2 className="text-2xl font-bold mt-12">
            1. Information We Collect
          </h2>

          <h3 className="text-lg font-semibold mt-8">
            Information You Provide Directly
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Account information:</strong> name, email address, and
              password when you create an account.
            </li>
            <li>
              <strong>Property information:</strong> property names, addresses,
              descriptions, WiFi credentials, house rules, check-in/check-out
              instructions, and local recommendations.
            </li>
            <li>
              <strong>Guest information:</strong> guest names for personalized TV
              welcome screens and reservation dates.
            </li>
            <li>
              <strong>Payment information:</strong> billing details processed
              securely through Stripe. Hostary does not directly store your full
              credit card number.
            </li>
            <li>
              <strong>Communications:</strong> messages you send through our
              contact forms or support channels.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-8">
            Information Collected Automatically
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Usage data:</strong> pages visited, features used, device
              pairing activity, and session duration.
            </li>
            <li>
              <strong>Device information:</strong> browser type, operating
              system, and IP address.
            </li>
            <li>
              <strong>Cookies:</strong> session cookies for authentication and
              preference management.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-8">
            Information from Third Parties
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Firebase:</strong> authentication tokens and account
              verification data.
            </li>
            <li>
              <strong>Stripe:</strong> payment confirmation and subscription
              status.
            </li>
          </ul>

          {/* 2. How We Use Your Information */}
          <h2 className="text-2xl font-bold mt-12">
            2. How We Use Your Information
          </h2>
          <p className="mt-4 text-muted-foreground">
            We use the information we collect to:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              Provide and operate the Service, including displaying personalized
              guest welcome screens and delivering property information to TV
              devices.
            </li>
            <li>Process payments and manage your subscription.</li>
            <li>
              Send service-related communications such as account confirmations,
              billing notices, and feature updates.
            </li>
            <li>Improve and develop the Service through usage analytics.</li>
            <li>Ensure security and prevent fraud.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            We do not sell your personal information to third parties.
          </p>

          {/* 3. Legal Basis for Processing (GDPR) */}
          <h2 className="text-2xl font-bold mt-12">
            3. Legal Basis for Processing (GDPR)
          </h2>
          <p className="mt-4 text-muted-foreground">
            For users in the European Union and United Kingdom, we process your
            personal data under the following legal bases:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Contract performance:</strong> processing your account and
              property data is necessary to deliver the Service you signed up
              for.
            </li>
            <li>
              <strong>Legitimate interests:</strong> analytics to improve the
              Service and security monitoring to protect our platform and users.
            </li>
            <li>
              <strong>Consent:</strong> marketing communications, where
              applicable. You can withdraw consent at any time.
            </li>
            <li>
              <strong>Legal obligation:</strong> retaining tax and financial
              records as required by law.
            </li>
          </ul>

          {/* 4. How We Share Your Information */}
          <h2 className="text-2xl font-bold mt-12">
            4. How We Share Your Information
          </h2>
          <p className="mt-4 text-muted-foreground">
            We share your information only in the following circumstances:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Service providers:</strong> Firebase (authentication and
              database), Stripe (payment processing), and Vercel (website
              hosting) process data on our behalf to operate the Service.
            </li>
            <li>
              <strong>Guest-facing display:</strong> guest names and property
              information you enter are displayed on TV devices within the
              rental property. This is the core function of the Service.
            </li>
            <li>
              <strong>Legal requirements:</strong> when required by law, court
              order, or governmental authority.
            </li>
            <li>
              <strong>Business transfers:</strong> in connection with a merger,
              acquisition, or sale of assets, your data may be transferred to
              the successor entity.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            We do not sell your personal data.
          </p>

          {/* 5. Data Retention */}
          <h2 className="text-2xl font-bold mt-12">5. Data Retention</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Account data:</strong> retained for the duration of your
              account plus 30 days after deletion.
            </li>
            <li>
              <strong>Billing records:</strong> retained as required by tax and
              financial regulations, typically up to 7 years.
            </li>
            <li>
              <strong>Guest data:</strong> guest names and reservation
              information are retained for the duration of the reservation plus
              30 days.
            </li>
            <li>
              <strong>Usage analytics:</strong> aggregated and anonymized data
              may be retained indefinitely.
            </li>
            <li>
              <strong>Streaming app data on devices:</strong> automatically
              cleared at guest checkout.
            </li>
          </ul>

          {/* 6. Your Rights */}
          <h2 className="text-2xl font-bold mt-12">6. Your Rights</h2>

          <h3 className="text-lg font-semibold mt-8">All Users</h3>
          <p className="mt-4 text-muted-foreground">
            Regardless of your location, you have the right to:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate or incomplete data.</li>
            <li>Delete your account and associated data.</li>
            <li>Opt out of marketing communications.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8">
            Additional Rights for EU/UK Residents
          </h3>
          <p className="mt-4 text-muted-foreground">
            Under the GDPR and UK GDPR, you also have the right to:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>Request portability of your data in a structured format.</li>
            <li>Restrict the processing of your data.</li>
            <li>
              Object to processing based on legitimate interests.
            </li>
            <li>Withdraw consent at any time where processing is based on consent.</li>
            <li>
              Lodge a complaint with your local data protection supervisory
              authority.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:support@hostary.app"
              className="text-primary underline"
            >
              support@hostary.app
            </a>
            .
          </p>

          {/* 7. International Data Transfers */}
          <h2 className="text-2xl font-bold mt-12">
            7. International Data Transfers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Your data is processed and stored in the United States using
            Firebase (Google Cloud) infrastructure. For users in the EU and UK,
            data transfers are conducted under Standard Contractual Clauses or
            other lawful transfer mechanisms as required by applicable law.
            Google and Stripe maintain their own data protection certifications
            and compliance programs.
          </p>

          {/* 8. Cookies and Tracking Technologies */}
          <h2 className="text-2xl font-bold mt-12">
            8. Cookies and Tracking Technologies
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>Essential cookies:</strong> required for session
              authentication and security. These cannot be disabled.
            </li>
            <li>
              <strong>Analytics cookies:</strong> help us understand usage
              patterns and improve the Service. You can disable these in your
              browser settings.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            We do not use advertising cookies or third-party tracking pixels.
            You can manage cookies through your browser settings.
          </p>

          {/* 9. Data Security */}
          <h2 className="text-2xl font-bold mt-12">9. Data Security</h2>
          <p className="mt-4 text-muted-foreground">
            We take reasonable measures to protect your personal information,
            including:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>Encryption of data in transit using HTTPS/TLS.</li>
            <li>Firebase security rules to control database access.</li>
            <li>Secure password hashing.</li>
            <li>Regular security reviews.</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            No method of transmission or storage is 100% secure. We encourage
            you to use a strong, unique password for your Hostary account.
          </p>

          {/* 10. Children's Privacy */}
          <h2 className="text-2xl font-bold mt-12">
            10. Children&apos;s Privacy
          </h2>
          <p className="mt-4 text-muted-foreground">
            The Service is not directed to individuals under the age of 16 (or
            13 in the United States under COPPA). We do not knowingly collect
            personal information from children. If we become aware that we have
            collected data from a child, we will promptly delete it.
          </p>

          {/* 11. Changes to This Privacy Policy */}
          <h2 className="text-2xl font-bold mt-12">
            11. Changes to This Privacy Policy
          </h2>
          <p className="mt-4 text-muted-foreground">
            We may update this Privacy Policy from time to time. Material
            changes will be communicated via email or a prominent notice on our
            website. The &quot;Last Updated&quot; date at the top of this page
            will reflect the most recent revision. Continued use of the Service
            after changes take effect constitutes your acceptance of the updated
            policy.
          </p>

          {/* 12. Contact Us */}
          <h2 className="text-2xl font-bold mt-12">12. Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact us:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              Email:{" "}
              <a
                href="mailto:support@hostary.app"
                className="text-primary underline"
              >
                support@hostary.app
              </a>
            </li>
            <li>Address: Hostary, Clovis, CA</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            EU/UK users may also contact their local data protection supervisory
            authority.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Questions About This Policy?</h2>
          <p className="mt-4 text-primary-foreground/80">
            We&apos;re happy to help clarify anything. Reach out to our team.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
