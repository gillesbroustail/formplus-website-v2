import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children: React.ReactNode;
};

const base = 'inline-flex items-center justify-center rounded-md px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

const variants = {
  primary: 'border border-primary bg-primary text-bg hover:bg-transparent hover:text-text',
  secondary: 'border border-border bg-transparent text-text hover:border-primary',
  ghost: 'text-muted hover:text-text'
};

export function Button({ href, variant = 'primary', className, children }: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
