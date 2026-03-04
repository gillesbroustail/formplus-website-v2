import { Clock3 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { HeroVideoBackdrop } from '@/components/HeroVideoBackdrop';
import { mediaRepository } from '@/config/mediaRepository';

export function PlanningHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-[#050505] px-6 py-16 md:px-12 md:py-24">
      <HeroVideoBackdrop
        posterSrc={mediaRepository.planning.hero.poster.src}
        videoSrc={mediaRepository.planning.hero.video}
        alt={mediaRepository.planning.hero.poster.alt}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,5,5,0.88)_20%,rgba(5,5,5,0.65)_55%,rgba(5,5,5,0.35)_100%)]" aria-hidden="true" />
      <div className="relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Planning fitness Noumea</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tightest text-text md:text-6xl">
          <span className="block">Votre planning</span>
          <span className="mt-4 block text-[2rem] leading-[1.08] md:text-[3.25rem]">
            <span className="inline-flex flex-wrap items-center gap-3 md:gap-4">
              <Image
                src={mediaRepository.brand.logo.src}
                alt={mediaRepository.brand.logo.alt}
                width={640}
                height={181}
                className="h-6 w-auto opacity-90 md:h-8"
                priority
              />
              <span className="text-text/40">/</span>
              <span className="inline-flex items-center gap-2">+ qu&apos;un</span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-text/30 bg-surface align-middle md:h-8 md:w-8">
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>, une Xpèrience.</span>
              </span>
            </span>
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
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
