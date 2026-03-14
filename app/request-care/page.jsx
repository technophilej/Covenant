'use client'

import Layout from '../../components/layout/Layout';
import ClientIntakeUploadForm from '../../components/request-services/ClientIntakeUploadForm';
import { Download, Phone, Mail, CheckCircle, FileText } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';

const steps = [
  'Download and print the Client Recipient Intake Form below.',
  'Complete and sign all sections of the form clearly.',
  'Scan or photograph the completed form.',
  'Upload it using the form — a coordinator will follow up within one business day.',
];

const nextSteps = [
  'Intake review by a care coordinator',
  'Assessment of care needs',
  'Authorized Service Plan created',
  'Care begins with a matched PSS',
];

export default function RequestServicesPage() {
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
              Get Started
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Request Care Services</h1>
            <p className="text-blue-100 max-w-xl leading-relaxed">
              Download the Client Recipient Intake Form, complete it, and upload it below. A care coordinator will follow up with you promptly.
            </p>
          </Reveal>
        </section>

        <section className="py-16" aria-labelledby="request-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

              <Reveal direction="left" className="lg:col-span-2 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-3">
                    <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
                    How to Apply
                  </div>
                  <h2 id="request-heading" className="text-2xl font-bold text-brand-navy mb-5">Simple 4-Step Process</h2>
                  <ol className="space-y-5">
                    {steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-brand-blue-700 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy text-sm">Client Recipient Intake Form</h3>
                      <p className="text-gray-600 text-xs">PDF format</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mb-4">Download, complete, then upload below.</p>
                  <a
                    href="/forms/CLIENT_RECIPIENT_INTAKE_FORM.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors w-full justify-center"
                  >
                    <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    Download Intake Form (PDF)
                  </a>
                </div>

                <div className="border border-gray-100 rounded-2xl p-5 bg-gray-50">
                  <h3 className="font-semibold text-brand-navy mb-3 text-sm">Need Help?</h3>
                  <div className="space-y-3">
                    <a href="tel:+12072528470" className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-navy transition-colors">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Phone className="w-4 h-4 text-brand-blue-700" aria-hidden="true" />
                      </div>
                      (207) 252-8470
                    </a>
                    <a href="mailto:contact@covenantcareservices.org" className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-navy transition-colors">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Mail className="w-4 h-4 text-brand-blue-700" aria-hidden="true" />
                      </div>
                      contact@covenantcareservices.org
                    </a>
                  </div>
                </div>

                <div className="bg-brand-navy rounded-2xl p-5 text-white">
                  <h3 className="font-semibold mb-4 text-sm text-brand-green-300 uppercase tracking-wide">What Happens Next</h3>
                  <ul className="space-y-3">
                    {nextSteps.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-blue-100 text-xs">
                        <CheckCircle className="w-4 h-4 text-brand-green-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal direction="right" delay={100} className="lg:col-span-3">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 text-brand-green-700 font-semibold text-sm mb-2">
                    <span className="w-8 h-px bg-brand-green-500" aria-hidden="true" />
                    Upload Form
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy">Submit Your Intake Form</h2>
                </div>
                <ClientIntakeUploadForm />
              </Reveal>

            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
