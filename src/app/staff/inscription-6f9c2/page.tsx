import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { DeciplusSignupEmbed } from '@/components/DeciplusSignupEmbed';
import { CopyPageLinkButton } from '@/components/CopyPageLinkButton';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Page interne inscription',
  description: 'Page interne FORM+ pour inscription Deciplus.',
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
        <p className="mb-4 inline-flex rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">
          Page interne - ne pas partager publiquement
        </p>
        <SectionHeader
          eyebrow="Staff"
          title="Rejoindre FORM+ (interne)"
          subtitle="Cette page est reservee a l’equipe FORM+ pour orienter des prospects vers l’inscription officielle Deciplus."
        />
        <div className="grid gap-3 text-sm text-muted md:grid-cols-3">
          <p className="rounded-2xl border border-border bg-bg px-4 py-3">1. Partagez ce lien uniquement en interne.</p>
          <p className="rounded-2xl border border-border bg-bg px-4 py-3">2. Le formulaire Deciplus ci-dessous est la source officielle.</p>
          <p className="rounded-2xl border border-border bg-bg px-4 py-3">3. Si besoin, ouvrez le formulaire dans un nouvel onglet.</p>
        </div>
        <div className="mt-6">
          <CopyPageLinkButton />
        </div>
      </section>

      <section className="mt-10">
        <DeciplusSignupEmbed src={signupUrl} />
      </section>
    </div>
  );
}
