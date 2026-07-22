import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';

export const metadata: Metadata = {
  title: 'Versatile Auto | Premium Mobile Automotive Services',
  description:
    'Mobile vehicle detailing, paintless dent removal, paint protection film, panel beating, spray painting, wrapping and fitment — premium automotive care brought to your doorstep.',
};

const services = [
  {
    title: 'Mobile Vehicle Detailing',
    description:
      'A showroom shine delivered to your doorstep. Premium products, expert hands, and a finish that feels brand new.',
  },
  {
    title: 'Paint Protection Film',
    description:
      'Mobile application of protective film that shields your paintwork from scratches, chips and the elements.',
  },
  {
    title: 'Paintless Dent Removal',
    description:
      'Dents, dings and hail damage removed to a factory finish — no respray needed, done at your location.',
  },
  {
    title: 'Panel Beating',
    description:
      'Scratches and body imperfections repaired with advanced techniques and a flawless colour-matched finish.',
  },
  {
    title: 'Spray Painting',
    description:
      'Premium spray painting with high-quality materials — refresh your colour or reinvent it entirely.',
  },
  {
    title: 'Vehicle Wrapping & Signage',
    description:
      'Turn your vehicle into a rolling advertisement with high-quality wraps and signage, applied at your location.',
  },
  {
    title: 'Electronic & Aesthetic Fitment',
    description:
      'From premium audio to sleek interior upgrades — advanced technology and style, fitted wherever you are.',
  },
];

const faqs = [
  {
    question: 'What types of vehicles do you service?',
    answer:
      'We service a wide range of vehicles including cars, trucks, yellow goods and motorcycles. Our team is equipped to handle various makes and models.',
  },
  {
    question: 'How does the mobile repair process work?',
    answer:
      'Our mobile service brings expert technicians to your location. We assess the work, provide a quote, and complete the job on-site for your convenience.',
  },
  {
    question: 'Can you repair dents without respraying?',
    answer:
      'Yes — with paintless dent removal we massage dents, dings and hail damage out from behind the panel, preserving your factory paint. It’s faster and more affordable than a respray, and we do it at your location.',
  },
  {
    question: 'What is paint protection film?',
    answer:
      'A transparent layer applied to your vehicle’s surface that protects it from scratches, chips and environmental damage, preserving a long-lasting finish.',
  },
  {
    question: 'Do you offer custom fitment services?',
    answer:
      'Yes — custom fitment tailored to your vehicle’s specific needs, including accessory installations and aesthetic enhancements.',
  },
  {
    question: 'How do I schedule a service appointment?',
    answer:
      'Contact us through the website, WhatsApp, or call us directly. We’ll arrange a convenient time for our mobile team to visit you.',
  },
  {
    question: 'What are your pricing options?',
    answer:
      'Pricing varies by service. We offer competitive rates and always provide a detailed quote before commencing any work.',
  },
  {
    question: 'Can you handle large vehicles like trucks?',
    answer:
      'Absolutely — our team is experienced with large vehicles such as trucks and can accommodate their specific service needs.',
  },
  {
    question: 'What is the benefit of mobile vehicle wrapping?',
    answer:
      'We apply high-quality wraps at your location — professional results without the downtime of visiting a shop.',
  },
  {
    question: 'How long does a typical service take?',
    answer:
      'Duration depends on the complexity of the job. We work efficiently while maintaining the highest standards of quality.',
  },
];

export default function AutomotivePage() {
  return (
    <>
      <PageHero
        badge="Premium mobile automotive care"
        title={
          <>
            Versatile <span className="text-gradient">Auto</span>
          </>
        }
        description="Exceptional mobile repair, detailing and protective film services for cars, trucks and motorcycles — high-quality care brought directly to your doorstep."
        image="/images/hero-automotive.jpg"
        cta={{ href: '/contact', label: 'Book a service' }}
      />

      <div className="hairline" />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <span className="badge">Our services</span>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          Every vehicle deserves <span className="text-gradient">a touch of excellence</span>
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
      </section>

      <section className="border-y border-white/6 bg-panel/50">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">100% Satisfaction Guarantee</h2>
              <p className="mt-2 max-w-xl text-white/60">
                We take pride in our attention to detail and strive to exceed your expectations with every service.
              </p>
            </div>
            <a href="https://wa.me/27827021100" target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:py-24">
        <div className="text-center">
          <span className="badge">FAQs</span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title={<>Transform your vehicle into a <span className="text-gradient">masterpiece</span></>}
        description="Book a mobile service today — we bring the workshop to you."
        primaryLabel="Book a service"
      />
    </>
  );
}
