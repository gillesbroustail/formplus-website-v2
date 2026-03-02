import { Metadata } from 'next';
import { PlanningHero } from '@/components/planning/PlanningHero';
import { PlanningValueProps } from '@/components/planning/PlanningValueProps';
import { PlanningHowItWorks } from '@/components/planning/PlanningHowItWorks';
import { PlanningAppPromo } from '@/components/planning/PlanningAppPromo';
import { PlanningFinalCta } from '@/components/planning/PlanningFinalCta';
import { ZenEcosystemSection } from '@/components/ZenEcosystemSection';
import { TimetableFilters } from '@/components/TimetableFilters';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Planning FORM+ | Cours fitness premium à Nouméa',
  description:
    'Consultez le planning fitness FORM+ à Nouméa : cours collectifs, RPM, yoga, renforcement et réservation via l’application.'
};

export default function PlanningPage() {
  return (
    <div className="container-wide section-pad">
      <PlanningHero />
      <PlanningValueProps />

      <section className="section-pad pt-2" id="planning-realtime" aria-label="Planning en temps réel Deciplus">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted">Planning en temps reel</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tightest md:text-4xl">
              Donnees officielles FORM+ via Deciplus.
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted md:text-base">
              Consultez le planning officiel synchronise avec l’espace membre: clubs, horaires, cours et disponibilites actualises.
            </p>
          </div>
          <Button href="/espace-membre" variant="secondary">Ouvrir l'espace membre</Button>
        </div>
        <TimetableFilters />
      </section>

      <PlanningHowItWorks />
      <PlanningAppPromo />
      <ZenEcosystemSection compact />
      <PlanningFinalCta />
    </div>
  );
}
