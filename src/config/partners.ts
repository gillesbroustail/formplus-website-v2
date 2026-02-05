export type Partner = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  offer: string;
  address?: string;
  phone?: string;
  website?: string;
  media?: string;
};

export const partnerCategories = [
  'ALIMENTATION - RESTAURATION',
  'AUTO-MOTO-BATEAU',
  'MAISON',
  'SERVICES',
  'SHOPPING'
];

export const partners: Partner[] = [
  {
    id: 'diet-attitude',
    name: "DIET'ATTITUDE",
    slug: 'diet-attitude',
    category: 'ALIMENTATION - RESTAURATION',
    description: "Des offres et remises exceptionnelles pour les adhérents FORM+.",
    offer: '10% de remise sur tous les produits de la boutique.',
    address: '103 rue Auguste Bénébig',
    phone: '28 70 88',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'manutrition',
    name: 'MANUTRITION.NC',
    slug: 'manutrition-nc',
    category: 'ALIMENTATION - RESTAURATION',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '5% de remise supplémentaire sur le 1er achat avec le code AMIFORMPLUS.',
    website: 'www.manutrition.nc',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'la-vie-claire',
    name: 'LA VIE CLAIRE',
    slug: 'la-vie-claire',
    category: 'ALIMENTATION - RESTAURATION',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '5% de remise sur les produits hors promotions.',
    address: '107 Promenade Roger Laroque / 32 rue de la République',
    phone: '28 31 72 / 28 20 01',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'ohana-poke',
    name: 'OHANA POKÉ',
    slug: 'ohana-poke',
    category: 'ALIMENTATION - RESTAURATION',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise sur vos repas.',
    phone: '99 58 88',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'cafe-almatrium',
    name: 'CAFÉ ALMATRIUM',
    slug: 'cafe-almatrium',
    category: 'ALIMENTATION - RESTAURATION',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: 'Commandez votre plat ou votre salade du jour et votre thé ou café est offert.',
    address: 'Galerie Almatrium, angle des rues de l’Alma et Clémenceau',
    phone: '25 10 15',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'attelages-services',
    name: 'ATTELAGES SERVICES',
    slug: 'attelages-services',
    category: 'AUTO-MOTO-BATEAU',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise sur les attelages.',
    address: 'Lot 26 Park Entreprise de Yahoué',
    phone: '43 88 00',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'electric-riders',
    name: 'ELECTRIC RIDERS',
    slug: 'electric-riders',
    category: 'AUTO-MOTO-BATEAU',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% pour les adhérents FORM+ (hors VAE KONA et produits remisés).',
    address: '47 rue Roger Gervolino, Plage de Magentin',
    phone: '257 258',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'ceramic',
    name: 'CÉRAMIC',
    slug: 'ceramic',
    category: 'MAISON',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% TTC sur tout le magasin (hors soldes et promotions).',
    address: '6 route de la Baie des Dames, ZI Ducos',
    phone: '27 23 03',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'pro-jardin',
    name: 'PRO JARDIN',
    slug: 'pro-jardin',
    category: 'MAISON',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise.',
    address: 'PK4, 5 rue Jean Chalier',
    phone: '41 78 00',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'mivi',
    name: 'MIVI',
    slug: 'mivi',
    category: 'MAISON',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise sur les miroirs.',
    address: 'Ducos Factory',
    phone: '24 11 84',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'agence-generale',
    name: "L'AGENCE GENERALE",
    slug: 'agence-generale',
    category: 'SERVICES',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '20% de réduction sur les honoraires de la première location, estimation locative gratuite, 2 mois d’honoraires offerts sur nouveau mandat.',
    address: "35 rue de l'Alma, Centre Ville",
    phone: '27 91 91',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'computheure',
    name: "COMPUT'HEURE",
    slug: 'computheure',
    category: 'SERVICES',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise.',
    address: '213 rue Auguste Bénébig, Magenta',
    phone: '78 88 49',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'ecoblast',
    name: 'ECOBLAST',
    slug: 'ecoblast',
    category: 'SERVICES',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: "10% de remise offerte sur l'application de la membrane INSULTEC.",
    website: 'www.ecoblast.nc',
    phone: '91 91 17',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'graphoprint',
    name: 'GRAPHOPRINT',
    slug: 'graphoprint',
    category: 'SERVICES',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise sur devis.',
    address: "1 rue Martial Danton, Parc d'Entreprise de la Yahoué, Normandie",
    phone: '43 57 14',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'marama',
    name: 'MARAMA',
    slug: 'marama',
    category: 'SHOPPING',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise.',
    address: "33 bis rue de l'Alma, Galerie Almatrium",
    phone: '27 67 29',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'okaidi',
    name: 'OKAÏDI',
    slug: 'okaidi',
    category: 'SHOPPING',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise à partir de 9 500 F d’achat.',
    address: "Galerie Almatrium, Centre Ville, 33 bis rue de l'Alma",
    phone: '25 45 55',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'obaibi',
    name: 'OBAÏBI',
    slug: 'obaibi',
    category: 'SHOPPING',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise à partir de 9 500 F d’achat.',
    address: "Galerie Almatrium, Centre Ville, 33 bis rue de l'Alma",
    phone: '25 45 55',
    media: '/assets/placeholders/club.svg'
  },
  {
    id: 'vakarm',
    name: 'VAKARM',
    slug: 'vakarm',
    category: 'SHOPPING',
    description: "Offres exclusives pour les adhérents FORM+.",
    offer: '10% de remise sur le magasin.',
    phone: '24 83 95',
    media: '/assets/placeholders/club.svg'
  }
];
