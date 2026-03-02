'use client';

import { useMemo, useState } from 'react';
import { membershipPlans, membershipSections } from '@/config/memberships';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MembershipComparison() {
  const [active, setActive] = useState('cours-collectifs');
  const activeSection = membershipSections.find((section) => section.id === active) ?? membershipSections[0];

  const plans = useMemo(() => {
    return membershipPlans.filter((plan) => plan.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {membershipSections.map((section) => (
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

      <div className="mt-5 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <article className="rounded-2xl border border-primary bg-surface p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">{activeSection.title}</p>
          <p className="mt-2 text-sm text-muted">{activeSection.subtitle}</p>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Studio +ZEN</p>
          <p className="mt-2 text-sm text-muted">
            Studio situé dans FORM+ Vata: Reformer Pilates, Fly Yoga, Yoga et Pilates.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            <a href="https://www.pluszen.nc/#1" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text">
              Voir Studio +ZEN
            </a>
            <Link href="/contact?interest=pluszen" className="text-muted hover:text-text">
              Demander Studio +ZEN
            </Link>
          </div>
        </article>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-3xl border border-border bg-surface p-6">
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
              href={`/inscription/choix-club?plan=${plan.id}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-border py-3 text-xs uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary"
            >
              Je choisis
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
