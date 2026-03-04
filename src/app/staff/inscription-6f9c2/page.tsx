import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { DeciplusSignupEmbed } from '@/components/DeciplusSignupEmbed';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Preparation express FORM+',
  description: 'Preparation express via QR code pour accelerer votre accueil au club.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true
    }
  }
};

export default function StaffInscriptionPage() {
  const signupUrl = `${siteConfig.memberArea.baseUrl}/signUp`;

  return (
    <div className="container-wide section-pad">
      <section className="rounded-[2rem] border border-border bg-surface/60 p-8 md:p-12">
        <SectionHeader
          eyebrow="Bravo"
          title="Excellent choix."
          subtitle="Gagnez du temps maintenant pour visiter le club et decouvrir nos solutions le plus vite possible."
        />
        <p className="mt-2 text-sm text-muted">Temps estime: 30 secondes a 2 minutes.</p>
      </section>

      <section className="mt-10" aria-label="Parcours Deciplus">
        <div className="mx-auto max-w-6xl">
          <DeciplusSignupEmbed src={signupUrl} />
        </div>
      </section>
    </div>
  );
}
