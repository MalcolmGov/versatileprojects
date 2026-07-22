'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nav } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Versatile Projects" width={56} height={34} className="h-9 w-auto" />
          <span className="hidden font-(family-name:--font-display) text-lg font-bold tracking-tight text-white sm:block">
            Versatile <span className="text-mint">Projects</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === 'Contact' ? (
              <Link key={item.href} href={item.href} className="btn-primary ml-3 !px-5 !py-2.5 text-sm">
                Contact Us
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href ? 'bg-mint/10 text-mint' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/8 px-5 py-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-medium ${
                pathname === item.href ? 'bg-mint/10 text-mint' : 'text-white/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
