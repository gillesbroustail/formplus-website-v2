import Image from 'next/image';
import { Button } from '@/components/Button';
import { SectionHeader } from '@/components/SectionHeader';
import { ClubFinder } from '@/components/ClubFinder';
import { MembershipComparison } from '@/components/MembershipComparison';
import { FaqAccordion } from '@/components/FaqAccordion';
import { getContent } from '@/content';
import { siteConfig } from '@/config/site';

const content = getContent('fr');

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[90vh] overflow-hidden">
        <Image
          src="/assets/placeholders/hero.svg"
          alt="FORM+ performance"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
        <div className="relative container-wide flex min-h-[90vh] flex-col justify-center py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Fitness premium · Nouméa</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-display font-semibold tracking-tightest md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{content.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/abonnements">{content.hero.primaryCta}</Button>
            <Button href="/abonnements" variant="secondary">{content.hero.secondaryCta}</Button>
            <Button href="/contact" variant="ghost">Essai</Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-muted">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-semibold text-text">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Ce que vous obtenez"
            title="Un écosystème complet pour votre performance"
            subtitle="Chaque détail est conçu pour offrir une expérience premium, du coaching à la récupération."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {content.valueProps.map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-surface p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <ClubFinder />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Abonnements"
            title="Choisissez la formule qui vous ressemble"
            subtitle="Des formules flexibles et transparentes, inspirées des meilleures expériences internationales."
          />
          <MembershipComparison />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="My Fitness Connecté"
              title={content.appPromo.title}
              subtitle="Pilotez votre entraînement avec des données précises et un planning toujours à jour."
            />
            <ul className="grid gap-3 text-sm text-muted">
              {content.appPromo.bullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              MY FITNESS CONNECTÉ by FORM+ vous donne tout ce dont vous avez besoin pour un entraînement sûr, motivant et orienté résultats.
            </p>
            <Button href="/contact" className="mt-8">Découvrir l’app</Button>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/assets/placeholders/app.svg" alt="Application FORM+" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Ils parlent de nous"
            title="Une communauté engagée, des résultats visibles"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: 'Un club premium, une énergie incroyable.', name: 'Camille · Vata' },
              { quote: 'Des coachs ultra présents et un planning riche.', name: 'Jules · Almatrium' },
              { quote: 'Le meilleur équilibre entre muscu et bien-être.', name: 'Sofia · Normandie' }
            ].map((item) => (
              <div key={item.name} className="rounded-3xl border border-border bg-surface p-6">
                <p className="text-lg">“{item.quote}”</p>
                <p className="mt-4 text-sm text-muted">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <SectionHeader
              eyebrow="Nous suivre"
              title="Inspirez-vous au quotidien"
              subtitle="Suivez FORM+ pour les entraînements, conseils et succès de la communauté."
            />
            <div className="flex gap-6 text-sm text-muted">
              <a className="hover:text-text" href={siteConfig.socials.instagram}>Instagram</a>
              <a className="hover:text-text" href={siteConfig.socials.facebook}>Facebook</a>
              <a className="hover:text-text" href={siteConfig.socials.twitter}>Twitter</a>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-bg p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Stats</p>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-muted">Membres actifs</span>
                <span className="text-lg font-semibold">+2 000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Cours par semaine</span>
                <span className="text-lg font-semibold">50+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Note Google</span>
                <span className="text-lg font-semibold">4,8 / 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <SectionHeader
            eyebrow="FAQ"
            title="On répond à vos questions"
          />
          <FaqAccordion items={content.faq} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide rounded-3xl border border-border bg-gradient-to-r from-primary to-[#ff8a3d] p-10 text-bg">
          <h2 className="text-3xl font-display font-semibold">Prêt à rejoindre FORM+ ?</h2>
          <p className="mt-3 max-w-2xl text-sm text-bg/80">
            Réservez un essai, découvrez nos clubs et choisissez votre formule idéale.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/abonnements" className="bg-bg text-text">S'inscrire</Button>
            <Button href="/contact" variant="secondary" className="border-bg text-bg">Essai</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
