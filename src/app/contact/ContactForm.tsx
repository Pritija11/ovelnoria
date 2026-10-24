"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconUser,
  IconMail,
  IconBuilding,
  IconMessageSquare,
  IconChevronDown,
} from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formRef.current?.reset();
    setSubmitted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" icon={IconUser}>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--ink)] focus:ring-4 focus:ring-[var(--ink)]/10"
            />
          </Field>
          <Field label="Work email" htmlFor="email" icon={IconMail}>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--ink)] focus:ring-4 focus:ring-[var(--ink)]/10"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Company (optional)" htmlFor="company" icon={IconBuilding}>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Where you work"
              className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--ink)] focus:ring-4 focus:ring-[var(--ink)]/10"
            />
          </Field>
          <label htmlFor="model" className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[var(--ink)]">
              Engagement model
            </span>
            <div className="relative">
              <IconChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-[var(--fg-faint)]" />
              <select
                id="model"
                name="model"
                defaultValue=""
                className="w-full appearance-none rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-4 pr-10 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none focus:border-[var(--ink)] focus:ring-4 focus:ring-[var(--ink)]/10"
              >
                <option value="" disabled>
                  Not sure yet
                </option>
                <option>Fixed-scope project</option>
                <option>Dedicated team</option>
                <option>Staff augmentation</option>
              </select>
            </div>
          </label>
        </div>

        <Field
          label="What are you trying to build?"
          htmlFor="message"
          icon={IconMessageSquare}
        >
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="A few sentences on the project, your timeline, and what's prompting the search for a studio right now."
            className="w-full resize-none rounded-[10px] border border-[var(--border-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--ink)] shadow-[var(--shadow-sm)] transition-shadow outline-none placeholder:text-[var(--fg-faint)] focus:border-[var(--ink)] focus:ring-4 focus:ring-[var(--ink)]/10"
          />
        </Field>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-ink)] transition-all duration-150 hover:bg-[var(--accent-hover)] active:translate-y-px"
        >
          Send message
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${
          submitted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <span className="flex items-center gap-2 rounded-[10px] border border-[var(--border)] bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-white shadow-[var(--shadow-lg)]">
          Message sent — we&apos;ll follow up within a business day.
        </span>
      </div>
    </>
  );
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[var(--ink)]">{label}</span>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-[var(--fg-faint)]" />
        {children}
      </div>
    </label>
  );
}
