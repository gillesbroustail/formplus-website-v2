import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-bg">+</span>
      <span className="font-display text-xl">FORM+</span>
    </Link>
  );
}
