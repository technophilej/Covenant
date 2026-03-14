import HeroSection from '../components/home/HeroSection'
import Layout from '../components/layout/Layout'
import Reveal from '../components/ui/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Home, Users, Clock, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react'

const serviceHighlights = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Compassionate help with bathing, grooming, dressing, and daily hygiene to maintain dignity and independence.',
    color: 'bg-blue-50 text-brand-blue-700',
  },
  {
    icon: Home,
    title: 'Companion Care',
    description: 'Meaningful companionship, light housekeeping, and support with everyday activities to enrich daily life.',
    color: 'bg-green-50 text-brand-green-600',
  },
  {
    icon: Users,
    title: 'Respite Care',
    description: 'Temporary, reliable relief for family caregivers with flexible scheduling to fit every situation.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Clock,
    title: 'Hourly & Live-In Care',
    description: 'Flexible care from a few hours per week to 24/7 around-the-clock live-in assistance.',
    color: 'bg-indigo-50 text-indigo-700',
  },
]

const steps = [
  {
    num: '01',
    title: 'Referral & Intake',
    body: 'We assess whether services are appropriate and can be safely delivered in the home environment.',
  },
  {
    num: '02',
    title: 'Authorized Service Plan',
    body: 'Care is delivered according to an authorized Service Plan that specifies services and their frequency.',
  },
  {
    num: '03',
    title: 'Ongoing Review',
    body: "Service plans are reviewed annually and updated whenever there is a change in the member's condition.",
  },
]

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />

      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-3">
                  <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
                  About Us
                </div>
                <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-6">
                  Supporting Independence<br className="hidden sm:inline" /> Across Maine
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  Covenant Care Services LLC is a Maine-based Personal Care Agency providing in-home assistance with Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs) through trained Personal Support Specialists.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  All care is delivered in the member's place of residence, in accordance with an authorized Service Plan. We do not operate residential care facilities or group home settings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'ADL Services', items: ['Bathing', 'Grooming', 'Dressing', 'Toileting', 'Transfers', 'Personal Hygiene'] },
                    { label: 'IADL Services', items: ['Meal Preparation', 'Laundry', 'Housekeeping', 'Shopping', 'Transportation', 'Med Reminders'] },
                  ].map((col) => (
                    <div key={col.label} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="font-bold text-brand-navy text-xs uppercase tracking-widest mb-3">{col.label}</h3>
                      <ul className="space-y-1.5">
                        {col.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-green-500 flex-shrink-0" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link href="/services" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-blue-700 transition-colors group text-sm">
                  View all services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="relative pt-6 pb-8 pl-0 sm:pl-6 pr-0 sm:pr-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=85"
                    alt="A compassionate caregiver sitting with an elderly woman in her home, offering warm, attentive care"
                    width={600}
                    height={500}
                    className="w-full h-[480px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-4 sm:left-0 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                  <div className="flex items-center gap-1 mb-2" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-brand-navy font-semibold text-sm">Trusted by Maine families</p>
                  <p className="text-gray-600 text-xs mt-1">Compassionate, certified care</p>
                </div>
                <div className="absolute top-0 right-4 sm:right-0 bg-brand-green-500 text-white rounded-2xl shadow-lg p-4 text-center">
                  <Shield className="w-7 h-7 mx-auto mb-1" aria-hidden="true" />
                  <p className="text-xs font-bold">Licensed<br />& Insured</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-3">
                  <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
                  What We Offer
                </div>
                <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">Our Services</h2>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors flex-shrink-0">
                See All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((service, idx) => (
              <Reveal key={service.title} delay={(idx % 4) * 100 + 100}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                    <service.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=85"
                    alt="Two people holding hands, symbolizing the supportive relationship between caregiver and client"
                    width={600}
                    height={440}
                    className="w-full h-[420px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-brand-navy/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-8">
                      <p className="text-5xl font-bold mb-2">3</p>
                      <p className="text-xl font-semibold">Simple Steps</p>
                      <p className="text-blue-100 text-sm mt-1">to quality care at home</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-3">
                  <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
                  Getting Started
                </div>
                <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy mb-10">How It Works</h2>
              </Reveal>
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <Reveal key={step.title} delay={(idx + 1) * 100}>
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-navy text-white font-bold text-sm flex items-center justify-center" aria-hidden="true">
                        {step.num}
                      </div>
                      <div className="pt-2">
                        <h3 className="font-bold text-brand-navy text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy relative overflow-hidden" aria-labelledby="staff-heading">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green-500 rounded-full transform -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 text-brand-green-300 font-semibold text-sm mb-3">
                  <span className="w-8 h-px bg-brand-green-300" aria-hidden="true" />
                  Our Team
                </div>
                <h2 id="staff-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">Qualified, Caring Staff</h2>
                <p className="text-blue-100 leading-relaxed mb-5">
                  All direct care staff must hold CNA or PSS certification, or be enrolled in a Department-approved Personal Support Specialist training program within 60 days of hire.
                </p>
                <p className="text-blue-100 leading-relaxed mb-8">
                  We are committed to placing only qualified, compassionate caregivers in your home — people who treat every member with the dignity and respect they deserve.
                </p>
                <Link
                  href="/contact?tab=careers"
                  className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
                >
                  Join Our Team <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right">
              <ul className="space-y-3" aria-label="Staff qualifications">
                {[
                  'CNA or PSS certification required',
                  'Enrollment in approved PSS training within 60 days of hire',
                  'Background checks completed for all staff',
                  'Ongoing training and supervision provided',
                  'Care delivered per authorized Service Plan',
                  'Compassionate, dignity-first approach',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-brand-green-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100" aria-labelledby="cta-heading">
        <Reveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-3">
              <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
              Get Started Today
              <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
            </div>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">Ready to Get the Care You Need?</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Contact us to learn how we can support your loved one's independence and well-being at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-care"
                className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue-800 text-white px-8 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg"
              >
                Request Care
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+12072528470"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
              >
                Call (207) 252-8470
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  )
}
