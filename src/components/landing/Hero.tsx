import { ArrowRight, Globe, Sparkles } from "lucide-react";

const aiModels = ["GPT-5", "Claude", "Gemini", "Llama", "Mistral", "DeepSeek"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft violet glow behind the hero — the "AI look" */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-28 text-center">
        {/* Announcement pill */}
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
          <Sparkles className="h-4 w-4 text-primary" />
          New — compare AI models side-by-side
        </div>

        {/* Headline */}
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          One chat.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Every AI model.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-xl text-lg text-muted">
          EchoGPT brings GPT, Claude, Gemini and more into one clean
          interface — chat, compare and switch models instantly, right from
          your browser.
        </p>

        {/* Calls to action */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/app"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-strong"
          >
            Start chatting free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-medium transition hover:border-primary/50"
          >
            <Globe className="h-4 w-4" />
            Add to Chrome
          </a>
        </div>

        {/* Model pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-2 text-sm text-muted">Works with:</span>
          {aiModels.map((model) => (
            <span
              key={model}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm"
            >
              {model}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}