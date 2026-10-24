import Link from "next/link";
import { Container } from "./Container";
import { IconLogo } from "./icons";

const columns = [
  {
    heading: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/process", label: "Process" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Start a project",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/process", label: "Engagement models" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--fg-muted)]">
      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:justify-between lg:gap-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] text-white">
                <IconLogo className="h-[18px] w-[18px]" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-base font-semibold tracking-tight text-[var(--ink)]">
                ovelnoria
              </span>
            </div>
            <p className="mt-4 text-sm leading-6">
              Your whole software team: discovery, design, engineering,
              and running what we build long after launch.
            </p>
            <a
              href="mailto:hello@ovelnoria.ltd"
              className="mt-4 inline-block text-sm font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-[3px] transition-colors hover:decoration-[var(--ink)]"
            >
              hello@ovelnoria.ltd
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:gap-x-16">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-sm font-medium text-[var(--ink)]">
                  {col.heading}
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {col.links.map((l, i) => (
                    <li key={`${l.href}-${i}`}>
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-[var(--ink)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Ovelnoria. All rights reserved.</p>
          <p>Remote-first software studio.</p>
        </Container>
      </div>
    </footer>
  );
}
