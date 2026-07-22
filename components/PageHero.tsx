import Image from 'next/image';
import Link from 'next/link';

type Props = {
  badge: string;
  title: React.ReactNode;
  description: string;
  image: string;
  cta?: { href: string; label: string };
};

export default function PageHero({ badge, title, description, image, cta }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-20 lg:px-8 lg:pt-16 lg:pb-28">
        <span className="badge animate-rise">{badge}</span>
        <h1 className="animate-rise delay-1 mt-6 max-w-3xl text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="animate-rise delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>
        {cta && (
          <div className="animate-rise delay-3 mt-9">
            <Link href={cta.href} className="btn-primary">{cta.label}</Link>
          </div>
        )}
      </div>
    </section>
  );
}
