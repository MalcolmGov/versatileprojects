'use client';

import { useState } from 'react';

type Item = { question: string; answer: string };

export default function Faq({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className={`glass-card !transform-none ${open ? '!border-mint/35' : ''}`}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-white">{item.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 text-mint transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            {open && <p className="px-6 pb-6 text-sm leading-relaxed text-white/60">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
