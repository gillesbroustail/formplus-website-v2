export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  commitment: string;
  description: string;
  highlights: string[];
  tag?: string;
  category: string;
};

export const membershipSections = [
  {
    id: 'sur-mesure',
    title: 'Sur mesure',
    subtitle: "Parce qu’un seul abonnement ne convient pas à tout un chacun, choisissez celui qui vous convient le mieux."
  },
  {
    id: 'sans-engagement',
    title: 'Sans engagement',
    subtitle: "Pour découvrir FORM+ ou garder votre liberté, 4 solutions sans engagement."
  },
  {
    id: 'cours-collectifs',
    title: 'Cours collectifs',
    subtitle: "Des expériences de fitness fun, motivantes et efficaces."
  },
  {
    id: 'muscu-cardio',
    title: 'Muscu cardio',
    subtitle: "Deux formules pour la muscu et le cardio, selon votre engagement."
  },
  {
    id: 'family',
    title: 'FAMILY+',
    subtitle: "Jusqu’à 5 co‑utilisateurs selon la formule retenue."
  }
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'pack-10',
    name: 'PACK 10',
    price: '14 885 F',
    cadence: 'Paiement unique',
    commitment: 'Validité 3 mois',
    description: '10 séances, accès aux 3 clubs.',
    highlights: ['10 séances', 'Accès aux 3 clubs', 'Accès aux cours'],
    category: 'sur-mesure'
  },
  {
    id: 'pack-25',
    name: 'PACK 25',
    price: '29 770 F',
    cadence: 'Paiement unique',
    commitment: 'Validité 6 mois',
    description: '25 séances, accès aux 3 clubs.',
    highlights: ['25 séances', 'Accès aux 3 clubs', 'Accès aux cours'],
    category: 'sur-mesure'
  },
  {
    id: 'liberte',
    name: 'Liberté',
    price: '14 990 F / mois',
    cadence: 'Mensuel',
    commitment: '1 prélèvement min.',
    description: 'Séances illimitées, accès aux 3 clubs.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours'],
    tag: 'Sans engagement',
    category: 'sans-engagement'
  },
  {
    id: 'amc-liberte',
    name: 'AMC Liberté',
    price: '6 490 F / mois',
    cadence: 'Mensuel',
    commitment: '3 prélèvements min.',
    description: 'Séances illimitées, accès aux 3 clubs.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours non inclus'],
    tag: 'Populaire',
    category: 'muscu-cardio'
  },
  {
    id: 'amc-liberte-se',
    name: 'AMC Liberté',
    price: '6 490 F / mois',
    cadence: 'Mensuel',
    commitment: '3 prélèvements min.',
    description: 'Séances illimitées, accès aux 3 clubs.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours non inclus'],
    category: 'sans-engagement'
  },
  {
    id: 'amc-12',
    name: 'AMC 12 mois',
    price: '5 490 F / mois',
    cadence: 'Mensuel',
    commitment: '12 prélèvements min.',
    description: 'Séances illimitées, accès aux 3 clubs.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours non inclus'],
    category: 'muscu-cardio'
  },
  {
    id: 'club',
    name: 'CLUB',
    price: '9 990 F / mois',
    cadence: 'Mensuel',
    commitment: 'Résiliable mensuellement après 12 prélèvements.',
    description: 'Séances illimitées, accès aux 3 clubs + cours collectifs.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours', 'Suspension possible à 945 F/mois'],
    category: 'cours-collectifs'
  },
  {
    id: 'matinaux',
    name: 'MATINAUX',
    price: '6 990 F / mois',
    cadence: 'Mensuel',
    commitment: 'Résiliable mensuellement après 12 prélèvements.',
    description: 'Séances illimitées et cours collectifs sur créneaux matinaux.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours', 'Suspension possible à 945 F/mois'],
    category: 'cours-collectifs'
  },
  {
    id: 'collectif-liberte',
    name: 'LIBERTÉ',
    price: '14 990 F / mois',
    cadence: 'Mensuel',
    commitment: 'Résiliable mensuellement après 1 seul prélèvement.',
    description: 'Séances illimitées et cours collectifs, liberté totale.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours', 'Suspension possible à 945 F/mois'],
    category: 'cours-collectifs'
  },
  {
    id: 'family-3',
    name: 'FAMILY 3',
    price: '23 990 F / mois',
    cadence: 'Mensuel',
    commitment: 'Résiliable mensuellement après 12 prélèvements.',
    description: 'Jusqu’à 3 co‑utilisateurs, accès illimité.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours', 'Suspension possible à 945 F/mois'],
    category: 'family'
  },
  {
    id: 'family-4',
    name: 'FAMILY 4',
    price: '26 990 F / mois',
    cadence: 'Mensuel',
    commitment: 'Résiliable mensuellement après 12 prélèvements.',
    description: 'Jusqu’à 4 co‑utilisateurs, accès illimité.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours', 'Suspension possible à 945 F/mois'],
    category: 'family'
  },
  {
    id: 'family-5',
    name: 'FAMILY 5',
    price: '29 990 F / mois',
    cadence: 'Mensuel',
    commitment: 'Résiliable mensuellement après 12 prélèvements.',
    description: 'Jusqu’à 5 co‑utilisateurs, accès illimité.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours', 'Suspension possible à 945 F/mois'],
    category: 'family'
  },
  {
    id: 'family-6',
    name: 'FAMILY 6',
    price: '32 990 F / mois',
    cadence: 'Mensuel',
    commitment: 'Résiliable mensuellement après 12 prélèvements.',
    description: 'Jusqu’à 6 co‑utilisateurs, accès illimité.',
    highlights: ['Séances illimitées', 'Accès aux 3 clubs', 'Accès aux cours', 'Suspension possible à 945 F/mois'],
    category: 'family'
  }
];
