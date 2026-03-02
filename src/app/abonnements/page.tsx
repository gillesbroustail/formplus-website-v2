import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { MembershipComparison } from '@/components/MembershipComparison';
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

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Etape 1</p>
          <h2 className="mt-2 text-lg font-semibold">Choisissez votre objectif</h2>
          <p className="mt-2 text-sm text-muted">Cours collectifs, musculation, liberté, famille ou Studio +ZEN.</p>
          <Link href="/abonnements?parcours=cours-collectifs#comparateur-abonnements" className="mt-4 inline-flex text-xs uppercase tracking-[0.24em] text-primary hover:text-highlight">
            Commencer
          </Link>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Etape 2</p>
          <h2 className="mt-2 text-lg font-semibold">Comparez les formules</h2>
          <p className="mt-2 text-sm text-muted">Visualisez les prix, engagements, avantages et différences en un coup d’œil.</p>
          <Link href="/abonnements?parcours=family#comparateur-abonnements" className="mt-4 inline-flex text-xs uppercase tracking-[0.24em] text-primary hover:text-highlight">
            Voir FAMILY+
          </Link>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Etape 3</p>
          <h2 className="mt-2 text-lg font-semibold">Finalisez rapidement</h2>
          <p className="mt-2 text-sm text-muted">Cliquez sur “Je choisis” puis l’équipe FORM+ vous recontacte pour finaliser.</p>
          <Link href="/abonnements?parcours=studio-zen#comparateur-abonnements" className="mt-4 inline-flex text-xs uppercase tracking-[0.24em] text-primary hover:text-highlight">
            Voir Studio +ZEN
          </Link>
        </article>
      </div>

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
