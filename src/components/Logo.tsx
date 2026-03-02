import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-text" aria-label="FORM+ accueil">
      <span className="font-display text-[2rem] font-light leading-none tracking-[0.08em] md:text-[2.35rem]">
        FORM
      </span>
      <span className="h-10 w-px bg-text/80 md:h-12" aria-hidden="true" />
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f47c20] md:h-12 md:w-12" aria-hidden="true">
        <span className="absolute h-[2px] w-5 bg-white md:w-6" />
        <span className="absolute h-5 w-[2px] bg-white md:h-6" />
      </span>
    </Link>
  );
}
