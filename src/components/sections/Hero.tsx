// components/sections/Hero.tsx
'use client';

import Link from 'next/link';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';
import { useCompanyInfo } from '@/hooks/useApi';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { LightRays } from '@/components/magicui/light-rays';

export function Hero() {
  const { company } = useCompanyInfo();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Light Rays Effect */}
        <LightRays
          count={10}
          color="rgba(91, 110, 255, 0.25)"
          blur={60}
          opacity={0.7}
          speed={14}
          length="100vh"
          className="dark:opacity-100 opacity-50"
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-8">
              <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-caption text-secondary">Code at the Speed of Light</span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-display text-primary mb-6">
              {company?.tagline}
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-body-lg text-secondary max-w-3xl mx-auto mb-8">
              {company?.description}
            </p>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-body text-tertiary max-w-2xl mx-auto mb-12">
              From 48-hour landing pages to full mobile applications - we help Filipino SMEs establish and grow their digital presence.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#pricing"
                className="py-3 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white shadow-lg"
              >
                <span>Get Your Quote Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#services"
                className="py-3 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group bg-[var(--text-primary)] hover:bg-[var(--text-primary)]/90 text-[var(--bg-primary)]"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60">
              <div className="text-caption text-tertiary">Trusted by 100+ SMEs</div>
              <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
              <div className="text-caption text-tertiary">48h Delivery Guarantee</div>
              <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
              <div className="text-caption text-tertiary">Based in the Philippines</div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-caption text-tertiary">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-[var(--text-tertiary)]" />
        </div>
      </div>
    </section>
  );
}