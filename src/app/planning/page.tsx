import { Metadata } from 'next';
import { PlanningHero } from '@/components/planning/PlanningHero';
import { PlanningValueProps } from '@/components/planning/PlanningValueProps';
import { PlanningModuleMock } from '@/components/planning/PlanningModuleMock';
import { PlanningHowItWorks } from '@/components/planning/PlanningHowItWorks';
import { PlanningAppPromo } from '@/components/planning/PlanningAppPromo';
import { PlanningFinalCta } from '@/components/planning/PlanningFinalCta';

export const metadata: Metadata = {
  title: 'Planning FORM+ | Cours fitness premium à Nouméa',
  description:
    'Consultez le planning fitness FORM+ à Nouméa : cours collectifs, RPM, yoga, renforcement et réservation via l’application.'
};

export default function PlanningPage() {
  return (
    <div className="container-wide section-pad">
      <PlanningHero />
      <PlanningValueProps />
      <PlanningModuleMock />
      <PlanningHowItWorks />
      <PlanningAppPromo />
      <PlanningFinalCta />
    </div>
  );
}
