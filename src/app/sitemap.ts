import { MetadataRoute } from 'next';
import { clubs } from '@/config/clubs';
import { partners } from '@/config/partners';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://formplus.nc';

  const staticRoutes = [
    '',
    '/clubs',
    '/abonnements',
    '/cours',
    '/planning',
    '/espace-membre',
    '/amis',
    '/contact',
    '/mentions-legales',
    '/protection-donnees'
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));

  const clubRoutes = clubs.map((club) => ({
    url: `${base}/clubs/${club.slug}`,
    lastModified: new Date()
  }));

  const partnerRoutes = partners.map((partner) => ({
    url: `${base}/amis/${partner.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...clubRoutes, ...partnerRoutes];
}
