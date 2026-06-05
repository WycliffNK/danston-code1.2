import { Nav } from "@/app/components/Nav";
import Link from "next/link";

export const metadata = {
  title: "Code1 Acquire — Sales & Business Development Transformation | Code 1",
  description:
    "Code1 Acquire is a sales and business development transformation programme designed to help individuals and teams unlock sustainable revenue growth.",
};

const OUTCOMES = [
  "Clarity on your sales identity and positioning",
  "A repeatable business development system",
  "Stronger client conversations and closing confidence",
  "Team alignment around a shared sales culture",
  "Sustainable pipeline without the burnout",
];

const WHO = [
  { label: "Sales Leaders", desc: "Rebuilding team performance and culture." },
  { label: "Business Owners", desc: "Looking to systematise growth and reduce dependency on one person." },
  { label: "B2B Professionals", desc: "Wanting to close more without feeling like they're selling." },
  { label: "Revenue Teams", desc: "Needing alignment, language, and a unified approach." },
];

const HOW = [
  {
    step: "01",
    title: "Assessment",
    body: "We begin with a deep-dive diagnostic of your current sales reality — what's working, what's broken, and what's costing you.",
  },
  {
    step: "02",
    title: "Restoration",
    body: "We strip back limiting beliefs, misaligned identity, and broken habits that block natural sales confidence.",
  },
  {
    step: "03",
    title: "System Build",
    body: "Together we design a business development system that fits your market, your personality, and your goals.",
  },
  {
    step: "04",
    title: "Activation",
    body: "You go live. We walk with you through real conversations, real deals, and real feedback loops.",
  },
];

export default function Code1AcquirePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[90vh] bg-navy flex items-end px-[var(--rail-x)] pb-20 pt-40 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 70% 40%, #C9A961 0%, transparent 60%)" }}
        />
        {/* Eyebrow */}
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow text-gold/70 mb-6">Programme</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.05] mb-8">
            Code1<br />
            <em className="text-gold">Acquire</em>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-cream/70 leading-relaxed max-w-xl mb-12">
            Sales and business development transformation. Built for those who want to grow without compromising who they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#assessment"
              className="inline-flex justify-center font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-navy bg-gold border border-gold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors duration-200 active:scale-[0.97]"
            >
              Begin Assessment
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex justify-center font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-cream border border-cream/30 px-8 py-4 rounded-full hover:border-cream/70 transition-colors duration-200"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-[var(--rail-x)] py-24 bg-cream-warm border-b border-navy/[0.08]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-gold-dark mb-6 justify-center">The Problem</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-8">
            Most sales problems are not<br className="hidden sm:block" /> sales problems.
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal-soft leading-relaxed">
            They are identity problems. Confidence problems. Clarity problems. Organisations invest in scripts and CRMs but skip the human architecture underneath. Code1 Acquire starts there — with the person — and builds outward.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-[var(--rail-x)] py-24 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow text-gold-dark mb-6">What you'll walk away with</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-tight mb-4">
                Outcomes
              </h2>
            </div>
            <ul className="flex flex-col gap-4">
              {OUTCOMES.map((o, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-gold flex items-center justify-center">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5l2.5 2.5L8 1" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-sans text-[15px] text-charcoal leading-snug">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-[var(--rail-x)] py-24 bg-navy">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow text-gold/70 mb-6">Process</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream leading-tight mb-16">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {HOW.map((h) => (
              <div key={h.step} className="border border-cream/10 p-8 hover:border-gold/40 transition-colors duration-300">
                <span className="font-sans text-[11px] tracking-[2px] text-gold/60 uppercase mb-4 block">{h.step}</span>
                <h3 className="font-serif text-xl text-cream mb-3">{h.title}</h3>
                <p className="font-sans text-[14px] text-cream/60 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-[var(--rail-x)] py-24 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow text-gold-dark mb-6">Audience</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-tight mb-12">
            Who this is for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO.map((w) => (
              <div key={w.label} className="border-t-2 border-gold pt-6">
                <h3 className="font-sans text-[12px] font-medium tracking-[1px] uppercase text-navy mb-2">{w.label}</h3>
                <p className="font-sans text-[14px] text-charcoal-soft leading-snug">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[var(--rail-x)] py-24 bg-gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-tight mb-6">
            Ready to transform how you acquire?
          </h2>
          <p className="font-sans text-base text-navy/70 mb-10 leading-relaxed">
            Start with the assessment. It takes less than five minutes and gives us everything we need to understand your situation.
          </p>
          <Link
            href="/#assessment"
            className="inline-flex font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-cream bg-navy border border-navy px-10 py-4 rounded-full hover:bg-navy/80 transition-colors duration-200 active:scale-[0.97]"
          >
            Begin Assessment
          </Link>
        </div>
      </section>

      {/* Footer back link */}
      <div className="px-[var(--rail-x)] py-10 border-t border-navy/10 bg-cream">
        <Link href="/" className="font-sans text-[11px] tracking-[1.5px] uppercase text-navy/50 hover:text-navy transition-colors duration-150 flex items-center gap-2">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M13 5H1M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Code 1
        </Link>
      </div>
    </>
  );
}
