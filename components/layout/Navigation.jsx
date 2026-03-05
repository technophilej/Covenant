'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact?tab=careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.includes('tab=careers')) return false;
    const path = href.split('?')[0];
    return pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
      aria-label="Main navigation"
    >
      <div className="bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <p className="text-white/80 text-xs hidden sm:block italic">Compassion. Dignity. Support.</p>
            <div className="flex items-center gap-5 ml-auto">
              <a href="tel:+12072528470" className="flex items-center gap-1.5 text-white hover:text-brand-green-300 text-xs transition-colors">
                <Phone className="w-3 h-3" aria-hidden="true" />
                <span>(207) 252-8470</span>
              </a>
              <a href="mailto:contact@covenantcareservices.org" className="hidden md:flex items-center gap-1.5 text-white hover:text-brand-green-300 text-xs transition-colors">
                <Mail className="w-3 h-3" aria-hidden="true" />
                <span>contact@covenantcareservices.org</span>
              </a>
              <div className="hidden lg:flex items-center gap-1.5 text-white/80 text-xs">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>Mon–Fri: 8am–6pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[96px]">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Covenant Care Services LLC - Home"
                width={240}
                height={96}
                priority
                className="h-[84px] w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`text-sm font-semibold transition-colors duration-200 relative group ${
                    isActive(link.href)
                      ? 'text-brand-navy'
                      : 'text-gray-600 hover:text-brand-navy'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green-500 transition-all duration-200 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/request-services"
                className="bg-brand-navy hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-sm"
              >
                Request Services
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded text-brand-navy hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-3 space-y-1" role="menu">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-semibold rounded transition-colors ${
                    isActive(link.href)
                      ? 'text-brand-navy bg-blue-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-3">
                <Link
                  href="/request-services"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-brand-navy hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  Request Services
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
