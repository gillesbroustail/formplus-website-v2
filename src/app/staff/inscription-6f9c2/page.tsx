import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { DeciplusSignupEmbed } from '@/components/DeciplusSignupEmbed';
import { FaqAccordion } from '@/components/FaqAccordion';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Inscription rapide FORM+',
  description: 'Inscription FORM+ rapide via QR code et formulaire officiel Deciplus.',
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
    'Inscription rapide en quelques etapes',
    'Acces multi-clubs FORM+',
    'Cours collectifs + musculation/cardio',
    'Acces QR et reservation via app'
  ];
  const socialProof = [
    '4,8/5 sur Google',
    '2 clubs actifs a Noumea',
    'Inscription officielle securisee via Deciplus'
  ];
  const included = [
    'Creation de votre profil membre',
    'Validation de vos informations en ligne',
    'Demarrage rapide de votre parcours FORM+',
    'Relais simple avec l equipe a l accueil'
  ];
  const faqItems = [
    {
      question: 'Pourquoi scanner ce QR code ?',
      answer:
        'Pour gagner du temps a l accueil. Vous commencez votre inscription ici avant de finaliser avec l equipe FORM+.'
    },
    {
      question: 'Combien de temps cela prend ?',
      answer:
        'La saisie initiale prend environ 30 secondes a 2 minutes selon les informations a renseigner.'
    },
    {
      question: 'Mes informations sont-elles securisees ?',
      answer:
        'Oui. Le formulaire est heberge par Deciplus, la plateforme officielle d inscription de FORM+.'
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
        <SectionHeader
          eyebrow="Inscription Express"
          title="Gagnez du temps en scannant ici"
          subtitle="Bienvenue chez FORM+. Completez votre inscription en ligne maintenant pour accelerer votre accueil au club."
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
      </section>

      <section className="mt-10 rounded-[2rem] border border-border bg-surface/60 p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-text md:text-4xl">What you get</h2>
            <p className="mt-3 text-sm text-muted">Tout ce qu il faut pour demarrer votre experience FORM+ sans attente.</p>
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
            <p className="mt-3 text-sm text-muted">Reponses rapides avant de finaliser votre inscription.</p>
            <div className="mt-6">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-label="Inscription Deciplus">
        <div className="mx-auto max-w-6xl">
          <DeciplusSignupEmbed src={signupUrl} />
        </div>
      </section>
    </div>
  );
}
