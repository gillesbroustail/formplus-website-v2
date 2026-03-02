'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { membershipPlans, membershipSections } from '@/config/memberships';
import { cn } from '@/lib/utils';

export function MembershipComparison() {
  const zenSection = {
    id: 'studio-zen',
    title: 'Studio +ZEN',
    subtitle: 'Reformer Pilates, Fly Yoga, Yoga et Pilates dans le studio +ZEN.'
  };

  const allSections = [...membershipSections, zenSection];
  const searchParams = useSearchParams();
  const [active, setActive] = useState(
    membershipSections.find((section) => section.id === 'cours-collectifs')?.id ?? membershipSections[0].id
  );
  const isZenActive = active === zenSection.id;

  useEffect(() => {
    const fromQuery = searchParams.get('parcours');
    if (!fromQuery) return;
    const exists = [...membershipSections.map((section) => section.id), zenSection.id].includes(fromQuery);
    if (exists) setActive(fromQuery);
  }, [searchParams]);

  const plans = useMemo(() => {
    return membershipPlans.filter((plan) => plan.category === active);
  }, [active]);
  const activeSection = allSections.find((section) => section.id === active);

  return (
    <section id="comparateur-abonnements" aria-label="Comparateur des abonnements FORM+">
      <div className="mb-5 rounded-2xl border border-border bg-surface p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Etape 2</p>
        <p className="mt-2 text-sm text-muted">Choisissez une catégorie, comparez les offres, puis cliquez sur “Je choisis” pour finaliser avec l’équipe FORM+.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {allSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActive(section.id)}
            className={cn(
              'rounded-full border px-5 py-2 text-xs uppercase tracking-[0.3em] transition',
              active === section.id
                ? 'border-primary bg-primary text-bg'
                : 'border-border text-muted hover:text-text'
            )}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-surface p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">{activeSection?.title}</p>
        <p className="mt-2 text-sm text-muted">{activeSection?.subtitle}</p>
      </div>

      {isZenActive ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6 transition hover:border-primary/60 hover:shadow-lift">
            <h3 className="text-xl font-semibold">+ZEN ILLIMITE</h3>
            <p className="mt-3 text-sm text-muted">
              Accès illimité aux expériences Studio +ZEN: Reformer Pilates, Fly Yoga, Yoga et Pilates.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Accès studio +ZEN</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Créneaux premium</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Compatible avec les parcours FORM+</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact?interest=studio-zen-illimite"
                className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary"
              >
                Je choisis
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6 transition hover:border-primary/60 hover:shadow-lift">
            <h3 className="text-xl font-semibold">+ZEN A LA SEANCE</h3>
            <p className="mt-3 text-sm text-muted">
              Flexibilité maximale pour réserver à la séance selon votre rythme, sans changer vos habitudes.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Paiement à la séance</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Formats premium +ZEN</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Idéal en complément FORM+</li>
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact?interest=studio-zen-seance"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary"
              >
                Je choisis
              </Link>
              <Link
                href="https://www.pluszen.nc/Home/Formule"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="rounded-3xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lift"
            >
              {plan.tag ? (
                <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs uppercase tracking-[0.3em] text-bg">
                  {plan.tag}
                </span>
              ) : null}
              <h3 className="mt-4 text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-display">{plan.price}</p>
              <p className="mt-1 text-sm text-muted">{plan.cadence}</p>
              <p className="mt-1 text-sm text-muted">{plan.commitment}</p>
              <p className="mt-4 text-sm text-muted">{plan.description}</p>
              <ul className="mt-6 grid gap-2 text-sm text-muted">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?interest=${encodeURIComponent(plan.name)}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-border py-3 text-xs uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary"
              >
                Je choisis
              </Link>
            </article>
          ))}
          {plans.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
              Aucune offre trouvée pour cette catégorie.
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
