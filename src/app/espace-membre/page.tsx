import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Espace membre'
};

export default function EspaceMembrePage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Espace membre"
        title="Accédez à votre compte FORM+"
        subtitle="Réservations, abonnements et services en ligne via l’espace membre."
      />
      <div className="rounded-3xl border border-border bg-surface p-4">
        <iframe
          title="Espace membre FORM+"
          src={siteConfig.memberArea.baseUrl}
          name="cadreespaceresa"
          width="100%"
          height="1000"
          frameBorder={0}
          className="w-full rounded-2xl border-0"
        />
        <p className="mt-3 text-sm text-muted">
          Si l’espace membre ne se charge pas, ouvrez-le dans un nouvel onglet.
          <a
            href={siteConfig.memberArea.baseUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-primary"
          >
            Ouvrir l’espace membre
          </a>
        </p>
      </div>
    </div>
  );
}
