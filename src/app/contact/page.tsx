import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Contact"
        title="Parlons de votre prochaine transformation"
        subtitle="Laissez-nous vos coordonnées, notre équipe vous répond rapidement."
      />
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-border bg-surface p-6">
          <ContactForm />
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Nous trouver</p>
          <div className="mt-4 grid gap-4 text-sm text-muted">
            <p>FORM+ Vata · Rue Anatole France</p>
            <p>FORM+ Almatrium · Avenue de l’Alma</p>
            <p>FORM+ Normandie · Rue de Normandie</p>
          </div>
          <div className="mt-6 rounded-2xl bg-bg p-4 text-sm text-muted">
            Carte interactive à intégrer ici.
          </div>
          <div className="mt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Email</p>
            <p className="mt-2 text-sm text-muted">info@formplus.nc</p>
          </div>
        </div>
      </div>
    </div>
  );
}
