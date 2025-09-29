// components/sections/Contact.tsx
import { COMPANY_INFO } from '@/data/company';
import { ContactForm } from '../forms/ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to start your digital transformation? Let&apos;s discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                  <p className="text-slate-600">{COMPANY_INFO.contact.email}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-600">{COMPANY_INFO.contact.phone}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Location</h4>
                  <p className="text-slate-600">{COMPANY_INFO.contact.location}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Payment Terms</h4>
                  <p className="text-slate-600">
                    {COMPANY_INFO.paymentTerms.deposit} deposit, {COMPANY_INFO.paymentTerms.balance}
                  </p>
                  <p className="text-slate-600 text-sm">
                    Accepted: {COMPANY_INFO.paymentTerms.methods.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}