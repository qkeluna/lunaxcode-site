// components/sections/Process.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, Clock, Rocket, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollStagger } from '@/components/ui/ScrollReveal';

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      icon: CheckCircle,
      title: 'Discovery & Planning',
      description: 'We discuss your requirements and create a detailed project plan tailored to your needs.',
      details: 'Requirements gathering, market research, technical planning, and timeline creation.',
      duration: '1-2 days'
    },
    {
      number: '02',
      icon: Clock,
      title: 'Design & Development',
      description: 'Our team creates beautiful designs and develops your solution using cutting-edge technology.',
      details: 'UI/UX design, frontend development, backend setup, and feature implementation.',
      duration: '3-5 days'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Testing & Launch',
      description: 'We thoroughly test everything and launch your project with ongoing support.',
      details: 'Quality assurance, performance testing, deployment, and post-launch support.',
      duration: '1-2 days'
    }
  ];

  return (
    <section id="process" className="py-[var(--section-padding-lg)] bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-[var(--container-padding)] relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-h2 text-primary mb-6">
              Our Process
            </h2>
            <p className="text-body-lg text-secondary max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional results quickly and efficiently.
              From concept to launch in just one week.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <ScrollStagger staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-[var(--border-subtle)] z-0">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-1000"
                      style={{
                        width: activeStep !== null && activeStep >= index ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                )}

                {/* Step Card */}
                <div className="card-feature text-center relative z-10">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="text-h1 text-tertiary font-bold mb-4 opacity-20">
                      {step.number}
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeStep === index
                          ? 'bg-[var(--accent-primary)] scale-110'
                          : 'bg-[var(--surface-elevated)] border-2 border-[var(--border-medium)]'
                      }`}>
                        <IconComponent
                          className={`w-6 h-6 transition-colors duration-300 ${
                            activeStep === index ? 'text-white' : 'text-[var(--accent-primary)]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    <h3 className="text-h4 text-primary mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-body text-secondary mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] mb-4">
                      <Clock className="w-3 h-3 text-[var(--accent-primary)]" />
                      <span className="text-caption text-secondary">{step.duration}</span>
                    </div>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-body-sm text-tertiary leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Step Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-[var(--accent-primary)] scale-150' : 'bg-[var(--border-medium)]'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollStagger>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-h3 text-primary mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-body text-secondary mb-8">
                Our proven process ensures your project is delivered on time, within budget, and exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white shadow-lg">
                  <span>View Packages</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group bg-[var(--text-primary)] hover:bg-[var(--text-primary)]/90 text-[var(--bg-primary)]">
                  <span>Schedule Discovery Call</span>
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