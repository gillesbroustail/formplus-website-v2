import { Clock3 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/Button';

export function PlanningHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-[#050505] px-6 py-16 md:px-12 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.09),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.06),transparent_35%)]" aria-hidden="true" />
      <div className="relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Planning fitness Noumea</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tightest text-text md:text-6xl">
          Votre planning{' '}
          <span className="inline-flex translate-y-1 align-middle md:translate-y-2">
            <Image
              src="/assets/brand/formplus-logo.png"
              alt="FORM+"
              width={640}
              height={181}
              className="h-8 w-auto md:h-11"
              priority
            />
          </span>{' '}
          —{' '}
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-text/40 align-middle md:h-9 md:w-9">
              <Clock3 className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
            </span>
            <span>qu&apos;un horaire, une expérience.</span>
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
          Organisez vos cours collectifs avec clarte et precision: planning en temps reel, filtres intelligents et parcours premium pour votre salle de sport a Noumea.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#planning-realtime">Explorer le planning</Button>
          <Button href="/abonnements" variant="secondary">Devenir membre</Button>
        </div>
      </div>
    </section>
  );
}
