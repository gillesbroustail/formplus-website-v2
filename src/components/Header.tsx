'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
          <Button href="/abonnements">S'inscrire</Button>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted transition hover:text-text md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? 'Fermer' : 'Menu'}
        </button>
      </div>
      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border bg-surface px-4 py-4 md:hidden">
          <nav className="grid gap-3 text-sm uppercase tracking-[0.2em]">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-muted transition hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <a
              href={siteConfig.plusZen}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-muted hover:text-text"
            >
              +ZEN
            </a>
            <Button href="/abonnements" className="w-full">S'inscrire</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
