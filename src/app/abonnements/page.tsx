import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import { MembershipComparison } from '@/components/MembershipComparison';
import { Button } from '@/components/Button';
import { ZenEcosystemSection } from '@/components/ZenEcosystemSection';
import { StudioZenPricingSection } from '@/components/StudioZenPricingSection';

export const metadata = {
  title: 'Abonnements'
};

export default function AbonnementsPage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Abonnements"
        title="Le sur mesure de FORM+"
        subtitle="Comparez facilement nos formules et trouvez celle qui vous convient le mieux."
      />

      <p className="max-w-3xl text-sm text-muted">
        Cliquez sur les catégories de la comparaison pour trouver rapidement l'offre qui vous correspond.
      </p>

      <div className="mt-12">
        <MembershipComparison />
      </div>

      <section className="mt-14">
        <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-border">
            <Image src="/assets/brand/club-vata.jpg" alt="Abonnements FORM+ premium" fill className="object-cover transition duration-700 hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/15 to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-text/85">Offres premium</p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-border">
            <Image src="/assets/brand/club-almatrium.jpg" alt="Communauté FORM+ et Studio +ZEN" fill className="object-cover transition duration-700 hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/15 to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-text/85">FORM+ x Studio +ZEN</p>
          </div>
        </div>
      </section>

      <StudioZenPricingSection />

      <ZenEcosystemSection compact />

      <div className="mt-16 rounded-3xl border border-border bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Infos pratiques</p>
        <p className="mt-3 text-sm text-muted">
          Possibilité de suspension d’abonnement (945 F / mois) selon conditions.
        </p>
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Envie d’un essai FORM+ ?</h2>
            <p className="mt-2 text-sm text-muted">
              Réservez un essai personnalisé et découvrez la formule qui vous correspond.
            </p>
          </div>
          <Button href="/contact">Réserver un essai</Button>
        </div>
      </div>
    </div>
  );
}
