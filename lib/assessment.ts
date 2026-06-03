export const AUDIENCES = [
  "Leader",
  "Executive Team",
  "Organisation",
  "Sales Team",
  "Government or Institution",
  "Business in Growth or Reinvention",
] as const;
export type Audience = (typeof AUDIENCES)[number];

export const WORK_MODES = ["Remote", "On-site", "Both"] as const;
export type WorkMode = (typeof WORK_MODES)[number];

export type AssessmentPayload = {
  audience: Audience;
  holdingBack: string;
  duration: string;
  coachedBefore: string;
  region: string;
  cost: string;
  commitment: number; // 1..10
  workMode: WorkMode;
  source: string;
  nextStep: string;
  email: string;
  // Filled in server-side:
  submittedAt?: string;
  userAgent?: string;
};

export const SHEET_HEADERS = [
  "Submitted at (UTC)",
  "Audience",
  "Email",
  "Holding back",
  "Duration",
  "Coached before",
  "Region",
  "Cost of inaction",
  "Commitment (1-10)",
  "Work mode",
  "Source",
  "Desired next step",
  "User agent",
] as const;

// Human-readable question text, mirroring the prompts shown in the form
// (app/components/Assessment.tsx). Used for the notification email.
export const QUESTION_LABELS = {
  audience: "Who are you?",
  holdingBack: "Main thing holding you back",
  duration: "How long this has been an issue",
  coachedBefore: "Worked with a coach / consultant / advisor before",
  region: "Where they're based",
  cost: "Cost of the challenge continuing",
  commitment: "Commitment to act now (1–10)",
  workMode: "Preferred way to work",
  source: "How they found Code 1",
  nextStep: "Desired next step",
} as const;

export function assessmentFields(
  p: AssessmentPayload
): { label: string; value: string }[] {
  return [
    { label: QUESTION_LABELS.audience, value: p.audience },
    { label: QUESTION_LABELS.holdingBack, value: p.holdingBack },
    { label: QUESTION_LABELS.duration, value: p.duration },
    { label: QUESTION_LABELS.coachedBefore, value: p.coachedBefore },
    { label: QUESTION_LABELS.region, value: p.region },
    { label: QUESTION_LABELS.cost, value: p.cost },
    { label: QUESTION_LABELS.commitment, value: `${p.commitment} / 10` },
    { label: QUESTION_LABELS.workMode, value: p.workMode },
    { label: QUESTION_LABELS.source, value: p.source },
    { label: QUESTION_LABELS.nextStep, value: p.nextStep },
  ];
}

export function payloadToRow(p: AssessmentPayload): string[] {
  return [
    p.submittedAt ?? new Date().toISOString(),
    p.audience,
    p.email,
    p.holdingBack,
    p.duration,
    p.coachedBefore,
    p.region,
    p.cost,
    String(p.commitment),
    p.workMode,
    p.source,
    p.nextStep,
    p.userAgent ?? "",
  ];
}
