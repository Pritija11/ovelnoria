import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { services } from "@/lib/content";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "What Ovelnoria delivers for startups and growing teams: discovery and architecture, product design, full-stack engineering, and ongoing scale and support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
              Four stages, one team, no hand-offs
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Discovery, design, engineering, and support aren&apos;t
              separate line items staffed by different people — they&apos;re
              one engagement, run by the same senior team from the first
              call to the last deploy.
            </p>
          </Reveal>
        </Container>
      </section>

      {services.map((s, i) => (
        <section
          key={s.step}
          className={i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""}
        >
          <Container className="py-20 md:py-24">
            <div
              className={`grid grid-cols-1 items-start gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="num-badge !h-12 !w-12 !rounded-xl !text-base">
                    {s.step}
                  </span>
                  <span className="tnum text-sm text-[var(--fg-faint)]">
                    Stage {s.step} of 04
                  </span>
                </div>
                <h2 className="mt-5 max-w-lg font-[family-name:var(--font-display)] text-[1.75rem] font-medium leading-[1.2] tracking-[-0.02em] text-[var(--ink)] md:text-[2.125rem]">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--fg-muted)]">
                  {s.body}
                </p>
                <ul className="mt-7 flex flex-col gap-3.5 border-t border-[var(--border)] pt-7">
                  {s.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--ink)]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--bg-sunken)]">
                        <IconCheck className="h-3 w-3 text-[var(--ink)]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={60}>
                <div className="panel flex h-full flex-col justify-center gap-5 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--fg-muted)]">
                    In short
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-xl font-semibold leading-snug tracking-[-0.01em] text-[var(--ink)]">
                    {s.short}
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-[var(--border)] py-20 text-center md:py-24">
        <Container className="max-w-xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Not sure which stage you need?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Most engagements start with a discovery call, even if you
              think you only need engineering. It&apos;s the fastest way
              to find out what&apos;s actually true.
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
