import Link from "next/link";
import { Nav } from "@/app/components/Nav";

export const metadata = {
  title: "Code1 Enterprise — Leadership & Organisational Restoration | Code 1",
  description:
    "Code1 Enterprise delivers leadership and organisational restoration for founders, executives, teams, institutions, and growth-focused organisations.",
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow mb-5 ${light ? "text-gold/60" : "text-gold-dark"}`}>{children}</p>;
}

function SectionHeading({ children, light = false, className = "" }: {
  children: React.ReactNode; light?: boolean; className?: string;
}) {
  return (
    <h2 className={`font-serif font-normal leading-[1.07] tracking-[-0.3px] text-[clamp(32px,4vw,52px)] ${light ? "text-cream" : "text-navy"} ${className}`}>
      {children}
    </h2>
  );
}

function DiscoveryCTA({ light = false, label = "Book a Discovery Call" }: { light?: boolean; label?: string }) {
  return (
    <a
      href="/#contact"
      className={`inline-flex justify-center font-sans text-[11px] font-medium tracking-[2px] uppercase px-8 py-4 transition-colors duration-200 active:scale-[0.97] ${
        light
          ? "text-navy bg-gold border border-gold hover:bg-gold/85"
          : "text-cream bg-navy border border-navy hover:bg-gold hover:border-gold hover:text-navy"
      }`}
    >
      {label}
    </a>
  );
}

const PILLARS = [
  {
    num: "I",
    title: "Restore the Leader",
    system: "The I Philosophy™",
    body: "Every leader lives in three rooms: the public life, the private life, and the secret life. Code1 Enterprise restores alignment across all three. A restored leader does not perform strength — he carries it.",
  },
  {
    num: "5D",
    title: "Reveal the Truth",
    system: "The 5D Framework™",
    body: "Discover. Diagnose. Discuss. Design. Deliver. The audit and transformation structure applied to both the leader and the organisation. Audit the leader. Reveal the organisation. Deliver the work.",
  },
  {
    num: "HI·AI",
    title: "Scale Human Intelligence",
    system: "The HI-AI Doctrine™",
    body: "Human intelligence leads. Artificial intelligence amplifies. Once the leader is restored and the organisation is revealed, Code1 scales human intelligence. The power is in the combination.",
  },
];

export default function Code1EnterprisePage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative bg-navy min-h-[92vh] flex items-end px-[var(--rail-x)] pb-20 pt-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 55% at 75% 25%, rgba(201,169,97,0.07) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-gold/70 mb-7">Code1 Enterprise</p>
          <h1 className="font-serif font-normal text-cream text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.5px] mb-8 max-w-[860px]">
            Restore the leader.<br className="hidden sm:block" />
            <em className="text-gold">Reveal the truth.</em><br className="hidden sm:block" />
            Scale human intelligence.
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-cream/65 leading-[1.8] max-w-[640px] mb-12">
            Leadership and organisational restoration for founders, executives, teams, institutions, and growth-focused organisations. We begin with the person at the top and build outward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <DiscoveryCTA light />
            <a href="#the-system"
              className="inline-flex justify-center font-sans text-[11px] font-medium tracking-[2px] uppercase text-cream border border-cream/25 px-8 py-4 hover:border-cream/60 transition-colors duration-200">
              The System
            </a>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <Eyebrow>The Challenge</Eyebrow>
            <SectionHeading>
              Most organisations fix the strategy.<br /> Few fix the leader.
            </SectionHeading>
          </div>
          <div className="space-y-5 pt-1">
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              Organisations invest in process, technology, and strategy. But when results plateau or teams break down, the root cause is almost always the same — the leader has not been restored.
            </p>
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              A leader leading from unresolved pain, misaligned identity, or broken communication cannot build a healthy organisation. The structure reflects the person at the top.
            </p>
            <p className="font-sans text-[16px] text-charcoal leading-[1.85]">
              Code1 Enterprise starts where the problem actually lives.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <Eyebrow light>Who it&apos;s for</Eyebrow>
            <SectionHeading light>Who Code1 Enterprise serves</SectionHeading>
          </div>
          <div>
            <p className="font-sans text-[15px] text-cream/65 leading-[1.85] mb-8">
              Code1 Enterprise is for organisations that understand the connection between leader health and organisational performance.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-10">
              {[
                "Founders and CEOs",
                "Executive and leadership teams",
                "Boards and governance bodies",
                "Sales and business development teams",
                "Scaling businesses and startups",
                "Organisations in transition or reinvention",
                "Government institutions and agencies",
                "NGOs and mission-led organisations",
                "Professional services firms",
                "Dealerships and enterprise sales organisations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-gold" />
                  <span className="font-sans text-[14px] text-cream/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] text-gold/80 italic">
              If the performance of your organisation depends on the clarity of its leadership, this is for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── The System ── */}
      <section id="the-system" className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <Eyebrow>The System</Eyebrow>
            <SectionHeading>The Code1 Restoration System™</SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <div key={p.num} className="border-t-2 border-gold pt-7 flex flex-col gap-4">
                <span className="font-sans text-[10px] tracking-[3px] uppercase text-gold-dark/60">{p.num}</span>
                <h3 className="font-serif text-[22px] text-navy leading-tight">{p.title}</h3>
                <p className="font-sans text-[11px] tracking-[1px] uppercase text-navy/40">{p.system}</p>
                <p className="font-sans text-[14px] text-charcoal-soft leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we deliver ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <Eyebrow>Engagement</Eyebrow>
            <SectionHeading>How we work with organisations</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-navy/8">
            {[
              {
                num: "01",
                title: "Leadership Diagnostic",
                body: "We begin with a deep assessment of the leader and the organisation — what is working, what is broken, and what needs to be addressed first.",
              },
              {
                num: "02",
                title: "Leadership Restoration",
                body: "One-to-one and group work with the leadership team to address identity, communication, alignment, and decision-making.",
              },
              {
                num: "03",
                title: "Organisational Reveal",
                body: "We apply the 5D Framework™ across the organisation — diagnosing culture, structure, team dynamics, and performance gaps.",
              },
              {
                num: "04",
                title: "Transformation Delivery",
                body: "We design and deliver a structured transformation plan — from leadership coaching to team training, acquisition systems, and scaling strategy.",
              },
            ].map((item) => (
              <div key={item.num} className="bg-cream-warm p-10 max-md:p-7 flex flex-col gap-4">
                <span className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold-dark/50">{item.num}</span>
                <h3 className="font-serif text-[22px] text-navy leading-tight">{item.title}</h3>
                <p className="font-sans text-[14px] text-charcoal-soft leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What organisations leave with ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div>
            <Eyebrow light>Outcomes</Eyebrow>
            <SectionHeading light>What your organisation leaves with</SectionHeading>
          </div>
          <div>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "A restored, aligned leadership team",
                "Clear organisational identity and direction",
                "Stronger internal communication and culture",
                "A sales and business development system",
                "A performance and accountability framework",
                "A 90-day organisational transformation plan",
                "The ability to scale without losing your people",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 w-5 h-5 border border-gold/40 flex items-center justify-center">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5l2.5 2.5L8 1" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-sans text-[15px] text-cream/75 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif text-[19px] text-gold italic">
              We do not consult from a distance. We enter the room and do the work with you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-gold px-[var(--rail-x)] py-24 text-center">
        <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-navy/50 mb-5">Code1 Enterprise</p>
        <h2 className="font-serif text-[clamp(28px,4vw,48px)] text-navy leading-tight mb-5 max-w-2xl mx-auto">
          Ready to restore your leadership and transform your organisation?
        </h2>
        <p className="font-sans text-[15px] text-navy/65 mb-10 max-w-lg mx-auto">
          Start with a discovery call. We will listen, understand your context, and tell you honestly how we can help.
        </p>
        <DiscoveryCTA />
      </section>

      <div className="px-[var(--rail-x)] py-8 border-t border-navy/10 bg-cream">
        <Link href="/" className="font-sans text-[11px] tracking-[1.5px] uppercase text-navy/40 hover:text-navy transition-colors duration-150 flex items-center gap-2">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M13 5H1M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Code 1
        </Link>
      </div>
    </>
  );
}
