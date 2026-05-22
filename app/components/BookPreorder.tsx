"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PRICE = "$9.99";
const EARLY_BIRD_PRICE = "$5";
const SUCCESS_AUTO_CLOSE_MS = 6000;

type Props = {
  bookTitle: string;
};

type Stage = "form" | "success";

export function BookPreorderCTA({ bookTitle }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="self-start inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[2px] uppercase text-cream bg-navy border border-navy rounded-full px-7 py-3.5 [transition:background-color_220ms_var(--ease-out),color_220ms_var(--ease-out),border-color_220ms_var(--ease-out)] hover:bg-gold hover:border-gold hover:text-navy"
      >
        Pre-order yours
        <span aria-hidden="true" className="opacity-60">·</span>
        <span>{PRICE}</span>
      </button>
      {open ? (
        <PreorderModal
          bookTitle={bookTitle}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}

type ModalProps = {
  bookTitle: string;
  onClose: () => void;
};

function PreorderModal({ bookTitle, onClose }: ModalProps) {
  const [stage, setStage] = useState<Stage>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameId = useId();
  const emailId = useId();
  const countryId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  // Auto-close the success state after a short pause.
  useEffect(() => {
    if (stage !== "success") return;
    const t = window.setTimeout(onClose, SUCCESS_AUTO_CLOSE_MS);
    return () => window.clearTimeout(t);
  }, [stage, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    try {
      // TODO: wire to real backend (Formspree / Resend / custom endpoint).
      // Submission payload reserved for later integration.
      await new Promise((r) => setTimeout(r, 600));
      setStage("success");
    } finally {
      setSubmitting(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preorder-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm cursor-default"
      />
      <div
        ref={dialogRef}
        className="relative w-full max-w-[520px] bg-cream text-navy rounded-2xl shadow-2xl px-10 py-12 max-md:px-7 max-md:py-9"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-charcoal-soft hover:text-navy hover:bg-navy/5 [transition:color_180ms,background-color_180ms]"
        >
          <span aria-hidden="true" className="text-lg leading-none">×</span>
        </button>

        {stage === "form" ? (
          <form onSubmit={handleSubmit}>
            <div className="font-sans text-charcoal-soft text-[10px] tracking-[2.5px] uppercase mb-4">
              Pre-order · {bookTitle}
            </div>
            <h2
              id="preorder-title"
              className="font-serif font-normal text-navy text-[clamp(26px,3vw,34px)] leading-[1.15] tracking-[-0.2px] mb-3"
            >
              Reserve your copy.
            </h2>
            <p className="font-sans text-charcoal-soft text-[15px] leading-[1.6] mb-6">
              Leave your details and we&rsquo;ll send the payment link the
              moment the book ships.
            </p>

            <div className="rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 mb-7">
              <div className="font-sans text-gold-dark text-[10px] tracking-[2.5px] uppercase mb-1.5">
                Early bird
              </div>
              <p className="font-sans text-charcoal text-[14px] leading-[1.55]">
                Submit before 13 June and your copy is held at{" "}
                <span className="text-navy">{EARLY_BIRD_PRICE}</span> instead
                of {PRICE}.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Field
                id={nameId}
                label="Full name"
                value={name}
                onChange={setName}
                autoComplete="name"
                required
              />
              <Field
                id={emailId}
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                autoComplete="email"
                required
              />
              <Field
                id={countryId}
                label="Country"
                value={country}
                onChange={setCountry}
                autoComplete="country-name"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-9 inline-flex items-center justify-center gap-3 font-sans text-[11px] font-medium tracking-[2px] uppercase text-cream bg-navy rounded-full px-8 py-4 w-full [transition:background-color_220ms,color_220ms] hover:bg-gold hover:text-navy disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Reserve my copy"}
            </button>
            <p className="font-sans text-charcoal-soft text-[11px] tracking-[0.2px] leading-[1.5] mt-5 text-center">
              No payment now. We&rsquo;ll only email about this book.
            </p>
          </form>
        ) : (
          <div className="text-center">
            <div className="font-sans text-charcoal-soft text-[10px] tracking-[2.5px] uppercase mb-5">
              Reserved · {bookTitle}
            </div>
            <h2
              id="preorder-title"
              className="font-serif font-normal text-navy text-[clamp(28px,3.2vw,38px)] leading-[1.1] tracking-[-0.3px] mb-4"
            >
              You&rsquo;ve made <span className="text-gold-dark">the right call.</span>
            </h2>
            <p className="font-sans text-charcoal-soft text-[16px] leading-[1.65] mb-3 max-w-[380px] mx-auto">
              Your copy is held. Watch your inbox. We&rsquo;ll send the
              payment link before the book ships.
            </p>
            <p className="font-sans text-charcoal-soft text-[13px] leading-[1.5] mb-8">
              This window will close on its own.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center font-sans text-[11px] font-medium tracking-[2px] uppercase text-navy border border-navy/30 rounded-full px-7 py-3 hover:bg-navy hover:text-cream hover:border-navy [transition:background-color_220ms,color_220ms,border-color_220ms]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-sans text-charcoal-soft text-[10px] tracking-[2px] uppercase mb-2"
      >
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="font-sans text-navy text-[15px] bg-transparent border-0 border-b border-navy/20 pb-2 focus:outline-none focus:border-navy [transition:border-color_180ms]"
      />
    </div>
  );
}
