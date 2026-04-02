'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-4 inline-block mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Covenant Care Services LLC"
                width={220}
                height={88}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-blue-200 leading-relaxed text-sm max-w-sm mb-6">
              Providing compassionate, in-home personal care services throughout Maine. Helping members live safely and with dignity in their own homes.
            </p>
            <Link
              href="/request-care"
              className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Request Care Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/contact?tab=careers', label: 'Careers' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/request-care', label: 'Request Care Services' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+12072528470" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-brand-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-blue-200 group-hover:text-white text-sm transition-colors">(207) 252-8470</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@covenantcareservices.org" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-brand-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-blue-200 group-hover:text-white text-sm transition-colors break-all">contact@covenantcareservices.org</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-blue-200 text-sm">40 Gina Street<br />Lewiston, ME 04240</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-blue-200 text-sm">Mon–Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-blue-300 text-xs">&copy; {currentYear} Covenant Care Services LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact#privacy" className="text-blue-300 hover:text-white text-xs transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
