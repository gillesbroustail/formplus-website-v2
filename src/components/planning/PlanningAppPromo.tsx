import Link from 'next/link';

const benefits = [
  'QR code d’acces immediat au club',
  'Reservations instantanees de vos cours',
  'Suivi des seances et progression',
  'Notifications en temps reel'
];

export function PlanningAppPromo() {
  return (
    <section className="section-pad pt-2">
      <div className="rounded-2xl border border-border bg-[#070707] px-6 py-10 md:px-10 md:py-12">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Application FORM+</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          Votre experience FORM+ continue sur mobile.
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {benefits.map((item) => (
            <p key={item} className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text">
              {item}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#" className="inline-flex rounded-xl border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary">
            App Store (bientot)
          </Link>
          <Link href="#" className="inline-flex rounded-xl border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] text-text transition hover:border-primary">
            Google Play (bientot)
          </Link>
        </div>
      </div>
    </section>
  );
}
