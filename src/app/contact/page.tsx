import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "./ContactForm";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
} from "@/components/icons";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with Ovelnoria — tell us what you're building and which engagement model fits, and we'll follow up within a business day.",
  path: "/contact",
});

// Placeholder/dummy details, not a real registered office — swap for the
// real thing before launch.
const contactPoints = [
  { icon: IconMail, label: "hello@ovelnoria.ltd" },
  { icon: IconPhone, label: "+977-1-4785236" },
  { icon: IconMapPin, label: "Jhamsikhel-2, Lalitpur 44700, Nepal" },
  { icon: IconClock, label: "We reply within one business day" },
];

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:text-[2.5rem] md:text-5xl">
            Tell us what you&apos;re trying to build.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--fg-muted)]">
            A senior member of the studio reads and replies to every
            message personally — no ticket number, no sales sequence.
          </p>
          <p className="mt-4 max-w-md text-base leading-7 text-[var(--fg-muted)]">
            Whether you already know you need a fixed-scope MVP, a
            dedicated team, or you&apos;re not sure which model fits yet
            — this is the fastest way to find out.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactPoints.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3.5 text-sm text-[var(--ink)]"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--bg-sunken)]">
                  <c.icon className="h-4 w-4 text-[var(--ink)]" />
                </span>
                {c.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="panel bg-[var(--bg-alt)] p-7 sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
