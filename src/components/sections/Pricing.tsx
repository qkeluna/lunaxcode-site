// components/sections/Pricing.tsx
'use client';

import { PRICING_PLANS } from '@/data/pricing';
import { useOnboardingStore } from '@/store/onboarding-store';
import { Check } from 'lucide-react';

export function Pricing() {
  const openModal = useOnboardingStore(state => state.openModal);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Affordable, high-quality digital solutions tailored for Filipino SMEs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white border-2 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 scale-105'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  ₱{plan.price.toLocaleString()}
                </div>
                <div className="text-slate-600">{plan.timeline}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal(plan.id)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
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