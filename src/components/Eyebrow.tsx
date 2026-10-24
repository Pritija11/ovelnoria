/*
 * The reference site labels sections with plain small-caps text
 * ("Why teams come to us"), not colorful pill badges — matching that
 * here. The `tone` prop stays for call-site compatibility but no
 * longer switches between a rainbow of background tints.
 */
export function Eyebrow({
  children,
}: {
  children: React.ReactNode;
  tone?: "primary" | "amber" | "green" | "dark";
}) {
  return (
    <span className="text-xs font-medium tracking-[0.02em] text-[var(--fg-muted)]">
      {children}
    </span>
  );
}
