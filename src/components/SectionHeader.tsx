import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-10', align === 'center' ? 'text-center' : 'text-left')}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tightest">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}
