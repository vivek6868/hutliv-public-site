import { LegalDocument } from "@/components/content/legal-document";
import { PageShell } from "@/components/content/page-shell";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read the Hutliv Privacy Policy to understand what information we collect, how we use it, data security practices, cookies, integrations, and user rights.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "This Privacy Policy explains how Hutliv collects, uses, stores, and protects personal and business information when you use hutliv.com and our products, including LeadBuddie and Hutliv Realty.",
      "By using our website or services, you agree to the practices described in this Privacy Policy. We aim to keep this document clear, readable, and aligned with how modern SaaS platforms communicate privacy expectations.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We collect information that helps us provide our services, support users, secure accounts, and improve the platform experience.",
    ],
    bullets: [
      "Account details such as name, email address, phone number, and login credentials.",
      "Business information such as company name, role, website, and service requirements.",
      "Operational data such as leads, enquiries, property listings, notes, and CRM activity stored within our products.",
      "Usage analytics such as device information, pages viewed, actions taken, browser type, and performance data.",
    ],
  },
  {
    title: "3. How We Use Data",
    paragraphs: [
      "Hutliv uses collected data to operate and improve the platform responsibly.",
    ],
    bullets: [
      "To provide our services, create accounts, maintain user access, and deliver product functionality.",
      "To improve product quality, platform performance, usability, and reliability.",
      "To communicate with users about onboarding, support, account notices, billing, and product updates.",
      "To detect misuse, protect service integrity, and maintain security.",
    ],
  },
  {
    title: "4. Data Sharing",
    paragraphs: [
      "We do not sell user data. We may share limited information with trusted service providers where necessary to operate the platform.",
    ],
    bullets: [
      "Cloud infrastructure and hosting providers that help us store and process platform data securely.",
      "Payment providers that support subscription billing and transaction processing.",
      "Professional service providers where needed for analytics, customer support, compliance, or security operations.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "We use reasonable technical and organizational safeguards to protect data against unauthorized access, misuse, alteration, or loss. While no online system can guarantee absolute security, Hutliv works to maintain practical and responsible security controls for a SaaS platform.",
    ],
  },
  {
    title: "6. Cookies and Analytics",
    paragraphs: [
      "Hutliv may use cookies, analytics tools, and similar technologies to understand website usage, improve platform performance, measure traffic, and support product development.",
      "These tools help us understand how users interact with our website and services so we can improve navigation, reliability, and conversion journeys.",
    ],
  },
  {
    title: "7. Third-Party Integrations",
    paragraphs: [
      "Some Hutliv products may connect with third-party services such as messaging channels, cloud services, email, payment providers, and analytics tools. When you enable those integrations, relevant information may be processed through those services according to their own privacy policies.",
    ],
  },
  {
    title: "8. User Rights",
    paragraphs: [
      "Subject to applicable law, users may request access to personal information, request corrections, ask for deletion where appropriate, or request clarification about how data is processed.",
      "To make a privacy-related request, contact us using the details listed below.",
    ],
  },
  {
    title: "9. Data Retention",
    paragraphs: [
      "We retain information for as long as needed to provide services, maintain account records, comply with legal or operational obligations, resolve disputes, and enforce our agreements.",
      "When data is no longer required for legitimate business or legal purposes, we will delete or anonymize it within a reasonable period.",
    ],
  },
  {
    title: "10. Contact Information",
    paragraphs: [
      "If you have questions about this Privacy Policy or want to contact Hutliv about privacy matters, you can reach us at hello@hutliv.com.",
      "Hutliv Technologies, Tiruppur, Tamil Nadu, India.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      badge="Privacy Policy"
      title="How Hutliv handles data across our software products"
      description="This Privacy Policy explains what information Hutliv collects, how we use it, how we protect it, and what rights users may have when using our website and products."
    >
      <LegalDocument sections={sections} />
    </PageShell>
  );
}
