import Link from 'next/link';
import { getZenOffers } from '@/lib/zenPricing';

export async function StudioZenPricingSection() {
  const offers = await getZenOffers();

  return (
    <section className="mt-14" aria-label="Tarifs Studio +ZEN">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Tarifs importes Studio +ZEN</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tightest md:text-4xl">
          Rejoindre Studio +ZEN depuis FORM+
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted md:text-base">
          Ces offres sont synchronisees depuis +ZEN. Selectionnez une formule et nous vous contactons pour finaliser l'inscription.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {offers.map((offer) => (
          <article key={offer.id} className="rounded-3xl border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Studio +ZEN</p>
            <h3 className="mt-3 text-2xl font-semibold">{offer.name}</h3>
            <p className="mt-3 text-3xl font-display">{offer.price}</p>
            <p className="mt-1 text-sm text-muted">{offer.cadence}</p>
            <ul className="mt-5 grid gap-2 text-sm text-muted">
              {offer.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/contact?interest=pluszen&offer=${encodeURIComponent(offer.name)}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-border py-3 text-xs uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary"
            >
              Rejoindre Studio +ZEN
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted">
        Source: <a href="https://www.pluszen.nc/Home/Formule" target="_blank" rel="noopener noreferrer" className="hover:text-text">pluszen.nc/Home/Formule</a>
      </p>
    </section>
  );
}
