import Link from 'next/link';
import Image from 'next/image';
import { site, nav } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Image src="/images/logo-full.png" alt="Versatile Projects" width={302} height={120} className="h-24 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            One partner for transport & logistics, industrial supply and premium automotive care — delivered with
            precision across South Africa.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">Divisions</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/transport" className="text-white/70 transition-colors hover:text-mint">Transport & Logistics Brokers</Link></li>
            <li><Link href="/supplies" className="text-white/70 transition-colors hover:text-mint">General Supplies & Engineering</Link></li>
            <li><Link href="/automotive" className="text-white/70 transition-colors hover:text-mint">Versatile Auto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition-colors hover:text-mint">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">Get in touch</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={site.phoneHref} className="text-white/70 transition-colors hover:text-mint">{site.phone}</a></li>
            <li><a href={site.emailHref} className="text-white/70 transition-colors hover:text-mint">{site.email}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-mint">WhatsApp us</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8 py-6 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Versatile Projects. All rights reserved.
      </div>
    </footer>
  );
}
