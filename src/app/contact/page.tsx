import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact'
};
export default function MembershipsPage() {
  return (
    <main style={{ padding: "72px 0" }}>
      <div className="container">
        <h1 className="h2">Adhésions</h1>
        <p className="lead">On peut structurer tes offres premium ici.</p>
      </div>
    </main>
  );
}