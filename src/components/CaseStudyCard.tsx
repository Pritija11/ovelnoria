export type CaseStudy = {
  category: string;
  title: string;
  summary: string;
  stack: string[];
  stat: string;
  /** Flat tile background — jewel-tone color blocks stand in for real
   *  project photography, matching the reference site's full-bleed,
   *  colorful project tiles instead of a white bordered card. */
  tileColor: string;
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="flex h-full flex-col">
      <p className="text-xs tracking-[0.04em] text-[var(--fg-faint)]">
        ({study.stack.join(", ")})
      </p>

      <div
        className="group relative mt-2 flex h-56 flex-1 items-end overflow-hidden rounded-[var(--radius-lg)] p-5"
        style={{ backgroundColor: study.tileColor }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 15%, rgba(255,255,255,0.5), transparent 55%)",
          }}
        />
        <span className="relative text-lg font-medium text-white">
          {study.category}
        </span>
        <span className="stat-pill absolute bottom-5 right-5">
          {study.stat}
        </span>
      </div>

      <h3 className="mt-4 text-base font-medium leading-snug text-[var(--ink)]">
        {study.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
        {study.summary}
      </p>
    </div>
  );
}
