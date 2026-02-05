import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Protection des données'
};

export default function ProtectionPage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Protection des données"
        title="Vos données, notre priorité"
      />
      <div className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
        <h3 className="text-base font-semibold text-text">PROTECTION DES DONNÉES</h3>
        <p className="mt-3">sdfgsdfg</p>
        <p className="mt-3">sdgsdfgs sdfg sg</p>
      </div>
    </div>
  );
}
