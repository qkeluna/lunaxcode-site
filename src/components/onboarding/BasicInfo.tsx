// components/onboarding/BasicInfo.tsx
'use client';

import { useOnboardingStore } from '@/store/onboarding-store';
import type { OnboardingData } from '@/types';

export function BasicInfo() {
  const { formData, updateFormData, nextStep, canProceed } = useOnboardingStore();

  const handleChange = (field: keyof OnboardingData['basicInfo'], value: string) => {
    updateFormData({
      basicInfo: {
        name: formData.basicInfo?.name || '',
        email: formData.basicInfo?.email || '',
        phone: formData.basicInfo?.phone || '',
        company: formData.basicInfo?.company || '',
        ...formData.basicInfo,
        [field]: value
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canProceed()) {
      nextStep();
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900 mb-4">Tell us about yourself</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.basicInfo?.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.basicInfo?.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.basicInfo?.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+63 912 345 6789"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={formData.basicInfo?.company || ''}
              onChange={(e) => handleChange('company', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your company (optional)"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={!canProceed()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}