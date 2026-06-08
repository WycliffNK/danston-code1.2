import Link from "next/link";

const PROGRAMMES = [
  {
    tag: "90-Day Camp",
    name: "Code1 Acquire",
    tagline: "From salesperson to acquisition professional.",
    body: "Code1 Acquire is a 90-day Acquisition Power Camp for people who want to transform how they think, speak, sell, follow up, and convert.",
    cta: "Apply for the First Cohort",
    href: "/acquire",
    accent: "gold",
    featured: true,
  },
  {
    tag: "Membership",
    name: "RestoreMe",
    tagline: "Come back to yourself. Restore your original strength.",
    body: "A personal restoration membership for people ready to rebuild confidence, identity, communication, and self-leadership.",
    cta: "Take the Free Assessment",
    href: "/assessment",
    accent: "navy",
    featured: false,
  },
  {
    tag: "Enterprise",
    name: "Code1 Enterprise",
    tagline: "Restore the leader. Reveal the truth. Scale human intelligence.",
    body: "Leadership and organisational restoration for founders, executives, teams, institutions, and growth-focused organisations.",
    cta: "Book a Discovery Call",
    href: "/contact",
    accent: "navy",
    featured: false,
  },
  {
    tag: "Companion App",
    name: "TwiceMe",
    tagline: "Before the moment, TwiceMe.",
    body: "A moment companion for confidence, clarity, preparation, and real-life performance.",
    cta: "Join the Waitlist",
    href: "/contact",
    accent: "navy",
    featured: false,
  },
] as const;

export function ProgrammesSection() {
  return (
    <section
      id="programmes"
      className="bg-cream px-[var(--rail-x)] pt-32 pb-36 max-md:pt-20 max-md:pb-24"
    >
      {/* Header */}
      <div className="mb-16 max-md:mb-10">
        <div className="eyebrow text-gold-dark mb-5">Programmes</div>
        <div className="flex items-end justify-between gap-8 flex-wrap max-md:flex-col max-md:items-start max-md:gap-4">
          <h2 className="font-serif font-normal text-navy text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.4px] max-w-[640px]">
            Choose the pathway<br className="hidden sm:block" /> that fits your moment.
          </h2>
          <Link
            href="/acquire"
            className="shrink-0 font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-navy border-b border-navy/30 pb-1 hover:text-gold-dark hover:border-gold transition-colors duration-200 max-md:hidden"
          >
            View all programmes →
          </Link>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 lg:grid-cols-4">
        {PROGRAMMES.map((p) => (
          <div
            key={p.name}
            className={`group relative flex flex-col border transition-all duration-300 ${
              p.featured
                ? "bg-navy border-navy col-span-1 lg:col-span-1"
                : "bg-cream-warm border-navy/10 hover:border-navy/30"
            }`}
          >
            {/* Featured pulse */}
            {p.featured && (
              <div className="absolute top-5 right-5 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-70" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                </span>
                <span className="font-sans text-[9px] tracking-[2px] uppercase text-gold/70">
                  Enrolling now
                </span>
              </div>
            )}

            <div className="flex flex-col flex-1 p-8 max-md:p-6">
              {/* Tag */}
              <span
                className={`font-sans text-[9px] tracking-[2.5px] uppercase mb-5 ${
                  p.featured ? "text-gold/60" : "text-gold-dark/70"
                }`}
              >
                {p.tag}
              </span>

              {/* Name */}
              <h3
                className={`font-serif text-[22px] leading-tight mb-3 ${
                  p.featured ? "text-cream" : "text-navy"
                }`}
              >
                {p.name}
              </h3>

              {/* Tagline */}
              <p
                className={`font-sans text-[13px] font-medium leading-snug mb-4 ${
                  p.featured ? "text-gold" : "text-navy/70"
                }`}
              >
                {p.tagline}
              </p>

              {/* Body */}
              <p
                className={`font-sans text-[13px] leading-relaxed flex-1 ${
                  p.featured ? "text-cream/55" : "text-charcoal-soft"
                }`}
              >
                {p.body}
              </p>

              {/* Divider */}
              <div
                className={`my-7 h-px ${
                  p.featured ? "bg-cream/10" : "bg-navy/8"
                }`}
              />

              {/* CTA */}
              <Link
                href={p.href}
                className={`inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[1.5px] uppercase transition-all duration-200 group/link ${
                  p.featured
                    ? "text-gold hover:text-gold/70"
                    : "text-navy hover:text-gold-dark"
                }`}
              >
                {p.cta}
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                >
                  <path
                    d="M1 5h12M8 1l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view all */}
      <div className="mt-8 md:hidden">
        <Link
          href="/acquire"
          className="font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-navy border-b border-navy/30 pb-1 hover:text-gold-dark hover:border-gold transition-colors duration-200"
        >
          View all programmes →
        </Link>
      </div>
    </section>
  );
}
