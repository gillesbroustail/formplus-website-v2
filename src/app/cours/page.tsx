import { classes } from '@/config/classes';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Cours'
};

export default function CoursPage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Cours collectifs"
        title="Des expériences +ZEN pour tous les niveaux"
        subtitle="Un planning riche, des coachs experts et une ambiance immersive."
      />
      <div className="rounded-3xl border border-border bg-surface p-4">
        <iframe
          title="Liste des cours FORM+"
          src="https://www.fitmetrix.io/webportal/classlist/7593a526-c78d-e511-9458-0e0c69fd6629"
          className="h-[900px] w-full rounded-2xl border-0"
        />
        <p className="mt-3 text-sm text-muted">
          Si la liste ne se charge pas, contactez votre club pour réserver un cours.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {classes.map((item) => (
          <div key={item.id} className="rounded-3xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-muted">{item.duration}</span>
            </div>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted">
              <span>{item.level}</span>
              <span>{item.focus}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
