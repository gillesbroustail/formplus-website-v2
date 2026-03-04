import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { DeciplusSignupEmbed } from '@/components/DeciplusSignupEmbed';
import { FaqAccordion } from '@/components/FaqAccordion';
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
  const benefits = [
    '30 secondes a 2 minutes',
    'Accueil plus rapide',
    'Visite club immediate',
    'Solutions FORM+ presentees sans attente'
  ];
  const socialProof = [
    '4,8/5 sur Google',
    '2 clubs actifs a Noumea',
    'Parcours officiel securise via Deciplus'
  ];
  const included = [
    'Votre fiche deja pre-remplie avant votre passage',
    'Un accueil plus fluide au club',
    'Plus de temps pour visiter les espaces',
    'Presentation rapide des solutions adaptees a votre objectif'
  ];
  const faqItems = [
    {
      question: 'Pourquoi scanner ce QR code ?',
      answer:
        'Pour gagner du temps a l accueil et passer plus vite a l essentiel: visiter le club et decouvrir nos solutions.'
    },
    {
      question: 'Combien de temps cela prend ?',
      answer:
        'En general, entre 30 secondes et 2 minutes selon les informations a renseigner.'
    },
    {
      question: 'Mes informations sont-elles securisees ?',
      answer:
        'Oui. Le formulaire est heberge sur Deciplus, la plateforme officielle utilisee par FORM+.'
    },
    {
      question: 'Que faire si le formulaire ne charge pas ?',
      answer:
        'Utilisez le lien "Ouvrir dans un nouvel onglet" sous le module pour continuer sans blocage.'
    }
  ];

  return (
    <div className="container-wide section-pad">
      <section className="rounded-[2rem] border border-border bg-surface/60 p-8 md:p-12">
        <SectionHeader
          eyebrow="Bravo"
          title="Excellent choix."
          subtitle="Gagnez du temps maintenant pour visiter le club et decouvrir nos solutions le plus vite possible."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-muted">Gain de temps</h2>
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
      </section>

      <section className="mt-10 rounded-[2rem] border border-border bg-surface/60 p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-text md:text-4xl">Resultat</h2>
            <p className="mt-3 text-sm text-muted">Moins d attente, plus de visite et de conseil.</p>
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
            <p className="mt-3 text-sm text-muted">Reponses rapides.</p>
            <div className="mt-6">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-label="Parcours Deciplus">
        <div className="mx-auto max-w-6xl">
          <DeciplusSignupEmbed src={signupUrl} />
        </div>
      </section>
    </div>
  );
}
