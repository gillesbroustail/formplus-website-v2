export type Club = {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  phone: string;
  hours: string[];
  amenities: string[];
  heroImage: string;
  description: string;
};

export const clubs: Club[] = [
  {
    id: 'vata',
    name: 'FORM+ Vata',
    slug: 'vata',
    address: 'Cadre exceptionnel à Vata',
    city: 'Nouméa',
    phone: '+687 20 30 40',
    hours: ['Lun - Ven: 05:00 - 22:00', 'Sam: 06:00 - 20:00', 'Dim: 07:00 - 18:00'],
    amenities: ['Plateau musculation premium', 'Cours collectifs +ZEN', 'Cardio connecté', 'Coach dédié', 'Espaces récupération'],
    heroImage: '/assets/placeholders/club.svg',
    description: "Un cadre exceptionnel pour s’entraîner avec une équipe experte et des équipements premium."
  },
  {
    id: 'almatrium',
    name: 'FORM+ Almatrium',
    slug: 'almatrium',
    address: '33 bis rue de l’Alma, Centre‑Ville',
    city: 'Nouméa',
    phone: '+687 21 31 41',
    hours: ['Lun - Ven: 05:30 - 21:30', 'Sam: 06:00 - 19:00', 'Dim: 07:00 - 18:00'],
    amenities: ['Studio cycling', 'Zone HIIT', 'Coaching personnalisé', 'Lockers premium'],
    heroImage: '/assets/placeholders/club.svg',
    description: "Le club du centre‑ville pour s’entraîner au cœur de Nouméa."
  },
  {
    id: 'normandie',
    name: 'FORM+ Normandie',
    slug: 'normandie',
    address: 'Normandie, Nouméa',
    city: 'Nouméa',
    phone: '+687 22 32 42',
    hours: ['Lun - Ven: 05:00 - 21:00', 'Sam: 06:00 - 19:00', 'Dim: 07:00 - 18:00'],
    amenities: ['Cours collectifs', 'Zone stretching', 'Sauna & récupération', 'Parking privé'],
    heroImage: '/assets/placeholders/club.svg',
    description: "Le plus grand club de fitness de Nouvelle‑Calédonie."
  }
];
