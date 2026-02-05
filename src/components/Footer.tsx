import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-wide py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-display font-semibold">FORM+</p>
          <p className="mt-3 text-muted max-w-sm">Le fitness premium en Nouvelle-Calédonie. Clubs, coaching et expériences +ZEN.</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href={siteConfig.socials.instagram} className="text-muted hover:text-text">Instagram</Link>
            <Link href={siteConfig.socials.facebook} className="text-muted hover:text-text">Facebook</Link>
            <Link href={siteConfig.socials.twitter} className="text-muted hover:text-text">Twitter</Link>
            <a href={`mailto:${siteConfig.socials.email}`} className="text-muted hover:text-text">Email</a>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Navigation</p>
          <div className="mt-4 grid gap-2 text-sm">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-muted hover:text-text">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Légal</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/mentions-legales" className="text-muted hover:text-text">Mentions légales</Link>
            <Link href="/protection-donnees" className="text-muted hover:text-text">Protection des données</Link>
          </div>
          <div className="mt-6 text-sm text-muted">
            <p>Applications</p>
            <div className="mt-2 flex gap-3">
              <a href={siteConfig.appLinks.ios} target="_blank" rel="noreferrer">iOS</a>
              <a href={siteConfig.appLinks.android} target="_blank" rel="noreferrer">Android</a>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Newsletter</p>
            <div className="mt-3 flex items-center gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-border bg-bg px-4 py-2 text-xs"
                aria-label="Email newsletter"
              />
              <button className="rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-[0.3em] text-bg">OK</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">© 2026 FORM+. Tous droits réservés.</div>
    </footer>
  );
}
