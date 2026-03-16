import { LegalDocument } from "@/components/content/legal-document";
import { PageShell } from "@/components/content/page-shell";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Read the Hutliv Terms of Service covering platform use, accounts, subscriptions, data ownership, acceptable use, service availability, and liability terms.",
  path: "/terms-of-service",
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "These Terms of Service govern your use of hutliv.com and Hutliv products, including LeadBuddie and Hutliv Realty. By accessing or using the services, you agree to these Terms.",
    ],
  },
  {
    title: "2. Description of Services",
    paragraphs: [
      "Hutliv provides business software products that help users manage leads, messaging workflows, property listings, enquiries, and related customer operations.",
      "Our products may evolve over time and new features, workflows, or supporting services may be introduced or modified.",
    ],
  },
  {
    title: "3. User Accounts",
    paragraphs: [
      "Users may need to create an account to access certain Hutliv services. You are responsible for maintaining the confidentiality of account credentials and for activity that takes place under your account.",
      "You agree to provide accurate information and keep account details reasonably up to date.",
    ],
  },
  {
    title: "4. Acceptable Use Policy",
    paragraphs: [
      "Users may not misuse the platform or use it in ways that violate law, third-party rights, platform integrity, or service availability.",
    ],
    bullets: [
      "Do not use Hutliv for unlawful, fraudulent, abusive, or deceptive activity.",
      "Do not interfere with the security, stability, or proper functioning of the platform.",
      "Do not upload or transmit harmful code, malware, or malicious content.",
      "Do not misuse messaging or communication features in ways that violate platform rules or third-party policies.",
    ],
  },
  {
    title: "5. Subscription and Payments",
    paragraphs: [
      "Some Hutliv services may require paid subscriptions or additional fees. Pricing, billing cycles, and payment terms may be described on the relevant product or billing pages.",
      "Users are responsible for paying applicable fees on time and for keeping payment information current when subscription services are used.",
    ],
  },
  {
    title: "6. Intellectual Property",
    paragraphs: [
      "Hutliv retains all rights, title, and interest in the platform, software, interface design, branding, and related materials, except for customer data that belongs to the user as described below.",
      "You may not copy, reverse engineer, distribute, or reproduce the platform except as permitted by applicable law or express written permission.",
    ],
  },
  {
    title: "7. Data Ownership",
    paragraphs: [
      "Users retain ownership of their own business data, including leads, property listings, enquiries, and related content submitted to the platform.",
      "You grant Hutliv the limited rights required to host, process, display, secure, and transmit that data for the purpose of providing the services.",
    ],
  },
  {
    title: "8. Service Availability",
    paragraphs: [
      "Hutliv works to provide reliable access to the platform, but we do not guarantee uninterrupted or error-free availability at all times. Maintenance, updates, third-party dependencies, or technical issues may occasionally affect service access.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Hutliv will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the platform.",
      "Our aggregate liability in connection with the services will be limited to the amount paid by the user for the relevant services during the period permitted by applicable law.",
    ],
  },
  {
    title: "10. Termination",
    paragraphs: [
      "Hutliv may suspend or terminate access where accounts violate these Terms, misuse the services, or create risk to platform integrity or other users.",
      "Users may stop using the platform at any time, subject to applicable billing obligations or subscription terms.",
    ],
  },
  {
    title: "11. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws applicable in Tamil Nadu, India, unless otherwise required by applicable law.",
    ],
  },
  {
    title: "12. Contact Information",
    paragraphs: [
      "Questions about these Terms of Service can be sent to hello@hutliv.com.",
      "Hutliv Technologies, Tiruppur, Tamil Nadu, India.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <PageShell
      badge="Terms of Service"
      title="Terms that govern use of Hutliv products and services"
      description="These Terms of Service explain the conditions for using Hutliv software products, including accounts, subscriptions, acceptable use, service access, and data responsibilities."
    >
      <LegalDocument sections={sections} />
    </PageShell>
  );
}
