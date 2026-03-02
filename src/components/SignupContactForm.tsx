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
  const [debugCode, setDebugCode] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const notes = String(formData.get('notes') || '').trim();
    const interest = String(formData.get('interest') || 'formplus').trim();
    const shareWithZen = formData.get('shareWithZen') === 'on';

    if ((interest === 'pluszen' || interest === 'both') && !shareWithZen) {
      setStatus('error');
      setErrorMessage('Veuillez autoriser le partage avec +ZEN pour cette selection.');
      return;
    }

    const messageLines = [
      'Demande d\'inscription depuis le parcours abonnements.',
      `Offre: ${planName}`,
      `Club choisi: ${clubName}`,
      `Interet: ${interest}`,
      `Partage +ZEN: ${shareWithZen ? 'oui' : 'non'}`,
      notes ? `Message client: ${notes}` : 'Message client: (aucun)'
    ];

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');
    setDebugCode('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: messageLines.join('\n'),
          interest,
          shareWithZen,
          source: 'signup_flow'
        })
      });

      let responseData: { ok?: boolean; error?: string } | null = null;
      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (!response.ok || responseData?.ok === false) {
        const code = responseData?.error || `http_${response.status}`;
        setDebugCode(code);

        if (code === 'invalid_payload' || code === 'invalid_json') {
          throw new Error('Vos informations semblent invalides. Verifiez nom, email et telephone.');
        }

        throw new Error('Envoi impossible pour le moment.');
      }

      setStatus('success');
      formElement.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? `${error.message} Verifiez vos informations puis reessayez.`
          : 'Envoi impossible. Verifiez vos informations puis reessayez.'
      );
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
          Je m'interesse a
          <select
            name="interest"
            defaultValue="formplus"
            className="rounded-md border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
          >
            <option value="formplus">FORM+ uniquement</option>
            <option value="pluszen">+ZEN uniquement</option>
            <option value="both">FORM+ et +ZEN</option>
          </select>
        </label>

        <label className="flex items-start gap-3 rounded-md border border-border bg-bg px-4 py-3 text-sm text-muted">
          <input name="shareWithZen" type="checkbox" className="mt-1 h-4 w-4 accent-white" />
          <span>J'accepte que mes coordonnees soient partagees avec +ZEN si je selectionne +ZEN.</span>
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
          {debugCode ? <span className="ml-2 text-muted">({debugCode})</span> : null}
        </p>
      ) : null}
    </div>
  );
}
