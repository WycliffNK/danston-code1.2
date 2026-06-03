import { Resend } from "resend";
import { assessmentFields, type AssessmentPayload } from "./assessment";

/**
 * Transactional email for assessment submissions, via Resend.
 *
 * Setup (when ready to enable):
 *  1. Create a Resend account and verify a sending domain
 *     (https://resend.com/domains). Until a domain is verified you can
 *     only send from `onboarding@resend.dev`, which delivers ONLY to the
 *     email address that owns the Resend account.
 *  2. Create an API key (https://resend.com/api-keys).
 *  3. Set env vars (see .env.example):
 *       RESEND_API_KEY
 *       ASSESSMENT_NOTIFY_EMAIL   (where submissions are sent)
 *       ASSESSMENT_FROM_EMAIL     (verified sender, e.g. "Code 1 <hello@code1.one>")
 *
 * Until RESEND_API_KEY is present, sendAssessmentEmail() returns
 * { ok: false, reason: "not-configured" } so the API route can still
 * respond 200 and we can enable email later without UI changes.
 */

type SendResult =
  | { ok: true; id: string | null }
  | { ok: false; reason: "not-configured" | "error"; message?: string };

const DEFAULT_TO = "danstunmugarura@gmail.com";
// Resend sandbox sender — only delivers to the Resend account owner's email
// until a real domain is verified. Override with ASSESSMENT_FROM_EMAIL.
const DEFAULT_FROM = "Code 1 Assessment <onboarding@resend.dev>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderText(p: AssessmentPayload): string {
  const lines = assessmentFields(p).map((f) => `${f.label}\n  ${f.value}`);
  return [
    "New Code 1 assessment submission",
    "",
    `Email: ${p.email}`,
    `Submitted: ${p.submittedAt ?? ""}`,
    "",
    ...lines,
    "",
    `User agent: ${p.userAgent ?? ""}`,
  ].join("\n");
}

function renderHtml(p: AssessmentPayload): string {
  const rows = assessmentFields(p)
    .map(
      (f) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid #e7e2d6;vertical-align:top;color:#8B6F2E;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;width:40%;">${escapeHtml(
          f.label
        )}</td>
        <td style="padding:10px 16px;border-bottom:1px solid #e7e2d6;vertical-align:top;color:#2A2A2A;font-size:15px;">${escapeHtml(
          f.value
        )}</td>
      </tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;background:#F5F1E8;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F1E8;padding:32px 0;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border:1px solid #e7e2d6;">
          <tr>
            <td style="background:#0F1B2D;padding:28px 32px;">
              <div style="color:#C9A961;font-size:12px;letter-spacing:2px;text-transform:uppercase;">New assessment</div>
              <div style="color:#F5F1E8;font-size:22px;margin-top:6px;">${escapeHtml(
                p.audience
              )}</div>
              <a href="mailto:${escapeHtml(
                p.email
              )}" style="color:#C9A961;font-size:14px;text-decoration:none;">${escapeHtml(
    p.email
  )}</a>
            </td>
          </tr>
          <tr><td style="padding:8px 16px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
          </td></tr>
          <tr><td style="padding:16px 32px;color:#8a8a8a;font-size:12px;">
            Submitted ${escapeHtml(p.submittedAt ?? "")}
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

export async function sendAssessmentEmail(
  p: AssessmentPayload
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "not-configured" };

  const to = process.env.ASSESSMENT_NOTIFY_EMAIL || DEFAULT_TO;
  const from = process.env.ASSESSMENT_FROM_EMAIL || DEFAULT_FROM;

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: p.email,
    subject: `New Code 1 assessment — ${p.audience} (${p.email})`,
    text: renderText(p),
    html: renderHtml(p),
  });

  if (error) return { ok: false, reason: "error", message: error.message };
  return { ok: true, id: data?.id ?? null };
}
