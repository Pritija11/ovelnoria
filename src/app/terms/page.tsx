import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern engagements with Ovelnoria, covering scope, billing, intellectual property, and support.",
  path: "/terms",
});

const sections = [
  {
    heading: "1. Engagements",
    body: [
      "Each engagement is governed by a separate statement of work covering scope, timeline, and price, agreed in writing before work begins. These general terms apply alongside, not instead of, that document.",
      "You're responsible for providing timely access, feedback, and any materials needed for us to deliver the agreed scope.",
    ],
  },
  {
    heading: "2. Intellectual property",
    body: [
      "Unless the statement of work says otherwise, you own the code, designs, and other deliverables produced for your engagement once it's paid in full. We retain the right to reuse general-purpose tooling, internal frameworks, and non-client-specific patterns across engagements.",
    ],
  },
  {
    heading: "3. Confidentiality",
    body: [
      "We treat all client project materials as confidential, whether or not a separate NDA is signed, and don't disclose client-identifying details without permission — including in the anonymized case studies shown on this site.",
    ],
  },
  {
    heading: "4. Billing",
    body: [
      "Fixed-scope projects are billed per the milestones in the statement of work. Dedicated-team and staff-augmentation engagements are billed monthly in advance. Fees are non-refundable except where required by law or specified in the statement of work.",
    ],
  },
  {
    heading: "5. Support & SLAs",
    body: [
      "Post-launch support is covered by a separate support agreement with its own response-time commitments. Without an active support agreement, we provide no uptime or response-time guarantee on delivered systems.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "As an early-stage studio, we deliver engagements on an as-is basis beyond the specific warranties in a statement of work. To the extent permitted by law, Ovelnoria is not liable for indirect or consequential damages arising from use of a delivered system.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "Either party may terminate an engagement per the notice period in its statement of work. Work completed and materials delivered up to the termination date are owned and payable as agreed.",
    ],
  },
  {
    heading: "8. Contact",
    body: ["Questions about these terms can be sent to hello@ovelnoria.ltd."],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern engagements with Ovelnoria. Working
            with us means agreeing to the terms below alongside your
            statement of work.
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
