import {
  IconCompass,
  IconLayers,
  IconCode,
  IconTrendUp,
} from "@/components/icons";
import type { CaseStudy } from "@/components/CaseStudyCard";

export const services = [
  {
    icon: IconCompass,
    step: "01",
    title: "Discovery & architecture",
    short:
      "We start by understanding what's actually slowing you down, not just what was asked for.",
    body: "Technical audits, stakeholder interviews, and system diagrams that turn into a build plan your team can review before a single line of code ships — so scope creep gets caught on a whiteboard, not three sprints in.",
    includes: [
      "Technical audit of any existing systems",
      "Architecture diagrams and a written build plan",
      "A fixed-scope proposal or team-sizing recommendation",
    ],
  },
  {
    icon: IconLayers,
    step: "02",
    title: "Product design",
    short:
      "Interfaces designed around how your team and your users actually work.",
    body: "Prototypes you can click through before we commit engineering time to them. We design in the open, with your team in the room, not behind a one-way mirror until the big reveal.",
    includes: [
      "Clickable prototypes before any build work starts",
      "A design system sized to your product, not a template",
      "Design reviews run jointly with the engineering team",
    ],
  },
  {
    icon: IconCode,
    step: "03",
    title: "Engineering",
    short: "Full-stack web and mobile builds, written to be inherited.",
    body: "MVPs, internal tools, and production systems — documented, tested, and boring in all the right places, so the codebase is still legible to your team a year after we hand it off.",
    includes: [
      "Web and mobile application development",
      "Weekly demos of working software, not slide decks",
      "Test coverage and documentation as part of the build, not an afterthought",
    ],
  },
  {
    icon: IconTrendUp,
    step: "04",
    title: "Scale & support",
    short: "Launch isn't the finish line.",
    body: "We stay on as your systems grow, with SLA-backed support, performance work, and the project context you'd otherwise lose the moment an agency disappears after handoff.",
    includes: [
      "SLA-backed support retainers after launch",
      "Performance and reliability work as usage grows",
      "Full codebase ownership handed over — nothing held back",
    ],
  },
];

export const engagementModels = [
  {
    title: "Fixed-scope project",
    body: "A defined deliverable, a defined price, a defined timeline. The right model for an MVP or a single well-scoped build with a clear finish line.",
    fit: "Best for: a new product, a defined feature, a proof of concept for investors.",
  },
  {
    title: "Dedicated team",
    body: "An embedded pod of engineers and a designer working inside your roadmap, billed monthly, sized up or down as the work changes.",
    fit: "Best for: an ongoing product with a backlog that outlives any single project.",
  },
  {
    title: "Staff augmentation",
    body: "One or two senior engineers slotted directly into your existing team and process, reporting into your lead rather than running a separate workstream.",
    fit: "Best for: a specific skills gap or a deadline your current team can't absorb alone.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    category: "Fintech",
    title: "Core transaction platform rebuild",
    summary:
      "Replaced a decade-old monolith handling live payments with a modular platform the client's own team could extend without us.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    stat: "3.2x faster checkout",
    tileColor: "#3b0f3a",
  },
  {
    category: "Healthcare",
    title: "Patient portal redesign & rebuild",
    summary:
      "Rebuilt a patient-facing portal off a legacy vendor platform, cutting support tickets by replacing confusing flows with one people could self-serve through.",
    stack: ["React", "GraphQL", "AWS"],
    stat: "-58% support tickets",
    tileColor: "#0f2a3b",
  },
  {
    category: "Logistics",
    title: "Real-time fleet tracking MVP",
    summary:
      "Took a founder's whiteboard sketch to a working MVP investors could test, with live tracking across a pilot fleet.",
    stack: ["React Native", "Go", "Kafka"],
    stat: "Shipped in 9 weeks",
    tileColor: "#1f3b1f",
  },
  {
    category: "E-commerce",
    title: "Legacy monolith migration",
    summary:
      "Migrated a high-traffic storefront off an unsupported framework without a single hour of customer-facing downtime.",
    stack: ["Next.js", "Shopify", "Vercel"],
    stat: "Zero-downtime migration",
    tileColor: "#3b2410",
  },
];

export const testimonials = [
  {
    quote:
      "They didn't just build what we asked for — they pushed back on the parts of the spec that would've cost us six months later. That's rare in an agency.",
    highlight: "pushed back on the parts of the spec",
    role: "CTO, Series A fintech startup",
  },
  {
    quote:
      "Weekly demos meant exactly that. We saw working software every week, not just at the end, and never had to guess what was actually done.",
    highlight: "working software every week",
    role: "Head of Product, healthcare SaaS company",
  },
  {
    quote:
      "We had a whiteboard sketch and a deadline. Nine weeks later we had something investors could actually click through.",
    highlight: "something investors could actually click through",
    role: "Founder, logistics startup",
  },
];

export const homeFaqs = [
  {
    q: "How is Ovelnoria different from a typical dev shop?",
    a: "No account manager relaying messages between you and the engineers. You work directly with the senior people building your product, from the first scoping call through launch.",
  },
  {
    q: "What's your typical timeline for an MVP?",
    a: "Most MVPs ship in 6–10 weeks from a scoped plan, depending on how much discovery is needed up front. We'll give you a real range after the first discovery call, not a marketing number.",
  },
  {
    q: "Do you work with early-stage startups, or only established companies?",
    a: "Both — the engagement model changes more than the quality bar does. An early-stage team usually wants a fixed-scope MVP; a growing company usually wants a dedicated team or staff augmentation.",
  },
  {
    q: "What happens after launch?",
    a: "You can walk away with full ownership of the codebase, or stay on an SLA-backed support retainer. Either way, nothing is held hostage behind an ongoing contract.",
  },
];

export const processFaqs = [
  {
    q: "How involved does our team need to be?",
    a: "As involved as you want for discovery and design — we need real stakeholder input there. During the build, a weekly demo and async check-ins are usually enough; we don't need someone in daily standups.",
  },
  {
    q: "What if scope changes partway through?",
    a: "On a fixed-scope project, a change gets priced and scheduled as a formal change order rather than silently absorbed. On a dedicated team, the backlog just gets re-prioritized — that flexibility is the point of that model.",
  },
  {
    q: "Who owns the code once the engagement ends?",
    a: "You do, in full, regardless of engagement model. Repository access, infrastructure credentials, and documentation transfer at handoff — nothing is held back to force a renewal.",
  },
  {
    q: "Can we switch engagement models partway through?",
    a: "Yes — a fixed-scope MVP commonly turns into a dedicated team once it's validated and the backlog becomes ongoing rather than finite.",
  },
];

export const values = [
  {
    title: "Senior on every engagement",
    body: "No junior hand-offs. The person scoping your project is the person reviewing the code that ships.",
  },
  {
    title: "Weekly demos, not quarterly reveals",
    body: "You see working software every week. If something's off, it gets caught in days, not at a deadline.",
  },
  {
    title: "We document what we build",
    body: "A codebase your own team can pick up without us — architecture notes, not tribal knowledge locked in someone's head.",
  },
  {
    title: "Honest scoping over billable hours",
    body: "We'd rather tell you a feature isn't worth building yet than pad a timeline that benefits us more than you.",
  },
];

export const team = [
  {
    role: "Engineering Lead",
    body: "Owns technical architecture and code review on every engagement — the person who has to agree a system is actually ready to ship.",
  },
  {
    role: "Product Design Lead",
    body: "Runs discovery and prototyping, and sits in on engineering standups so design decisions survive contact with real implementation constraints.",
  },
  {
    role: "Delivery Lead",
    body: "Keeps scope, timeline, and budget honest — the first call if a project starts drifting, before it becomes a surprise at the end.",
  },
];
