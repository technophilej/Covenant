'use client'

import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import ApplicationForm from '../../components/contact/ApplicationForm';
import ContactForm from '../../components/contact/ContactForm';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, Users, CheckCircle, ArrowRight, Briefcase, FileText } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';

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
                className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
              >
                <Reveal direction="left" className="lg:col-span-2 space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy mb-2">Call Us or Fill The Form</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Call us to book a meetup or send us a message to request a service consultation. We&apos;re here to help.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-brand-green-300 transition-colors">
                      <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Location</p>
                        <p className="text-brand-navy font-semibold text-sm leading-snug">40 Gina Street,<br />Lewiston, ME 04240</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-brand-green-300 transition-colors">
                      <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Call Center</p>
                        <a href="tel:+12072528470" className="text-brand-navy font-semibold text-sm hover:text-brand-green-600 transition-colors block">(207) 252-8470</a>
                        <p className="text-gray-500 text-xs mt-0.5">Mon–Fri: 9am–6pm</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-brand-green-300 transition-colors">
                      <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                        <a href="mailto:contact@covenantcareservices.org" className="text-brand-navy font-semibold text-sm hover:text-brand-green-600 transition-colors break-all">contact@covenantcareservices.org</a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Follow Us</p>
                    <div className="flex items-center gap-3">
                      <a href="#" aria-label="Facebook" className="w-9 h-9 bg-brand-navy hover:bg-brand-green-500 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                      </a>
                      <a href="#" aria-label="Instagram" className="w-9 h-9 bg-brand-navy hover:bg-brand-green-500 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="white" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                      </a>
                      <a href="#" aria-label="Twitter / X" className="w-9 h-9 bg-brand-navy hover:bg-brand-green-500 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
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
