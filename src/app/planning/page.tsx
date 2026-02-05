import { SectionHeader } from '@/components/SectionHeader';
import { TimetableFilters } from '@/components/TimetableFilters';

export const metadata = {
  title: 'Planning'
};

export default function PlanningPage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Planning"
        title="Organisez vos séances en un clin d’œil"
        subtitle="Planning officiel FORM+ (Espace membre). Filtrez par club, jour, cours ou coach."
      />
      <TimetableFilters />
    </div>
  );
}
