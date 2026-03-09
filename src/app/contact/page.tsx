import Link from 'next/link';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { MobileMenu } from '@/components/ui/mobile-menu';
import { AnimatedText } from '@/components/ui/animated-shiny-text';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata = {
  title: 'Contact — STARBOT',
  description: 'Get in touch with STARBOT. We handle industrial robots across Scandinavia — Norway, Sweden and Denmark.',
};

const contactInfo = [
  { icon: MailIcon, label: 'Email', value: 'hello@starbot.no' },
  { icon: PhoneIcon, label: 'Phone', value: '+47 900 00 000' },
  { icon: MapPinIcon, label: 'Coverage', value: 'Norway, Sweden & Denmark' },
];

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Timeline', href: '/#timeline' },
  { label: 'Contact', href: '/contact' },
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
          STARBOT
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden md:block text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors duration-200"
          >
            ← Back
          </Link>
          <MobileMenu links={navLinks} dark={false} />
        </div>
      </header>

      {/* Hero */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 md:pt-32 pb-20 md:pb-28 border-b border-neutral-100">

        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">Contact</p>

        <AnimatedText
          text="Get in touch"
          gradientColors="linear-gradient(90deg, #171717 0%, #737373 40%, #171717 80%)"
          gradientAnimationDuration={3}
          textClassName="font-bold font-[family-name:var(--font-heading)] tracking-tight leading-none"
          className="mb-8"
        />

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mb-12">
          Questions about robots, services, or a potential pilot?
          We respond within one business day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 border border-neutral-100 rounded-xl px-6 py-5">
              <div className="bg-neutral-50 rounded-lg p-3">
                <Icon className="h-5 w-5 text-neutral-500" />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-0.5">{label}</p>
                <p className="text-base font-medium text-neutral-800">{value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FAQ */}
      <div className="px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-12">FAQ</p>
        <div className="grid md:grid-cols-2 gap-x-24">
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger>What industries do you serve?</AccordionTrigger>
                <AccordionContent>
                  We work with companies across manufacturing, logistics, agriculture, and construction — any industry where automation can reduce cost, improve safety, or increase throughput.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Which countries do you operate in?</AccordionTrigger>
                <AccordionContent>
                  Our initial market covers Norway, Sweden, and Denmark. We handle import compliance, certification, and local support in all three countries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Do you offer pilot testing?</AccordionTrigger>
                <AccordionContent>
                  Yes. We run structured pilot programs to validate robot performance in your specific environment before full deployment. Get in touch to discuss your setup.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="q4">
                <AccordionTrigger>What does the service package include?</AccordionTrigger>
                <AccordionContent>
                  Our service covers installation, operator training, scheduled maintenance, and ongoing technical support. We aim to be a long-term partner, not just a supplier.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>When is the planned launch?</AccordionTrigger>
                <AccordionContent>
                  We are targeting a 2027 launch across Scandinavia. Early partners who join our pilot program will have access ahead of the public rollout.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  Reach out via email or phone and we'll schedule an introductory call to understand your needs and see if there's a fit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>
      </div>

    </main>
  );
}
