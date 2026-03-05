'use client'

import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import ApplicationForm from '../../components/contact/ApplicationForm';
import ContactForm from '../../components/contact/ContactForm';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(207) 252-8470', href: 'tel:+12072528470' },
  { icon: Mail, label: 'Email', value: 'contact@covenantcareservices.org', href: 'mailto:contact@covenantcareservices.org' },
  { icon: MapPin, label: 'Address', value: '40 Gina Street, Lewiston, ME 04240', href: null },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8am–6pm', href: null },
];

const benefits = [
  { icon: Heart, title: 'Make a Difference', description: 'Help improve the quality of life for members in your community.' },
  { icon: Users, title: 'Supportive Team', description: 'Work with a caring, professional team that values your contributions.' },
  { icon: Award, title: 'Growth Opportunities', description: 'Training programs and career advancement paths available.' },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState('contact');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('tab') === 'careers') {
      setActiveTab('careers');
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white">

        <section className="bg-brand-navy py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green-500 rounded-full transform -translate-x-1/2 translate-y-1/2" />
          </div>
          <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 text-brand-green-300 font-semibold text-sm mb-3">
              <span className="w-8 h-px bg-brand-green-300" aria-hidden="true" />
              {activeTab === 'careers' ? 'Join Our Team' : 'Get in Touch'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {activeTab === 'careers' ? 'Careers at CCS' : 'Contact Us'}
            </h1>
            <p className="text-blue-100 max-w-xl leading-relaxed">
              {activeTab === 'careers'
                ? "We're always looking for compassionate, dedicated caregivers to join our growing team."
                : "We're here to answer your questions and help you find the right care solution for your family."}
            </p>
          </Reveal>
        </section>

        <section className="bg-white border-b border-gray-100" aria-label="Contact information">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
              {contactInfo.map((item, idx) => (
                <Reveal key={item.label} delay={idx * 100} className="py-6 px-4 sm:px-6 first:pl-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue-50 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-brand-blue-700" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">{item.label}</span>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-brand-navy text-sm font-semibold hover:text-brand-blue-700 transition-colors break-words">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-brand-navy text-sm font-semibold">{item.value}</span>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-0" role="tablist" aria-label="Contact page sections">
              <button
                onClick={() => setActiveTab('contact')}
                role="tab"
                aria-selected={activeTab === 'contact'}
                aria-controls="panel-contact"
                id="tab-contact"
                className={`px-7 py-4 text-sm font-semibold border-b-2 transition-all ${
                  activeTab === 'contact'
                    ? 'border-brand-navy text-brand-navy bg-white'
                    : 'border-transparent text-gray-500 hover:text-brand-navy'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                role="tab"
                aria-selected={activeTab === 'careers'}
                aria-controls="panel-careers"
                id="tab-careers"
                className={`px-7 py-4 text-sm font-semibold border-b-2 transition-all ${
                  activeTab === 'careers'
                    ? 'border-brand-navy text-brand-navy bg-white'
                    : 'border-transparent text-gray-500 hover:text-brand-navy'
                }`}
              >
                Careers
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'contact' && (
              <div
                id="panel-contact"
                role="tabpanel"
                aria-labelledby="tab-contact"
                className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start"
              >
                <Reveal direction="left" className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Send Us a Message</h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                    Have questions about our services or want to learn more? Fill out the form and we will respond within one business day.
                  </p>

                  <div className="relative rounded-2xl overflow-hidden shadow-md mb-6">
                    <Image
                      src="/images/contact/caregiver-with-client.jpg"
                      alt="Caregiver providing compassionate support to a client in their home"
                      width={500}
                      height={280}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-sm">Serving All of Maine</p>
                      <p className="text-blue-100 text-xs">From Portland to Bangor and everywhere in between</p>
                    </div>
                  </div>

                  <div className="bg-brand-blue-50 rounded-xl p-5 border border-brand-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-brand-blue-700" aria-hidden="true" />
                      <span className="font-semibold text-brand-navy text-sm">Service Area</span>
                    </div>
                    <p className="text-gray-700 text-sm">Proudly serving families throughout the entire state of Maine.</p>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={100} className="lg:col-span-3">
                  <ContactForm />
                </Reveal>
              </div>
            )}

            {activeTab === 'careers' && (
              <div
                id="panel-careers"
                role="tabpanel"
                aria-labelledby="tab-careers"
                className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start"
              >
                <Reveal direction="left" className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Join Our Caregiving Team</h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                    Are you passionate about making a difference in people's lives? We are always looking for compassionate, dedicated caregivers.
                  </p>

                  <div className="space-y-3 mb-8">
                    {benefits.map((benefit, idx) => (
                      <Reveal key={benefit.title} delay={idx * 100}>
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="w-10 h-10 bg-brand-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-5 h-5 text-brand-blue-700" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-brand-navy text-sm mb-1">{benefit.title}</h3>
                            <p className="text-gray-600 text-xs">{benefit.description}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={300}>
                    <div className="bg-brand-navy rounded-xl p-5 text-white mb-5">
                      <h3 className="font-semibold mb-4 text-sm text-brand-green-300 uppercase tracking-wide">We Offer</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {['Competitive pay', 'Flexible scheduling', 'Paid training', 'Health benefits', 'Paid time off', 'Referral bonuses'].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-blue-100 text-xs">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-green-300 flex-shrink-0" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal delay={400}>
                    <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                      <h3 className="font-semibold text-brand-navy mb-2 text-sm">Employment Application</h3>
                      <p className="text-gray-600 text-xs mb-4">Download the PDF, fill it out, then upload it using the form.</p>
                      <a
                        href="/forms/EmploymentApplication.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue-800 text-white px-4 py-2.5 rounded-full text-xs font-semibold transition-colors"
                      >
                        Download Application PDF
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </Reveal>
                </Reveal>

                <Reveal direction="right" delay={100} className="lg:col-span-3">
                  <ApplicationForm />
                </Reveal>
              </div>
            )}
          </div>
        </section>

        <Reveal>
          <section id="privacy" className="py-14 bg-gray-50 border-t border-gray-100" aria-labelledby="privacy-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="privacy-heading" className="text-xl font-bold text-brand-navy mb-4">Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-3">
                Covenant Care Services LLC respects your privacy. Information submitted through our forms is used only to respond to your request and to coordinate services or employment inquiries. We do not sell your personal information.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                If you have questions about privacy, contact us at contact@covenantcareservices.org or call (207) 252-8470.
              </p>
            </div>
          </section>
        </Reveal>

      </div>
    </Layout>
  );
}
