import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Ovelnoria collects, processes, and protects data from prospective clients, website visitors, and active project engagements.",
  path: "/privacy",
});

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "Contact data: your name, work email, company, and project details when you submit the contact form or otherwise reach out.",
      "Project data: source code, credentials, and other materials you share with us for the purpose of an active engagement, under the terms of our project agreement and any NDA in place.",
      "Usage and log data: IP addresses, request metadata, and site usage events, collected for security and reliability purposes.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Contact data is used to respond to your inquiry and, if an engagement starts, to manage that relationship.",
      "Project data is used only to deliver the agreed engagement. We don't reuse a client's proprietary code, data, or business logic on other engagements, and we don't use client data to train any model.",
    ],
  },
  {
    heading: "3. Who we share it with",
    body: [
      "Infrastructure sub-processors required to run the studio and deliver projects — cloud hosting, email delivery, and project-management tooling. A current list is available on request.",
      "We do not sell contact or project data, and project materials are never shared across unrelated engagements.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "Contact-form submissions that don't turn into an engagement are retained for up to 12 months. Project data is retained per the terms of the individual engagement and deleted or returned at its conclusion unless a support retainer is in place.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You can request a copy of the data we hold about you, ask us to correct it, or request deletion. Reach out through the contact details below.",
    ],
  },
  {
    heading: "6. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll notify active clients by email before the change takes effect.",
    ],
  },
  {
    heading: "7. Contact",
    body: ["Questions about this policy can be sent to hello@ovelnoria.ltd."],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Ovelnoria collects, how it&apos;s
            used, and what you can do about it.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
