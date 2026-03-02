import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="FORM+ accueil">
      <Image
        src="/assets/brand/formplus-logo.png"
        alt="FORM+"
        width={640}
        height={181}
        priority
        className="h-8 w-auto md:h-10"
      />
    </Link>
  );
}
