# Phase 2 — Lead-generation expansion

**Approved:** 2026-06-04 · **Quoted:** $200

> Canonical handover lives in the project-root `CLAUDE.md` (one level above this repo). This is the tracked, in-repo copy of the Phase 2 plan so it ships with the code.

## Why

Danston's feedback: the site reads like a **brochure** (passive, informational) rather than a **lead magnet** (active, converting). Phase 2 turns every new surface into an *action with a payoff* — a verb, not a noun — that captures a contact in exchange for value. Adding more informational pages would just make a thicker brochure; that's the trap to avoid.

## Funnel hierarchy (decided)

Four capture points, ranked so the page doesn't fragment into competing CTAs:

1. **Primary (hero):** Free **masterclass** signup — the main lead magnet.
2. **Secondary:** The **assessment** — high-intent, qualified-lead path (already built).
3. **Contextual:** **Free chapter** download (books page) and **course waitlist**.
4. **Fallback:** **Contact** — present for legitimacy, never the headline conversion.

## What Phase 2 adds

| Surface | Type | Action / payoff | Notes |
|---|---|---|---|
| Free masterclass + signup | New section (hero magnet) | "Register for the free masterclass" → name + email | Time-bound = converts. New primary CTA. |
| Books page (`/books`) | New page | Sells each book **and** hosts the free-chapter capture | Books are paid (One Shot £8.99, S.I.D £9.99 via Stripe). The free chapter is the magnet, not the book. |
| Testimonials | New section + reusable snippets | Social proof | Named quotes (3: individual / corporate / government) + snippets near CTAs. See caution below. |
| Course waitlist | New section | "Join the waitlist" → email | Course not built. Links to external LMS once live. |
| Contact (`/contact`) | New page | Direct contact route | Lean; never competes with the magnets. |

## Two things to get right

1. **Social-proof numbers must be real and only shown when flattering.** Invented counts are a trust/legal risk. Cold-start: "3 people signed up" hurts more than no number. Build the snippet slot now, lead with named quotes (work at any volume), switch on live counts only once flattering. Counts wired to real signup data, never hardcoded.
2. **Books are a sales page, not a lead magnet.** Free chapter is the magnet → capture email → upsell the paid book. Don't blur the two.

## Implementation plan

Built in this Next.js app. Each new section gets its **own layout grammar** (don't reuse an existing one), uses design-system tokens (no hardcoded hex), keeps the generous whitespace, and respects `prefers-reduced-motion` for new reveals.

**Step 1 — Masterclass signup (new hero magnet).** New/reworked hero section, own layout grammar — value/promise on one side, compact register form (name, email, optional role) on the other. Wire submit to the existing backend (Resend). Confirmation email + team notification. Becomes the primary CTA; demote other buttons.

**Step 2 — Books page (`/books`).** Promote the Books section into a full page: per-book hero, "what you'll learn," who it's for, excerpt block, Stripe buy button (already wired: `app/components/BookPreorder.tsx`). Add free-chapter capture (email → deliver PDF + add to list). Keep a condensed Books teaser on the landing page linking through.

**Step 3 — Testimonials.** New section after About, fresh layout grammar (not the editorial 2-col already in use). Data-driven array so quotes reuse as snippets. Build the social-proof snippet component now; counts off until real and flattering.

**Step 4 — Course waitlist.** New section: what's coming + single "Join the waitlist" email capture. No course infrastructure. Swap in external LMS link when provided.

**Step 5 — Contact page (`/contact`).** Lean page: short intro, simple message form (same backend), real email + LinkedIn. Fallback path, visually quieter than the magnets.

**Cross-cutting.** All forms POST to the real backend (Resend, already used for the assessment); every capture triggers a confirmation + team notification. One clear primary action per viewport. Update nav to surface Books + Contact without crowding the primary CTA.

## Blocked on Danston

- Real testimonials with permission to name (individual / corporate / government).
- Free-chapter PDF(s) for the books lead magnet.
- Masterclass details (coverage, cadence/dates) — placeholder copy until provided.
- External LMS URL for the course waitlist handoff.
- Real photos still outstanding from Phase 1.
