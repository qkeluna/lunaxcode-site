// components/sections/Features.tsx
'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useFeatures } from '@/hooks/useApi';
import { ScrollReveal, ScrollStagger } from '@/components/ui/ScrollReveal';

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { features, loading, error } = useFeatures();

  if (loading) {
    return (
      <section id="features" className="py-[var(--section-padding-lg)] bg-[var(--bg-tertiary)]">
        <div className="container mx-auto px-[var(--container-padding)] text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-[var(--surface-elevated)] rounded w-64 mx-auto"></div>
            <div className="h-4 bg-[var(--surface-elevated)] rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="features" className="py-[var(--section-padding-lg)] bg-[var(--bg-tertiary)]">
        <div className="container mx-auto px-[var(--container-padding)] text-center">
          <div className="text-red-500">Failed to load features. Please try again later.</div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-[var(--section-padding-lg)] bg-[var(--bg-tertiary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-h2 text-primary mb-6">
              Why Choose Lunaxcode?
            </h2>
            <p className="text-body-lg text-secondary max-w-3xl mx-auto">
              We combine speed, quality, and innovation to deliver exceptional digital solutions
              that help Filipino SMEs compete in the digital marketplace.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <ScrollStagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--grid-gap)] max-w-7xl mx-auto">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="card-feature group relative overflow-hidden flex flex-col h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon with Glow Effect */}
              <div className="relative mb-6">
                <div className="text-5xl mb-2 relative z-10 group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>

                {/* Animated glow behind icon */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--accent-primary)] rounded-full filter blur-lg transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-30 scale-150' : 'opacity-0 scale-100'
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-h4 text-primary mb-4 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-body text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-[var(--radius-xl)] transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'bg-gradient-to-br from-[var(--accent-primary)]/10 via-transparent to-[var(--accent-secondary)]/10'
                    : ''
                }`}
              ></div>

              {/* Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'bg-gradient-to-bl from-[var(--accent-primary)]/20 to-transparent rounded-tl-none rounded-br-none rounded-tr-[var(--radius-xl)]'
                    : ''
                }`}
              ></div>

              {/* Floating Dots Animation */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[var(--accent-primary)] rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1 h-1 bg-[var(--accent-primary)] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-[var(--accent-primary)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          ))}
        </ScrollStagger>

        {/* Bottom CTA Section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-h3 text-primary mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-body text-secondary mb-8">
                Join hundreds of satisfied SMEs who have accelerated their growth with our digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white shadow-lg">
                  <span>View Our Packages</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group bg-[var(--text-primary)] hover:bg-[var(--text-primary)]/90 text-[var(--bg-primary)]">
                  <span>Talk to an Expert</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}