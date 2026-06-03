import { NextResponse } from "next/server";
import { AUDIENCES, WORK_MODES, type AssessmentPayload } from "@/lib/assessment";
import { appendAssessmentRow } from "@/lib/google-sheets";
import { sendAssessmentEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isStr(v: unknown, max = 5000): v is string {
  return typeof v === "string" && v.length > 0 && v.length <= max;
}

function validate(input: unknown): AssessmentPayload | { error: string } {
  if (!input || typeof input !== "object") return { error: "Invalid body" };
  const r = input as Record<string, unknown>;
  if (!isStr(r.audience, 64) || !AUDIENCES.includes(r.audience as never))
    return { error: "audience" };
  if (!isStr(r.workMode, 32) || !WORK_MODES.includes(r.workMode as never))
    return { error: "workMode" };
  const commitment = Number(r.commitment);
  if (!Number.isInteger(commitment) || commitment < 1 || commitment > 10)
    return { error: "commitment" };
  if (!isStr(r.email, 320) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email))
    return { error: "email" };
  for (const k of [
    "holdingBack",
    "duration",
    "coachedBefore",
    "region",
    "cost",
    "source",
    "nextStep",
  ] as const) {
    if (!isStr(r[k])) return { error: k };
  }
  return {
    audience: r.audience as AssessmentPayload["audience"],
    holdingBack: r.holdingBack as string,
    duration: r.duration as string,
    coachedBefore: r.coachedBefore as string,
    region: r.region as string,
    cost: r.cost as string,
    commitment,
    workMode: r.workMode as AssessmentPayload["workMode"],
    source: r.source as string,
    nextStep: r.nextStep as string,
    email: r.email as string,
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = validate(body);
  if ("error" in result) {
    return NextResponse.json(
      { error: `Invalid field: ${result.error}` },
      { status: 422 }
    );
  }

  const payload: AssessmentPayload = {
    ...result,
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "",
  };

  // Best-effort persistence + notification, run concurrently. Both return
  // "not-configured" until their env vars exist, so a missing integration
  // never fails the submission.
  const [append, email] = await Promise.all([
    appendAssessmentRow(payload),
    sendAssessmentEmail(payload),
  ]);

  if (!append.ok && append.reason === "error") {
    console.error("[assessment] sheets append failed", append.message);
  }
  if (!email.ok && email.reason === "error") {
    console.error("[assessment] email send failed", email.message);
  }

  return NextResponse.json({
    ok: true,
    persisted: append.ok,
    notified: email.ok,
    pending:
      !append.ok &&
      append.reason === "not-configured" &&
      !email.ok &&
      email.reason === "not-configured",
  });
}
