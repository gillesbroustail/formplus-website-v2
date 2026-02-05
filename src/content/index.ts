export const content = {
  fr: {
    hero: {
      title: 'Des abonnements sur mesure, une énergie unique',
      subtitle: "FORM+ vous propose des formules personnalisées, des clubs premium et des expériences motivantes.",
      primaryCta: "S'inscrire",
      secondaryCta: 'Voir les abonnements'
    },
    valueProps: [
      {
        title: 'Équipements premium',
        description: 'Des zones muscu & cardio connectées, pensées pour la performance.'
      },
      {
        title: 'Coaching expert',
        description: 'Des coachs FORM+ pour guider, corriger, motiver.'
      },
      {
        title: 'Cours collectifs +ZEN',
        description: 'Des expériences immersives, énergisantes, ultra-efficaces.'
      },
      {
        title: 'App connectée',
        description: 'Statistiques, planning par club, réservations et offres.'
      },
      {
        title: 'Communauté premium',
        description: 'Un réseau d’amis FORM+ et d’avantages exclusifs.'
      }
    ],
    appPromo: {
      title: 'MY FITNESS CONNECTÉ by FORM+',
      bullets: [
        'Consulter vos statistiques d’entraînement et votre fréquence cardiaque en temps réel.',
        'Visualiser le planning de chaque Club.',
        'Réserver vos cours, ateliers, bilans, programmes, séances de coaching.',
        'Bénéficier de promotions et offres exclusives.'
      ]
    },
    faq: [
      {
        question: "Quels sont les engagements ?",
        answer: "Certaines formules sont sans engagement, d'autres nécessitent un nombre minimum de prélèvements. Les détails sont indiqués pour chaque abonnement."
      },
      {
        question: "Puis-je suspendre mon abonnement ?",
        answer: "Oui, la suspension est possible pour 945 F par mois selon les conditions de votre formule."
      },
      {
        question: "Puis-je ajouter des membres FAMILY+ ?",
        answer: "Oui, FAMILY+ permet d’ajouter plusieurs co‑utilisateurs selon la formule choisie."
      },
      {
        question: "Les cours sont-ils inclus ?",
        answer: "L'accès aux cours collectifs dépend de la formule choisie."
      },
      {
        question: "Comment réserver un cours ?",
        answer: "Réservez via l’app MY FITNESS CONNECTÉ ou directement au club."
      }
    ]
  },
  en: {
    hero: {
      title: 'Premium performance by FORM+',
      subtitle: 'Clubs, coaching, and energy that transform your routine.',
      primaryCta: 'Join',
      secondaryCta: 'View memberships'
    },
    valueProps: [],
    appPromo: {
      title: 'Connected fitness by FORM+',
      bullets: []
    },
    faq: []
  }
};

export type LocaleKey = keyof typeof content;

export const getContent = (locale: LocaleKey) => content[locale];
