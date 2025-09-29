// components/sections/Contact.tsx
import { Mail, Phone, MapPin, Clock, CreditCard, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { ContactForm } from '../forms/ContactForm';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: COMPANY_INFO.contact.email,
      description: 'Best for detailed inquiries',
      action: `mailto:${COMPANY_INFO.contact.email}`
    },
    {
      icon: Phone,
      title: 'Phone',
      value: COMPANY_INFO.contact.phone,
      description: 'Mon-Fri 9AM-6PM PHT',
      action: `tel:${COMPANY_INFO.contact.phone}`
    },
    {
      icon: MapPin,
      title: 'Location',
      value: COMPANY_INFO.contact.location,
      description: 'Serving all of Philippines',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-[var(--section-padding-lg)] bg-[var(--bg-tertiary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-6">
              <MessageCircle className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-caption text-secondary">Let&apos;s Connect</span>
            </div>

            <h2 className="text-h2 text-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-body-lg text-secondary max-w-3xl mx-auto">
              Ready to start your digital transformation? Let&apos;s discuss your project and
              create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-h3 text-primary mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={index}
                        className="card-feature group hover:scale-105 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center group-hover:bg-[var(--accent-primary)] transition-all duration-300">
                            <IconComponent className="w-5 h-5 text-[var(--accent-primary)] group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-h5 text-primary mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                              {method.title}
                            </h4>
                            {method.action ? (
                              <a
                                href={method.action}
                                className="text-body text-secondary hover:text-[var(--accent-primary)] transition-colors block mb-1"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-body text-secondary mb-1">{method.value}</p>
                            )}
                            <p className="text-body-sm text-tertiary">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Payment & Business Info */}
              <div className="space-y-6">
                <div className="card-feature">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent-success)]/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[var(--accent-success)]" />
                    </div>
                    <div>
                      <h4 className="text-h5 text-primary mb-2">Response Time</h4>
                      <p className="text-body text-secondary mb-1">Within 2 hours during business hours</p>
                      <p className="text-body-sm text-tertiary">We&apos;re committed to quick responses</p>
                    </div>
                  </div>
                </div>

                <div className="card-feature">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent-warning)]/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[var(--accent-warning)]" />
                    </div>
                    <div>
                      <h4 className="text-h5 text-primary mb-2">Payment Terms</h4>
                      <p className="text-body text-secondary mb-2">
                        {COMPANY_INFO.paymentTerms.deposit} deposit, {COMPANY_INFO.paymentTerms.balance}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {COMPANY_INFO.paymentTerms.methods.map((method) => (
                          <span
                            key={method}
                            className="px-2 py-1 bg-[var(--surface-elevated)] text-caption text-secondary rounded border border-[var(--border-subtle)]"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-feature p-8">
              <div className="mb-8">
                <h3 className="text-h3 text-primary mb-3">
                  Send us a Message
                </h3>
                <p className="text-body text-secondary">
                  Fill out the form below and we&apos;ll get back to you within 2 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-h3 text-[var(--accent-primary)] font-bold mb-2">100+</div>
                <p className="text-body-sm text-secondary">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-h3 text-[var(--accent-primary)] font-bold mb-2">48h</div>
                <p className="text-body-sm text-secondary">Average Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-h3 text-[var(--accent-primary)] font-bold mb-2">99%</div>
                <p className="text-body-sm text-secondary">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}