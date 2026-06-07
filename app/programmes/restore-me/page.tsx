import Link from "next/link";
import { Nav } from "@/app/components/Nav";

export const metadata = {
  title: "RestoreMe — Personal Restoration & Confidence | Code 1",
  description:
    "RestoreMe is a personal restoration membership for people ready to rebuild confidence, identity, communication, and self-leadership.",
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

function AssessmentCTA({ light = false, label = "Take the Free Assessment" }: { light?: boolean; label?: string }) {
  return (
    <a
      href="/#assessment"
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

export default function RestoreMePage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative bg-navy min-h-[92vh] flex items-end px-[var(--rail-x)] pb-20 pt-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(201,169,97,0.07) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-gold/70 mb-7">RestoreMe</p>
          <h1 className="font-serif font-normal text-cream text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.5px] mb-8 max-w-[800px]">
            Come back to yourself.<br className="hidden sm:block" />
            <em className="text-gold">Restore your original strength.</em>
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-cream/65 leading-[1.8] max-w-[620px] mb-12">
            A personal restoration membership for people ready to rebuild confidence, identity, communication, and self-leadership — from the inside out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <AssessmentCTA light />
            <a href="#what-is-restoreMe"
              className="inline-flex justify-center font-sans text-[11px] font-medium tracking-[2px] uppercase text-cream border border-cream/25 px-8 py-4 hover:border-cream/60 transition-colors duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section id="what-is-restoreMe" className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading>
              You have not lost your strength.<br /> You have lost your way back to it.
            </SectionHeading>
          </div>
          <div className="space-y-5 pt-1">
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              Something happened. A setback. A season of pressure. A relationship that cost you. A role that asked too much. And somewhere in the middle of surviving it, you stopped recognising yourself.
            </p>
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              You still function. You still perform. But the confidence you used to carry — the clarity, the voice, the boldness — it has gone quiet.
            </p>
            <p className="font-sans text-[16px] text-charcoal leading-[1.85]">
              RestoreMe is built for that moment.
            </p>
            <div className="border-l-2 border-gold pl-6 space-y-1 pt-2">
              {["Confidence.", "Identity.", "Voice.", "Self-leadership.", "Strength."].map((w) => (
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
            <SectionHeading light>Who RestoreMe is for</SectionHeading>
          </div>
          <div>
            <p className="font-sans text-[15px] text-cream/65 leading-[1.85] mb-8">
              RestoreMe is for people who feel like they have drifted from who they really are — and are ready to come back.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-10">
              {[
                "Professionals who have lost confidence after setbacks",
                "Leaders who feel burnt out and disconnected",
                "People recovering from difficult relationships",
                "Entrepreneurs who have lost their edge",
                "Individuals who struggle to speak up or be heard",
                "People who know something is off but cannot name it",
                "Anyone ready to rebuild from the inside out",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-gold" />
                  <span className="font-sans text-[14px] text-cream/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] text-gold/80 italic">
              If you are ready to stop performing and start becoming again, RestoreMe is for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── What RestoreMe covers ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <Eyebrow>The Work</Eyebrow>
            <SectionHeading>What RestoreMe covers</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-navy/8">
            {[
              {
                num: "01",
                title: "Identity Restoration",
                sub: "Reconnect with who you actually are.",
                body: "Understand the experiences, beliefs, and narratives that have shaped your self-image — and begin replacing them with truth.",
              },
              {
                num: "02",
                title: "Confidence Rebuilding",
                sub: "Stop shrinking. Start standing.",
                body: "Work through the root causes of low confidence and develop the inner posture that holds you steady in any room.",
              },
              {
                num: "03",
                title: "Communication & Voice",
                sub: "Speak as yourself again.",
                body: "Restore your ability to express yourself clearly, honestly, and with authority — in personal and professional settings.",
              },
              {
                num: "04",
                title: "Self-Leadership",
                sub: "Lead yourself before you lead others.",
                body: "Build the disciplines, rhythms, and decisions that help you show up fully — in your career, relationships, and daily life.",
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

      {/* ── What you leave with ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div>
            <Eyebrow light>Outcomes</Eyebrow>
            <SectionHeading light>What you leave with</SectionHeading>
          </div>
          <div>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "A clear understanding of your identity and what shaped it",
                "A restored confidence that does not depend on performance",
                "A stronger, more natural voice in conversation",
                "The ability to set boundaries and hold them",
                "A personal self-leadership system",
                "Clarity on your values, direction, and daily rhythm",
                "A written Restoration Map for your next season",
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
              You do not leave fixed. You leave restored.
            </p>
          </div>
        </div>
      </section>

      {/* ── Membership ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>Membership</Eyebrow>
            <SectionHeading className="mb-8">How RestoreMe works</SectionHeading>
            <div className="divide-y divide-navy/8">
              {[
                ["Format", "Monthly guided membership"],
                ["Sessions", "Group + individual support"],
                ["Access", "Resources, tools, and community"],
                ["Duration", "Ongoing — cancel anytime"],
                ["Delivery", "Online"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-6 py-5">
                  <p className="font-sans text-[10px] tracking-[1.5px] uppercase text-navy/40 w-28 shrink-0 pt-0.5">{k}</p>
                  <p className="font-sans text-[14px] text-charcoal leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-2">
            <p className="font-sans text-[15px] text-charcoal-soft leading-[1.85]">
              RestoreMe is not a one-off event. Restoration happens in layers — and the membership is designed to walk with you at each one.
            </p>
            <p className="font-sans text-[15px] text-charcoal-soft leading-[1.85]">
              Begin with a free assessment. We use it to understand where you are, what shaped you, and what needs to be addressed first.
            </p>
            <div className="pt-4">
              <AssessmentCTA />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-navy px-[var(--rail-x)] py-24 text-center">
        <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold/50 mb-5">RestoreMe</p>
        <SectionHeading light className="mb-5 max-w-2xl mx-auto">
          Ready to come back to yourself?
        </SectionHeading>
        <p className="font-sans text-[15px] text-cream/55 mb-10 max-w-lg mx-auto">
          Start with a free assessment. It takes less than ten minutes and tells us everything we need to know.
        </p>
        <AssessmentCTA light />
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
