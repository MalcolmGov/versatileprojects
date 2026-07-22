import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'General Supplies & Engineering',
  description:
    'Steel and raw materials, skip placement, recycling & logistics, fabrication, petroleum sourcing and precision engineering — comprehensive supply solutions from Versatile Projects.',
};

const services = [
  { title: 'Skip Placement', description: 'Fast, reliable skip delivery and collection for garden, renovation and general waste.' },
  { title: 'Steel Removal', description: 'Efficient removal and responsible handling of scrap and structural steel.' },
  { title: 'Raw Materials', description: 'Sourcing and supply of quality steel and raw materials at competitive rates.' },
  { title: 'Recycling & Logistics', description: 'Sustainable recycling programmes with the logistics to match.' },
  { title: 'Design', description: 'Practical, precise design work that takes projects from concept to drawing.' },
  { title: 'Fabrication', description: 'Skilled fabrication delivered to spec, on time, every time.' },
  { title: 'Petroleum Sourcing', description: 'Dependable petroleum product sourcing for industry and fleet.' },
  { title: 'General Engineering', description: 'Precision engineering services for maintenance, repair and manufacture.' },
];

const skipUses = ['Garden waste', 'Renovation waste', 'Spring cleaning', 'General waste'];

export default function SuppliesPage() {
  return (
    <>
      <PageHero
        badge="Comprehensive supply solutions"
        title={
          <>
            Steel, supply & <span className="text-gradient">precision engineering</span>
          </>
        }
        description="Your go-to expert in steel and raw materials — with top-notch solutions in skip placement, recycling, logistics and precision engineering, tailored to your project."
        image="/images/hero-supplies.jpg"
        cta={{ href: '/contact', label: 'Get a quote' }}
      />

      <div className="hairline" />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="badge">Skip placement</span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Need a skip? <span className="text-gradient">We place it. We collect it.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/60">
              From weekend garden clean-ups to full-scale renovations, our skip placement service delivers the right
              size skip to your door and removes it when you&apos;re done — waste handled responsibly, every time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {skipUses.map((u) => (
                <span key={u} className="rounded-full border border-white/12 bg-white/4 px-4 py-2 text-sm text-white/75">
                  {u}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 lg:p-10">
            <h3 className="text-xl font-bold text-white">Collaboration-driven supply</h3>
            <p className="mt-4 leading-relaxed text-white/60">
              We partner closely with clients to gain a deep understanding of their unique challenges — delivering
              customised solutions that not only meet but surpass expectations. From sustainable sourcing strategies to
              pioneering engineering techniques, we guide you through every phase of the process.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-panel/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <span className="badge">Full service range</span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Explore our <span className="text-gradient">full service range</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.title} className="glass-card p-6">
                <span className="font-(family-name:--font-display) text-sm font-bold text-mint/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Let&apos;s forge a <span className="text-gradient">brighter future</span> together</>}
        description="Tell us what you need supplied, removed, fabricated or engineered — we'll craft the solution."
        primaryLabel="Get a quote"
      />
    </>
  );
}
