'use client';

import { FormEvent, useState } from 'react';

type SignupContactFormProps = {
  planName: string;
  clubName: string;
};

export function SignupContactForm({ planName, clubName }: SignupContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const notes = String(formData.get('notes') || '').trim();

    const messageLines = [
      'Demande d\'inscription depuis le parcours abonnements.',
      `Offre: ${planName}`,
      `Club choisi: ${clubName}`,
      notes ? `Message client: ${notes}` : 'Message client: (aucun)'
    ];

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: messageLines.join('\n')
        })
      });

      if (!response.ok) {
        throw new Error('invalid_payload');
      }

      setStatus('success');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Envoi impossible. Verifiez vos informations puis reessayez.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-muted">
            Nom complet
            <input
              name="name"
              type="text"
              required
              minLength={2}
              className="rounded-md border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
              placeholder="Votre nom"
            />
          </label>

          <label className="grid gap-2 text-sm text-muted">
            Telephone
            <input
              name="phone"
              type="tel"
              required
              minLength={6}
              className="rounded-md border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
              placeholder="Votre numero"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm text-muted">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-md border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
            placeholder="vous@email.com"
          />
        </label>

        <label className="grid gap-2 text-sm text-muted">
          Message (optionnel)
          <textarea
            name="notes"
            rows={4}
            className="rounded-md border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
            placeholder="Precisions utiles pour votre inscription"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center rounded-md border border-primary bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-bg transition hover:bg-transparent hover:text-text disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Envoi...' : 'Continuer'}
        </button>
      </form>

      {status === 'success' ? (
        <p className="mt-4 rounded-md border border-border bg-bg px-4 py-3 text-sm text-text">
          Merci. Votre demande est envoyee. L'equipe FORM+ vous recontacte rapidement.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="mt-4 rounded-md border border-border bg-bg px-4 py-3 text-sm text-text">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
