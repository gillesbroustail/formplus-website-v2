import Image from 'next/image';
import { notFound } from 'next/navigation';
import { partners } from '@/config/partners';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/Button';

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export function generateMetadata({ params }: Props) {
  const partner = partners.find((item) => item.slug === params.slug);
  if (!partner) return {};
  return { title: partner.name };
}

export default function PartnerDetailPage({ params }: Props) {
  const partner = partners.find((item) => item.slug === params.slug);
  if (!partner) return notFound();

  return (
    <div className="container-wide section-pad">
      <div className="relative h-56 overflow-hidden rounded-3xl border border-border">
        <Image src={partner.media ?? '/assets/placeholders/club.svg'} alt={partner.name} fill className="object-cover" />
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeader
            eyebrow={partner.category}
            title={partner.name}
            subtitle={partner.description}
          />
          <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted">
            Offre : {partner.offer}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-muted">
            {partner.address ? <p>{partner.address}</p> : null}
            {partner.phone ? <p>Tél : {partner.phone}</p> : null}
            {partner.website ? <p>{partner.website}</p> : null}
          </div>
          <p className="mt-4 text-xs text-muted">
            Offre uniquement valable sur présentation de la carte les Amis de FORM+.
          </p>
          <Button href="/contact" className="mt-6 w-full">Nous contacter</Button>
        </div>
      </div>
    </div>
  );
}
