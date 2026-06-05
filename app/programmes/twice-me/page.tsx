import { Nav } from "@/app/components/Nav";
import Link from "next/link";

export const metadata = {
  title: "TwiceMe — Moment Companion for Confidence & Preparation | Code 1",
  description:
    "TwiceMe is a moment companion for confidence and preparation from Code 1.",
};

export default function TwiceMePage() {
  return (
    <>
      <Nav />
      <section className="relative min-h-[90vh] bg-navy flex items-end px-[var(--rail-x)] pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A961 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow text-gold/70 mb-6">Programme</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.05] mb-8">
            Twice<em className="text-gold">Me</em>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-cream/70 leading-relaxed max-w-xl mb-12">
            Moment companion for confidence and preparation. Coming soon.
          </p>
          <Link
            href="/#assessment"
            className="inline-flex justify-center font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-navy bg-gold border border-gold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors duration-200 active:scale-[0.97]"
          >
            Register Interest
          </Link>
        </div>
      </section>
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
