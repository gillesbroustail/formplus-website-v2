export type ClassItem = {
  id: string;
  name: string;
  level: string;
  duration: string;
  focus: string;
  description: string;
};

export const classes: ClassItem[] = [
  {
    id: 'zen-flow',
    name: '+ZEN Flow',
    level: 'Tous niveaux',
    duration: '45 min',
    focus: 'Mobilité & respiration',
    description: 'Un flow contrôlé pour renforcer, assouplir et calmer le mental.'
  },
  {
    id: 'strength-lab',
    name: 'Strength Lab',
    level: 'Intermédiaire',
    duration: '50 min',
    focus: 'Force & technique',
    description: 'Des mouvements guidés pour progresser en force et en puissance.'
  },
  {
    id: 'hiit-burn',
    name: 'HIIT Burn',
    level: 'Avancé',
    duration: '35 min',
    focus: 'Cardio & endurance',
    description: 'Un format court et intense pour un maximum de résultats.'
  },
  {
    id: 'ride',
    name: 'FORM+ Ride',
    level: 'Tous niveaux',
    duration: '45 min',
    focus: 'Cycling & énergie',
    description: 'Une ambiance immersive, playlists puissantes et coaching live.'
  },
  {
    id: 'core',
    name: 'Core Sculpt',
    level: 'Tous niveaux',
    duration: '30 min',
    focus: 'Gainage',
    description: 'Un travail ciblé sur le centre pour un corps solide et aligné.'
  },
  {
    id: 'box',
    name: 'Box & Move',
    level: 'Intermédiaire',
    duration: '45 min',
    focus: 'Cardio & coordination',
    description: 'Un mix boxe, agilité et renforcement pour se dépasser.'
  },
  {
    id: 'pilates',
    name: 'Pilates Premium',
    level: 'Tous niveaux',
    duration: '50 min',
    focus: 'Stabilité & posture',
    description: 'Renforcez en profondeur et améliorez votre posture.'
  },
  {
    id: 'metcon',
    name: 'Metcon+',
    level: 'Avancé',
    duration: '40 min',
    focus: 'Métabolique',
    description: 'Circuit intensif pour travailler puissance et endurance.'
  }
];
