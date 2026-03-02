import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  message: z.string().min(1)
});

function parseRecipients(value: string | undefined) {
  if (!value) return [];
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

async function sendWithResend(payload: z.infer<typeof contactSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = parseRecipients(process.env.CONTACT_TO_EMAIL);
  const from = process.env.CONTACT_FROM_EMAIL || 'FORM+ <onboarding@resend.dev>';

  if (!apiKey || to.length === 0) {
    console.warn('Contact email not sent: missing RESEND_API_KEY or CONTACT_TO_EMAIL');
    return { sent: false as const, reason: 'missing_config' as const };
  }

  const subject = `Nouvelle demande inscription FORM+ - ${payload.name}`;
  const text = [
    'Nouvelle demande depuis le formulaire inscription.',
    '',
    `Nom: ${payload.name}`,
    `Email: ${payload.email}`,
    `Telephone: ${payload.phone}`,
    '',
    'Message:',
    payload.message
  ].join('\n');

  const html = `
    <h2>Nouvelle demande inscription FORM+</h2>
    <p><strong>Nom:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Telephone:</strong> ${payload.phone}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${payload.message}</pre>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject,
      text,
      html
    })
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('Resend error:', response.status, details);
    return { sent: false as const, reason: 'provider_error' as const };
  }

  return { sent: true as const };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid_json' },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'invalid_payload' },
      { status: 400 }
    );
  }

  console.log('Contact form submission:', parsed.data);
  const emailResult = await sendWithResend(parsed.data);

  if (!emailResult.sent && emailResult.reason === 'provider_error') {
    return NextResponse.json(
      { ok: false, error: 'email_send_failed' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    emailSent: emailResult.sent
  });
}
