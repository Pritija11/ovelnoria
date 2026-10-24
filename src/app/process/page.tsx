import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { services, engagementModels, processFaqs } from "@/lib/content";
import { IconArrowRight } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Process",
  description:
    "How an engagement with Ovelnoria actually runs, from discovery through launch and support, and the three engagement models we offer.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Process</Eyebrow>
            <h1 className="mx-auto mt-5 font-[family-name:var(--font-display)] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
              How an engagement actually runs
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              No surprises at the end of a quarter. Here&apos;s what
              happens at each stage, and what you get out of it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {services.map((s, i) => (
              <Reveal key={s.step} delay={i * 40}>
                <div className="flex gap-6 py-10 first:pt-0 last:pb-0">
                  <div className="flex flex-none flex-col items-center">
                    <span className="num-badge">
                      {s.step}
                    </span>
                    {i < services.length - 1 && (
                      <span className="mt-3 w-px flex-1 bg-[var(--border)]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="tnum text-xs font-semibold tracking-[0.08em] text-[var(--fg-faint)]">
                      STAGE {s.step}
                    </p>
                    <h2 className="mt-1.5 font-[family-name:var(--font-display)] text-xl font-medium text-[var(--ink)]">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--fg-muted)]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="green">Engagement models</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Three ways to work with us
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--fg-muted)]">
              The right model depends on whether you have a defined
              deliverable or an open-ended roadmap — we&apos;ll tell you
              honestly which one fits after the first call.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 40} className="h-full">
                <div className="panel panel-hover flex h-full flex-col p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--ink)]">
                    {m.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--fg-muted)]">
                    {m.body}
                  </p>
                  <p className="mt-5 border-t border-[var(--border)] pt-4 text-xs leading-5 font-medium text-[var(--ink)]">
                    {m.fit}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-20 md:py-24">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="amber">Questions</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Process FAQ
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <FaqAccordion items={processFaqs} />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-20 text-center md:py-24">
        <Container className="max-w-xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Ready to start with a discovery call?
            </h2>
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
