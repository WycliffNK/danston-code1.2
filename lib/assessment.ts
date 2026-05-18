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
