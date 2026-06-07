"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "./Nav";

export function SiteHeader() {
  const [barVisible, setBarVisible] = useState(true);

  return (
    <>
      {/* Announcement bar */}
      {barVisible && (
        <div className="fixed inset-x-0 top-0 z-[120] bg-navy border-b border-gold/20 px-[var(--rail-x)] py-3">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.5px] text-cream/80 text-center leading-snug">
              Now enrolling:{" "}
              <span className="text-gold font-medium">Code1 Acquire</span>
              {" "}— 90-Day Acquisition Power Camp.{" "}
              <span className="text-cream/60">Starts 19 June 2026. 25 places only.</span>
            </p>
            <Link
              href="/acquire"
              className="shrink-0 font-sans text-[10px] font-medium tracking-[1.5px] uppercase text-navy bg-gold px-4 py-1.5 rounded-full hover:bg-gold/80 [transition:background-color_180ms_var(--ease-out),transform_180ms_var(--ease-out)] active:scale-[0.97]"
            >
              Apply Now
            </Link>
          </div>
          <button
            onClick={() => setBarVisible(false)}
            aria-label="Dismiss announcement"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream/70 transition-colors duration-150 p-1"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Nav slides up to top-0 when bar is dismissed */}
      <Nav barOffset={barVisible ? 44 : 0} />
    </>
  );
}
