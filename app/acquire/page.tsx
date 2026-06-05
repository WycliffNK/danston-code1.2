import Link from "next/link";
import { Nav } from "@/app/components/Nav";
import { AcquireForm } from "./AcquireForm";

export const metadata = {
  title: "Code1 Acquire — 90-Day Acquisition Power Camp | Code 1",
  description:
    "Code1 Acquire is a 90-day Acquisition Power Camp that transforms how you think, speak, sell, follow up, and convert. First cohort: 19 June 2026. 25 places only.",
};

// ── Reusable primitives ──────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow mb-5 ${light ? "text-gold/60" : "text-gold-dark"}`}>
      {children}
    </p>
  );
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

// ── Scroll-to-form anchor ────────────────────────────────────────────────────
function ApplyCTA({ light = false, label = "Apply for the First Cohort" }: { light?: boolean; label?: string }) {
  return (
    <a
      href="#apply"
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AcquirePage() {
  return (
    <>
      <Nav />

      {/* ── 1. Hero ── */}
      <section className="relative bg-navy min-h-[92vh] flex items-end px-[var(--rail-x)] pb-20 pt-36 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 65% 30%, rgba(201,169,97,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Label */}
        <div className="relative z-10 w-full max-w-4xl">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-gold/70 mb-7">
            Code1 Acquire
          </p>
          <h1 className="font-serif font-normal text-cream text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.5px] mb-8 max-w-[860px]">
            From salesperson<br className="hidden sm:block" /> to acquisition professional.
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] text-cream/65 leading-[1.8] max-w-[660px] mb-12">
            Code1 Acquire is a 90-day Acquisition Power Camp that transforms how people think, speak, sell, follow up, and convert. Built on Danston Mugarura&apos;s 30+ years of sales, leadership, and business-building experience, the programme goes beyond information. It develops the confidence, discipline, communication, and execution required to create opportunities and turn them into revenue.
          </p>

          {/* Key details */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 mb-12 border-t border-cream/10 pt-8">
            {[
              ["Start date", "19 June 2026"],
              ["First cohort", "25 places only"],
              ["Price", "£497"],
              ["Format", "90-day guided Power Camp"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-sans text-[9px] tracking-[2px] uppercase text-gold/50 mb-1">{k}</p>
                <p className="font-sans text-[14px] text-cream/80 font-medium">{v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <ApplyCTA light />
            <a
              href="#apply"
              className="inline-flex justify-center font-sans text-[11px] font-medium tracking-[2px] uppercase text-cream border border-cream/25 px-8 py-4 hover:border-cream/60 transition-colors duration-200"
            >
              Request More Information
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. The Principle ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <Eyebrow>The Principle</Eyebrow>
            <SectionHeading>
              We do not teach sales information. We transform people into acquisition professionals.
            </SectionHeading>
          </div>
          <div className="space-y-5 pt-1">
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              Most sales training gives people scripts, techniques, and closing lines.
            </p>
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              Code1 Acquire goes deeper. We rebuild the person behind the pitch.
            </p>
            <p className="font-sans text-[16px] text-charcoal-soft leading-[1.85]">
              Because acquisition is not just about finding customers. It is about becoming the kind of person who can walk into any market, start the right conversation, diagnose value, build trust, hold confidence under pressure, and convert opportunity with discipline.
            </p>
            <p className="font-sans text-[15px] text-charcoal leading-[1.85]">
              This is where transformation begins.
            </p>
            <div className="border-l-2 border-gold pl-6 space-y-1 pt-2">
              {["Identity.", "Confidence.", "Communication.", "Discipline.", "Execution."].map((w) => (
                <p key={w} className="font-serif text-[18px] text-navy italic">{w}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Who this is for ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <Eyebrow light>Who it&apos;s for</Eyebrow>
            <SectionHeading light>
              Who Code1 Acquire is for
            </SectionHeading>
          </div>
          <div>
            <p className="font-sans text-[15px] text-cream/65 leading-[1.85] mb-8">
              Code1 Acquire is built for people who need to create opportunities, win clients, grow revenue, or develop commercial confidence.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-10">
              {[
                "Sales professionals",
                "Entrepreneurs",
                "Business owners",
                "Consultants",
                "Coaches",
                "Business development executives",
                "Network marketers",
                "Real estate professionals",
                "Insurance and finance professionals",
                "Dealership teams",
                "People who need to acquire customers, clients, partners, or opportunities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-gold" />
                  <span className="font-sans text-[14px] text-cream/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] text-gold/80 leading-relaxed italic">
              If your growth depends on your ability to create conversations and convert opportunities, this programme is for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. What you will learn ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <Eyebrow>Curriculum</Eyebrow>
            <SectionHeading>What you will learn</SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-navy/8">
            {[
              {
                num: "01",
                title: "Acquisition Mindset",
                sub: "Stop chasing. Start acquiring.",
                body: "You will learn how to approach the market with confidence, clarity, and discipline instead of pressure, fear, or desperation.",
              },
              {
                num: "02",
                title: "Conversation System",
                sub: "Start better conversations.",
                body: "You will learn how to open conversations naturally, create curiosity, listen properly, and earn the next step.",
              },
              {
                num: "03",
                title: "Diagnostic Selling",
                sub: "Ask better questions.",
                body: "You will learn how to understand the real need before presenting your offer, so prospects feel understood before they are sold to.",
              },
              {
                num: "04",
                title: "Conversion and Follow-Up",
                sub: "Turn trust into action.",
                body: "You will learn how to present value, handle objections, close with confidence, and follow up without sounding desperate.",
              },
            ].map((item) => (
              <div key={item.num} className="bg-cream p-10 max-md:p-7 flex flex-col gap-4">
                <span className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold-dark/50">{item.num}</span>
                <h3 className="font-serif text-[22px] text-navy leading-tight">{item.title}</h3>
                <p className="font-sans text-[13px] font-medium text-navy/60 tracking-[0.3px]">{item.sub}</p>
                <p className="font-sans text-[14px] text-charcoal-soft leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. 90-Day Structure ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <Eyebrow>Structure</Eyebrow>
            <SectionHeading>The 90-Day Acquisition Power Camp</SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                month: "Month 1",
                title: "Foundation and Identity",
                sub: "Build the acquisition mindset.",
                focus: ["Acquisition confidence", "Customer clarity", "Offer clarity", "Conversation confidence", "Prospect discipline"],
                outcome: "Participants know who they serve, what problem they solve, how to open conversations, and how to stop chasing the wrong people.",
              },
              {
                month: "Month 2",
                title: "Diagnosis and Conversion",
                sub: "Learn how to create trust and convert.",
                focus: ["Diagnostic questions", "Listening", "Identifying need", "Presenting value", "Handling objections", "Closing"],
                outcome: "Participants learn how to ask better questions, understand the real problem, present with precision, and ask for the next step confidently.",
              },
              {
                month: "Month 3",
                title: "Execution and Scale",
                sub: "Build a repeatable acquisition system.",
                focus: ["Pipeline", "Follow-up", "Referrals", "Daily activity", "CRM discipline", "Accountability", "Performance tracking"],
                outcome: "Participants leave with a daily acquisition routine, follow-up system, referral strategy, conversion tracker, and 90-day growth plan.",
              },
            ].map((m, i) => (
              <div key={m.month} className="flex flex-col border-t-2 border-gold pt-7">
                <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-gold-dark/60 mb-2">{m.month}</p>
                <h3 className="font-serif text-[20px] text-navy leading-tight mb-2">{m.title}</h3>
                <p className="font-sans text-[12px] font-medium text-navy/55 mb-6">{m.sub}</p>
                <div className="mb-6">
                  <p className="font-sans text-[9px] tracking-[2px] uppercase text-charcoal-soft/50 mb-3">Focus</p>
                  <ul className="flex flex-col gap-1.5">
                    {m.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-[6px] w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span className="font-sans text-[13px] text-charcoal-soft">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-navy/8">
                  <p className="font-sans text-[9px] tracking-[2px] uppercase text-charcoal-soft/50 mb-2">Outcome</p>
                  <p className="font-sans text-[13px] text-charcoal leading-relaxed">{m.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What you leave with ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div>
            <Eyebrow light>Deliverables</Eyebrow>
            <SectionHeading light>What you leave with</SectionHeading>
          </div>
          <div>
            <p className="font-sans text-[14px] text-cream/55 uppercase tracking-[1px] mb-6">
              By the end of the programme, each participant will have:
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "An Acquisition Identity Sheet",
                "A Prospect Clarity Map",
                "A Conversation Opening Script",
                "A Diagnostic Question Script",
                "A Value Presentation Structure",
                "Objection-Handling Responses",
                "A Follow-Up System",
                "A 90-Day Acquisition Plan",
                "A clear weekly acquisition rhythm",
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
              You do not leave with notes. You leave with a system.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. First Cohort Details ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Eyebrow>Enrolment</Eyebrow>
            <SectionHeading>First Cohort Details</SectionHeading>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Details table */}
            <div className="divide-y divide-navy/8">
              {[
                ["Programme", "Code1 Acquire — 90-Day Acquisition Power Camp"],
                ["Start date", "19 June 2026"],
                ["Places", "25 only"],
                ["First cohort price", "£497"],
                ["Delivery", "Online group training, practical assignments, implementation support, and guided acquisition practice"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-6 py-5">
                  <p className="font-sans text-[10px] tracking-[1.5px] uppercase text-navy/40 w-32 shrink-0 pt-0.5">{k}</p>
                  <p className="font-sans text-[14px] text-charcoal leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-sans text-[15px] text-charcoal-soft leading-[1.85]">
                The first cohort is intentionally limited to 25 people so we can work closely with participants, refine the delivery, and create strong early results.
              </p>
              <p className="font-sans text-[15px] text-charcoal-soft leading-[1.85]">
                Once this cohort is full, applications will move to the waiting list.
              </p>
              <div className="pt-4">
                <ApplyCTA />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Application Form ── */}
      <section id="apply" className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <Eyebrow>Application</Eyebrow>
            <SectionHeading className="mb-6">Apply for the First Cohort</SectionHeading>
            <p className="font-sans text-[15px] text-charcoal-soft leading-[1.85]">
              Please complete the application form below. This helps us understand where you are now, what you sell, what you struggle with, and how Code1 Acquire can help you improve your acquisition ability.
            </p>
          </div>
          <AcquireForm />
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-navy px-[var(--rail-x)] py-24 text-center">
        <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-gold/50 mb-5">Code1 Acquire</p>
        <SectionHeading light className="mb-5 max-w-2xl mx-auto">
          Ready to become an acquisition professional?
        </SectionHeading>
        <p className="font-sans text-[15px] text-cream/55 mb-10 max-w-lg mx-auto">
          Apply now for the first Code1 Acquire cohort.
        </p>
        <ApplyCTA light />
      </section>

      {/* Back link */}
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
