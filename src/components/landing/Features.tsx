import {
  Layers,
  Split,
  Puzzle,
  WandSparkles,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Layers,
    title: "Every model, one chat",
    description:
      "GPT, Claude, Gemini, Llama and more — switch models mid-conversation without losing context.",
  },
  {
    icon: Split,
    title: "Side-by-side compare",
    description:
      "Send one prompt to multiple models at once and pick the best answer. No more tab-hopping.",
  },
  {
    icon: Puzzle,
    title: "AI on every tab",
    description:
      "The EchoGPT extension brings the same experience into a sidebar on any website you visit.",
  },
  {
    icon: WandSparkles,
    title: "Quick actions",
    description:
      "Summarize, rewrite, translate or explain any text with one click — no prompt writing needed.",
  },
  {
    icon: Zap,
    title: "Fast and lightweight",
    description:
      "Instant load, smooth streaming responses and a UI that stays out of your way.",
  },
  {
    icon: ShieldCheck,
    title: "Your history, your rules",
    description:
      "Conversations stay under your control — search them, pin them, or wipe them anytime.",
  },
];

// The reusable card: same markup, different data via "props"
function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Why juggle tabs?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          EchoGPT puts every major AI model behind one clean interface.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}