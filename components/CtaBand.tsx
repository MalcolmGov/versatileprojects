import Link from 'next/link';

type Props = {
  title: React.ReactNode;
  description: string;
  primaryLabel?: string;
};

export default function CtaBand({ title, description, primaryLabel = 'Get in touch' }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 text-center lg:py-24">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-xl text-white/60">{description}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link href="/contact" className="btn-primary">{primaryLabel}</Link>
        <a href="https://wa.me/27827021100" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
