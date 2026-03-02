export type ZenOffer = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  highlights: string[];
};

const FALLBACK_OFFERS: ZenOffer[] = [
  {
    id: 'zen-liberte',
    name: 'Studio +ZEN Liberte',
    price: '24 990 F / mois',
    cadence: 'Mensuel',
    highlights: [
      'Acces aux installations et cours collectifs FORM+',
      'Acces a tous les cours Studio +ZEN',
      'Suspension possible (1 990 F / mois supplementaire)'
    ]
  },
  {
    id: 'zen-liberte-jeune',
    name: 'Studio +ZEN Liberte -26 ans',
    price: '19 990 F / mois',
    cadence: 'Mensuel',
    highlights: [
      'Acces aux installations et cours collectifs FORM+',
      'Acces a tous les cours Studio +ZEN',
      'Tarif preferentiel pour les jeunes'
    ]
  },
  {
    id: 'zen-pack-10',
    name: 'PACK 10',
    price: '29 990 F',
    cadence: 'Paiement unique',
    highlights: [
      '10 seances Studio +ZEN',
      'Acces a tous les cours Studio +ZEN'
    ]
  },
  {
    id: 'zen-pack-10-plus',
    name: 'PACK 10+',
    price: '34 990 F',
    cadence: 'Paiement unique',
    highlights: [
      '10+ seances Studio +ZEN',
      'Acces a tous les cours Studio +ZEN'
    ]
  }
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function cleanText(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseOffers(html: string): ZenOffer[] {
  const cards: ZenOffer[] = [];
  const blockRegex = /<h3 class="mg-clear">([^<]+)<\/h3>([\s\S]*?)<h3 class="tc-safety-orange-blaze-orange[\s\S]*?">([^<]+)<\/h3>/gi;

  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(html)) !== null) {
    const name = cleanText(match[1]);
    const body = match[2] || '';
    const price = cleanText(match[3]);

    if (!name || !price) {
      continue;
    }

    const bulletRegex = /<h3 class="mg-md card-bullet-style">([\s\S]*?)<\/h3>/gi;
    const highlightsRaw: string[] = [];
    let bulletMatch: RegExpExecArray | null;

    while ((bulletMatch = bulletRegex.exec(body)) !== null) {
      const text = cleanText(bulletMatch[1]);
      if (text) highlightsRaw.push(text);
    }

    const highlights = highlightsRaw.length > 0 ? highlightsRaw : ['Offre Studio +ZEN'];
    const cadence = /\/\s*mois/i.test(price) ? 'Mensuel' : 'Paiement unique';

    cards.push({
      id: `zen-${slugify(name)}`,
      name,
      price,
      cadence,
      highlights: highlights.slice(0, 4)
    });
  }

  return cards;
}

export async function getZenOffers(): Promise<ZenOffer[]> {
  try {
    const response = await fetch('https://www.pluszen.nc/Home/Formule', {
      next: { revalidate: 60 * 60 * 24 }
    });

    if (!response.ok) {
      return FALLBACK_OFFERS;
    }

    const html = await response.text();
    const parsed = parseOffers(html);

    if (parsed.length === 0) {
      return FALLBACK_OFFERS;
    }

    return parsed;
  } catch {
    return FALLBACK_OFFERS;
  }
}
