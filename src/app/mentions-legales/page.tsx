import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Mentions légales'
};

export default function MentionsPage() {
  return (
    <div className="container-wide section-pad">
      <SectionHeader
        eyebrow="Mentions légales"
        title="Informations légales"
      />
      <div className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
        <h3 className="text-base font-semibold text-text">Informatique et Libertés</h3>
        <p className="mt-3">
          Les traitements automatisés de données nominatives réalisés à partir du site web formplus.nc ont été traités en conformité avec la loi n°78-17 du 6 janvier 1978 modifiée.
        </p>
        <p className="mt-3">
          Les informations communiquées via les formulaires sont nécessaires pour répondre à votre demande et sont destinées à FORM+, responsable du traitement à des fins de gestion administrative et commerciale.
        </p>
        <p className="mt-3">
          Vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit via le formulaire de contact ou par courrier à : FORM+ – 33 bis rue de l’Alma, 98800 Nouméa.
        </p>
        <p className="mt-3">
          Vous disposez également d’un droit d’opposition au traitement de vos données pour des motifs légitimes et à leur utilisation à des fins de prospection commerciale.
        </p>

        <h3 className="mt-6 text-base font-semibold text-text">Cookies</h3>
        <p className="mt-3">
          Lors de vos visites, un cookie peut s’installer automatiquement sur votre navigateur. Le cookie ne permet pas d’identifier l’utilisateur, mais sert à enregistrer des informations relatives à sa navigation.
        </p>
        <p className="mt-3">
          Vous pouvez refuser les cookies en paramétrant votre navigateur, comme indiqué sur www.cnil.fr.
        </p>
        <p className="mt-3">
          Les utilisateurs doivent respecter les dispositions de la loi n°78-17 du 6 janvier 1978 modifiée.
        </p>

        <h3 className="mt-6 text-base font-semibold text-text">Propriété intellectuelle</h3>
        <p className="mt-3">
          La structure générale, les textes, images et éléments du site sont la propriété exclusive de FORM+. Toute reproduction totale ou partielle est interdite sans autorisation expresse.
        </p>
        <p className="mt-3">
          FORM+ ne saurait être responsable de l’accès à d’autres ressources via des liens externes.
        </p>

        <h3 className="mt-6 text-base font-semibold text-text">Contenu du site</h3>
        <p className="mt-3">
          Le contenu du site et les plannings de cours sont des informations non contractuelles, susceptibles de modifications sans préavis.
        </p>

        <p className="mt-6 text-center text-xs text-muted">
          SARL ALMAGYM – Capital : 1 000 000 XPF – 33 bis rue de l’Alma 98800 Nouméa – R.C.S. Nouméa 2003 B 699 090 (2003 B 308) – RIDET : 0699 090.001
        </p>
      </div>
    </div>
  );
}
