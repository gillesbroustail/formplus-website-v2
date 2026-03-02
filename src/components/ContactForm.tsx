'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(6, 'Téléphone requis'),
  message: z.string().min(10, 'Message requis')
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('request_failed');
      }

      reset();
    } catch {
      setSubmitError("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <input
          {...register('name')}
          type="text"
          autoComplete="name"
          placeholder="Nom"
          aria-label="Nom"
          className="w-full rounded-full border border-border bg-bg px-5 py-3 text-sm"
        />
        {errors.name ? <p className="mt-2 text-xs text-primary">{errors.name.message}</p> : null}
      </div>
      <div>
        <input
          {...register('email')}
          type="email"
          autoComplete="email"
          placeholder="Email"
          aria-label="Email"
          className="w-full rounded-full border border-border bg-bg px-5 py-3 text-sm"
        />
        {errors.email ? <p className="mt-2 text-xs text-primary">{errors.email.message}</p> : null}
      </div>
      <div>
        <input
          {...register('phone')}
          type="tel"
          autoComplete="tel"
          placeholder="Téléphone"
          aria-label="Téléphone"
          className="w-full rounded-full border border-border bg-bg px-5 py-3 text-sm"
        />
        {errors.phone ? <p className="mt-2 text-xs text-primary">{errors.phone.message}</p> : null}
      </div>
      <div>
        <textarea
          {...register('message')}
          placeholder="Votre message"
          aria-label="Votre message"
          rows={4}
          className="w-full rounded-3xl border border-border bg-bg px-5 py-4 text-sm"
        />
        {errors.message ? <p className="mt-2 text-xs text-primary">{errors.message.message}</p> : null}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.3em] text-bg transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Envoi...' : "Envoyer"}
      </button>
      {submitError ? (
        <p className="text-sm text-primary" role="status" aria-live="polite">{submitError}</p>
      ) : null}
      {isSubmitSuccessful && !submitError ? (
        <p className="text-sm text-muted">Merci, nous revenons vers vous rapidement.</p>
      ) : null}
    </form>
  );
}
