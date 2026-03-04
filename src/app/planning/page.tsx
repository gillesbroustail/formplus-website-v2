import { Metadata } from 'next';
import Image from 'next/image';
import { PlanningHero } from '@/components/planning/PlanningHero';
import { PlanningValueProps } from '@/components/planning/PlanningValueProps';
import { PlanningHowItWorks } from '@/components/planning/PlanningHowItWorks';
import { PlanningAppPromo } from '@/components/planning/PlanningAppPromo';
import { PlanningFinalCta } from '@/components/planning/PlanningFinalCta';
import { ZenEcosystemSection } from '@/components/ZenEcosystemSection';
import { TimetableFilters } from '@/components/TimetableFilters';
import { Button } from '@/components/Button';
import { MediaMosaicSection } from '@/components/MediaMosaicSection';

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

      <section className="section-pad pt-0">
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[390px] overflow-hidden rounded-3xl border border-border">
            <Image src="/assets/brand/hero.jpg" alt="Rythme d'entrainement FORM+" fill className="object-cover transition duration-700 hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/85 to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-text/90">Rythme premium</p>
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[187px] overflow-hidden rounded-3xl border border-border">
              <Image src="/assets/brand/club-vata.jpg" alt="Cours collectifs Vata" fill className="object-cover transition duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.3em] text-text/90">Studio + cours</p>
            </div>
            <div className="relative min-h-[187px] overflow-hidden rounded-3xl border border-border">
              <Image src="/assets/brand/club-almatrium.jpg" alt="Coaching Almatrium" fill className="object-cover transition duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.3em] text-text/90">Coaching expert</p>
            </div>
          </div>
        </div>
      </section>

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

      <MediaMosaicSection
        eyebrow="Planning visuel"
        title="Plus de mouvement, moins de friction."
        subtitle="Projetez votre semaine en un coup d oeil: studios, coaching, ambiance club et application en continu."
        items={[
          { src: '/assets/brand/club-vata.jpg', alt: 'Studio et planning Vata', label: 'Studios Vata' },
          { src: '/assets/brand/club-almatrium.jpg', alt: 'Coaching Almatrium', label: 'Coaching Almatrium' },
          { src: '/assets/brand/app.jpg', alt: 'Reservation via application FORM+', label: 'Reserver sur app' }
        ]}
        ctaLabel="Voir les abonnements"
        ctaHref="/abonnements"
      />

      <PlanningHowItWorks />
      <PlanningAppPromo />
      <ZenEcosystemSection compact />
      <PlanningFinalCta />
    </div>
  );
}
