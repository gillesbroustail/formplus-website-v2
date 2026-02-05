import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Oxygen } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCta } from '@/components/MobileCta';
import { siteConfig } from '@/config/site';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700']
});
const oxygen = Oxygen({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '700']
});

export const metadata: Metadata = {
  title: {
    default: 'FORM+ | Fitness premium',
    template: '%s | FORM+'
  },
  description: siteConfig.description,
  metadataBase: new URL('https://formplus.nc'),
  openGraph: {
    title: 'FORM+ | Fitness premium',
    description: siteConfig.description,
    url: 'https://formplus.nc',
    siteName: 'FORM+',
    locale: 'fr_FR',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${oxygen.variable}`}>
      <body className="bg-bg text-text">
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
