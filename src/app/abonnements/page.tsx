import { SectionHeader } from '@/components/SectionHeader';
import { MembershipComparison } from '@/components/MembershipComparison';
import { membershipSections } from '@/config/memberships';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Abonnements FORM+ | Salle de sport premium à Nouméa',
  description:
    'Comparez les abonnements FORM+ à Nouméa: cours collectifs, muscu cardio, FAMILY+ et Studio +ZEN. Trouvez la formule qui vous correspond.'
};

export default function AbonnementsPage() {
  return (
    <div className="container-wide section-pad">
      <section className="rounded-[2rem] border border-border bg-surface/60 p-8 md:p-12">
        <SectionHeader
          eyebrow="Abonnements"
          title="Le sur mesure de FORM+"
          subtitle="Comparez rapidement nos formules, puis choisissez votre offre en moins d’une minute."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-muted">Cours collectifs + muscu cardio</div>
          <div className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-muted">Avec ou sans engagement</div>
          <div className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-muted">Formules FAMILY+ et Studio +ZEN</div>
          <div className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-muted">Accompagnement par l’équipe FORM+</div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#comparateur-abonnements">Comparer les offres</Button>
          <Button href="/contact" variant="secondary">Parler à un conseiller</Button>
        </div>
      </section>

      <div className="mt-16 grid gap-6 md:grid-cols-5">
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

      <div className="mt-16 rounded-3xl border border-border bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Infos pratiques</p>
        <ul className="mt-4 grid gap-2 text-sm text-muted">
          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Possibilité de suspension d’abonnement (945 F / mois) selon conditions.</li>
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
