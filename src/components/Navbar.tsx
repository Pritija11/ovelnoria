"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { IconClose, IconMenu, IconLogo } from "./icons";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  // Track the route the menu was opened on rather than syncing a boolean in
  // an effect — any navigation (including back/forward) closes it for free.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (next: boolean) => setOpenAt(next ? pathname : null);

  return (
    <header className="sticky top-0 z-50">
      {/* A dark, frosted bar — stays dark whether it's over the hero
          panel or a light section, echoing the reference site rather
          than a white header that flips on scroll. */}
      <div className="border-b border-white/10 bg-[var(--bg-dark)]/92 backdrop-blur-md">
        <Container className="flex items-center justify-between gap-6 py-3.5">
          <Link
            href="/"
            className="flex flex-none items-center gap-2.5"
            aria-label="Ovelnoria home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
              <IconLogo className="h-[18px] w-[18px]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white">
              ovelnoria
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-[var(--accent)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-none items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-[var(--accent-ink)] transition-colors duration-150 hover:bg-[var(--accent-hover)] active:translate-y-px lg:inline-flex"
            >
              Talk to us
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="-mr-1 rounded-full p-1.5 text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? (
                <IconClose className="h-6 w-6" />
              ) : (
                <IconMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {open && (
        <div className="border-b border-white/10 bg-[var(--bg-dark)] lg:hidden">
          <Container className="flex flex-col gap-0.5 py-3">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--accent)] px-4 py-3 text-center text-sm font-medium text-[var(--accent-ink)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              Talk to us
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
