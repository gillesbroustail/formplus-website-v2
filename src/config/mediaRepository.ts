export type MediaAsset = {
  src: string;
  alt: string;
};

export type MediaTile = MediaAsset & {
  label: string;
};

// Single source of truth for website media.
// To swap media, only edit paths/alt/labels in this file.
export const mediaRepository = {
  brand: {
    logo: {
      src: '/assets/brand/formplus-logo.png',
      alt: 'FORM+'
    }
  },
  home: {
    hero: {
      poster: {
        src: '/assets/brand/hero.jpg',
        alt: 'FORM+ performance'
      },
      video: '/assets/brand/hero-loop.mp4'
    },
    clubsMosaic: {
      primary: {
        src: '/assets/brand/club-vata.jpg',
        alt: 'Studio FORM+ Vata',
        label: 'FORM+ Vata'
      },
      secondaryTop: {
        src: '/assets/brand/club-almatrium.jpg',
        alt: 'Studio FORM+ Almatrium',
        label: 'FORM+ Almatrium'
      },
      secondaryBottom: {
        src: '/assets/brand/app.jpg',
        alt: 'Application FORM+',
        label: 'App & booking'
      }
    },
    atmosphereMosaic: {
      primary: {
        src: '/assets/brand/hero.jpg',
        alt: 'Ambiance entrainement FORM+',
        label: 'Intensite quotidienne'
      },
      secondaryTop: {
        src: '/assets/brand/club-vata.jpg',
        alt: 'Espace club FORM+ Vata',
        label: 'Club Vata'
      },
      secondaryBottom: {
        src: '/assets/brand/club-almatrium.jpg',
        alt: 'Espace club FORM+ Almatrium',
        label: 'Club Almatrium'
      }
    },
    experienceBreak: {
      poster: {
        src: '/assets/brand/club-vata.jpg',
        alt: 'Atmosphere club FORM+'
      },
      video: '/assets/brand/club-loop.mp4'
    },
    appVisual: {
      src: '/assets/brand/app.jpg',
      alt: 'Application FORM+'
    }
  },
  planning: {
    hero: {
      poster: {
        src: '/assets/brand/hero.jpg',
        alt: 'Planning FORM+'
      },
      video: '/assets/brand/planning-loop.mp4'
    },
    visualMosaic: {
      primary: {
        src: '/assets/brand/club-vata.jpg',
        alt: 'Studio et planning Vata',
        label: 'Studios Vata'
      },
      secondaryTop: {
        src: '/assets/brand/club-almatrium.jpg',
        alt: 'Coaching Almatrium',
        label: 'Coaching Almatrium'
      },
      secondaryBottom: {
        src: '/assets/brand/app.jpg',
        alt: 'Reservation via application FORM+',
        label: 'Reserver sur app'
      }
    },
    topMosaic: {
      primary: {
        src: '/assets/brand/hero.jpg',
        alt: "Rythme d'entrainement FORM+",
        label: 'Rythme premium'
      },
      secondaryTop: {
        src: '/assets/brand/club-vata.jpg',
        alt: 'Cours collectifs Vata',
        label: 'Studio + cours'
      },
      secondaryBottom: {
        src: '/assets/brand/club-almatrium.jpg',
        alt: 'Coaching Almatrium',
        label: 'Coaching expert'
      }
    }
  },
  abonnements: {
    hero: {
      poster: {
        src: '/assets/brand/hero.jpg',
        alt: 'Abonnements FORM+'
      },
      video: '/assets/brand/abonnements-loop.mp4'
    },
    signatureMosaic: {
      primary: {
        src: '/assets/brand/hero.jpg',
        alt: 'Training premium FORM+',
        label: 'Training premium'
      },
      secondaryTop: {
        src: '/assets/brand/club-vata.jpg',
        alt: 'Cours collectifs a Vata',
        label: 'Cours collectifs'
      },
      secondaryBottom: {
        src: '/assets/brand/app.jpg',
        alt: 'Application membre FORM+',
        label: 'App & QR access'
      }
    }
  }
} as const;
