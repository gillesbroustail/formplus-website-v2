import Link from 'next/link';
import { Button } from '@/components/Button';
import { siteConfig } from '@/config/site';

type ZenEcosystemSectionProps = {
  compact?: boolean;
};

export function ZenEcosystemSection({ compact = false }: ZenEcosystemSectionProps) {
  return (
    <section className={compact ? 'mt-12' : 'section-pad bg-surface'} aria-label="FORM+ et +ZEN">
      <div className="container-wide rounded-2xl border border-border bg-[#0b0b0b] p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">FORM+ x +ZEN</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          +ZEN est au coeur de FORM+ Vata.
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-muted md:text-base">
          Les membres +ZEN accedent a l’univers FORM+ (musculation, cardio, planning multi-clubs)
          et aux experiences signature +ZEN: Reformer Pilates, Fly Yoga, Yoga et Pilates.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">FORM+</p>
            <p className="mt-2 text-sm text-muted">Musculation, cardio, coaching, cours collectifs et acces multi-clubs.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Studio +ZEN</p>
            <p className="mt-2 text-sm text-muted">Reformer Pilates, Fly Yoga, Yoga et Pilates dans un cadre studio premium.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Experience combinee</p>
            <p className="mt-2 text-sm text-muted">Un seul ecosysteme pour performance, bien-etre et progression quotidienne.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={siteConfig.plusZen}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-text transition hover:border-primary"
          >
            Voir Studio +ZEN
          </a>
          <Button href="/contact?interest=pluszen" variant="secondary">Je m'interesse a +ZEN</Button>
        </div>
      </div>
    </section>
  );
}
