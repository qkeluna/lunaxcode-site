// components/sections/Pricing.tsx
'use client';

import { useOnboardingStore } from '@/store/onboarding-store';
import { usePricingPlans } from '@/hooks/useApi';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';
import { ScrollReveal, ScrollStagger } from '@/components/ui/ScrollReveal';
import { ShineBorder } from '@/components/ui/shine-border';

export function Pricing() {
  const openModal = useOnboardingStore(state => state.openModal);
  const { plans, loading, error } = usePricingPlans();

  // Loading state
  if (loading) {
    return (
      <section id="pricing" className="py-[var(--section-padding-lg)] bg-[var(--bg-primary)]">
        <div className="container mx-auto px-[var(--container-padding)] text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-[var(--surface-elevated)] rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-[var(--surface-elevated)] rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="pricing" className="py-[var(--section-padding-lg)] bg-[var(--bg-primary)]">
        <div className="container mx-auto px-[var(--container-padding)] text-center">
          <div className="text-red-500">Failed to load pricing plans. Please try again later.</div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-[var(--section-padding-lg)] bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-6">
              <Zap className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-caption text-secondary">Fast & Affordable</span>
            </div>

            <h2 className="text-h2 text-primary mb-6 text-balance">
              Choose Your Package
            </h2>
            <p className="text-body-lg text-secondary max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Get professional digital solutions
              that scale with your business growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Grid */}
        <ScrollStagger staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans?.map((plan, index) => {

            return (
              <div
                key={plan.id}
                className={`group relative overflow-hidden flex flex-col h-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-[var(--accent-primary)]/20 scale-105 lg:scale-110' : ''
                }`}
              >
                <ShineBorder
                  shineColor={plan.popular ? "#8b5cf6" : "#3b82f6"}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              {/* Folded Corner Effect - Show on hover */}
              <div
                className="absolute top-0 right-0 w-8 h-8 border-l border-b border-[var(--border-subtle)] opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                  borderTopRightRadius: '1rem',
                  background: '#ff4500' // Red-orange color
                }}>
              </div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 bg-[var(--accent-primary)] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 relative z-10 p-6 pt-8">
                <h3 className="text-h3 text-primary mb-4 text-balance">
                  {plan.name}
                </h3>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg text-secondary">₱</span>
                    <span className="text-4xl font-bold text-primary">
                      {plan.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-secondary mt-2">
                    {plan.timeline}
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="text-xs text-tertiary uppercase tracking-wide font-medium">
                  {plan.popular ? 'Best value for growing businesses' :
                   index === 0 ? 'Perfect for startups' : 'For established enterprises'}
                </div>
              </div>

              {/* CTA Button - Moved to middle */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => openModal(plan.id)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.popular
                      ? 'bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white shadow-lg'
                      : 'bg-[var(--text-primary)] hover:bg-[var(--text-primary)]/90 text-[var(--bg-primary)]'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Features List */}
              <div className="px-6 pb-6 space-y-3 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-success)]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[var(--accent-success)]" />
                    </div>
                    <span className="text-sm text-secondary leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              </div>
            );
          })}
        </ScrollStagger>
      </div>
    </section>
  );
}