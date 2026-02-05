import Image from 'next/image';
import Link from 'next/link';
import { clubs } from '@/config/clubs';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Clubs'
};

export default function ClubsPage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Nos clubs"
        title="Trois destinations premium pour s'entraîner"
        subtitle="Retrouvez l'expérience FORM+ là où vous vivez."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {clubs.map((club) => (
          <div key={club.id} className="rounded-3xl border border-border bg-surface overflow-hidden">
            <div className="relative h-48">
              <Image src={club.heroImage} alt={club.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{club.name}</h3>
              <p className="mt-2 text-sm text-muted">{club.address}</p>
              <ul className="mt-4 grid gap-2 text-sm text-muted">
                {club.amenities.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`/clubs/${club.slug}`} className="mt-4 inline-flex text-sm font-semibold text-primary">Voir le club</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
