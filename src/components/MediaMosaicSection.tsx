import Image from 'next/image';
import { Button } from '@/components/Button';

type MediaItem = {
  src: string;
  alt: string;
  label: string;
};

type MediaMosaicSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: [MediaItem, MediaItem, MediaItem];
  ctaLabel?: string;
  ctaHref?: string;
};

export function MediaMosaicSection({
  eyebrow,
  title,
  subtitle,
  items,
  ctaLabel,
  ctaHref
}: MediaMosaicSectionProps) {
  return (
    <section className="section-pad pt-2">
      <div className="rounded-[2rem] border border-border bg-surface/60 p-6 md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted">{eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tightest md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted md:text-base">{subtitle}</p>
          </div>
          {ctaLabel && ctaHref ? (
            <Button href={ctaHref} variant="secondary">
              {ctaLabel}
            </Button>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-border">
            <Image
              src={items[0].src}
              alt={items[0].alt}
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-text/90">{items[0].label}</p>
          </div>
          <div className="grid gap-4">
            {[items[1], items[2]].map((item) => (
              <div key={item.label} className="relative min-h-[202px] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
                <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.3em] text-text/90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
