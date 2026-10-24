/*
 * A before/after systems diagram rendered in one SVG coordinate space,
 * so every connector is drawn from the actual box geometry rather than
 * guessed CSS positioning.
 */

const W = 640;
const H = 220;
const BOX_W = 150;
const BOX_H = 40;

type Box = { id: string; label: string; x: number; y: number };

const before: Box[] = [
  { id: "b1", label: "Spreadsheets", x: 95, y: 40 },
  { id: "b2", label: "Legacy backend", x: 95, y: 110 },
  { id: "b3", label: "Manual ops", x: 95, y: 180 },
];

const after: Box[] = [
  { id: "a1", label: "Web application", x: 545, y: 40 },
  { id: "a2", label: "API & data layer", x: 545, y: 110 },
  { id: "a3", label: "Internal dashboard", x: 545, y: 180 },
];

export function TransformMock() {
  return (
    <div className="w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--bg-alt)] px-5 py-3.5 text-[11px] tracking-[0.04em] text-[var(--fg-muted)]">
        <span>What a typical engagement replaces</span>
        <span className="flex items-center gap-1.5 font-medium text-[var(--green)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
          shipped
        </span>
      </div>

      <div className="bg-[var(--bg-alt)] px-4 py-6 sm:px-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Diagram showing spreadsheets, a legacy backend, and manual operations on the left being replaced by a web application, API and data layer, and internal dashboard built by Ovelnoria on the right."
        >
          {/* connectors from each "before" box to the center mark */}
          <g fill="none" stroke="var(--border-strong)" strokeWidth="1.25">
            {before.map((b) => (
              <path
                key={b.id}
                d={`M ${b.x + BOX_W / 2} ${b.y} C ${b.x + BOX_W / 2 + 60} ${b.y}, ${W / 2 - 50} ${H / 2}, ${W / 2 - 26} ${H / 2}`}
              />
            ))}
            {after.map((a) => (
              <path
                key={a.id}
                d={`M ${W / 2 + 26} ${H / 2} C ${a.x - BOX_W / 2 - 60} ${H / 2}, ${a.x - BOX_W / 2 - 60} ${a.y}, ${a.x - BOX_W / 2} ${a.y}`}
              />
            ))}
          </g>

          {/* center mark */}
          <circle
            cx={W / 2}
            cy={H / 2}
            r="22"
            fill="var(--ink)"
          />
          <circle cx={W / 2 + 5.5} cy={H / 2 - 5.5} r="4" fill="white" />
          <circle
            cx={W / 2}
            cy={H / 2}
            r="13"
            fill="none"
            stroke="white"
            strokeWidth="1.6"
          />

          {before.map((b) => (
            <g key={b.id}>
              <rect
                x={b.x - BOX_W / 2}
                y={b.y - BOX_H / 2}
                width={BOX_W}
                height={BOX_H}
                rx={8}
                fill="var(--surface)"
                stroke="var(--border-strong)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <circle
                cx={b.x - BOX_W / 2 + 14}
                cy={b.y}
                r="2.75"
                fill="var(--fg-faint)"
              />
              <text
                x={b.x - BOX_W / 2 + 24}
                y={b.y}
                dominantBaseline="central"
                fill="var(--fg-muted)"
                fontSize="11.5"
              >
                {b.label}
              </text>
            </g>
          ))}

          {after.map((a) => (
            <g key={a.id}>
              <rect
                x={a.x - BOX_W / 2}
                y={a.y - BOX_H / 2}
                width={BOX_W}
                height={BOX_H}
                rx={8}
                fill="var(--surface)"
                stroke="var(--ink)"
                strokeWidth="1.25"
              />
              <circle
                cx={a.x - BOX_W / 2 + 14}
                cy={a.y}
                r="2.75"
                fill="var(--ink)"
              />
              <text
                x={a.x - BOX_W / 2 + 24}
                y={a.y}
                dominantBaseline="central"
                fill="var(--ink)"
                fontWeight={600}
                fontSize="11.5"
              >
                {a.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
