// components/sections/Pricing.tsx
'use client';

import { PRICING_PLANS } from '@/data/pricing';
import { useOnboardingStore } from '@/store/onboarding-store';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';

export function Pricing() {
  const openModal = useOnboardingStore(state => state.openModal);

  return (
    <section id="pricing" className="py-[var(--section-padding-lg)] bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-6">
            <Zap className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-caption text-secondary">Fast & Affordable</span>
          </div>

          <h2 className="text-h2 text-primary mb-6">
            Choose Your Package
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Get professional digital solutions
            that scale with your business growth.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.id}
              className={`card-pricing group relative overflow-hidden animate-fade-in-up ${
                plan.popular ? 'recommended scale-105 lg:scale-110' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-4 py-1 rounded-full text-caption font-semibold shadow-lg">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Glow Effect for Popular Plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 via-transparent to-[var(--accent-secondary)]/20 rounded-[var(--radius-lg)] opacity-50"></div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-h4 text-primary mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-caption text-secondary">₱</span>
                    <span className="text-h1 text-primary font-bold">
                      {plan.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-body-sm text-secondary mt-1">
                    {plan.timeline}
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="text-caption text-tertiary italic">
                  {plan.popular ? 'Best value for growing businesses' :
                   index === 0 ? 'Perfect for startups' : 'For established enterprises'}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 group/feature"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-success)]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[var(--accent-success)]" />
                    </div>
                    <span className="text-body-sm text-secondary group-hover/feature:text-primary transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => openModal(plan.id)}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-10 ${
                  plan.popular
                    ? 'btn-gradient'
                    : 'btn-primary'
                }`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-[var(--radius-lg)] border-2 border-transparent group-hover:border-[var(--accent-primary)]/30 transition-all duration-300 pointer-events-none"></div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full border-t-2 border-r-2 border-[var(--accent-primary)]/30 rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-h3 text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-body text-secondary mb-8">
              Every business is unique. If our standard packages don&apos;t fit your needs perfectly,
              let&apos;s create a custom solution that&apos;s tailored specifically for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('custom')}
                className="btn-secondary"
              >
                Request Custom Quote
              </button>
              <a href="#contact" className="btn-primary">
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-12 p-6 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-lg max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Check className="w-5 h-5 text-[var(--accent-success)]" />
              <span className="text-h5 text-primary">30-Day Money Back Guarantee</span>
            </div>
            <p className="text-body-sm text-secondary">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}