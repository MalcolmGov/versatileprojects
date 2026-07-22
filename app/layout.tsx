import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Versatile Projects | Transport, Supplies & Automotive Excellence',
    template: '%s | Versatile Projects',
  },
  description:
    'Versatile Projects is your single partner for transport & logistics brokering, steel & general supplies, precision engineering and premium mobile automotive services across South Africa.',
  openGraph: {
    title: 'Versatile Projects',
    description:
      'Transport & logistics brokering, steel & general supplies, and premium mobile automotive services — delivered with excellence.',
    url: site.url,
    siteName: 'Versatile Projects',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body className="site-bg min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
