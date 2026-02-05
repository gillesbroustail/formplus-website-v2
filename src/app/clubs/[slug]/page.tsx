import Image from 'next/image';
import { notFound } from 'next/navigation';
import { clubs } from '@/config/clubs';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/Button';

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return clubs.map((club) => ({ slug: club.slug }));
}

export function generateMetadata({ params }: Props) {
  const club = clubs.find((item) => item.slug === params.slug);
  if (!club) return {};
  return { title: club.name };
}

export default function ClubDetailPage({ params }: Props) {
  const club = clubs.find((item) => item.slug === params.slug);
  if (!club) return notFound();

  return (
    <div>
      <section className="relative h-[60vh]">
        <Image src={club.heroImage} alt={club.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="relative container-wide flex h-full flex-col justify-end pb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Club FORM+</p>
          <h1 className="mt-4 text-4xl font-display font-semibold">{club.name}</h1>
          <p className="mt-2 text-muted">{club.address}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Expérience"
              title="Un club pensé pour performer"
              subtitle={club.description}
            />
            <div className="grid gap-3 text-sm text-muted">
              {club.amenities.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Horaires</p>
            <div className="mt-4 grid gap-2 text-sm text-muted">
              {club.hours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
            <p className="mt-2 text-sm text-muted">{club.phone}</p>
            <Button href="/contact" className="mt-6 w-full">Nous contacter</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
