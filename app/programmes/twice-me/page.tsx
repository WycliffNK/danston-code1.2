import Link from "next/link";
import { Nav } from "@/app/components/Nav";

export const metadata = {
  title: "TwiceMe — Moment Companion for Confidence & Preparation | Code 1",
  description:
    "TwiceMe is a moment companion for confidence, clarity, preparation, and real-life performance. Before the moment, TwiceMe.",
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

function WaitlistCTA({ light = false, label = "Join the Waitlist" }: { light?: boolean; label?: string }) {
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

export default function TwiceMePage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative bg-navy min-h-[92vh] flex items-end px-[var(--rail-x)] pb-20 pt-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 50% 20%, rgba(201,169,97,0.08) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-4xl">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-gold/70 mb-7">TwiceMe</p>
          <h1 className="font-serif font-normal text-cream text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.5px] mb-8 max-w-[800px]">
            Before the moment,<br className="hidden sm:block" />
            <em className="text-gold">TwiceMe.</em>
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-cream/65 leading-[1.8] max-w-[620px] mb-12">
            A moment companion for confidence, clarity, preparation, and real-life performance. For every high-stakes moment — TwiceMe helps you show up fully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WaitlistCTA light />
            <a href="#what-is-twiceme"
              className="inline-flex justify-center font-sans text-[11px] font-medium tracking-[2px] uppercase text-cream border border-cream/25 px-8 py-4 hover:border-cream/60 transition-colors duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── What it is ── */}
      <section id="what-is-twiceme" className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <Eyebrow>What is TwiceMe</Eyebrow>
            <SectionHeading>
              The companion that prepares you<br /> before you walk in.
            </SectionHeading>
          </div>
          <div className="space-y-5 pt-1">
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              There are moments that matter more than others. A pitch. A negotiation. A difficult conversation. A presentation. An interview. A first impression.
            </p>
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              Most people walk into those moments underprepared — not for lack of ability, but for lack of the right preparation. They are technically ready but not mentally, emotionally, or communicatively ready.
            </p>
            <p className="font-sans text-[16px] text-charcoal leading-[1.85]">
              TwiceMe changes that. It is your pre-moment companion — designed to get you centred, sharp, and ready to perform as yourself.
            </p>
            <div className="border-l-2 border-gold pl-6 space-y-1 pt-2">
              {["Confidence.", "Clarity.", "Preparation.", "Presence.", "Performance."].map((w) => (
                <p key={w} className="font-serif text-[18px] text-navy italic">{w}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <Eyebrow light>Who it&apos;s for</Eyebrow>
            <SectionHeading light>Who TwiceMe is for</SectionHeading>
          </div>
          <div>
            <p className="font-sans text-[15px] text-cream/65 leading-[1.85] mb-8">
              TwiceMe is for anyone who needs to perform at their best in high-stakes moments — personally or professionally.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-10">
              {[
                "Sales professionals before a big pitch",
                "Executives before a board presentation",
                "Candidates before an interview",
                "Leaders before a difficult conversation",
                "Speakers before they step on stage",
                "Entrepreneurs before a funding meeting",
                "Professionals before a performance review",
                "Anyone who wants to show up as their best self",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-gold" />
                  <span className="font-sans text-[14px] text-cream/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] text-gold/80 italic">
              If the moment matters, TwiceMe.
            </p>
          </div>
        </div>
      </section>

      {/* ── What TwiceMe does ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <Eyebrow>Features</Eyebrow>
            <SectionHeading>What TwiceMe does for you</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-navy/8">
            {[
              {
                num: "01",
                title: "Moment Mapping",
                sub: "Know the moment before you enter it.",
                body: "TwiceMe helps you think through exactly what you are walking into — the stakes, the people, the dynamics, and the outcome you need to create.",
              },
              {
                num: "02",
                title: "Confidence Activation",
                sub: "Get out of your head. Get into your strength.",
                body: "Guided prompts, reflections, and reframes designed to shift you from anxiety to anchored confidence before any high-pressure situation.",
              },
              {
                num: "03",
                title: "Communication Preparation",
                sub: "Know what to say and how to say it.",
                body: "Prepare your key messages, anticipate objections, and rehearse your language so you walk in clear, not scrambling.",
              },
              {
                num: "04",
                title: "Post-Moment Debrief",
                sub: "Learn from every moment.",
                body: "After the moment, TwiceMe helps you process what happened, what worked, what did not, and what to do differently next time.",
              },
            ].map((item) => (
              <div key={item.num} className="bg-cream p-10 max-md:p-7 flex flex-col gap-4">
                <span className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold-dark/50">{item.num}</span>
                <h3 className="font-serif text-[22px] text-navy leading-tight">{item.title}</h3>
                <p className="font-sans text-[13px] font-medium text-navy/60">{item.sub}</p>
                <p className="font-sans text-[14px] text-charcoal-soft leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Moments TwiceMe prepares you for ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <Eyebrow light>Use Cases</Eyebrow>
            <SectionHeading light>Moments TwiceMe prepares you for</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                category: "Business",
                moments: ["Sales pitches", "Client meetings", "Investor presentations", "Partnership negotiations", "Business proposals"],
              },
              {
                category: "Leadership",
                moments: ["Team performance reviews", "Board meetings", "Difficult conversations", "Crisis communication", "Culture-setting moments"],
              },
              {
                category: "Personal",
                moments: ["Job interviews", "Public speaking", "Networking events", "Conflict resolution", "High-stakes decisions"],
              },
            ].map((group) => (
              <div key={group.category} className="border-t-2 border-gold/40 pt-7">
                <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold/60 mb-5">{group.category}</p>
                <ul className="flex flex-col gap-3">
                  {group.moments.map((m) => (
                    <li key={m} className="flex items-start gap-3">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                      <span className="font-sans text-[14px] text-cream/65">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming soon / waitlist ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>Coming Soon</Eyebrow>
            <SectionHeading className="mb-6">TwiceMe is in development.</SectionHeading>
            <p className="font-sans text-[15px] text-charcoal-soft leading-[1.85] mb-8">
              We are building TwiceMe as a dedicated companion — available on web and mobile. The waitlist is now open for people who want early access and the chance to shape the product.
            </p>
            <WaitlistCTA />
          </div>
          <div className="flex flex-col gap-6 border-l border-navy/10 pl-12 max-md:border-l-0 max-md:pl-0">
            {[
              ["Status", "In development"],
              ["Early access", "Waitlist open"],
              ["Platform", "Web + Mobile"],
              ["Delivery", "Guided companion experience"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-6">
                <p className="font-sans text-[10px] tracking-[1.5px] uppercase text-navy/40 w-28 shrink-0 pt-0.5">{k}</p>
                <p className="font-sans text-[14px] text-charcoal">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-navy px-[var(--rail-x)] py-24 text-center">
        <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold/50 mb-5">TwiceMe</p>
        <SectionHeading light className="mb-5 max-w-2xl mx-auto">
          The moment is coming.<br /> Be ready for it.
        </SectionHeading>
        <p className="font-sans text-[15px] text-cream/55 mb-10 max-w-lg mx-auto">
          Join the waitlist and be among the first to access TwiceMe when it launches.
        </p>
        <WaitlistCTA light />
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
