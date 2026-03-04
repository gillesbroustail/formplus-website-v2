import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { DeciplusSignupEmbed } from '@/components/DeciplusSignupEmbed';
import { CopyPageLinkButton } from '@/components/CopyPageLinkButton';
import { FaqAccordion } from '@/components/FaqAccordion';
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
  const benefits = [
    'Acces multi-clubs FORM+',
    'Cours collectifs et espaces musculation/cardio',
    'Reservation via app et acces QR',
    'Accompagnement equipe FORM+ sur place'
  ];
  const socialProof = [
    '4,8/5 sur Google',
    '2 clubs actifs a Noumea',
    'Inscription officielle centralisee via Deciplus'
  ];
  const included = [
    'Un parcours d inscription officiel et unifie',
    'Un suivi commercial simplifie pour l equipe',
    'Des informations prospect centralisees',
    'Une transition fluide vers l app membre'
  ];
  const faqItems = [
    {
      question: 'A quoi sert cette page ?',
      answer:
        'Cette page staff centralise l inscription Deciplus dans un cadre FORM+ pour accompagner les prospects sans changer le flux officiel.'
    },
    {
      question: 'Puis-je partager ce lien en public ?',
      answer:
        'Non. Cette URL est reservee a l equipe interne. Pour le public, utilisez les pages visibles du site FORM+.'
    },
    {
      question: 'Pourquoi le formulaire est dans un iframe ?',
      answer:
        'Deciplus reste la source de verite pour l inscription. L iframe permet une experience integree tout en gardant le process officiel.'
    },
    {
      question: 'Que faire si le formulaire ne charge pas ?',
      answer:
        'Utilisez le lien "Ouvrir l inscription dans un nouvel onglet" sous le module pour continuer sans blocage.'
    }
  ];

  return (
    <div className="container-wide section-pad">
      <section className="rounded-[2rem] border border-border bg-surface/60 p-8 md:p-12">
        <p className="mb-4 inline-flex rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">
          Page interne - ne pas partager publiquement
        </p>
        <SectionHeader
          eyebrow="Staff"
          title="Rejoindre FORM+ (interne)"
          subtitle="Orientez vos prospects vers un parcours premium, tout en gardant Deciplus comme flux d inscription officiel."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted">Benefices cles</h2>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              {benefits.map((benefit) => (
                <li key={benefit} className="rounded-2xl border border-border bg-bg px-4 py-3 text-text">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted">Preuve sociale</h2>
            <div className="mt-4 grid gap-3">
              {socialProof.map((item) => (
                <p key={item} className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-text">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <CopyPageLinkButton />
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-border bg-surface/60 p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-text md:text-4xl">What you get</h2>
            <p className="mt-3 text-sm text-muted">
              Un cadre clair pour votre equipe et une experience lisible pour les prospects.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-muted">
              {included.map((item) => (
                <li key={item} className="rounded-2xl border border-border bg-bg px-4 py-3 text-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-text md:text-4xl">FAQ</h2>
            <p className="mt-3 text-sm text-muted">Reponses rapides pour l utilisation interne.</p>
            <div className="mt-6">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-label="Inscription Deciplus">
        <DeciplusSignupEmbed src={signupUrl} />
      </section>
    </div>
  );
}
