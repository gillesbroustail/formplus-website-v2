import { SectionHeader } from '@/components/SectionHeader';
import { MembershipComparison } from '@/components/MembershipComparison';
import { membershipSections } from '@/config/memberships';
import { Button } from '@/components/Button';

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
      <p className="text-sm text-muted max-w-3xl">
        Cliquez sur Sans engagement, Cours collectifs, Muscu cardio ou FAMILY+ pour comparer les abonnements FORM+ en quelques secondes.
      </p>
      <div className="grid gap-6 md:grid-cols-5 mt-8">
        {membershipSections.map((section) => (
          <div key={section.id} className="rounded-2xl border border-border bg-surface p-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">{section.title}</p>
            <p className="mt-2 text-sm text-muted">{section.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <MembershipComparison />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Sans engagement</p>
          <p className="mt-3 text-sm text-muted">
            Que ce soit pour découvrir FORM+, apporter un complément à votre activité sportive principale ou tout simplement parce que vous aimez être libre de changer vos habitudes, FORM+ vous offre 4 solutions. À vous de choisir.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Cours collectifs</p>
          <p className="mt-3 text-sm text-muted">
            Envie d’expériences de fitness qui garantissent un maximum de fun, de plaisir, de motivation et de résultats ? Optez pour les abonnements avec Cours Collectifs de FORM+.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Muscu cardio</p>
          <p className="mt-3 text-sm text-muted">
            Deux formules vous sont proposées : AMC Liberté à 6 490 F/mois (minimum 3 prélèvements) et AMC à 5 490 F/mois (minimum 12 prélèvements).
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">FAMILY+</p>
          <p className="mt-3 text-sm text-muted">
            Selon la formule retenue, vous pouvez désigner jusqu’à cinq (5) co‑utilisateurs. FAMILY+ est la solution pour toute la famille.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Infos pratiques</p>
        <p className="mt-3 text-sm text-muted">
          Possibilité de suspension d’abonnement (945 F / mois) selon conditions.
        </p>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
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
