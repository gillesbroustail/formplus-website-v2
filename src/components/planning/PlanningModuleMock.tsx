'use client';

import { motion } from 'framer-motion';

const filters = [
  { label: 'Club', value: 'Tous les clubs' },
  { label: 'Type de cours', value: 'Tous les cours' },
  { label: 'Coach', value: 'Tous les coachs' }
];

const classes = [
  { day: 'Lundi', time: '06:30', title: 'RPM Performance', coach: 'Coach Lea', intensity: 'Intense' },
  { day: 'Mardi', time: '12:15', title: 'Strength Signature', coach: 'Coach Toma', intensity: 'Modere' },
  { day: 'Mercredi', time: '18:00', title: 'Yoga Flow', coach: 'Coach Eva', intensity: 'Doux' },
  { day: 'Jeudi', time: '17:30', title: 'HIIT Athletic', coach: 'Coach Max', intensity: 'Intense' },
  { day: 'Vendredi', time: '06:45', title: 'Core & Mobility', coach: 'Coach Jade', intensity: 'Modere' },
  { day: 'Samedi', time: '09:15', title: 'Cycling Rhythm', coach: 'Coach Noe', intensity: 'Modere' }
];

export function PlanningModuleMock() {
  return (
    <section id="planning-module" className="section-pad pt-0" aria-label="Module planning hebdomadaire">
      <div className="rounded-2xl border border-border bg-surface p-5 md:p-8">
        <div className="grid gap-3 md:grid-cols-3">
          {filters.map((filter) => (
            <label key={filter.label} className="grid gap-2 text-xs uppercase tracking-[0.22em] text-muted">
              {filter.label}
              <select
                defaultValue={filter.value}
                className="rounded-xl border border-border bg-bg px-4 py-3 text-sm normal-case tracking-normal text-text outline-none transition focus:border-primary"
                aria-label={`Filtre ${filter.label}`}
              >
                <option>{filter.value}</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </label>
          ))}
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {classes.map((item, index) => (
            <motion.article
              key={`${item.day}-${item.time}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-[#090909] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">{item.day}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-primary">{item.intensity}</p>
              </div>
              <p className="mt-4 text-3xl font-display leading-none">{item.time}</p>
              <p className="mt-3 text-lg font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.coach}</p>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted">Utilisez les filtres pour personnaliser votre experience.</p>
      </div>
    </section>
  );
}
