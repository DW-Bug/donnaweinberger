/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Validates the contact form and (optionally) delivers the message by email.
 *
 * Email delivery is OPTIONAL and off by default. To enable it, set these
 * environment variables in your Cloudflare Pages project
 * (Settings → Environment variables):
 *
 *   RESEND_API_KEY   Your Resend API key  (https://resend.com)
 *   CONTACT_TO       Destination inbox, e.g. "hello@donnaweinberger.com"
 *   CONTACT_FROM     A verified sender, e.g. "Website <noreply@donnaweinberger.com>"
 *
 * If RESEND_API_KEY is not set, the function still validates input and returns
 * success so the form works in development — wire up the provider before launch.
 */

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v, max = 5000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request format." }, 400);
  }

  // Honeypot — bots fill hidden fields; real people don't.
  if (clean(data.company)) {
    return json({ ok: true }); // silently accept and drop
  }

  const name = clean(data.name, 200);
  const email = clean(data.email, 320);
  const organization = clean(data.organization, 200);
  const reason = clean(data.reason, 120);
  const message = clean(data.message, 5000);

  if (!name || !isEmail(email) || !reason || !message) {
    return json(
      { ok: false, error: "Please complete all required fields with a valid email." },
      422
    );
  }

  // No provider configured — accept gracefully (useful in dev / before launch).
  if (!env || !env.RESEND_API_KEY) {
    console.log("[contact] received (no email provider configured):", {
      name,
      email,
      organization,
      reason,
    });
    return json({ ok: true });
  }

  const to = env.CONTACT_TO || "hello@donnaweinberger.com";
  const from = env.CONTACT_FROM || "Website <noreply@donnaweinberger.com>";

  const body = [
    `New contact form submission`,
    `--------------------------------`,
    `Name:         ${name}`,
    `Email:        ${email}`,
    `Organization: ${organization || "—"}`,
    `Reason:       ${reason}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[Website] ${reason} — ${name}`,
        text: body,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] email provider error:", res.status, detail);
      return json(
        { ok: false, error: "We couldn't send your message. Please try again shortly." },
        502
      );
    }
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return json(
      { ok: false, error: "We couldn't send your message. Please try again shortly." },
      502
    );
  }

  return json({ ok: true });
}

// Any non-POST method gets a clean 405. Pages routes by exported handler name,
// so defining only POST + GET here keeps the endpoint tidy.
export async function onRequestGet() {
  return json({ ok: false, error: "Method not allowed." }, 405);
}
