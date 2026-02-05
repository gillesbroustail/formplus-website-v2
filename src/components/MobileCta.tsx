import { Button } from '@/components/Button';

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Button href="/abonnements" className="flex-1 text-xs">S'inscrire</Button>
        <Button href="/planning" variant="secondary" className="flex-1 text-xs">Planning</Button>
      </div>
    </div>
  );
}
