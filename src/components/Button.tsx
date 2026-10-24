import Link from "next/link";

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outline-dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium leading-6 transition-all duration-150 active:translate-y-px";
  const variants = {
    // The one accent color on the site — lime fill, dark text.
    solid:
      "bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[var(--accent-hover)]",
    // Outline for use on light surfaces.
    outline:
      "border border-[var(--border-strong)] bg-transparent text-[var(--ink)] hover:border-[var(--ink)]",
    // Outline for use on the dark hero panel.
    "outline-dark":
      "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
