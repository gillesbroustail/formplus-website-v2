'use client';

import { useMemo, useState } from 'react';
import Script from 'next/script';
import { timetableEntries, timetableEmbedUrl, timetableEmbedWidget } from '@/config/timetable';
import { clubs } from '@/config/clubs';
import { classes } from '@/config/classes';

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

export function TimetableFilters() {
  const [club, setClub] = useState('Tous');
  const [day, setDay] = useState('Tous');
  const [classType, setClassType] = useState('Tous');
  const [coach, setCoach] = useState('Tous');

  const filtered = useMemo(() => {
    return timetableEntries.filter((entry) => {
      return (
        (club === 'Tous' || entry.club === club) &&
        (day === 'Tous' || entry.day === day) &&
        (classType === 'Tous' || entry.classType === classType) &&
        (coach === 'Tous' || entry.coach === coach)
      );
    });
  }, [club, day, classType, coach]);

  if (timetableEmbedUrl) {
    return (
      <div className="rounded-3xl border border-border bg-surface p-4">
        <iframe
          src={timetableEmbedUrl}
          className="h-[700px] w-full rounded-2xl border-0"
          title="Planning FORM+"
        />
        <p className="mt-3 text-sm text-muted">
          Si le planning ne se charge pas, veuillez contacter l’accueil de votre club.
        </p>
      </div>
    );
  }

  if (timetableEmbedWidget) {
    return (
      <div className="rounded-3xl border border-border bg-surface p-4">
        <div className="mindbody-widget" data-widget-type="Schedules" data-widget-id={timetableEmbedWidget.widgetId} />
        <Script src={timetableEmbedWidget.scriptSrc} strategy="afterInteractive" />
        <p className="mt-3 text-sm text-muted">
          Si le planning ne se charge pas, contactez l’accueil de votre club.
        </p>
      </div>
    );
  }

  const coachs = Array.from(new Set(timetableEntries.map((entry) => entry.coach)));

  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="grid gap-4 md:grid-cols-4">
        <select value={club} onChange={(e) => setClub(e.target.value)} className="rounded-full border border-border bg-bg px-4 py-3 text-sm">
          <option>Tous</option>
          {clubs.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <select value={day} onChange={(e) => setDay(e.target.value)} className="rounded-full border border-border bg-bg px-4 py-3 text-sm">
          <option>Tous</option>
          {days.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select value={classType} onChange={(e) => setClassType(e.target.value)} className="rounded-full border border-border bg-bg px-4 py-3 text-sm">
          <option>Tous</option>
          {classes.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <select value={coach} onChange={(e) => setCoach(e.target.value)} className="rounded-full border border-border bg-bg px-4 py-3 text-sm">
          <option>Tous</option>
          {coachs.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="mt-6 grid gap-4">
        {filtered.map((entry) => (
          <div key={entry.id} className="rounded-2xl border border-border bg-bg px-4 py-3">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">{entry.day}</p>
              <p className="text-lg font-semibold">{entry.classType}</p>
              <p className="text-sm text-muted">{entry.club}</p>
              <p className="text-sm text-muted">{entry.time} · Coach {entry.coach}</p>
            </div>
          </div>
        ))}
        {filtered.length === 0 ? <p className="text-sm text-muted">Aucun cours disponible pour ces filtres.</p> : null}
      </div>
    </div>
  );
}
