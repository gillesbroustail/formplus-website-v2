import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact'
};

type ContactPageProps = {
  searchParams?: {
    interest?: string | string[];
    offer?: string | string[];
  };
};

function readInterest(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === 'pluszen' || raw === 'both' || raw === 'formplus') return raw;
  return 'formplus';
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const initialInterest = readInterest(searchParams?.interest);
  const initialOffer = Array.isArray(searchParams?.offer) ? searchParams?.offer[0] : searchParams?.offer || '';

  return (
    <main style={{ padding: "72px 0" }}>
      <div className="container">
        <SectionHeader
          title="Contact"
          subtitle="Notre équipe est à votre disposition pour toute demande."
        />

        <ContactForm initialInterest={initialInterest} initialOffer={initialOffer} />
      </div>
    </main>
  );
}
