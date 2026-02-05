import Image from 'next/image';
import Link from 'next/link';
import { partners, partnerCategories } from '@/config/partners';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Amis de FORM+'
};

export default function AmisPage() {
  const grouped = partnerCategories.map((category) => ({
    category,
    items: partners.filter((partner) => partner.category === category)
  }));

  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Amis de FORM+"
        title="Un réseau d’avantages premium"
        subtitle="Avec les AMIS DE FORM+ vous économisez dès votre adhésion grâce à nos partenaires."
      />
      <p className="text-sm text-muted max-w-3xl">
        Ce n’est pas un secret qu’un abonnement FORM+ donne droit aux meilleurs équipements, une équipe accueillante et un cadre motivant. Votre carte AMIS DE FORM+ vous ouvre en plus des remises chez nos partenaires.
      </p>
      {grouped.map((group) => (
        <div key={group.category} className="mt-10">
          <h3 className="text-sm uppercase tracking-[0.3em] text-muted">{group.category}</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {group.items.map((partner) => (
              <div key={partner.id} className="rounded-3xl border border-border bg-surface overflow-hidden">
                <div className="relative h-36">
                  <Image src={partner.media ?? '/assets/placeholders/club.svg'} alt={partner.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{partner.name}</h3>
                  <p className="mt-2 text-sm text-muted">{partner.offer}</p>
                  <Link href={`/amis/${partner.slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary">Voir le partenaire</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
