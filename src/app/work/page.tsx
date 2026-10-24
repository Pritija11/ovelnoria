import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/content";
import { IconArrowRight } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from Ovelnoria's engagements across fintech, healthcare, logistics, and e-commerce — shown by category and outcome under NDA.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="amber">Work</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
              Shipped, not just pitched
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Most of our engagements are covered by client NDAs, so
              work is shown by category, stack, and outcome rather than
              by name — ask us for specifics on a call and we&apos;ll
              tell you what we can.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.title} delay={i * 40} className="h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-20 text-center md:py-24">
        <Container className="max-w-xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Want to see something closer to your industry?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Tell us what you&apos;re building on the first call — we&apos;ll
              walk through the parts of past work most relevant to it.
            </p>
            <Button href="/contact" className="mt-7">
              Start a project
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
