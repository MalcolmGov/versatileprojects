import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Mobile Vehicle Detailing',
    description: 'A showroom shine delivered to your doorstep — premium products, expert hands, a finish that feels brand new.',
  },
  {
    title: 'Paintless Dent Removal',
    description: 'Dents, dings and hail damage removed to a factory finish — no respray needed, done at your location.',
  },
  {
    title: 'Paint Protection Film',
    description: 'Mobile application of protective film that shields your paintwork from scratches, chips and the elements.',
  },
  {
    title: 'Panel Beating & Spray Painting',
    description: 'Body imperfections repaired and premium colour-matched finishes, restoring your vehicle to its best.',
  },
  {
    title: 'Vehicle Wrapping & Signage',
    description: 'Turn your vehicle into a rolling advertisement with high-quality wraps and signage, applied on site.',
  },
  {
    title: 'Electronic & Aesthetic Fitment',
    description: 'From premium audio to sleek interior upgrades — advanced technology and style, fitted wherever you are.',
  },
];

const pillars = [
  { title: 'We come to you', description: 'A fully mobile workshop — every service delivered at your home, office or roadside. Convenience without compromise.' },
  { title: 'Rapid, transparent quotes', description: 'Detailed quotes before any work begins. Competitive rates, no surprises.' },
  { title: 'Cars, bikes & more', description: 'From daily drivers and motorcycles to trucks and yellow goods — we handle a wide range of vehicles.' },
  { title: 'Quality guaranteed', description: 'A 100% satisfaction guarantee backed by skilled professionals and premium materials.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-automotive.jpg" alt="" fill priority className="object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-24 lg:px-8 lg:pt-16 lg:pb-32">
          <span className="badge animate-rise">Premium mobile automotive care</span>
          <h1 className="animate-rise delay-1 mt-6 max-w-3xl text-4xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl">
            Versatile by name.
            <br />
            <span className="text-gradient">Exceptional</span> by standard.
          </h1>
          <p className="animate-rise delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Expert mobile detailing, dent repair, paint protection and more for cars, bikes and trucks — high-quality
            care brought directly to your doorstep across South Africa.
          </p>
          <div className="animate-rise delay-3 mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Book a service</Link>
            <a href="#services" className="btn-ghost">Explore our services</a>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <span className="badge">What we do</span>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-5xl">
          Every vehicle deserves <span className="text-gradient">a touch of excellence.</span>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="glass-card p-7">
              <span className="font-(family-name:--font-display) text-sm font-bold text-mint/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/automotive" className="btn-primary">See all services</Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-white/6 bg-panel/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="badge">Why Versatile</span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Built on precision, powered by partnership.
              </h2>
              <p className="mt-5 leading-relaxed text-white/60">
                We treat every vehicle as if it were our own — combining premium products, skilled technicians and the
                convenience of a mobile service that comes to you. From the first quote to the final polish, we guide
                you through every step.
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
          Ready to give your vehicle <span className="text-gradient">the care it deserves?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/60">
          Tell us what your vehicle needs — we&apos;ll bring the workshop to you.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">Request a free quote</Link>
          <a href="https://wa.me/27827021100" target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
