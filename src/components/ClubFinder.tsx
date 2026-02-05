'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { clubs } from '@/config/clubs';

export function ClubFinder() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const value = query.toLowerCase();
    return clubs.filter((club) => club.name.toLowerCase().includes(value) || club.city.toLowerCase().includes(value));
  }, [query]);

  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Trouver un club</p>
          <p className="mt-2 text-2xl font-display">Votre club, votre énergie.</p>
        </div>
        <input
          type="text"
          placeholder="Rechercher par quartier ou club"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full md:max-w-sm rounded-full border border-border bg-bg px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Recherche de club"
        />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {filtered.map((club) => (
          <div key={club.id} className="rounded-2xl border border-border bg-bg p-5">
            <p className="text-lg font-semibold">{club.name}</p>
            <p className="mt-2 text-sm text-muted">{club.address}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">Équipements</p>
            <p className="mt-2 text-sm text-muted">{club.amenities.slice(0, 2).join(' • ')}</p>
            <Link href={`/clubs/${club.slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary">Voir le club</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
