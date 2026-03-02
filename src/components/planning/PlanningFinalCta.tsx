import { Button } from '@/components/Button';

export function PlanningFinalCta() {
  return (
    <section className="section-pad pt-2">
      <div className="rounded-2xl border border-border bg-surface px-6 py-10 md:px-10 md:py-12">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Pas encore membre ?</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          Entrez dans un rythme premium, pense pour votre performance.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted md:text-base">
          Decouvrez les offres FORM+ et choisissez un abonnement adapte a vos objectifs, avec acces planning et accompagnement expert.
        </p>
        <div className="mt-8">
          <Button href="/abonnements">Decouvrir nos abonnements</Button>
        </div>
      </div>
    </section>
  );
}
