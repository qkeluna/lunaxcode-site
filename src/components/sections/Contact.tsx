// components/sections/Contact.tsx
'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useCompanyInfo } from '@/hooks/useApi';
import { ContactForm } from '../forms/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Contact() {
  const { company } = useCompanyInfo();
  return (
    <section id="contact" className="py-16 lg:py-20 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1400px] mx-auto items-center">
          {/* Left Column - Hero Text & Contact Info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="lg:pr-8 xl:pr-12">
              {/* Hero Text */}
              <div className="mb-10">
                <h2 className="text-[48px] lg:text-[64px] leading-[1.1] font-bold text-primary mb-4">
                  Want to build something great? Get in touch.
                </h2>
                <p className="text-body text-secondary max-w-lg">
                  Whether you&apos;re looking for land or ready to build, we&apos;d love to help.
                </p>
              </div>

              {/* Contact Methods - Minimal List */}
              <div className="space-y-4">
                <a
                  href={`mailto:${company?.contact.email}`}
                  className="flex items-center gap-4 text-body text-secondary hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                  <span>{company?.contact.email}</span>
                </a>

                <a
                  href={`tel:${company?.contact.phone}`}
                  className="flex items-center gap-4 text-body text-secondary hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                  <span>{company?.contact.phone}</span>
                </a>

                <div className="flex items-center gap-4 text-body text-secondary">
                  <MapPin className="w-5 h-5 text-[var(--text-tertiary)]" />
                  <span>{company?.contact.location}</span>
                </div>
              </div>

              {/* Business Info */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] space-y-3">
                <div>
                  <p className="text-body-sm text-tertiary mb-1">Business Hours</p>
                  <p className="text-body text-secondary">Mon - Fri: 9AM - 6PM PHT</p>
                </div>

                <div>
                  <p className="text-body-sm text-tertiary mb-2">Payment Methods</p>
                  <div className="flex flex-wrap gap-2">
                    {company?.payment_terms.methods.map((method: string) => (
                      <span
                        key={method}
                        className="px-3 py-1 bg-[var(--surface-elevated)] text-body-sm text-secondary rounded-lg border border-[var(--border-subtle)]"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border-subtle)] p-8 lg:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>

        {/* Trust Indicators - Bottom */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-12 border-t border-[var(--border-subtle)] opacity-60">
            <div className="text-caption text-tertiary">Trusted by 100+ SMEs</div>
            <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
            <div className="text-caption text-tertiary">48h Delivery Guarantee</div>
            <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
            <div className="text-caption text-tertiary">99% Client Satisfaction</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}