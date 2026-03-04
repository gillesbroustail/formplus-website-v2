'use client';

import { useState } from 'react';

export function CopyPageLinkButton() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-text transition duration-200 hover:border-primary"
      >
        Copier le lien
      </button>
      <span className="text-xs text-muted" role="status" aria-live="polite">
        {copied ? 'Copié' : ' '}
      </span>
    </div>
  );
}
