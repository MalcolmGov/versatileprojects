import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Transport & Logistics Brokers',
  description:
    'Freight management, customs brokerage, warehousing & distribution and supply chain consulting — streamline your transport with Versatile Projects.',
};

const services = [
  {
    title: 'Freight Management',
    description:
      'Optimise your supply chain with tailored freight management — timely, cost-effective delivery on every load.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 8h14v9H1zM15 11h4l4 4v2h-8" /><circle cx="6" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: 'Customs Brokerage',
    description:
      'We navigate complex customs regulations with ease, guaranteeing smooth, compliant cross-border transactions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
      </svg>
    ),
  },
  {
    title: 'Warehousing & Distribution',
    description:
      'Secure, strategically located warehousing that streamlines your inventory management and distribution.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V9l9-6 9 6v12M9 21v-8h6v8" />
      </svg>
    ),
  },
  {
    title: 'Supply Chain Consulting',
    description:
      'Expert consulting tailored to your business — unlock operational efficiency across your entire chain.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
      </svg>
    ),
  },
];

const steps = [
  { step: '01', title: 'Consult', description: 'We unpack your logistics needs, volumes and routes.' },
  { step: '02', title: 'Plan', description: 'A tailored transport strategy with transparent pricing.' },
  { step: '03', title: 'Execute', description: 'Freight moves — managed, tracked and communicated.' },
  { step: '04', title: 'Optimise', description: 'Continuous review to reduce cost and lift reliability.' },
];

export default function TransportPage() {
  return (
    <>
      <PageHero
        badge="Efficient solutions for your logistics needs"
        title={
          <>
            Streamline your transport with <span className="text-gradient">Versatile Projects</span>
          </>
        }
        description="Expert brokering across freight, customs, warehousing and consulting — enhancing your supply chain's efficiency and reliability from first mile to last."
        image="/images/hero-transport.jpg"
        cta={{ href: '/contact', label: 'Enquire now' }}
      />

      <div className="hairline" />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <span className="badge">Comprehensive transport solutions</span>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Everything your supply chain needs, <span className="text-gradient">brokered by experts</span>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/10 text-mint">{s.icon}</div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/6 bg-panel/50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <span className="badge">How we work</span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">From enquiry to optimised operations</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-7">
                <span className="font-(family-name:--font-display) text-3xl font-bold text-mint/40">{s.step}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Unlock your transport solutions <span className="text-gradient">today</span></>}
        description="Reach out for expert guidance on optimising your logistics and transport operations. Our team is ready to assist."
        primaryLabel="Schedule a consultation"
      />
    </>
  );
}
