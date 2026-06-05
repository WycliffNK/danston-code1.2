"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  currentRole: string;
  applyingAs: string;
  whatYouSell: string;
  whoYouAcquire: string;
  customerClarity: string;
  prospectSource: string;
  biggestChallenge: string;
  confidenceLevel: string;
  whatHappensWhenSelling: string;
  struggleMost: string;
  commonObjection: string;
  thinkAboutIt: string;
  followUpFrequency: string;
  goal90Days: string;
  revenueGoal: string;
  successMetric: string;
  lifeChange: string;
  commitmentLevel: string;
  whyJoining: string;
  canStart: string;
  preparedToInvest: string;
  paymentPreference: string;
  introSession: string;
  anythingElse: string;
};

const INITIAL: FormState = {
  fullName: "", email: "", phone: "", location: "", currentRole: "",
  applyingAs: "", whatYouSell: "", whoYouAcquire: "", customerClarity: "",
  prospectSource: "", biggestChallenge: "", confidenceLevel: "",
  whatHappensWhenSelling: "", struggleMost: "", commonObjection: "",
  thinkAboutIt: "", followUpFrequency: "", goal90Days: "", revenueGoal: "",
  successMetric: "", lifeChange: "", commitmentLevel: "", whyJoining: "",
  canStart: "", preparedToInvest: "", paymentPreference: "", introSession: "",
  anythingElse: "",
};

// ── shared field styles ───────────────────────────────────────────────────────
const inputCls =
  "w-full font-sans text-[14px] text-charcoal bg-white border border-navy/15 px-4 py-3 rounded-none focus:outline-none focus:border-navy transition-colors duration-150 placeholder:text-charcoal-soft/40";
const selectCls =
  "w-full font-sans text-[14px] text-charcoal bg-white border border-navy/15 px-4 py-3 rounded-none focus:outline-none focus:border-navy transition-colors duration-150 appearance-none";
const textareaCls =
  "w-full font-sans text-[14px] text-charcoal bg-white border border-navy/15 px-4 py-3 rounded-none focus:outline-none focus:border-navy transition-colors duration-150 placeholder:text-charcoal-soft/40 resize-none";
const labelCls =
  "block font-sans text-[11px] font-medium tracking-[1px] uppercase text-navy/70 mb-2";
const fieldWrap = "flex flex-col";
const sectionDivider = "border-t border-navy/8 pt-8 mt-2";

// ── Radio / Checkbox group helpers ───────────────────────────────────────────
function RadioGroup({
  name, options, value, onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 mt-1">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-3 cursor-pointer group">
          <span
            className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-colors duration-150 ${
              value === opt ? "border-navy bg-navy" : "border-navy/30 group-hover:border-navy/60"
            }`}
          >
            {value === opt && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
          </span>
          <span className="font-sans text-[13px] text-charcoal">{opt}</span>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
        </label>
      ))}
    </div>
  );
}

function ScaleSelector({
  value, onChange, min = 1, max = 5, labels,
}: {
  value: string;
  onChange: (v: string) => void;
  min?: number;
  max?: number;
  labels: [string, string];
}) {
  return (
    <div className="flex flex-col gap-3 mt-1">
      <div className="flex gap-3">
        {Array.from({ length: max - min + 1 }, (_, i) => String(i + min)).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`w-11 h-11 font-sans text-[13px] font-medium border transition-colors duration-150 ${
              value === n
                ? "bg-navy text-cream border-navy"
                : "bg-white text-navy border-navy/20 hover:border-navy/50"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between font-sans text-[10px] tracking-[0.5px] text-charcoal-soft/60">
        <span>{labels[0]}</span>
        <span>{labels[1]}</span>
      </div>
    </div>
  );
}

// ── Main form ─────────────────────────────────────────────────────────────────
export function AcquireForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const setRadio = (key: keyof FormState) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/acquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-6">
        <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold flex items-center justify-center mx-auto mb-8">
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <path d="M1 7.5l6 6L19 1" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-navy mb-5 leading-tight">
          Thank you for applying for the Code1 Acquire<br className="hidden sm:block" /> — 90-Day Acquisition Power Camp.
        </h3>
        <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed mb-4">
          We have received your application.
        </p>
        <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed mb-4">
          The first cohort begins on <strong className="text-navy">19 June 2026</strong> and is limited to <strong className="text-navy">25 places</strong>.
        </p>
        <p className="font-sans text-[15px] text-charcoal-soft leading-relaxed mb-8">
          A member of the Code1 team will review your application and contact you with the next step.
        </p>
        <p className="font-sans text-[12px] tracking-[1px] uppercase text-navy/40">
          Code1 Team &mdash; <a href="https://www.code1.one" className="hover:text-navy transition-colors">www.code1.one</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-8">

      {/* ── Personal details ── */}
      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-lg text-navy border-b border-navy/10 pb-4">Your Details</h3>

        <div className={fieldWrap}>
          <label className={labelCls}>Full Name <span className="text-gold">*</span></label>
          <input required className={inputCls} placeholder="Your full name" value={form.fullName} onChange={set("fullName")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Email Address <span className="text-gold">*</span></label>
          <input required type="email" className={inputCls} placeholder="you@example.com" value={form.email} onChange={set("email")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Phone / WhatsApp Number <span className="text-gold">*</span></label>
          <input required className={inputCls} placeholder="+44 7700 000000" value={form.phone} onChange={set("phone")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Country / City</label>
          <input className={inputCls} placeholder="e.g. London, UK" value={form.location} onChange={set("location")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Current Role</label>
          <div className="relative">
            <select className={selectCls} value={form.currentRole} onChange={set("currentRole")}>
              <option value="">Select your role</option>
              {[
                "Student", "Employed", "Self-employed", "Business owner",
                "Sales professional", "Business development professional",
                "Consultant / coach", "Network marketer", "Real estate professional",
                "Insurance / finance professional", "Other",
              ].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="#0F1B2D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>Are you applying as:</label>
          <RadioGroup name="applyingAs" value={form.applyingAs} onChange={setRadio("applyingAs")}
            options={["Individual", "Team", "Company / organisation", "Not sure yet"]} />
        </div>
      </div>

      {/* ── About your sales ── */}
      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-lg text-navy border-b border-navy/10 pb-4">About Your Sales</h3>

        <div className={fieldWrap}>
          <label className={labelCls}>What product, service, business, or opportunity are you currently selling or trying to sell?</label>
          <textarea rows={3} className={textareaCls} placeholder="Describe what you sell…" value={form.whatYouSell} onChange={set("whatYouSell")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Who are you trying to acquire as clients, customers, partners, or prospects?</label>
          <textarea rows={3} className={textareaCls} placeholder="Describe your target audience…" value={form.whoYouAcquire} onChange={set("whoYouAcquire")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>How clear are you about your ideal customer right now?</label>
          <RadioGroup name="customerClarity" value={form.customerClarity} onChange={setRadio("customerClarity")}
            options={["Very clear", "Somewhat clear", "Not clear", "I need help defining them"]} />
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>How do you currently find prospects or opportunities?</label>
          <RadioGroup name="prospectSource" value={form.prospectSource} onChange={setRadio("prospectSource")}
            options={[
              "Referrals", "Cold outreach", "Social media", "WhatsApp", "Networking",
              "Events", "Paid ads", "Walk-ins", "Existing database",
              "I do not have a system yet", "Other",
            ]} />
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>What is your biggest challenge in acquiring customers or clients?</label>
          <RadioGroup name="biggestChallenge" value={form.biggestChallenge} onChange={setRadio("biggestChallenge")}
            options={[
              "Starting conversations", "Finding the right people", "Confidence",
              "Fear of rejection", "Explaining my offer", "Getting people to respond",
              "Handling objections", "Closing", "Following up", "Staying consistent", "Other",
            ]} />
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>How confident do you currently feel when approaching a potential customer or client?</label>
          <ScaleSelector value={form.confidenceLevel} onChange={setRadio("confidenceLevel")}
            labels={["1 — Not confident", "5 — Very confident"]} />
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>What usually happens when you try to sell or present your offer?</label>
          <textarea rows={3} className={textareaCls} placeholder="Describe what typically happens…" value={form.whatHappensWhenSelling} onChange={set("whatHappensWhenSelling")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Which part of the acquisition process do you struggle with most?</label>
          <RadioGroup name="struggleMost" value={form.struggleMost} onChange={setRadio("struggleMost")}
            options={[
              "Prospecting", "Opening the conversation", "Asking questions",
              "Understanding the customer's need", "Presenting value",
              "Talking about price", "Handling objections", "Closing",
              "Following up", "Getting referrals",
            ]} />
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>What is the most common objection you hear from prospects?</label>
          <textarea rows={2} className={textareaCls} placeholder="e.g. 'It's too expensive', 'I'll think about it'…" value={form.commonObjection} onChange={set("commonObjection")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>When someone says "I'll think about it," what do you usually do?</label>
          <textarea rows={2} className={textareaCls} placeholder="Describe your response…" value={form.thinkAboutIt} onChange={set("thinkAboutIt")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>How often do you follow up after the first conversation?</label>
          <RadioGroup name="followUpFrequency" value={form.followUpFrequency} onChange={setRadio("followUpFrequency")}
            options={[
              "Always", "Often", "Sometimes", "Rarely",
              "Almost never", "I do not know how to follow up properly",
            ]} />
        </div>
      </div>

      {/* ── Your goals ── */}
      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-lg text-navy border-b border-navy/10 pb-4">Your Goals</h3>

        <div className={fieldWrap}>
          <label className={labelCls}>What do you want Code1 Acquire to help you achieve in the next 90 days?</label>
          <textarea rows={3} className={textareaCls} placeholder="Describe your goal…" value={form.goal90Days} onChange={set("goal90Days")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>What monthly income, sales, or revenue goal are you working towards?</label>
          <input className={inputCls} placeholder="e.g. £5,000/month, 10 new clients…" value={form.revenueGoal} onChange={set("revenueGoal")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>How many new clients, customers, or serious prospects would make this programme successful for you?</label>
          <input className={inputCls} placeholder="e.g. 5 new clients" value={form.successMetric} onChange={set("successMetric")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>What would change in your life or business if you became more confident at acquiring customers?</label>
          <textarea rows={3} className={textareaCls} placeholder="Describe the impact…" value={form.lifeChange} onChange={set("lifeChange")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>How committed are you to doing weekly practical assignments during the 90 days?</label>
          <ScaleSelector value={form.commitmentLevel} onChange={setRadio("commitmentLevel")}
            labels={["1 — Not sure", "5 — Fully committed"]} />
        </div>
      </div>

      {/* ── About your application ── */}
      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-lg text-navy border-b border-navy/10 pb-4">Your Application</h3>

        <div className={fieldWrap}>
          <label className={labelCls}>Why do you want to join the first Code1 Acquire cohort?</label>
          <textarea rows={4} className={textareaCls} placeholder="Tell us why you want to join…" value={form.whyJoining} onChange={set("whyJoining")} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Are you able to start on 19 June 2026?</label>
          <RadioGroup name="canStart" value={form.canStart} onChange={setRadio("canStart")}
            options={["Yes", "No", "I may need to discuss first"]} />
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>The first cohort price is £497 for the full 90-day Power Camp. Are you prepared to invest if accepted?</label>
          <RadioGroup name="preparedToInvest" value={form.preparedToInvest} onChange={setRadio("preparedToInvest")}
            options={["Yes", "I need a payment plan", "I need more information first", "No"]} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Would you prefer to pay:</label>
          <RadioGroup name="paymentPreference" value={form.paymentPreference} onChange={setRadio("paymentPreference")}
            options={["Full payment", "Two instalments", "Three instalments", "I need to discuss options"]} />
        </div>

        <div className={`${fieldWrap} ${sectionDivider}`}>
          <label className={labelCls}>Would you like to attend a free introductory session before joining?</label>
          <RadioGroup name="introSession" value={form.introSession} onChange={setRadio("introSession")}
            options={["Yes", "No", "Maybe"]} />
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Anything else you would like us to know?</label>
          <textarea rows={4} className={textareaCls} placeholder="Any other information…" value={form.anythingElse} onChange={set("anythingElse")} />
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="font-sans text-[13px] text-red-600 bg-red-50 border border-red-200 px-4 py-3">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full font-sans text-[12px] font-medium tracking-[2px] uppercase text-cream bg-navy border border-navy px-8 py-5 hover:bg-gold hover:border-gold hover:text-navy [transition:background-color_200ms_var(--ease-out),border-color_200ms_var(--ease-out),color_200ms_var(--ease-out)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>

      <p className="font-sans text-[11px] text-center text-charcoal-soft/50 leading-relaxed">
        By submitting this form you agree to be contacted by the Code1 team regarding your application.
      </p>
    </form>
  );
}
