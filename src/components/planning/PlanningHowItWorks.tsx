import { CalendarDays, Dumbbell, Search, Smartphone } from 'lucide-react';

const steps = [
  {
    title: 'Choisissez votre club',
    description: 'Selectionnez votre espace FORM+ a Noumea selon votre routine.',
    icon: Dumbbell
  },
  {
    title: 'Filtrez votre seance',
    description: 'Affinez par type de cours, coach et intensite en quelques secondes.',
    icon: Search
  },
  {
    title: 'Consultez les details',
    description: 'Visualisez horaires, format et niveau pour chaque classe.',
    icon: CalendarDays
  },
  {
    title: 'Reservez via l’application FORM+',
    description: 'Finalisez votre place depuis l’app et accedez au club avec votre QR code.',
    icon: Smartphone
  }
];

export function PlanningHowItWorks() {
  return (
    <section className="section-pad pt-2">
      <p className="text-xs uppercase tracking-[0.35em] text-muted">Comment ca marche</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tightest md:text-4xl">
        Un parcours simple, premium, immediat.
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article key={step.title} className="rounded-2xl border border-border bg-surface p-5">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
