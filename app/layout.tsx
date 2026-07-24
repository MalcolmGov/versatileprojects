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
    default: 'Versatile Projects | Premium Mobile Automotive Services',
    template: '%s | Versatile Projects',
  },
  description:
    'Premium mobile automotive care across South Africa — detailing, paintless dent removal, paint protection film, panel beating, spray painting, wrapping and fitment, brought directly to your doorstep.',
  openGraph: {
    title: 'Versatile Projects | Premium Mobile Automotive Services',
    description:
      'Mobile detailing, dent repair, paint protection and more for cars, bikes and trucks — high-quality care brought directly to your doorstep.',
    url: site.url,
    siteName: 'Versatile Projects',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Versatile Projects' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versatile Projects | Premium Mobile Automotive Services',
    description:
      'Mobile detailing, dent repair, paint protection and more for cars, bikes and trucks — brought directly to your doorstep.',
    images: ['/og.png'],
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
