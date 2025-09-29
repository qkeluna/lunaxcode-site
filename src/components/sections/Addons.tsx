// components/sections/Addons.tsx
'use client';

import { Plus, Zap, Shield, Wrench } from 'lucide-react';
import { ADDONS } from '@/data/addons';

export function Addons() {
  const addonIcons = [Plus, Zap, Wrench]; // Icons for each addon

  return (
    <section id="addons" className="py-[var(--section-padding-lg)] bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-6">
            <Shield className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-caption text-secondary">Enhance Your Project</span>
          </div>

          <h2 className="text-h2 text-primary mb-6">
            Add-ons & Extras
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            Take your project to the next level with our premium add-ons.
            Flexible pricing for additional features and ongoing support.
          </p>
        </div>

        {/* Addons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ADDONS.map((addon, index) => {
            const IconComponent = addonIcons[index % addonIcons.length];
            return (
              <div
                key={addon.name}
                className="card-feature group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 flex items-center justify-center group-hover:from-[var(--accent-primary)]/20 group-hover:to-[var(--accent-secondary)]/20 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-[var(--accent-primary)] group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl opacity-0 group-hover:opacity-20 filter blur-xl transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-h4 text-primary mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                    {addon.name}
                  </h3>

                  {/* Price Display */}
                  <div className="mb-6">
                    <div className="text-h3 text-primary font-bold mb-2">
                      ₱{addon.priceRange.replace('-', ' - ₱')}
                    </div>
                    <div className="text-body-sm text-secondary">
                      per {addon.unit}
                    </div>
                  </div>

                  {/* Features based on addon type */}
                  <div className="space-y-2 mb-6">
                    {addon.name === 'Additional Pages' && (
                      <>
                        <p className="text-body-sm text-secondary">• Custom page design</p>
                        <p className="text-body-sm text-secondary">• Responsive layout</p>
                        <p className="text-body-sm text-secondary">• SEO optimized</p>
                      </>
                    )}
                    {addon.name === 'AI Content Generation' && (
                      <>
                        <p className="text-body-sm text-secondary">• AI-powered copywriting</p>
                        <p className="text-body-sm text-secondary">• SEO-optimized content</p>
                        <p className="text-body-sm text-secondary">• Brand voice matching</p>
                      </>
                    )}
                    {addon.name === 'Monthly Maintenance' && (
                      <>
                        <p className="text-body-sm text-secondary">• Security updates</p>
                        <p className="text-body-sm text-secondary">• Performance monitoring</p>
                        <p className="text-body-sm text-secondary">• Content updates</p>
                      </>
                    )}
                  </div>

                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-body text-secondary mb-6">
              All add-ons can be combined with any of our main packages.
              Pricing may vary based on complexity and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Discuss Add-ons
              </a>
              <a href="#pricing" className="btn-secondary">
                View Main Packages
              </a>
            </div>
          </div>

          {/* Payment Note */}
          <div className="mt-8 p-4 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-lg max-w-md mx-auto">
            <p className="text-body-sm text-secondary">
              <strong className="text-primary">Note:</strong> Add-on pricing is separate from main packages.
              Contact us for bundled pricing discounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}