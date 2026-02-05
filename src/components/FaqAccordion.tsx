'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <button
            key={item.question}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className="rounded-2xl border border-border bg-surface p-5 text-left"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-semibold">{item.question}</p>
              <span className="text-primary">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen ? <p className="mt-3 text-sm text-muted">{item.answer}</p> : null}
          </button>
        );
      })}
    </div>
  );
}
