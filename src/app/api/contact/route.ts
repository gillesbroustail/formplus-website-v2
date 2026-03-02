import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  message: z.string().min(1),
  interest: z.enum(['formplus', 'pluszen', 'both']).optional().default('formplus'),
  shareWithZen: z.boolean().optional().default(false),
  source: z.string().optional().default('website')
});

type ContactPayload = z.infer<typeof contactSchema>;

type SendResult = {
  sent: boolean;
  reason?: 'missing_config' | 'provider_error';
};

function parseRecipients(value: string | undefined) {
  if (!value) return [];
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendWithResend(to: string[], payload: ContactPayload, audience: 'FORM+' | '+ZEN'): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || 'FORM+ <onboarding@resend.dev>';

  if (!apiKey || to.length === 0) {
    console.warn(`Contact email not sent for ${audience}: missing RESEND_API_KEY or recipients`);
    return { sent: false, reason: 'missing_config' };
  }

  const subject = `Nouvelle demande ${audience} - ${payload.name}`;
  const text = [
    `Audience: ${audience}`,
    `Source: ${payload.source}`,
    `Interet: ${payload.interest}`,
    `Partage +ZEN: ${payload.shareWithZen ? 'oui' : 'non'}`,
    '',
    `Nom: ${payload.name}`,
    `Email: ${payload.email}`,
    `Telephone: ${payload.phone}`,
    '',
    'Message:',
    payload.message
  ].join('\n');

  const html = `
    <h2>Nouvelle demande ${escapeHtml(audience)}</h2>
    <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
    <p><strong>Interet:</strong> ${escapeHtml(payload.interest)}</p>
    <p><strong>Partage +ZEN:</strong> ${payload.shareWithZen ? 'oui' : 'non'}</p>
    <p><strong>Nom:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Telephone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(payload.message)}</pre>
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
    console.error(`Resend error (${audience}):`, response.status, details);
    return { sent: false, reason: 'provider_error' };
  }

  return { sent: true };
}

export async function POST(request: Request) {
  let incoming: unknown;

  try {
    incoming = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(incoming);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  const payload = parsed.data;
  const wantsZen = payload.interest === 'pluszen' || payload.interest === 'both';

  if (wantsZen && !payload.shareWithZen) {
    return NextResponse.json({ ok: false, error: 'zen_consent_required' }, { status: 400 });
  }

  const formRecipients = parseRecipients(process.env.CONTACT_TO_EMAIL);
  const zenRecipients = parseRecipients(process.env.CONTACT_TO_EMAIL_ZEN);

  const formResult = await sendWithResend(formRecipients, payload, 'FORM+');
  const zenResult = wantsZen && payload.shareWithZen
    ? await sendWithResend(zenRecipients, payload, '+ZEN')
    : { sent: false as const };

  const attempted =
    (formRecipients.length > 0 ? 1 : 0) +
    (wantsZen && payload.shareWithZen && zenRecipients.length > 0 ? 1 : 0);

  const sentCount = (formResult.sent ? 1 : 0) + (zenResult.sent ? 1 : 0);
  const providerErrors = [formResult.reason, zenResult.reason].filter((value) => value === 'provider_error').length;

  if (attempted > 0 && sentCount === 0 && providerErrors > 0) {
    return NextResponse.json({ ok: false, error: 'email_send_failed' }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    emailSent: sentCount > 0,
    zenForwarded: zenResult.sent
  });
}
