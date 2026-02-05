'use client';

import { useMemo, useState } from 'react';
import { membershipPlans, membershipSections } from '@/config/memberships';
import { cn } from '@/lib/utils';

export function MembershipComparison() {
  const [active, setActive] = useState(membershipSections[0].id);

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
            <button className="mt-6 w-full rounded-full border border-border py-3 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary">Je choisis</button>
          </div>
        ))}
      </div>
    </div>
  );
}
