import Image from "next/image";
import { AfricaImage } from "./AfricaImage";
import { BookPreorderCTA } from "./BookPreorder";
import { CredibilitySentence } from "./CredibilitySentence";
import { SystemHorizontal } from "./SystemHorizontal";

export function Hero() {
  return (
    <section className="relative grid grid-cols-2 h-screen bg-cream max-md:grid-cols-1 max-md:h-auto max-md:min-h-screen">
      <div className="flex flex-col justify-center items-start pl-[var(--rail-x)] pr-14 pt-[90px] pb-20 h-full max-md:pl-6 max-md:pr-6 max-md:pt-[110px] max-md:pb-12 max-md:h-auto">
        <div data-hero-rule className="w-12 h-px bg-gold mb-7" />
        <h1
          data-hero-headline
          className="font-serif font-normal text-navy text-[clamp(40px,5.5vw,76px)] leading-[1.02] tracking-[-0.6px] mb-7 max-w-[600px]"
        >
          You&rsquo;ve built a lot.
          <span className="block text-gold-dark mt-3.5">
            But something&rsquo;s off, and you know it.
          </span>
        </h1>
        <p
          data-hero-sub
          className="font-sans text-charcoal-soft text-[18px] leading-[1.6] mb-5 max-w-[480px]"
        >
          Code 1 is the restoration system for leaders who are ready to stop
          leading from performance and start leading from who they actually
          are.
        </p>
        <div
          data-hero-sub
          className="font-sans text-gold-dark text-[10px] font-medium tracking-[3px] uppercase mb-12"
        >
          London &middot; Africa &middot; Global
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4 w-full max-md:flex-col max-md:items-stretch max-md:gap-4">
          <a
            data-hero-cta
            href="#assessment"
            className="inline-block text-center font-sans text-[12px] font-medium tracking-[1.5px] uppercase text-cream bg-navy border-[0.5px] border-navy px-8 py-4 rounded-full [transition:background-color_180ms_var(--ease-out),border-color_180ms_var(--ease-out),color_180ms_var(--ease-out),transform_180ms_var(--ease-out)] hover:bg-gold hover:border-gold hover:text-navy hover:-translate-y-0.5 active:scale-[0.97] max-md:block max-md:w-full max-md:px-6"
          >
            Begin Free Assessment &middot; 10 min
          </a>
          <a
            data-hero-cta
            href="#about"
            className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[2px] uppercase text-charcoal-soft border-b border-navy/15 pb-1 [transition:color_200ms_var(--ease-out),border-color_200ms_var(--ease-out)] hover:text-gold-dark hover:border-gold max-md:self-start"
          >
            <span aria-hidden="true">↓</span>
            Read Danston&apos;s story
          </a>
        </div>
      </div>
      <div
        data-hero-photo
        className="relative h-full overflow-hidden bg-navy max-md:h-[360px]"
      >
        <Image
          src="/images/danston-about.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div
        data-hero-card
        className="absolute z-10 w-[420px] -bottom-25 left-1/2 -translate-x-1/2 bg-gold text-navy p-9 rounded-sm shadow-[0_30px_80px_rgba(15,27,45,0.35)] max-md:w-[calc(100%-48px)] max-md:max-w-[380px] max-md:-bottom-[70px] max-md:p-7"
      >
        <div className="font-sans text-[10px] tracking-[2.5px] uppercase text-navy/70 mb-4">
          Track record
        </div>
        <div className="font-serif text-[22px] leading-[1.4] tracking-[-0.2px] text-navy">
          47 leaders &middot; 5 regions
          <br />
          3 governments &middot; 30 years
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="bg-cream-warm px-[var(--rail-x)] pt-60 pb-44 max-md:pt-50 max-md:pb-25">
      <div className="grid grid-cols-[1.6fr_1fr] gap-16 items-start max-md:grid-cols-1 max-md:gap-8">
        <h2
          data-split
          className="font-serif font-normal text-navy text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.5px] max-w-[820px]"
        >
          Most leaders are working incredibly hard — in the wrong direction.
        </h2>
        <div className="reveal reveal-delay-1 pt-4 max-md:pt-0">
          <p className="font-sans text-charcoal-soft text-[17px] leading-[1.8]">
            Effort isn&apos;t the issue. Direction is. Before you can build
            something that lasts, you need clarity on who&apos;s doing the
            building. That&apos;s where Code 1 begins.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Credibility() {
  return <CredibilitySentence />;
}

const SYSTEM_PILLARS: {
  num: string;
  mark: string[];
  title: string;
  system: string;
  cadence: string;
  body: string;
}[] = [
  {
    num: "1",
    mark: ["I"],
    title: "Restore the Leader",
    system: "The I Philosophy™",
    cadence: "Presence. Communication. Leadership.",
    body:
      "Every leader lives in three rooms: the public life, the private life, and the secret life. Code 1 restores alignment across all three. A restored leader does not perform strength. He carries it.",
  },
  {
    num: "2",
    mark: ["5D"],
    title: "Reveal the Truth",
    system: "The 5D Framework™",
    cadence: "Discover. Diagnose. Discuss. Design. Deliver.",
    body:
      "The audit and transformation structure. Applied to both the leader and the organisation. Audit the leader. Reveal the organisation. Deliver the work.",
  },
  {
    num: "3",
    mark: ["HI", "AI"],
    title: "Scale Human Intelligence",
    system: "The HI-AI Doctrine™",
    cadence: "Human intelligence leads. Artificial intelligence amplifies.",
    body:
      "Once the leader is restored and the organisation is revealed, Code 1 scales human intelligence. Human wisdom gives direction; artificial intelligence gives leverage. The power is in the combination.",
  },
];

function SystemEyebrow() {
  return (
    <div
      data-mark
      className="reveal font-sans text-charcoal-soft text-[11px] tracking-[3px] uppercase before:inline-block before:align-middle before:w-8 before:h-px before:bg-charcoal-soft/30 before:mr-4"
    >
      The system
    </div>
  );
}

function SystemHeadline({ className = "" }: { className?: string }) {
  return (
    <h2
      data-split
      className={`font-serif font-normal text-navy text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.4px] ${className}`}
    >
      First who you are.
      <br />
      Then what you build.
    </h2>
  );
}

function SystemIntro({ className = "" }: { className?: string }) {
  return (
    <p className={`reveal font-sans text-charcoal-soft text-[19px] leading-[1.75] ${className}`}>
      Code 1 is a complete leadership and organisational transformation system
      &mdash; <em>The Code 1 Restoration System&trade;</em>. It moves from
      personal restoration, to organisational truth, to disciplined scale.
    </p>
  );
}

function SystemIntroPanel() {
  return (
    <section className="bg-cream px-[var(--rail-x)] pt-40 pb-32 max-md:pt-25 max-md:pb-20">
      <div>
        <SystemEyebrow />
        <div className="mt-8" />
        <SystemHeadline className="mb-10 max-w-[820px]" />
        <p className="reveal font-serif text-gold-dark text-[19px] leading-[1.5] mb-6 max-w-[680px]">
          Here is how the work is done.
        </p>
        <SystemIntro className="max-w-[680px]" />
      </div>
    </section>
  );
}

export function System() {
  return (
    <>
      <SystemIntroPanel />
      <SystemHorizontal pillars={SYSTEM_PILLARS} />
    </>
  );
}

export function PullQuote() {
  return (
    <section
      data-pullquote
      className="relative overflow-hidden bg-navy text-cream text-center px-[var(--rail-x)] min-h-screen flex items-center justify-center py-32 max-md:py-24 max-md:min-h-[70vh]"
    >
      <div
        data-pullquote-image
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-luminosity"
      >
        <Image
          src="/images/pull-quote.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,27,45,0.7)_0%,rgba(15,27,45,0.9)_100%)] pointer-events-none"
      />
      <div className="relative">
        <span className="quote-mark block font-serif text-[clamp(72px,8vw,120px)] leading-[0.5] text-cream/30 mb-8 origin-center inline-block">
          &ldquo;
        </span>
        <blockquote
          data-pullquote-text
          className="font-serif italic font-normal text-cream text-[clamp(28px,4vw,48px)] leading-[1.3] tracking-[-0.2px] max-w-[900px] mx-auto mb-10"
        >
          A restored leader does not perform strength. He carries it.
        </blockquote>
        <div className="inline-flex items-center font-sans text-cream/50 text-[11px] tracking-[3px] uppercase before:inline-block before:w-8 before:h-px before:bg-cream/40 before:mr-4">
          Danston Mugarura
        </div>
      </div>
    </section>
  );
}

const AFRICA_TRIPLET = [
  { title: "Restored Leaders", body: "Identity, presence, communication, conviction." },
  { title: "Clear Organisations", body: "Truth, alignment, culture, execution." },
  { title: "Intelligent Scale", body: "Human intelligence multiplied through disciplined systems." },
];

const AFRICA_PARAS = [
  "The opportunity is human potential. The work is restoration, clarity, disciplined execution, and intelligent scale.",
  "The next chapter of African growth will be built by restored leaders, clearer organisations, stronger communication, and human intelligence at scale.",
  "Code 1 exists to help build the bridge between African excellence and global opportunity.",
];

function AfricaIntro() {
  return (
    <>
      <div aria-hidden="true" className="reveal w-12 h-px bg-gold mb-10" />
      <div
        data-mark
        className="reveal font-sans text-charcoal-soft text-[11px] tracking-[3px] uppercase mb-9"
      >
        The Africa Mission
      </div>
    </>
  );
}

function AfricaHeadline({ className = "" }: { className?: string }) {
  return (
    <h2
      data-split
      className={`font-serif font-normal text-navy text-[clamp(36px,4.6vw,60px)] leading-[1.1] tracking-[-0.4px] ${className}`}
    >
      Africa sits at the heart of Code 1.
    </h2>
  );
}

function AfricaBody() {
  return (
    <>
      <AfricaHeadline className="mb-12 whitespace-nowrap max-md:whitespace-normal" />
      <div className="grid grid-cols-2 gap-x-12 gap-y-7 max-md:grid-cols-1 max-md:gap-8">
        <p className="reveal font-sans text-charcoal-soft text-[19px] leading-[1.8]">
          {AFRICA_PARAS[0]}
        </p>
        <p className="reveal reveal-delay-2 font-sans text-charcoal-soft text-[19px] leading-[1.8] row-span-2 max-md:row-span-1">
          {AFRICA_PARAS[2]}
        </p>
        <p className="reveal reveal-delay-1 font-sans text-charcoal-soft text-[19px] leading-[1.8]">
          {AFRICA_PARAS[1]}
        </p>
      </div>
    </>
  );
}

function AfricaTriplet() {
  return (
    <ul
      data-triplet
      className="list-none mt-14 grid grid-cols-3 gap-x-10 max-md:grid-cols-1 max-md:gap-0"
    >
      {AFRICA_TRIPLET.map((t, i) => (
        <li
          key={t.title}
          data-triplet-block
          className="flex flex-col gap-4 py-10 border-t border-navy/15 max-md:py-6"
        >
          <span
            data-triplet-number
            className="font-serif text-gold text-[64px] leading-[0.9] max-md:text-[48px]"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div
            data-triplet-text
            className="font-sans text-navy text-[11px] tracking-[2.5px] uppercase"
          >
            {t.title}
          </div>
          <div
            data-triplet-text
            className="font-serif italic text-charcoal-soft text-[16px] leading-[1.55]"
          >
            {t.body}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function AfricaMission() {
  return (
    <section className="relative bg-cream-warm overflow-hidden px-[var(--rail-x)] pt-24 pb-44 max-md:pt-16 max-md:pb-28">
      <div>
        <AfricaImage />
        <AfricaIntro />
        <AfricaBody />
        <AfricaTriplet />
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-cream-warm px-[var(--rail-x)] py-40 max-md:py-25">
      <div className="grid grid-cols-[1fr_1.5fr] gap-25 items-center max-md:grid-cols-1 max-md:gap-12">
        <div className="relative aspect-[3/4] overflow-hidden bg-navy max-md:max-w-[280px] max-md:mx-auto">
          <Image
            src="/images/danston.png"
            alt=""
            fill
            sizes="(max-width: 768px) 280px, 40vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-[580px]">
          <div
            data-mark
            className="reveal font-sans text-charcoal-soft text-[11px] tracking-[3px] uppercase mb-8 before:inline-block before:align-middle before:w-8 before:h-px before:bg-charcoal-soft/30 before:mr-4"
          >
            The man
          </div>
          <h2
            data-split
            className="font-serif font-normal text-navy text-[clamp(36px,4.5vw,56px)] leading-[1.1] tracking-[-0.4px] mb-9"
          >
            My name means the restorer.
          </h2>
          <p className="reveal reveal-delay-2 font-sans text-charcoal-soft text-[18px] leading-[1.85] mb-6">
            Danston Mugarura is the Founder of Code 1. For more than three
            decades his work has spanned business building, sales leadership,
            organisational development, government advisory, and international
            markets across Africa, Europe, Asia, the Middle East, and the
            United States.
          </p>
          <p className="reveal reveal-delay-3 font-sans text-charcoal-soft text-[18px] leading-[1.85] mb-6">
            His name &mdash; Mugarura &mdash; means <em>the restorer</em> in
            his mother tongue. Code 1 is the structured expression of lived
            experience: restoring leaders to clarity, helping organisations
            face truth, and scaling human intelligence through disciplined
            transformation.
          </p>
          <div className="reveal reveal-delay-4 mt-10 pt-8 border-t border-navy/10 font-sans text-charcoal-soft text-[11px] tracking-[2px] uppercase">
            Danston Mugarura · Founder of Code 1
          </div>
        </div>
      </div>
    </section>
  );
}

type Book = {
  title: string;
  subtitle: string;
  body: string;
  cover?: string;
  href?: string;
};

const BOOKS: Book[] = [
  {
    title: "One Shot",
    subtitle: "On first impressions.",
    body: "One Shot reveals the invisible psychology of presence — teaching leaders, executives, entrepreneurs, and teams how to instantly command respect, trust, influence, and authority. In business and in life, the room often decides who you are before you ever speak.",
    cover: "/images/one-shot.jpg",
    href: undefined,
  },
  {
    title: "S.I.D — Self Identity Matters Most",
    subtitle: "On self-identity.",
    body: "How you see yourself determines the quality of your entire life. Through ten decisions, Danston guides readers to rebuild their mindset, take ownership, and become the highest version of themselves. Change your self-identity, and you change your future.",
    cover: "/images/sid.jpg",
    href: undefined,
  },
];

export function Books() {
  return (
    <section id="books" className="bg-cream px-[var(--rail-x)] py-40 max-md:py-25">
      <div className="grid grid-cols-[1fr_1.3fr] gap-30 items-start max-md:grid-cols-1 max-md:gap-12">
        <div className="sticky top-30 max-md:static">
          <div
            data-mark
            className="reveal font-sans text-charcoal-soft text-[11px] tracking-[3px] uppercase mb-8 before:inline-block before:align-middle before:w-8 before:h-px before:bg-charcoal-soft/30 before:mr-4"
          >
            The Books
          </div>
          <h2 className="reveal font-serif font-normal text-navy text-[clamp(36px,4.5vw,56px)] leading-[1.1] tracking-[-0.3px] mb-6">
            Two books.
            <br />
            <span className="text-gold-dark">Three decades distilled.</span>
          </h2>
          <p className="reveal reveal-delay-2 font-sans text-charcoal-soft text-[17px] leading-[1.7] max-w-[360px]">
            Danston has written two books on what restoration looks like in
            practice &mdash; for leaders, for organisations, and for the
            people they meet.
          </p>
        </div>
        <ul className="list-none grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-12">
          {BOOKS.map((b, i) => (
            <li key={i} className="reveal flex flex-col">
              <div className="relative aspect-[3/4] bg-navy overflow-hidden mb-7">
                {b.cover ? (
                  <Image
                    src={b.cover}
                    alt={b.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-cream/40 font-sans text-[10px] tracking-[2px] uppercase text-center px-6 border border-dashed border-cream/15">
                    Cover
                    <br />
                    placeholder
                  </div>
                )}
              </div>
              <div className="font-sans text-charcoal-soft text-[10px] tracking-[2.5px] uppercase mb-3">
                {b.subtitle}
              </div>
              <h3 className="font-serif font-normal text-navy text-[clamp(22px,2vw,28px)] leading-[1.25] mb-4">
                {b.title}
              </h3>
              <p className="font-sans text-charcoal-soft text-base leading-[1.7] mb-6 sm:text-[15px]">
                {b.body}
              </p>
              <BookPreorderCTA bookTitle={b.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/60 px-[var(--rail-x)] py-16 border-t border-gold/15">
      <div className="flex flex-wrap items-center justify-between gap-6 max-md:flex-col max-md:text-center">
        <div className="flex items-center gap-6 max-md:flex-col max-md:gap-3">
          <img
            src="/logos/on-navy.svg"
            alt="Code 1"
            className="h-5 w-auto opacity-80"
          />
          <div className="flex flex-col gap-1">
            <div className="font-sans text-base sm:text-[15px]">
              Because your potential is always the highest priority.
            </div>
            <div className="font-sans text-cream/45 text-[10px] tracking-[2.5px] uppercase">
              London &middot; Africa &middot; Global
            </div>
          </div>
        </div>
        <div className="flex gap-8 text-[12px] tracking-[1.5px] uppercase">
          <a
            href="mailto:danstunmugarura@gmail.com"
            className="relative text-cream/55 [transition:color_200ms_var(--ease-out)] hover:text-cream after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-cream/50 after:origin-left after:scale-x-0 after:[transition:transform_350ms_var(--ease-out)] hover:after:scale-x-100"
          >
            Write to Danston
          </a>
          <a
            href="https://www.linkedin.com/in/danston-m-88bbb172"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-cream/55 [transition:color_200ms_var(--ease-out)] hover:text-cream after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-cream/50 after:origin-left after:scale-x-0 after:[transition:transform_350ms_var(--ease-out)] hover:after:scale-x-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
