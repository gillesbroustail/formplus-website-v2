import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-text transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.plusZen} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.3em] text-muted hover:text-text">+ZEN</a>
          <Button href="/planning" variant="secondary">Planning</Button>
          <Button href="/abonnements">S'inscrire</Button>
        </div>
      </div>
    </header>
  );
}
