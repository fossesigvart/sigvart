import Link from 'next/link';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { MobileMenu } from '@/components/ui/mobile-menu';

export const metadata = {
  title: 'Contact — ROBOTS',
  description: 'Get in touch with ROBOTS. We handle industrial robots across Scandinavia — Norway, Sweden and Denmark.',
};

const contactInfo = [
  { icon: MailIcon, label: 'Email', value: 'hello@robots.no' },
  { icon: PhoneIcon, label: 'Phone', value: '+47 900 00 000' },
  { icon: MapPinIcon, label: 'Coverage', value: 'Norway, Sweden & Denmark' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Navbar */}
      <header className="px-6 md:px-10 py-6 flex items-center justify-between border-b border-neutral-100">
        <Link
          href="/"
          className="text-black text-base font-bold tracking-[0.2em] font-[family-name:var(--font-logo)]"
        >
          ROBOTS
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden md:block text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors duration-200"
          >
            ← Back
          </Link>
          <MobileMenu
            links={[
              { label: 'About', href: '/#about' },
              { label: 'Timeline', href: '/#om-oss' },
              { label: 'Technology', href: '/#teknologi' },
              { label: 'Contact', href: '/contact' },
            ]}
            dark={false}
          />
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center px-6 md:px-16 lg:px-24 py-20 md:py-32">
        <div className="w-full max-w-4xl">

          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-8">Contact</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-heading)] mb-8">
            Get in touch
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mb-16">
            Questions about our robots, services, or a potential pilot?
            We do our best to respond within one business day.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 border border-neutral-100 rounded-xl px-6 py-5">
                <div className="bg-neutral-50 rounded-lg p-3">
                  <Icon className="h-6 w-6 text-neutral-500" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-0.5">{label}</p>
                  <p className="text-base font-medium text-neutral-800">{value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
}
