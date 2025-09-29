// components/sections/Services.tsx
'use client';

import { SERVICES } from '@/data/services';
import { useOnboardingStore } from '@/store/onboarding-store';

export function Services() {
  const openModal = useOnboardingStore(state => state.openModal);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional digital solutions delivered fast and affordably for Filipino SMEs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.timeline}
                </div>
              </div>

              <p className="text-slate-700 text-center leading-relaxed mb-6">
                {service.details}
              </p>

              <button
                onClick={() => openModal(service.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}