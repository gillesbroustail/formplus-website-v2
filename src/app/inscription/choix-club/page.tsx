import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/Button';
import { clubs } from '@/config/clubs';
import { membershipPlans } from '@/config/memberships';

export const metadata = {
  title: 'Inscription | Choix du club'
};

type PageProps = {
  searchParams?: {
    plan?: string | string[];
  };
};

function readSingle(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default function ChoixClubPage({ searchParams }: PageProps) {
  const planId = readSingle(searchParams?.plan);
  const plan = membershipPlans.find((item) => item.id === planId);
  const safePlanId = plan?.id ?? 'sur-mesure';
  const planLabel = plan?.name ?? 'Offre FORM+';

  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Etape 1"
        title="Choisissez votre club"
        subtitle="Selectionnez votre club principal pour poursuivre l'inscription."
      />

      <div className="mb-8 rounded-2xl border border-border bg-surface p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Offre selectionnee</p>
        <p className="mt-2 text-2xl font-display font-semibold">{planLabel}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {clubs.map((club) => (
          <article key={club.id} className="overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="relative h-52">
              <Image src={club.heroImage} alt={club.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-semibold">{club.name}</h3>
              <p className="mt-2 text-sm text-muted">{club.address}</p>
              <p className="mt-1 text-sm text-muted">{club.phone}</p>
              <div className="mt-5">
                <Button href={`/inscription/coordonnees?plan=${safePlanId}&club=${club.slug}`}>
                  Choisir ce club
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/abonnements" className="text-sm text-muted hover:text-text">
          Retour aux abonnements
        </Link>
      </div>
    </div>
  );
}
