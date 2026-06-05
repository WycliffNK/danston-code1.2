import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isStr(v: unknown, max = 5000): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Basic required field check
  if (!isStr(body.fullName) || !isStr(body.email) || !isStr(body.phone)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured — still succeed for the user
    return NextResponse.json({ ok: true, notified: false });
  }

  const to = process.env.ACQUIRE_NOTIFY_EMAIL || process.env.ASSESSMENT_NOTIFY_EMAIL || "danstunmugarura@gmail.com";
  const from = process.env.ASSESSMENT_FROM_EMAIL || "Code 1 Acquire <onboarding@resend.dev>";

  const fields = [
    ["Full Name", body.fullName],
    ["Email", body.email],
    ["Phone / WhatsApp", body.phone],
    ["Country / City", body.location],
    ["Current Role", body.currentRole],
    ["Applying As", body.applyingAs],
    ["What they sell", body.whatYouSell],
    ["Who they acquire", body.whoYouAcquire],
    ["Ideal customer clarity", body.customerClarity],
    ["How they find prospects", body.prospectSource],
    ["Biggest challenge", body.biggestChallenge],
    ["Confidence level (1-5)", body.confidenceLevel],
    ["What happens when selling", body.whatHappensWhenSelling],
    ["Struggle most with", body.struggleMost],
    ["Most common objection", body.commonObjection],
    ["When prospect says 'I'll think about it'", body.thinkAboutIt],
    ["Follow-up frequency", body.followUpFrequency],
    ["Goal in 90 days", body.goal90Days],
    ["Monthly revenue goal", body.revenueGoal],
    ["Success metric (new clients)", body.successMetric],
    ["Life change if more confident", body.lifeChange],
    ["Commitment level (1-5)", body.commitmentLevel],
    ["Why joining first cohort", body.whyJoining],
    ["Can start 19 June 2026", body.canStart],
    ["Prepared to invest £497", body.preparedToInvest],
    ["Payment preference", body.paymentPreference],
    ["Free intro session", body.introSession],
    ["Anything else", body.anythingElse],
  ] as [string, unknown][];

  const rows = fields
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 16px;border-bottom:1px solid #e7e2d6;color:#8B6F2E;font-size:11px;letter-spacing:0.5px;text-transform:uppercase;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:8px 16px;border-bottom:1px solid #e7e2d6;color:#2A2A2A;font-size:14px;vertical-align:top;">${escapeHtml(String(value ?? "—"))}</td>
      </tr>`
    )
    .join("");

  const html = `<!doctype html>
<html>
<body style="margin:0;background:#F5F1E8;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F1E8;padding:32px 0;">
    <tr><td align="center">
      <table role="presentation" width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#fff;border:1px solid #e7e2d6;">
        <tr>
          <td style="background:#0F1B2D;padding:28px 32px;">
            <div style="color:#C9A961;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">New Application</div>
            <div style="color:#F5F1E8;font-size:20px;margin-bottom:4px;">Code1 Acquire — 90-Day Power Camp</div>
            <a href="mailto:${escapeHtml(String(body.email))}" style="color:#C9A961;font-size:14px;">${escapeHtml(String(body.fullName))} &lt;${escapeHtml(String(body.email))}&gt;</a>
          </td>
        </tr>
        <tr><td style="padding:8px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        </td></tr>
        <tr><td style="padding:16px 32px;color:#8a8a8a;font-size:12px;">Submitted ${new Date().toISOString()}</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to: [to],
    replyTo: String(body.email),
    subject: `New Code1 Acquire Application — ${String(body.fullName)} (${String(body.email)})`,
    html,
  });

  return NextResponse.json({ ok: true, notified: true });
}
