'use client'

import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import ApplicationForm from '../../components/contact/ApplicationForm';
import ContactForm from '../../components/contact/ContactForm';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, Users, Award, CheckCircle, ArrowRight, Briefcase, FileText } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(207) 252-8470', href: 'tel:+12072528470' },
  { icon: Mail, label: 'Email', value: 'contact@covenantcareservices.org', href: 'mailto:contact@covenantcareservices.org' },
  { icon: MapPin, label: 'Address', value: '40 Gina Street, Lewiston, ME 04240', href: null },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 9am–6pm', href: null },
];

const positions = [
  {
    icon: Heart,
    title: 'Personal Support Specialist (PSS)',
    description: 'Assist clients with personal hygiene, dressing, meal prep, medication reminders, and light housekeeping in the comfort of their home.',
    type: 'Full-Time / Part-Time',
    location: 'Statewide, Maine',
  },
  {
    icon: Users,
    title: 'Companion Caregiver',
    description: 'Provide meaningful companionship, emotional support, and social engagement to help clients feel connected and valued.',
    type: 'Part-Time / Flexible',
    location: 'Statewide, Maine',
  },
  {
    icon: Clock,
    title: 'Live-In Caregiver',
    description: 'Offer around-the-clock home-based support for clients who need consistent, full-time assistance and supervision.',
    type: 'Full-Time',
    location: 'Statewide, Maine',
  },
];

const perks = [
  'Competitive hourly pay',
  'Flexible scheduling',
  'Paid training provided',
  'Health benefit options',
  'Paid time off (PTO)',
  'Referral bonuses',
  'Supportive management',
  'Career growth paths',
];

const requirements = [
  'Genuine passion for helping others in their home',
  'Reliable transportation and a valid driver\'s license',
  'Must pass background check and drug screening',
  'High school diploma or equivalent preferred',
  'Previous caregiving experience is a plus',
  'Strong communication and interpersonal skills',
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
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex flex-col items-center text-center py-6 px-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{label}</span>
                  {href ? (
                    <a href={href} className="text-brand-navy font-semibold text-sm hover:text-brand-green-600 transition-colors">{value}</a>
                  ) : (
                    <span className="text-brand-navy font-semibold text-sm">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-100" aria-label="Page tabs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div role="tablist" aria-label="Contact or Careers" className="flex">
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
                className="space-y-14"
              >

                <Reveal>
                  <div className="relative rounded-2xl overflow-hidden min-h-[300px] flex items-center">
                    <div className="absolute inset-0">
                      <Image
                        src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1400&q=85"
                        alt=""
                        fill
                        className="object-cover brightness-[0.4]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
                    </div>
                    <div className="relative px-10 py-14 max-w-2xl">
                      <div className="inline-flex items-center gap-2 text-brand-green-300 font-semibold text-sm mb-4">
                        <Briefcase className="w-4 h-4" aria-hidden="true" />
                        We&apos;re Hiring
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Make a Difference Every Day</h2>
                      <p className="text-blue-100 leading-relaxed mb-7 max-w-lg">
                        Join our compassionate team of caregivers and help Maine families live with dignity and independence right in their own homes.
                      </p>
                      <a
                        href="#careers-apply"
                        className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors shadow-lg"
                      >
                        Apply Now <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Reveal>

                <div>
                  <Reveal className="mb-7">
                    <h3 className="text-xl font-bold text-brand-navy mb-1">Open Positions</h3>
                    <p className="text-gray-600 text-sm">We are actively hiring for the following roles across Maine.</p>
                  </Reveal>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {positions.map((pos, idx) => (
                      <Reveal key={pos.title} delay={idx * 80}>
                        <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-brand-green-300 transition-all bg-white group h-full flex flex-col">
                          <div className="w-11 h-11 bg-brand-green-50 group-hover:bg-brand-green-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                            <pos.icon className="w-5 h-5 text-brand-green-600" aria-hidden="true" />
                          </div>
                          <h4 className="font-bold text-brand-navy mb-2 text-sm">{pos.title}</h4>
                          <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-1">{pos.description}</p>
                          <div className="space-y-1.5 pt-2 border-t border-gray-100">
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                              <Briefcase className="w-3.5 h-3.5 text-brand-green-500 flex-shrink-0" aria-hidden="true" />
                              {pos.type}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                              <MapPin className="w-3.5 h-3.5 text-brand-green-500 flex-shrink-0" aria-hidden="true" />
                              {pos.location}
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Reveal direction="left">
                    <div className="bg-brand-navy rounded-2xl p-8 h-full text-white">
                      <h3 className="font-bold text-lg mb-6 text-white">Why Work With Us</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {perks.map((perk) => (
                          <div key={perk} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-brand-green-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-blue-100 text-sm">{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                  <Reveal direction="right">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                      <h3 className="font-bold text-brand-navy text-lg mb-6">What We Look For</h3>
                      <ul className="space-y-3">
                        {requirements.map((req) => (
                          <li key={req} className="flex items-start gap-3 text-gray-700 text-sm">
                            <CheckCircle className="w-4 h-4 text-brand-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>

                <div id="careers-apply" className="scroll-mt-[140px] grid grid-cols-1 lg:grid-cols-5 gap-10 items-start pt-4">
                  <Reveal direction="left" className="lg:col-span-2 space-y-5">
                    <div>
                      <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-3">
                        <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
                        Apply Online
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">Apply for a Position</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Ready to join our team? Fill out the form to apply online, or download the PDF application below and upload it when ready.
                      </p>
                    </div>

                    <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-brand-blue-700 rounded-xl flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-navy text-sm">Employment Application</h4>
                          <p className="text-gray-600 text-xs">PDF — print, fill out, and upload below</p>
                        </div>
                      </div>
                      <a
                        href="/forms/EmploymentApplication.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue-800 text-white px-4 py-2.5 rounded-full text-xs font-semibold transition-colors w-full justify-center"
                      >
                        Download PDF Application
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-5 bg-white">
                      <h4 className="font-semibold text-brand-navy mb-3 text-sm">Questions? Contact Us</h4>
                      <div className="space-y-3">
                        <a href="tel:+12072528470" className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-navy transition-colors">
                          <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                            <Phone className="w-4 h-4 text-brand-blue-700" aria-hidden="true" />
                          </div>
                          (207) 252-8470
                        </a>
                        <a href="mailto:contact@covenantcareservices.org" className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-navy transition-colors">
                          <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                            <Mail className="w-4 h-4 text-brand-blue-700" aria-hidden="true" />
                          </div>
                          contact@covenantcareservices.org
                        </a>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal direction="right" delay={100} className="lg:col-span-3">
                    <ApplicationForm />
                  </Reveal>
                </div>

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
