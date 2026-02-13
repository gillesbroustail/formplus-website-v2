import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <main style={{ padding: "72px 0" }}>
      <div className="container">
        <SectionHeader
          title="Contact"
          subtitle="Notre équipe est à votre disposition pour toute demande."
        />

        <ContactForm />
      </div>
    </main>
  );
}