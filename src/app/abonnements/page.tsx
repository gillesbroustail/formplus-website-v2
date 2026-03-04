import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { MembershipComparison } from '@/components/MembershipComparison';
import { Button } from '@/components/Button';
import { MediaMosaicSection } from '@/components/MediaMosaicSection';
import { HeroVideoBackdrop } from '@/components/HeroVideoBackdrop';
import { mediaRepository } from '@/config/mediaRepository';

export const metadata = {
  title: 'Abonnements FORM+ | Salle de sport premium à Nouméa',
  description:
    'Comparez les abonnements FORM+ à Nouméa: cours collectifs, muscu cardio, FAMILY+ et Studio +ZEN. Trouvez la formule qui vous correspond.'
};

export default function AbonnementsPage() {
  return (
    <div className="container-wide section-pad">
      <section className="relative overflow-hidden rounded-[2rem] border border-border p-8 md:p-12">
        <HeroVideoBackdrop
          posterSrc={mediaRepository.abonnements.hero.poster.src}
          videoSrc={mediaRepository.abonnements.hero.video}
          alt={mediaRepository.abonnements.hero.poster.alt}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/75 to-bg/40" />
        <div className="relative">
        <SectionHeader
          eyebrow="Abonnements"
          title="Le sur mesure de FORM+"
          subtitle="Comparez nos formules en quelques secondes et activez votre parcours premium."
        />
        <p className="max-w-xl text-sm text-muted">Un parcours clair: choisissez une categorie, comparez, puis cliquez sur “Je choisis”.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#comparateur-abonnements">Comparer les offres</Button>
          <Button href="/contact" variant="secondary">Parler a un conseiller</Button>
        </div>
        </div>
      </section>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        <p className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-text">
          Choisissez votre objectif: cours, liberte, family ou Studio +ZEN.
        </p>
        <p className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-text">
          Comparez prix, engagement et avantages en un coup d oeil.
        </p>
        <p className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-text">
          Cliquez sur “Je choisis”, l equipe FORM+ finalise avec vous.
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.24em] text-muted">
        <Link href="/abonnements?parcours=cours-collectifs#comparateur-abonnements" className="hover:text-text">Commencer</Link>
        <Link href="/abonnements?parcours=family#comparateur-abonnements" className="hover:text-text">Voir FAMILY+</Link>
        <Link href="/abonnements?parcours=studio-zen#comparateur-abonnements" className="hover:text-text">Voir Studio +ZEN</Link>
      </div>

      <MediaMosaicSection
        eyebrow="Signature FORM+"
        title="Des abonnements penses pour un mode de vie actif."
        subtitle="Visualisez l environnement, comparez les parcours et choisissez la formule qui vous accompagne vraiment."
        items={[
          mediaRepository.abonnements.signatureMosaic.primary,
          mediaRepository.abonnements.signatureMosaic.secondaryTop,
          mediaRepository.abonnements.signatureMosaic.secondaryBottom
        ]}
        ctaLabel="Voir le planning"
        ctaHref="/planning"
      />

      <div className="mt-12">
        <MembershipComparison />
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Infos pratiques</p>
        <ul className="mt-4 grid gap-2 text-sm text-muted">
          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Possibilité de suspension d’abonnement (945 F / 4 semaines) selon conditions.</li>
          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Accès multi-clubs selon formule.</li>
          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Réservations via application membre.</li>
        </ul>
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Envie d’un essai FORM+ ?</h2>
            <p className="mt-2 text-sm text-muted">
              Réservez un essai personnalisé et découvrez la formule qui vous correspond.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Réserver un essai</Button>
            <Button href="/planning" variant="secondary">Voir le planning</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
