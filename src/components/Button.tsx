import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children: React.ReactNode;
};

const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

const variants = {
  primary: 'bg-primary text-bg hover:translate-y-[-1px] hover:shadow-soft',
  secondary: 'border border-border text-text hover:border-primary hover:text-primary',
  ghost: 'text-text hover:text-primary'
};

export function Button({ href, variant = 'primary', className, children }: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
