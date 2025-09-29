// components/sections/Services.tsx
'use client';

import { Clock } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { useOnboardingStore } from '@/store/onboarding-store';
import { ScrollReveal, ScrollStagger } from '@/components/ui/ScrollReveal';

export function Services() {
  const openModal = useOnboardingStore(state => state.openModal);

  return (
    <section id="services" className="py-[var(--section-padding-lg)] bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-[var(--container-padding)]">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-h2 text-primary mb-6">
              Our Services
            </h2>
            <p className="text-body-lg text-secondary">
              Professional digital solutions delivered fast and affordably for Filipino SMEs.
              Choose the perfect package for your business needs.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <ScrollStagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--grid-gap)] max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="card-feature group"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Header */}
              <div className="text-center mb-6">
                <h3 className="text-h4 text-primary mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-body text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Timeline Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  <Clock className="w-3 h-3 text-[var(--accent-primary)]" />
                  <span className="text-caption text-secondary font-medium">
                    {service.timeline}
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <p className="text-body-sm text-tertiary text-center leading-relaxed mb-8">
                {service.details}
              </p>


              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[var(--radius-xl)] pointer-events-none"></div>
            </div>
          ))}
        </ScrollStagger>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-body text-secondary mb-6">
            Not sure which service fits your needs?
          </p>
          <button
            onClick={() => openModal('consultation')}
            className="btn-secondary"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}