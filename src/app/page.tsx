import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { TransformMock } from "@/components/mocks/TransformMock";
import { services, caseStudies, testimonials, homeFaqs } from "@/lib/content";
import { IconArrowRight, IconArrowUpRight } from "@/components/icons";

const stats = [
  { value: "2026", label: "Founded" },
  { value: "Senior-only", label: "No junior hand-offs" },
  { value: "6–10 wks", label: "Typical MVP timeline" },
  { value: "Remote-first", label: "Where we work" },
];

export default function Home() {
  return (
    <>
      {/* Hero — a rounded dark panel, left-aligned, sitting just under
          the nav rather than a centered full-bleed section. */}
      <section className="px-4 pt-4 sm:px-6">
        <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-[28px] bg-[var(--bg-dark)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "conic-gradient(from 210deg at 15% 20%, rgba(190,252,101,0.22), transparent 35%), radial-gradient(circle at 85% 80%, rgba(190,252,101,0.1), transparent 45%)",
            }}
          />
          <Container className="relative py-20 md:py-28 lg:py-32">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-medium text-white/55">
                Now booking engagements for Q1 2027
              </p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-[2.5rem] font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-[3.25rem] md:text-[4rem]">
                A senior software studio. Not an outsourced queue.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg">
                Ovelnoria designs, builds, and runs custom web and
                mobile products for startups and growing teams —
                senior engineers and designers, directly on your
                project, from the first scoping call through launch.
              </p>
              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button href="/contact">
                  Start a project
                  <IconArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/work" variant="outline-dark">
                  See our work
                </Button>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-[var(--border)]">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-y divide-[var(--border)] sm:grid-cols-4 sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center">
                <p className="tnum font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-[var(--ink)] sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-[var(--fg-muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services overview — numbered hairline rows, not icon cards */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              One team, four stages, no hand-offs
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--fg-muted)]">
              The same people who scope your project are the ones who
              design it, build it, and stay on to run it — not four
              separate teams passing a brief down a chain.
            </p>
          </Reveal>
          <div className="mt-12 flex flex-col divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {services.map((s, i) => (
              <Reveal key={s.step} delay={i * 30}>
                <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex flex-none items-center gap-4 sm:w-64">
                    <span className="num-badge">{s.step}</span>
                    <h3 className="text-base font-medium text-[var(--ink)]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
                    {s.short}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[var(--ink)]"
            >
              See the full breakdown
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Selected work — flat full-bleed tiles */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Shipped, not just pitched
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--fg-muted)]">
              Client work shown under NDA, described by category and
              outcome rather than by name.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study, i) => (
              <Reveal key={study.title} delay={i * 50} className="h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <Link
              href="/work"
              className="mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[var(--ink)]"
            >
              See all case studies
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Testimonials — hairline rows, no card shadow */}
      <section className="border-t border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>What clients say</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Quotes from engagements, not a marketing deck
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-[var(--border)] pt-10 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.role} delay={i * 50} className="h-full">
                <figure className="flex h-full flex-col">
                  <blockquote className="flex-1 text-[15px] leading-[1.65] text-[var(--ink)]">
                    {t.quote.split(t.highlight)[0]}
                    <span className="font-medium underline decoration-[var(--border-strong)] decoration-2 underline-offset-[3px]">
                      {t.highlight}
                    </span>
                    {t.quote.split(t.highlight)[1]}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[var(--border)] pt-4 text-sm text-[var(--fg-muted)]">
                    {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* A transformation visual, moved out of the hero into its own
          supporting section. */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Before and after</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              From scattered systems to one platform
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-12">
            <TransformMock />
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <FaqAccordion items={homeFaqs} />
          </Reveal>
        </Container>
      </section>

      {/* Final CTA — plain and light, matching the reference rather
          than a heavy dark panel. */}
      <section className="border-t border-[var(--border)] py-24 text-center">
        <Container className="max-w-xl">
          <Reveal>
            <p className="text-sm font-medium text-[var(--fg-muted)]">
              Your studio shouldn&apos;t be a black box.
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Let&apos;s build something that ships.
            </h2>
            <Button href="/contact" className="mt-8">
              Start a project
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
