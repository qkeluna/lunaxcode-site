// components/layout/Footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { ScrollReveal, ScrollStagger } from '@/components/ui/ScrollReveal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#services', label: 'Services' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
{ href: '#process', label: 'Our Process' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] py-[var(--section-padding-md)]">
      <div className="container mx-auto px-[var(--container-padding)]">
        <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-[var(--accent-primary)]" />
              <h3 className="text-h4 text-primary font-bold">{COMPANY_INFO.name}</h3>
            </div>
            <p className="text-body text-secondary mb-4 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <p className="text-body-sm text-tertiary italic">
              {COMPANY_INFO.tagline}
            </p>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-caption text-tertiary mb-2">We accept:</p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-h5 text-primary font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-secondary hover:text-[var(--accent-primary)] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full group-hover:bg-[var(--accent-primary)] transition-colors"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-h5 text-primary font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-body-sm text-secondary">{COMPANY_INFO.contact.email}</p>
                  <p className="text-caption text-tertiary">Business inquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-body-sm text-secondary">{COMPANY_INFO.contact.phone}</p>
                  <p className="text-caption text-tertiary">Mon-Fri 9AM-6PM PHT</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-body-sm text-secondary">{COMPANY_INFO.contact.location}</p>
                  <p className="text-caption text-tertiary">Serving all of Philippines</p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollStagger>

        {/* Bottom Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="border-t border-[var(--border-subtle)] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-body-sm text-tertiary">
                &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <p className="text-caption text-tertiary">
                  Built with ❤️ in the Philippines
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--accent-success)] rounded-full animate-pulse"></div>
                  <span className="text-caption text-secondary">Ready to serve</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}