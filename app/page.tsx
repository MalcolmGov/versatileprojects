import Link from 'next/link';
import Image from 'next/image';

const divisions = [
  {
    href: '/transport',
    title: 'Transport & Logistics Brokers',
    image: '/images/hero-transport.jpg',
    description:
      'Freight management, customs brokerage, warehousing and supply chain consulting — engineered for reliability.',
  },
  {
    href: '/supplies',
    title: 'General Supplies & Engineering',
    image: '/images/hero-supplies.jpg',
    description:
      'Steel, raw materials, skip placement, fabrication and precision engineering for industry and home.',
  },
  {
    href: '/automotive',
    title: 'Versatile Auto',
    image: '/images/hero-automotive.jpg',
    description:
      'Premium mobile detailing, dent repair, paint protection film, wrapping and fitment — brought to your doorstep.',
  },
];

const pillars = [
  { title: 'One accountable partner', description: 'Three specialist divisions under one roof — a single point of contact from quote to completion.' },
  { title: 'Mobile-first service', description: 'From automotive care to skip placement, we come to you. Convenience without compromise.' },
  { title: 'Rapid, transparent quotes', description: 'Detailed quotes before any work begins. Competitive rates, no surprises.' },
  { title: 'Quality guaranteed', description: 'A 100% satisfaction guarantee backed by skilled professionals and premium materials.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-home.jpg" alt="" fill priority className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-24 lg:px-8 lg:pt-40 lg:pb-36">
          <span className="badge animate-rise">Transport · Supply · Automotive</span>
          <h1 className="animate-rise delay-1 mt-6 max-w-3xl text-4xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl">
            Versatile by name.
            <br />
            <span className="text-gradient">Exceptional</span> by standard.
          </h1>
          <p className="animate-rise delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Versatile Projects is your single partner for transport & logistics brokering, industrial supply &
            engineering, and premium mobile automotive care — delivered with precision across South Africa.
          </p>
          <div className="animate-rise delay-3 mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get in touch</Link>
            <a href="#divisions" className="btn-ghost">Explore our divisions</a>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Divisions */}
      <section id="divisions" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <span className="badge">What we do</span>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-5xl">
          Three divisions. <span className="text-gradient">One standard of excellence.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {divisions.map((d) => (
            <Link key={d.href} href={d.href} className="glass-card group overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{d.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint">
                  Explore
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-white/6 bg-panel/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="badge">Why Versatile Projects</span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Built on precision, powered by partnership.
              </h2>
              <p className="mt-5 leading-relaxed text-white/60">
                We partner closely with every client to understand their unique challenges — then deliver customised
                solutions that surpass expectations. From sourcing strategy to the final polish, we guide you through
                every phase.
              </p>
              <Link href="/contact" className="btn-primary mt-8">Start a conversation</Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="glass-card p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-mint/10 text-mint">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center lg:py-28">
        <h2 className="text-3xl font-bold text-white sm:text-5xl">
          Ready to work with <span className="text-gradient">one partner</span> who does it all?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/60">
          Tell us what you need moved, supplied, built or transformed — we&apos;ll handle the rest.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">Request a free quote</Link>
          <a href="https://wa.me/27827021100" target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
