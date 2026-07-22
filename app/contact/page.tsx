import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Versatile Projects — call, WhatsApp or email us for quotes on transport, supplies and automotive services.',
};

const channels = [
  {
    title: 'Call us',
    detail: site.phone,
    href: site.phoneHref,
    action: 'Call now',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.6 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    detail: 'Chat to us instantly',
    href: site.whatsapp,
    action: 'Open WhatsApp',
    external: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    detail: site.email,
    href: site.emailHref,
    action: 'Email us',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-16 lg:px-8 lg:pt-16">
        <span className="badge animate-rise">Contact us</span>
        <h1 className="animate-rise delay-1 mt-6 max-w-2xl text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-6xl">
          Let&apos;s turn your vision <span className="text-gradient">into reality</span>
        </h1>
        <p className="animate-rise delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
          Whether it&apos;s freight to move, steel to supply or a vehicle to transform — reach out and we&apos;ll take
          it from there.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="glass-card group p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/10 text-mint">{c.icon}</div>
              <h2 className="text-xl font-bold text-white">{c.title}</h2>
              <p className="mt-2 text-white/60">{c.detail}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint">
                {c.action}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className="glass-card mt-10 p-8 text-center lg:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need a <span className="text-gradient">free quote</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/60">
            Send us a WhatsApp or email with what you need — we&apos;ll respond with a detailed, no-obligation quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Request on WhatsApp</a>
            <a href={site.emailHref} className="btn-ghost">Request by email</a>
          </div>
        </div>
      </section>
    </>
  );
}
