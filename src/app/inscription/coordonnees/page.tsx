import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { clubs } from '@/config/clubs';
import { membershipPlans } from '@/config/memberships';
import { SignupContactForm } from '@/components/SignupContactForm';

export const metadata = {
  title: 'Inscription | Coordonnees'
};

type PageProps = {
  searchParams?: {
    plan?: string | string[];
    club?: string | string[];
  };
};

function readSingle(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default function CoordonneesPage({ searchParams }: PageProps) {
  const planId = readSingle(searchParams?.plan);
  const clubSlug = readSingle(searchParams?.club);

  const plan = membershipPlans.find((item) => item.id === planId);
  const club = clubs.find((item) => item.slug === clubSlug);

  const planName = plan?.name ?? 'Offre FORM+';
  const clubName = club?.name ?? 'FORM+';

  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Etape 2"
        title="Vos coordonnees"
        subtitle="Remplissez ce formulaire. Notre equipe vous recontacte pour finaliser votre inscription."
      />

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Offre</p>
          <p className="mt-2 text-xl font-display font-semibold">{planName}</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Club</p>
          <p className="mt-2 text-xl font-display font-semibold">{clubName}</p>
        </div>
      </div>

      <SignupContactForm planName={planName} clubName={clubName} />

      <div className="mt-8 flex flex-wrap gap-5 text-sm">
        <Link href={`/inscription/choix-club?plan=${plan?.id ?? 'sur-mesure'}`} className="text-muted hover:text-text">
          Modifier le club
        </Link>
        <Link href="/abonnements" className="text-muted hover:text-text">
          Retour aux abonnements
        </Link>
      </div>
    </div>
  );
}
