// components/sections/Hero.tsx
import Link from 'next/link';
import { ArrowDown, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-caption text-secondary">Code at the Speed of Light</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display text-primary mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {COMPANY_INFO.tagline}
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-secondary max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {COMPANY_INFO.description}
          </p>

          {/* Description */}
          <p className="text-body text-tertiary max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            From 48-hour landing pages to full mobile applications - we help Filipino SMEs establish and grow their digital presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="#pricing"
              className="btn-gradient text-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10">Get Your Quote Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            <Link
              href="#services"
              className="btn-secondary text-lg px-8 py-4"
            >
              View Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-caption text-tertiary">Trusted by 100+ SMEs</div>
            <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
            <div className="text-caption text-tertiary">48h Delivery Guarantee</div>
            <div className="w-1 h-1 bg-[var(--text-tertiary)] rounded-full"></div>
            <div className="text-caption text-tertiary">Based in the Philippines</div>
          </div>
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