import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { values, team } from "@/lib/content";
import { IconArrowRight, IconUser } from "@/components/icons";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Ovelnoria is a remote-first, senior-only software studio building custom web and mobile products for startups and growing teams.",
  path: "/about",
});

const stats = [
  { value: "2026", label: "Founded" },
  { value: "Senior-only", label: "No junior hand-offs" },
  { value: "Remote-first", label: "Where we work" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>About Ovelnoria</Eyebrow>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
              We got tired of watching good products die in hand-offs
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Ovelnoria started in 2026 around one complaint we&apos;d
              each had at previous agencies: the senior people pitch the
              project, then disappear the moment the contract is signed,
              leaving a junior team to execute a plan they didn&apos;t
              design. We built the studio we wished we&apos;d been able
              to hire.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[14px] bg-[var(--border)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--border)]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[var(--bg-alt)] px-3 py-7 text-center"
                >
                  <p className="tnum font-[family-name:var(--font-display)] text-lg font-medium tracking-tight text-[var(--ink)] sm:text-xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="mx-auto max-w-2xl">
          <Reveal>
            <blockquote className="border-l-[3px] border-[var(--accent)] pl-6 font-[family-name:var(--font-display)] text-[1.6rem] font-semibold leading-[1.35] tracking-[-0.015em] text-[var(--ink)]">
              &ldquo;We&apos;d rather tell a client a feature isn&apos;t
              worth building yet than pad a timeline that benefits us
              more than them.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm leading-7 text-[var(--fg-muted)]">
              Most of the damage we&apos;d seen in previous agency work
              didn&apos;t come from bad engineers — it came from
              incentives pointed the wrong way: billable hours that
              reward slower work, and account managers whose job is to
              keep a client happy rather than tell them something they
              need to hear.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Ovelnoria is built around the opposite incentive. We scope
              honestly, because a project that ships on time and gets
              referred to the next founder is worth more to us than one
              that drags because it was billed by the hour.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              We&apos;re also deliberately small and remote-first. Every
              engagement is staffed by people senior enough to have
              opinions about your architecture, not just capacity to
              execute someone else&apos;s spec.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="green">What we hold ourselves to</Eyebrow>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Four rules that shape every engagement
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 40} className="h-full">
                <div className="panel panel-hover flex h-full flex-col p-6">
                  <h3 className="text-base font-semibold tracking-tight text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow tone="amber">Who you&apos;d work with</Eyebrow>
            <h2 className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              A small team, directly on your project
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((t, i) => (
              <Reveal key={t.role} delay={i * 40} className="h-full">
                <div className="panel panel-hover flex h-full flex-col p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-sunken)]">
                    <IconUser className="h-5 w-5 text-[var(--ink)]" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--ink)]">
                    {t.role}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-20 text-center md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.015em] text-[var(--ink)] md:text-[2.5rem] md:leading-[1.15]">
              Want to see if we&apos;re a fit?
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
