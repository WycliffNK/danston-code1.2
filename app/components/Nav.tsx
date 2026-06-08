"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PROGRAMMES = [
  {
    href: "/acquire",
    name: "Code1 Acquire",
    description: "Sales and business development transformation.",
  },
  {
    href: "/programmes/restore-me",
    name: "RestoreMe",
    description: "Personal restoration and confidence.",
  },
  {
    href: "/programmes/code1-enterprise",
    name: "Code1 Enterprise",
    description: "Leadership and organisational restoration.",
  },
  {
    href: "/programmes/twice-me",
    name: "TwiceMe",
    description: "Moment companion for confidence and preparation.",
  },
];

export function Nav({ barOffset = 44 }: { barOffset?: number }) {
  const [hidden, setHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastYRef.current = window.scrollY;

    const SHOW_NEAR_TOP = 80;
    const DEAD_ZONE = 6;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastYRef.current;
      if (y < SHOW_NEAR_TOP) {
        setHidden(false);
      } else if (delta > DEAD_ZONE) {
        setHidden(true);
        setDropdownOpen(false);
      } else if (delta < -DEAD_ZONE) {
        setHidden(false);
      }
      lastYRef.current = y;
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkClass =
    "font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-navy [transition:opacity_200ms_var(--ease-out)] hover:opacity-60";

  return (
    <>
      {/* ── Main nav ── */}
      <nav
        style={{ top: barOffset }}
        className={`fixed inset-x-0 z-[100] px-[var(--rail-x)] py-5 transition-[top,transform] duration-300 ease-smooth will-change-transform ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Frosted background */}
        <div className="absolute inset-0 bg-cream/90 backdrop-blur-md border-b border-navy/[0.06] -z-10" />

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="block [transition:opacity_200ms_var(--ease-out)] hover:opacity-70 shrink-0"
            aria-label="Code 1 — home"
          >
            <Image
              src="/logos/full-navy.svg"
              alt="Code 1"
              width={120}
              height={26}
              priority
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass}>Home</Link>

            {/* Programmes dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                className={`${linkClass} flex items-center gap-1.5`}
                onClick={() => setDropdownOpen((o) => !o)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Programmes
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[380px] bg-cream border border-navy/10 shadow-[0_8px_40px_rgba(15,27,45,0.12)] transition-all duration-200 origin-top ${
                  dropdownOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                <div className="p-2">
                  {PROGRAMMES.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setDropdownOpen(false)}
                      className="group flex flex-col gap-0.5 px-5 py-4 hover:bg-navy/[0.04] transition-colors duration-150"
                    >
                      <span className="font-sans text-[12px] font-medium tracking-[1px] uppercase text-navy group-hover:text-gold transition-colors duration-150">
                        {p.name}
                      </span>
                      <span className="font-sans text-[13px] text-charcoal-soft leading-snug">
                        {p.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="#books" className={linkClass}>Books</Link>
            <Link href="#about" className={linkClass}>About</Link>
            <Link href="#contact" className={linkClass}>Contact</Link>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#assessment"
              className="hidden md:inline-flex font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-cream bg-navy border-[0.5px] border-navy px-6 py-3 rounded-full [transition:background-color_180ms_var(--ease-out),border-color_180ms_var(--ease-out),color_180ms_var(--ease-out),transform_180ms_var(--ease-out)] hover:bg-gold hover:border-gold hover:text-navy active:scale-[0.97]"
            >
              Begin Assessment
            </Link>
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`block h-[1.5px] bg-navy transition-all duration-300 origin-center ${mobileOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"}`} />
              <span className={`block h-[1.5px] bg-navy transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-6"}`} />
              <span className={`block h-[1.5px] bg-navy transition-all duration-300 origin-center ${mobileOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"}`} />
            </button>
          </div>
        </div>
      </nav>



      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-[90] bg-cream flex flex-col px-[var(--rail-x)] pt-28 pb-10 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1">
          <Link href="/" className="font-sans text-[13px] tracking-[2px] uppercase text-navy py-4 border-b border-navy/10 hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          {/* Programmes accordion */}
          <div className="border-b border-navy/10">
            <button
              className="w-full flex items-center justify-between font-sans text-[13px] tracking-[2px] uppercase text-navy py-4"
              onClick={() => setMobileProgOpen((o) => !o)}
            >
              Programmes
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${mobileProgOpen ? "rotate-180" : ""}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileProgOpen && (
              <div className="pb-2 flex flex-col gap-0">
                {PROGRAMMES.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => { setMobileOpen(false); setMobileProgOpen(false); }}
                    className="flex flex-col gap-0.5 pl-4 py-3 border-l-2 border-gold/40 mb-1"
                  >
                    <span className="font-sans text-[11px] tracking-[1px] uppercase text-navy font-medium">{p.name}</span>
                    <span className="font-sans text-[13px] text-charcoal-soft">{p.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#books" className="font-sans text-[13px] tracking-[2px] uppercase text-navy py-4 border-b border-navy/10 hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
            Books
          </Link>
          <Link href="#about" className="font-sans text-[13px] tracking-[2px] uppercase text-navy py-4 border-b border-navy/10 hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="#contact" className="font-sans text-[13px] tracking-[2px] uppercase text-navy py-4 border-b border-navy/10 hover:text-gold transition-colors" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="mt-auto">
          <Link
            href="#assessment"
            onClick={() => setMobileOpen(false)}
            className="inline-flex w-full justify-center font-sans text-[11px] font-medium tracking-[1.5px] uppercase text-cream bg-navy border-[0.5px] border-navy px-6 py-4 rounded-full hover:bg-gold hover:border-gold hover:text-navy transition-colors duration-200"
          >
            Begin Assessment
          </Link>
        </div>
      </div>
    </>
  );
}
