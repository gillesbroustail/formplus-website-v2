import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Adhésions'
};

export default function AbonnementsPage() {
  return (
    <main style={{ padding: "72px 0" }}>
      <div className="container">
        <SectionHeader
          title="Adhésions"
          subtitle="Découvrez nos formules et trouvez celle qui correspond à votre expérience FORM+."
        />
      </div>
    </main>
  );
}