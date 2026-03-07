import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email us",
    desc: "We read every message and respond within one business day.",
    link: { name: "hello@sigvart.no", href: "mailto:hello@sigvart.no" },
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Call us",
    desc: "Available weekdays from 08:00 to 16:00 CET.",
    link: { name: "+47 900 00 000", href: "tel:+4790000000" },
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Visit us",
    desc: "Come see our robots in action at our Stavanger showroom.",
    link: { name: "Robot Street 1, Stavanger", href: "#" },
  },
]

export function Kontakt() {
  return (
    <section id="kontakt" className="bg-white py-32 px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">

          {/* Left */}
          <div className="max-w-sm">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">Contact</p>
            <h2 className="text-5xl font-bold text-black leading-tight tracking-tight uppercase font-[family-name:var(--font-heading)]">
              Let's talk<br />robots.
            </h2>
            <p className="mt-5 text-neutral-500 text-base leading-relaxed">
              Have a project in mind? Want a demo? We'd love to hear from you.
            </p>
          </div>

          {/* Right — contact methods */}
          <ul className="flex flex-col md:flex-row gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-100 lg:max-w-2xl w-full">
            {contactMethods.map((item) => (
              <li key={item.title} className="flex-1 py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 space-y-4">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500">
                  {item.icon}
                </div>
                <h4 className="text-black font-semibold font-[family-name:var(--font-heading)]">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href={item.link.href}
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-black transition-colors duration-200"
                >
                  {item.link.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
