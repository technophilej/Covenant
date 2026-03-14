import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShieldCheck, Users, Heart, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-homecare.png"
          alt="Caregiver warmly helping an elderly person at home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/92 via-brand-navy/78 to-brand-navy/55" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.55)' }}
          >
            Compassionate Care,{' '}
            <span className="text-brand-green-200">Right at Home</span>
          </h1>

          <p
            className="text-lg text-blue-100 leading-relaxed mb-10 max-w-xl"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.45)' }}
          >
            Covenant Care Services LLC provides in-home personal care assistance — helping members live safely, independently, and with dignity in their own homes across Maine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/request-care"
              className="inline-flex items-center justify-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 shadow-lg group"
            >
              Request Care Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="tel:+12072528470"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (207) 252-8470
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: ShieldCheck, text: 'Licensed & Insured' },
              { icon: Users, text: 'Certified Caregivers' },
              { icon: Heart, text: 'Person-Centered Care' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/85">
                <item.icon className="w-4 h-4 text-brand-green-300" aria-hidden="true" />
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
