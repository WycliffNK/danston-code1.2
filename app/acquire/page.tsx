import Link from "next/link";
import { Nav } from "@/app/components/Nav";

export const metadata = {
  title: "CAP — Client Acquisition Professional | Code 1",
  description:
    "The complete system that transforms anyone into a certified, sponsored, licensed acquisition professional. Masterclass 19 June 2026.",
};

// ── Primitives ────────────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow mb-5 ${light ? "text-gold/60" : "text-gold-dark"}`}>{children}</p>;
}

function H2({ children, light = false, className = "" }: {
  children: React.ReactNode; light?: boolean; className?: string;
}) {
  return (
    <h2 className={`font-serif font-normal leading-[1.05] tracking-[-0.3px] text-[clamp(32px,4.5vw,60px)] ${light ? "text-cream" : "text-navy"} ${className}`}>
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="border-t border-navy/8" />;
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AcquirePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative bg-navy min-h-screen flex items-end px-[var(--rail-x)] pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(201,169,97,0.07) 0%, transparent 70%)" }} />

        {/* Watermark */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(180px,28vw,420px)] text-cream/[0.02] leading-none pointer-events-none select-none tracking-widest">
          CAP
        </span>

        <div className="relative z-10 w-full max-w-5xl">
          <p className="font-sans text-[10px] tracking-[3px] uppercase text-gold/70 mb-6">
            Full Campaign Blueprint · Masterclass to Code1 Black
          </p>
          <h1 className="font-serif font-normal text-cream text-[clamp(52px,9vw,120px)] leading-[0.95] tracking-[-1px] mb-6">
            CAP<br />
            <em className="text-gold text-[0.75em]">Client Acquisition</em><br />
            Professional
          </h1>
          <p className="font-sans text-[11px] tracking-[3px] uppercase text-cream/40 mb-6">
            Teach · Train · Coach · Mentor · Sponsor
          </p>
          <p className="font-sans text-[16px] sm:text-[18px] text-cream/60 leading-[1.8] max-w-[600px] mb-12">
            The complete system that transforms anyone — from zero sales background — into a certified, sponsored, licensed acquisition professional.
          </p>

          {/* Pull quote */}
          <div className="border-t border-b border-cream/10 py-8 max-w-[640px] mb-12">
            <blockquote className="font-serif italic text-[clamp(17px,2.2vw,22px)] text-gold leading-[1.4]">
              "Stop telling, start selling to everyone you meet."
            </blockquote>
            <cite className="block mt-4 font-sans text-[10px] tracking-[2px] uppercase text-cream/40 not-italic">
              — Danston Mugarura · Founder & CEO, Code1
            </cite>
          </div>

          {/* Key stats */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {[
              ["Masterclass Date", "19 June 2026", true],
              ["Entry Investment", "£497", false],
              ["Elite Partnership", "£4,997", false],
              ["First Cycle Revenue", "£84,850", true],
            ].map(([label, value, gold]) => (
              <div key={String(label)}>
                <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream/35 mb-1">{label}</p>
                <p className={`font-sans text-[15px] font-medium ${gold ? "text-gold" : "text-cream/80"}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── MANIFESTO ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Why CAP Exists</Eyebrow>
          <div className="space-y-6">
            <p className="font-serif italic text-[clamp(17px,2.2vw,22px)] text-charcoal/80 leading-[1.65]">
              Most training programmes teach you.<br />Then they leave you.
            </p>
            <p className="font-serif italic text-[clamp(17px,2.2vw,22px)] text-charcoal/80 leading-[1.65]">
              You get the information. You do not get the skill.<br />
              You get the skill. You do not get the results.<br />
              You get the results. <strong className="text-gold not-italic">Nobody knows about them.</strong>
            </p>
            <p className="font-serif text-[clamp(24px,4vw,44px)] text-navy leading-[1.1] py-4">
              CAP does not stop<br />until Danston sponsors you.
            </p>
            <p className="font-serif italic text-[clamp(16px,1.8vw,20px)] text-charcoal/70 leading-[1.65]">
              "Forget building value — it doesn't work anymore."
            </p>
            <p className="font-serif italic text-[clamp(16px,1.8vw,20px)] text-charcoal/70 leading-[1.65]">
              "Move from selling to sharing — no one cares about your sales skills."
            </p>
            <p className="font-serif text-[clamp(16px,1.8vw,20px)] text-navy leading-[1.65]">
              <strong>"No more closing. It's all about opening."</strong>
            </p>
            <p className="font-sans text-[15px] text-charcoal-soft leading-[1.85] max-w-xl mx-auto pt-2">
              This is not a sales training course. This is a complete professional transformation system. From your first conversation — to your own certified practice.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FIVE TRIGGER LINES ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>Danston's Five Trigger Lines — The Campaign Weapons</Eyebrow>
          <H2 className="mb-4">Five Lines. <em className="text-gold">One Movement.</em></H2>
          <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed max-w-xl mb-16">
            Every post, every video, every WhatsApp message in this campaign is anchored to one of these lines. They are not marketing copy. They are Danston's convictions — and convictions convert.
          </p>

          <div className="flex flex-col gap-px bg-navy/8">
            {[
              {
                num: "Trigger 01 — The Signature Line",
                quote: "Stop telling, start selling to everyone you meet.",
                body: "Most people talk about what they do. They explain. They inform. They describe. And nothing converts. This line exposes the gap between talking and creating commercial intent in every interaction.",
                tags: ["Video Hook", "WhatsApp Opener", "LinkedIn", "Instagram", "Masterclass Opening"],
                featured: false,
              },
              {
                num: "Trigger 02 — The Industry Challenger",
                quote: "Forget building value — it doesn't work anymore.",
                body: "Every sales trainer, every manager, every course says 'build value.' Danston says it is the wrong frame entirely. This creates instant controversy — and controversy creates conversation.",
                tags: ["Day 2 Post Hook", "LinkedIn", "Facebook", "Landing Page"],
                featured: false,
              },
              {
                num: "Trigger 03 — The Permission",
                quote: "Move from selling to sharing — no one cares about your sales skills.",
                body: "For every entrepreneur who says 'I'm not a salesperson' — this is the reframe they have been waiting for. It removes the threat. It opens the door for founders, coaches and consultants.",
                tags: ["Entrepreneur Audience", "Coaches & Consultants", "Instagram Story", "Day 4"],
                featured: false,
              },
              {
                num: "Trigger 04 — The Warning",
                quote: "The minute you hear 'I'm impressed' — get ready to revise your approach. It's not working.",
                body: "The most counterintuitive line in the set. 'Impressed' feels like progress. Danston says it is a signal of failure. Every salesperson has heard it. Every salesperson has celebrated it. And most of them lost the deal.",
                tags: ["Sales Professionals", "Carousel Slide", "Email Subject Line", "Day 7"],
                featured: false,
              },
              {
                num: "Trigger 05 — The Philosophy · Campaign Signature · Appears On Everything",
                quote: "No more closing. It's all about opening.",
                body: "Five words. The entire CAP philosophy. Every sales trainer in the world talks about closing. Danston says that if you do the opening right, the close is not a moment — it has already been earned. This line goes on every post, every email, every WhatsApp message as a closing signature.",
                tags: ["Campaign Signature", "Every Platform", "Masterclass Title Slide", "Event Backdrop", "Email Footer"],
                featured: true,
              },
            ].map((item) => (
              <div key={item.num} className={`p-10 max-md:p-7 flex flex-col gap-4 ${item.featured ? "bg-navy" : "bg-cream"}`}>
                <p className={`font-sans text-[9px] tracking-[2.5px] uppercase ${item.featured ? "text-gold/60" : "text-gold-dark/60"}`}>
                  {item.num}
                </p>
                <p className={`font-serif italic text-[clamp(17px,2vw,22px)] leading-[1.4] ${item.featured ? "text-gold" : "text-navy"}`}>
                  "{item.quote}"
                </p>
                <p className={`font-sans text-[14px] leading-relaxed border-t pt-4 ${item.featured ? "text-cream/55 border-cream/10" : "text-charcoal-soft border-navy/8"}`}>
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tags.map((tag, i) => (
                    <span key={tag} className={`font-sans text-[9px] tracking-[1.5px] uppercase px-3 py-1 border ${
                      i < 2
                        ? item.featured ? "border-gold/40 text-gold" : "border-gold-dark/40 text-gold-dark"
                        : item.featured ? "border-cream/10 text-cream/30" : "border-navy/15 text-navy/40"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── THREE TIERS ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow light>The CAP System — Full Architecture</Eyebrow>
          <H2 light className="mb-4">Three Tiers. <em className="text-gold">One Destination.</em></H2>
          <p className="font-sans text-[15px] text-cream/55 leading-relaxed max-w-xl mb-16">
            The masterclass on 19 June is the entry point. CAP Core converts the strongest attendees. CAP Practitioner is the progression. Code1 Black is the elite partnership that very few will reach — and everyone will want.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-cream/5">
            {[
              {
                badge: "Tier 1 — Entry",
                name: "CAP Core",
                sub: "Teach · Train · Coach",
                price: "£497",
                note: "First cohort · 25 places · Starting 29 June 2026",
                levels: "Levels 1, 2 and 3",
                features: [
                  "I teach to inform — you understand how acquisition works at a professional level",
                  "I train to skill — you can execute every stage of the acquisition conversation",
                  "I coach to produce results — your conversion rate doubles within 90 days",
                  "Open to all masterclass attendees who apply and are accepted",
                  "90-day structured programme with live sessions and accountability",
                ],
                outcome: "Month one — you double your conversion rate. From the same number of conversations.",
                access: "Access: Apply via masterclass on 19 June",
                accent: "border-t-2 border-gold",
                priceColor: "text-gold",
              },
              {
                badge: "Tier 2 — Progression",
                name: "CAP Practitioner",
                sub: "Mentor · Transform",
                price: "£1,497",
                note: "CAP Core graduates only · Limited cohort",
                levels: "Level 4",
                features: [
                  "I mentor to transform — you become a top leader in acquisition",
                  "Deep identity shift — you think, speak and carry yourself differently",
                  "Operating at 10x your previous conversion output",
                  "Advanced frameworks for all ticket sizes and all client demographics",
                  "Available only to proven CAP Core graduates",
                ],
                outcome: "Month two — you are operating at 10x. The same way you acquire one person is the same way you acquire the most seemingly difficult person.",
                access: "Access: CAP Core graduates by invitation",
                accent: "border-t-2 border-cream/30",
                priceColor: "text-cream",
              },
              {
                badge: "Tier 3 — Elite Partnership",
                name: "Code1 Black",
                sub: "Certified Licensed Operator",
                price: "£4,997",
                note: "Application only · Danston sponsors personally",
                levels: "Level 5 — Sponsor",
                features: [
                  "I sponsor — Danston puts his name and reputation behind you",
                  "CAP Facilitator Certification — licensed to deliver CAP Core",
                  "Business in a box — branded materials, frameworks and licence",
                  "Assigned territory — geographic or vertical market",
                  "Senior affiliate income on every person brought into the CAP system",
                  "CV and profile recommended to companies by Code1 directly",
                ],
                outcome: "Month three — your income has followed your identity. We recommend you. We assign you. We send your name to companies and say: we trained this person ourselves.",
                access: "Access: Invitation only — earned, not bought",
                accent: "border-t-2 border-cream",
                priceColor: "text-cream",
              },
            ].map((tier) => (
              <div key={tier.name} className={`bg-navy p-10 max-md:p-7 flex flex-col gap-4 ${tier.accent}`}>
                <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream/35">{tier.badge}</p>
                <h3 className={`font-serif text-[clamp(24px,3vw,36px)] leading-tight ${tier.priceColor}`}>{tier.name}</h3>
                <p className="font-sans text-[10px] tracking-[1.5px] uppercase text-cream/40">{tier.sub}</p>
                <p className={`font-serif text-[clamp(36px,5vw,52px)] leading-none ${tier.priceColor}`}>{tier.price}</p>
                <p className="font-sans text-[11px] text-cream/35 leading-snug">{tier.note}</p>
                <p className="font-sans text-[9px] tracking-[2px] uppercase text-cream/25 border-t border-cream/8 pt-4">{tier.levels}</p>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-gold mt-[2px] shrink-0">→</span>
                      <span className="font-sans text-[13px] text-cream/60 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-cream/8">
                  <p className={`font-serif italic text-[14px] leading-relaxed mb-3 ${tier.priceColor === "text-gold" ? "text-gold" : "text-cream/70"}`}>
                    "{tier.outcome}"
                  </p>
                  <p className="font-sans text-[9px] tracking-[1.5px] uppercase text-cream/25">{tier.access}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── ROI ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>The Money Argument</Eyebrow>
          <H2 className="mb-4">Put the Numbers <em className="text-gold-dark">on the Table.</em></H2>
          <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed max-w-xl mb-12">
            Money attracts people. Show them exactly what doubling their conversion rate means — in pounds, per month, per year. No apology. No softening. Just the maths.
          </p>

          <div className="border-l-4 border-gold bg-cream p-10 max-md:p-7 mb-8">
            <h3 className="font-serif text-[clamp(28px,4vw,48px)] text-gold leading-none mb-1">Double Your Conversion Rate.</h3>
            <p className="font-serif text-[clamp(18px,2.5vw,32px)] text-navy/25 leading-none mb-10">In 90 Days.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-10">
                <thead>
                  <tr>
                    {["Your Situation", "Before CAP", "After 90 Days", "Extra Per Year"].map((h) => (
                      <th key={h} className="text-left font-sans text-[9px] tracking-[2px] uppercase text-gold-dark px-4 py-3 border-b border-navy/10">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["10 prospects/month · £2,000 deal", "2 closes = £4,000/mo", "4 closes = £8,000/mo", "+£48,000"],
                    ["20 prospects/month · £1,000 deal", "4 closes = £4,000/mo", "8 closes = £8,000/mo", "+£48,000"],
                    ["5 prospects/month · £5,000 deal", "1 close = £5,000/mo", "2 closes = £10,000/mo", "+£60,000"],
                    ["Network marketer · 30 conversations/month", "3 joins = £900/mo", "6 joins = £1,800/mo", "+£10,800"],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-4 font-sans text-[13px] border-b border-navy/5 leading-snug ${j >= 2 ? "text-gold-dark font-medium" : "text-charcoal-soft"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-navy/8 mb-10">
              {[
                { label: "Month One — CAP Core", result: "Double Your Conversion Rate", desc: "Same conversations. Same product. Same market. Different person having them." },
                { label: "Month Two — CAP Practitioner", result: "10x Your Sales Output", desc: "All ticket sizes. All demographics. The same acquisition principles applied at scale." },
                { label: "Month Three — Code1 Black", result: "10x Your Income", desc: "Your identity has changed. Your income follows. Danston puts his name behind you." },
              ].map((m) => (
                <div key={m.label} className="bg-cream p-8 text-center">
                  <p className="font-sans text-[9px] tracking-[2px] uppercase text-navy/40 mb-4">{m.label}</p>
                  <p className="font-serif text-[clamp(18px,2.5vw,26px)] text-gold leading-tight mb-3">{m.result}</p>
                  <p className="font-sans text-[12px] text-charcoal-soft leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-navy/10 pt-8">
              <p className="font-serif italic text-[clamp(16px,2vw,22px)] text-navy leading-[1.6]">
                The masterclass is <span className="text-gold not-italic font-medium">free.</span><br />
                CAP Core is <span className="text-gold not-italic font-medium">£497.</span><br />
                CAP Practitioner is <span className="text-gold not-italic font-medium">£1,497.</span><br />
                Code1 Black is <span className="text-gold not-italic font-medium">£4,997.</span><br />
                The return — if you do the work — is measured in <span className="text-gold not-italic font-medium">tens of thousands.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── REVENUE ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>First Cycle Revenue</Eyebrow>
          <H2 className="mb-4">The Commercial <em className="text-gold-dark">Reality.</em></H2>
          <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed max-w-xl mb-12">
            This is what a well-executed 19 June masterclass produces across all three tiers in the first cycle.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr>
                  {["Tier", "Places", "Price", "Revenue"].map((h) => (
                    <th key={h} className="text-left font-sans text-[9px] tracking-[2px] uppercase text-gold-dark px-5 py-3 border-b border-navy/10">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["CAP Core", "25", "£497", "£12,425"],
                  ["CAP Practitioner", "15", "£1,497", "£22,455"],
                  ["Code1 Black — Certified Licensed Operator", "10", "£4,997", "£49,970"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-5 py-4 font-sans text-[14px] border-b border-navy/5 text-charcoal-soft">{cell}</td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-navy/15">
                  {["Total First Cycle", "50", "", "£84,850"].map((cell, j) => (
                    <td key={j} className="px-5 py-5 font-sans text-[15px] font-medium text-gold">{cell}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-sans text-[14px] text-charcoal-soft leading-relaxed max-w-2xl">
            From cycle two onwards — every Code1 Black Certified Licensed Operator is delivering CAP Core in their assigned territory, generating their own cohort revenue and feeding affiliate income back into the system. The masterclass on 19 June does not just produce £84,850. It produces a network.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── LANDING PAGE COPY ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow light>Landing Page Copy — www.code1.one/cap-masterclass</Eyebrow>
          <H2 light className="mb-16">The Page That <em className="text-gold">Fills the Room.</em></H2>

          <div className="border border-cream/10 p-10 max-md:p-7">
            <p className="font-sans text-[9px] tracking-[3px] uppercase text-gold/60 mb-8">Code1 Live Masterclass · 19 June 2026</p>
            <h3 className="font-serif text-[clamp(36px,6vw,80px)] text-cream leading-[0.95] tracking-[-0.5px] mb-8">
              You're Not Bad<br />at Sales.<br />
              <em className="text-gold">You Were Never<br />Taught Acquisition.</em>
            </h3>
            <p className="font-sans text-[16px] text-cream/55 leading-[1.7] max-w-[520px] mb-8">
              A live masterclass with Danston Mugarura — 30 years of acquisition experience, distilled into 90 minutes that will change how you show up in every commercial conversation.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              {["📅 19 June 2026", "🖥️ Live Online · 90 Minutes", "🎟️ Free — 150 Places Only"].map((item, i) => (
                <p key={item} className={`font-sans text-[13px] ${i === 2 ? "text-gold" : "text-cream/50"}`}>{item}</p>
              ))}
            </div>
            <a href="#apply" className="inline-flex font-sans text-[11px] font-medium tracking-[2px] uppercase text-navy bg-gold px-8 py-4 hover:bg-gold/85 transition-colors duration-200">
              Reserve My Place
            </a>
            <p className="font-sans text-[11px] text-cream/25 mt-4 tracking-[0.5px]">Registration required. No replay guaranteed. Confirmed by email and WhatsApp.</p>

            {/* Problem */}
            <div className="mt-16 pt-12 border-t border-cream/8">
              <p className="font-sans text-[9px] tracking-[3px] uppercase text-gold/60 mb-6">The Problem</p>
              <p className="font-serif italic text-[clamp(17px,2.2vw,24px)] text-cream leading-[1.5] mb-6">
                "Forget building value — it doesn't work anymore."
              </p>
              <p className="font-sans text-[14px] text-cream/50 leading-relaxed mb-4">
                You know what you sell. You show up. You follow up. You pitch. You explain the value. And still — prospects go cold. Deals stall. You discount. You chase.
              </p>
              <p className="font-sans text-[14px] text-cream/50 leading-relaxed mb-4">
                The industry told you to build value. Present features. Handle objections. Master the close. None of it is working the way it should — because none of it addresses the real problem.
              </p>
              <p className="font-serif italic text-[clamp(15px,1.8vw,19px)] text-gold leading-relaxed">
                The problem is not your product, your price or your pitch. It is the person behind the conversation. And that person can be developed.
              </p>
            </div>

            {/* What you will learn */}
            <div className="mt-12 pt-10 border-t border-cream/8">
              <p className="font-sans text-[9px] tracking-[3px] uppercase text-gold/60 mb-8">What You Will Learn</p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  ["01", "Why you're losing deals before you open your mouth", "The identity gap that creates pressure and kills deals at the start — not the close."],
                  ["02", "The difference between a salesperson and an acquisition professional", "It is not a technique. It is a standard — and it shows in every conversation."],
                  ["03", "How to open a conversation that earns attention", "A practical structure that creates curiosity instead of resistance — in the first 60 seconds."],
                  ["04", "How to diagnose before you ever present", "The questions that reveal urgency, value and readiness — so your pitch lands every time."],
                  ["05", "How to turn trust into commitment — without manipulation", "Present value. Handle resistance. Agree the next step. On your terms. Every time."],
                ].map(([num, title, desc]) => (
                  <div key={String(num)}>
                    <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-gold/50 mb-2">{num}</p>
                    <p className="font-serif text-[15px] text-cream leading-snug mb-2">{title}</p>
                    <p className="font-sans text-[12px] text-cream/40 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-cream/8 text-center">
              <a href="#apply" className="inline-flex font-sans text-[11px] font-medium tracking-[2px] uppercase text-navy bg-gold px-10 py-4 hover:bg-gold/85 transition-colors duration-200">
                Reserve My Place — 19 June
              </a>
              <p className="font-sans text-[11px] text-cream/25 mt-4 italic">"No more closing. It's all about opening." — Danston Mugarura</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── WHATSAPP ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>WhatsApp Campaign Messages</Eyebrow>
          <H2 className="mb-4">Direct. <em className="text-gold-dark">Personal. Unmissable.</em></H2>
          <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed max-w-xl mb-12">
            WhatsApp is your highest-converting channel. Every message must feel like it was written to one person.
          </p>

          <div className="flex flex-col gap-3">
            {[
              {
                label: "Broadcast 1 — Launch Day · 8 June",
                color: "border-l-4 border-[#25d366]",
                body: `"Stop telling, start selling to everyone you meet."\n\nThat is the shift. And most people never make it.\n\nOn 19 June I am hosting a live CAP masterclass. 90 minutes. Free.\n\nCAP — Client Acquisition Professional.\n\nI am going to show you the difference between a salesperson who talks and an acquisition professional who converts. No more chasing. No more "I'm impressed" with nothing to show for it. No more closing conversations that never really opened.\n\nRegister here: [LINK]\n\n150 places. When they are gone, they are gone.\n\n— Danston\n\nNo more closing. It's all about opening.`,
              },
              {
                label: "Broadcast 2 — Personal Invitation Day · 12 June",
                color: "border-l-4 border-[#25d366]",
                body: `Hi [Name],\n\nI am hosting a live masterclass on 19 June and I thought of you specifically.\n\nIt is called CAP — Client Acquisition Professional. The session covers how to create opportunities, open stronger conversations, diagnose real needs and convert with confidence.\n\nI thought of you because [personalise: you are building something / you have been in sales for years / you told me conversion is your biggest challenge].\n\nThe masterclass is free. 90 minutes. And for the right people, there is an opportunity to go deeper — all the way to Code1 Black, where I personally sponsor and certify you as a licensed operator.\n\nI would genuinely value having you in the room.\n\nRegister: [LINK]\n\n— Danston\n\nNo more closing. It's all about opening.`,
              },
              {
                label: "Broadcast 3 — Final Push · 18 June Evening",
                color: "border-l-4 border-[#25d366]",
                body: `Tomorrow. 90 minutes. Live. Free.\n\n"No more closing — it's all about opening."\n\nIf that line stopped you — come tomorrow and find out exactly what it means in practice.\n\nCAP — Client Acquisition Professional.\n\n19 June · Live Online · 150 places\nRegister now: [LINK]\n\nSee you there.\n— Danston`,
              },
            ].map((msg) => (
              <div key={msg.label} className={`bg-cream p-8 max-md:p-6 ${msg.color}`}>
                <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-[#25d366] mb-6 font-medium">📱 {msg.label}</p>
                <p className="font-sans text-[14px] text-charcoal leading-[2] whitespace-pre-line">{msg.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 13-DAY CAMPAIGN ── */}
      <section className="bg-cream px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>The 13-Day Campaign Plan</Eyebrow>
          <H2 className="mb-4">Every Day. <em className="text-gold-dark">One Job.</em></H2>
          <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed max-w-xl mb-12">
            One theme. One hook. One action. Nothing vague. Nothing generic. Every day moves people closer to 19 June.
          </p>

          {/* Infra bar */}
          <div className="bg-navy/5 border border-navy/8 px-8 py-5 mb-2 font-sans text-[11px] tracking-[1.5px] uppercase text-navy/35">
            6–7 June — Infrastructure. Registration page · Form · Confirmation emails · WhatsApp setup · Event link · CAP Scorecard · Branded graphics · Speaker video · Tracking sheet. Do not publish a single word until every item is complete.
          </div>

          <div className="flex flex-col gap-px bg-navy/8">
            {[
              { num: "01", date: "8 June", theme: "Launch Day — All Platforms Simultaneously", title: "The Movement Begins. CAP Is Live.", hook: '"Stop telling, start selling to everyone you meet."', body: 'Master announcement post. Founder video. LinkedIn, Facebook, Instagram, WhatsApp broadcast — all live within two hours. Introduce CAP for the first time. Explain the name. Explain what it replaces. Target: 30 registrations before midnight.', cta: "CTA: Reserve My Place at code1.one/cap-masterclass", type: "launch" },
              { num: "02", date: "9 June", theme: "The Pain Post", title: "Why Intelligent People Still Struggle to Acquire Clients", hook: '"Forget building value — it doesn\'t work anymore."', body: "Focus on the specific moments where deals die — not at the close, but at the opening. This post is for the person who knows they are capable but cannot figure out what is stopping them. Do not offer the solution. Only name the pain with precision.", cta: "CTA: 19 June — register at [LINK]", type: "" },
              { num: "03", date: "10 June", theme: "Authority Video", title: "Danston Speaks — 60 to 90 Seconds · Direct to Camera · No Notes", hook: '"Stop telling, start selling to everyone you meet. I have been saying this for 30 years. On 19 June I am going to show you exactly what it means."', body: "Phone camera. Good light. Quiet room. Danston looks directly into the lens. Speaks from conviction, not from script. Ends with: 'The link is in the bio. 150 places. I will see you there.' No production needed. Conviction is the production value.", cta: "CTA: Link in bio", type: "" },
              { num: "04", date: "11 June", theme: "Education Post", title: "Five Behaviours That Make Prospects Quietly Lose Confidence in You", hook: '"Move from selling to sharing — no one cares about your sales skills."', body: "1. You present before you diagnose. 2. You fill silence with more words. 3. You answer objections before they finish the sentence. 4. You bring energy they did not ask for. 5. You follow up without a reason. Each point is sharp, honest and immediately recognisable.", cta: "CTA: Come and fix this — register at [LINK]", type: "" },
              { num: "05", date: "12 June", theme: "Direct Invitation Day — No Public Posts", title: "Personal Messages Only. Every One Personalised.", hook: "A personal invitation will outperform any post. Every single time.", body: "Contact past colleagues, current clients, business owners, sales leaders, entrepreneurs, consultants, corporate contacts. This is the highest-converting day of the entire campaign. Goal: 20 additional registrations from direct outreach alone.", cta: "No public content today", type: "" },
              { num: "06", date: "13 June", theme: "Story Post — Real. Specific. No Motivation.", title: "The Sale Was Not Lost at the Close. It Was Lost at the Opening.", hook: "A real story from 30 years in the room.", body: "Danston shares one specific deal — real, named by situation not by name — that looked certain and disappeared. He identifies the exact moment it was lost and what he did differently after. No motivational language. Just the story and the lesson inside it.", cta: "CTA: 19 June — learn the full CAP framework", type: "" },
              { num: "07", date: "14 June", theme: "Objection Post", title: "For Everyone Who Has Ever Said One of These", hook: '"The minute you hear \'I\'m impressed\' — get ready to revise your approach. It\'s not working."', body: '"I am not a salesperson." → You are right. You are an acquisition professional. / "My product sells itself." → Then why are you still chasing? / "I struggle with rejection." → You are being told your opening needs work. / "I hate feeling like I am pushing people." → You are pushing because you have not learned to pull.', cta: "CTA: Come and find out what is underneath — [LINK]", type: "" },
              { num: "08", date: "15 June", theme: "Urgency Push", title: "This Friday. CAP. Live. 90 Minutes. Free.", hook: '"No more closing — it\'s all about opening."', body: "State it plainly. Date. Time. What they will leave with. How many places remain. No filler. Just: CAP — Client Acquisition Professional. This Friday. Here is what it will do for you. And for the right people — here is what comes after.", cta: "CTA: Register now — places running out — [LINK]", type: "" },
              { num: "09", date: "16 June", theme: "Behind the Scenes", title: "Show the Work. Make the Event Feel Real and Premium.", hook: "People do not buy events. They buy into preparation.", body: "Share a page from the CAP workbook, a section of the framework, a slide, Danston preparing. Caption: 'This is what Friday looks like from this side. Here is what it will look like from yours.' The more premium the preparation appears, the more the event feels worth attending.", cta: "CTA: Register if you have not yet — [LINK]", type: "" },
              { num: "10", date: "17 June", theme: "Three Lessons Post", title: "Three Things Every Acquisition Professional Must Master Before Asking for the Business", hook: '"Stop telling, start selling — here are the three things that make the difference."', body: "1. Master the opening — earn attention before you earn trust. 2. Master the diagnosis — the professional who diagnoses best, presents least and closes most. 3. Master the silence — the acquisition professional who speaks less converts more.", cta: "CTA: Tomorrow is the last day to register — [LINK]", type: "" },
              { num: "11", date: "18 June", theme: "Final Registration Day — Four Touchpoints", title: "Morning Post · Afternoon Reminder · Evening WhatsApp · Founder Video", hook: "This is the last day. Tomorrow we go live.", body: "Morning post: name exactly what people will be able to do after 90 minutes. Afternoon: registration link, places remaining. Evening WhatsApp: personal, direct, one paragraph. Founder video: raw, no production — Danston speaks directly to camera. Four touches. All different. All specific.", cta: "CTA: Registration closes tonight", type: "" },
              { num: "12", date: "19 June", theme: "Event Day — CAP Masterclass Live", title: "Morning Reminder · 3-Hour Reminder · 15-Minute Reminder · We Are Live · Post-Session Offer", hook: '"No more closing. It\'s all about opening." — Today we prove it.', body: "Morning email and WhatsApp: access link. Three hours before, fifteen minutes before, at open. After the masterclass — within 2 hours: summary email, CAP Core application link, 24-hour window, personal WhatsApp follow-up to every qualified attendee.", cta: "After: Apply for CAP Core — £497 — 25 places — starting 29 June", type: "event" },
              { num: "13", date: "20 June", theme: "Conversion Day — The 24-Hour Window", title: "Personal Follow-Up. CAP Core Applications. Code1 Black Hint.", hook: "The masterclass opened the door. Today you walk people through it.", body: "Email to all attendees: what they just experienced, what CAP Core delivers, application link. Personal WhatsApp to every attendee who stayed to the end — two lines, personal, direct. For the strongest candidates: mention Code1 Black exists — but do not pitch it today. Plant the seed.", cta: "CTA: Apply for CAP Core — 24 hours only — £497", type: "convert" },
            ].map((day) => (
              <div key={day.num} className={`bg-cream flex flex-col md:grid md:grid-cols-[80px_1fr] gap-8 p-8 max-md:p-6 ${
                day.type === "launch" ? "border-l-2 border-gold" :
                day.type === "event" ? "border-l-2 border-navy" :
                day.type === "convert" ? "border-l-2 border-charcoal" : ""
              }`}>
                <div className="md:text-right">
                  <p className="font-serif text-[40px] text-navy/15 leading-none">{day.num}</p>
                  <p className="font-sans text-[10px] tracking-[1.5px] uppercase text-navy/35 mt-1">{day.date}</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-gold-dark mb-2">{day.theme}</p>
                  <p className="font-serif text-[17px] text-navy mb-3 leading-snug">{day.title}</p>
                  <p className="font-sans text-[14px] text-charcoal italic border-l-2 border-gold pl-4 mb-4 leading-relaxed">{day.hook}</p>
                  <p className="font-sans text-[13px] text-charcoal-soft leading-relaxed mb-3">{day.body}</p>
                  <p className="font-sans text-[10px] tracking-[1.5px] uppercase text-gold-dark">→ {day.cta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── MASTERCLASS STRUCTURE ── */}
      <section className="bg-navy px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow light>Masterclass Teaching Structure — 19 June</Eyebrow>
          <H2 light className="mb-16">90 Minutes. <em className="text-gold">Every Minute Earns Its Place.</em></H2>
          <div className="grid sm:grid-cols-2 gap-px bg-cream/5">
            {[
              { time: "Opening · 10 Minutes", title: "Welcome and the CAP Promise", body: "Danston's acquisition story. What Code1 means by transformation over information. Introduce the CAP system — five stages, three tiers, one destination." },
              { time: "Part 1 · 15 Minutes", title: "Why People Struggle to Acquire", body: "Unclear identity. Unclear market. Fear of rejection. Talking too much. Pitching before diagnosis. 'Forget building value — it doesn't work anymore.' Name the problem with surgical precision." },
              { time: "Part 2 · 20 Minutes", title: "The Acquisition Professional", body: "The required shift in identity, presence, communication, curiosity and commercial discipline. 'Move from selling to sharing.' Show the difference between the salesperson and the CAP professional — as a standard, not a technique." },
              { time: "Part 3 · 25 Minutes", title: "The Acquisition Conversation — Live", body: "Teach the opening, permission, diagnosis, value presentation and next step. Include a live demonstration. 'No more closing — it's all about opening.' This is the section that creates the most demand for CAP Core." },
              { time: "Part 4 · 10 Minutes", title: "The Execution Rhythm", body: "Prospecting, conversations, follow-up, tracking, accountability. 'Stop telling, start selling to everyone you meet.' The professional does not wait for opportunity. They create it — daily, rhythmically, intentionally." },
              { time: "The Invitation · 10 Minutes", title: "CAP Core — Apply for the First Cohort", body: "Introduce CAP Core. 90-day structure. £497. 25 places. Starting 29 June. Application process. Mention — without pitching — that CAP Practitioner and Code1 Black exist for those who prove themselves. Sell the door in front of them." },
            ].map((item) => (
              <div key={item.time} className="bg-navy p-10 max-md:p-7">
                <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-gold/50 mb-3">{item.time}</p>
                <p className="font-serif text-[17px] text-cream leading-snug mb-4">{item.title}</p>
                <p className="font-sans text-[13px] text-cream/45 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── TARGETS ── */}
      <section className="bg-cream-warm px-[var(--rail-x)] py-28 max-md:py-20">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>Campaign Conversion Targets</Eyebrow>
          <H2 className="mb-4">The Floor. <em className="text-gold-dark">Not the Ceiling.</em></H2>
          <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed max-w-xl mb-12">
            A well-executed campaign with Danston's authority, five proven trigger lines and a clear three-tier system should exceed every number below.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-navy/8">
            {[
              ["150", "Masterclass Registrations"],
              ["75", "Live Attendees"],
              ["25", "CAP Core Applications"],
              ["£12,425", "CAP Core Revenue"],
              ["£84,850", "First Full Cycle Revenue"],
            ].map(([num, label]) => (
              <div key={label} className="bg-cream p-8 text-center">
                <p className="font-serif text-[clamp(24px,4vw,44px)] text-gold leading-none mb-3">{num}</p>
                <p className="font-sans text-[9px] tracking-[1.5px] uppercase text-navy/40 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section id="apply" className="bg-navy px-[var(--rail-x)] py-24 text-center">
        <p className="font-sans text-[10px] tracking-[3px] uppercase text-gold/50 mb-5">CAP · Code1 Acquire</p>
        <H2 light className="mb-5 max-w-2xl mx-auto">
          Ready to stop telling<br />and start acquiring?
        </H2>
        <p className="font-sans text-[15px] text-cream/50 mb-10 max-w-lg mx-auto">
          Reserve your place at the CAP Masterclass on 19 June 2026. Free. 90 minutes. 150 places.
        </p>
        <a href="/#assessment"
          className="inline-flex font-sans text-[11px] font-medium tracking-[2px] uppercase text-navy bg-gold px-10 py-4 hover:bg-gold/85 transition-colors duration-200">
          Reserve My Place
        </a>
        <p className="font-serif italic text-cream/25 text-[14px] mt-8">"No more closing. It's all about opening."</p>
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
