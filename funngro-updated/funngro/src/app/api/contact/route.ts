import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContact } from "@/lib/validations";
import type { ContactInput } from "@/lib/validations";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const recipient = process.env.CONTACT_RECIPIENT ?? process.env.RESEND_FROM ?? "hello@funngro.com";
const from = process.env.RESEND_FROM ?? `Funngro <hello@funngro.com>`;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const result = validateContact(body as ContactInput);
  if (!result.success) {
    return NextResponse.json({ success: false, errors: result.errors }, { status: 400 });
  }

  const { name, email, topic, message } = result.value;

  const subject = `Funngro contact form: ${topic}`;
  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>I am a:</strong> ${topic}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p>Sent from the Funngro website contact form.</p>
  `;

  try {
    if (resend) {
      await resend.emails.send({
        from,
        to: recipient,
        subject,
        html,
        replyTo: email,
      });
    } else if (process.env.FORMSPREE_ENDPOINT) {
      const fp = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message, _subject: subject }),
      });
      if (!fp.ok) {
        throw new Error(`Formspree error (${fp.status})`);
      }
    } else {
      // No email provider configured — log only. The frontend still shows success
      // so the demo works end-to-end. Set RESEND_API_KEY or FORMSPREE_ENDPOINT to send real mail.
      console.warn("[contact] No email provider configured. Logged submission:", {
        name,
        email,
        topic,
        message,
      });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email.";
    console.error("[contact] email send failed:", message);
    return NextResponse.json(
      { success: false, error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
