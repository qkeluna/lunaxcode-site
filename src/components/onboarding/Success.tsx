// components/onboarding/Success.tsx
'use client';

import { CheckCircle } from 'lucide-react';
import { useOnboardingStore } from '@/store/onboarding-store';

export function Success() {
  const { formData, closeModal } = useOnboardingStore();

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        Request Submitted Successfully!
      </h3>

      <p className="text-slate-600 mb-6">
        Thank you for your interest in Lunaxcode! We&apos;ve received your request and will contact you within 24 hours to discuss your project details and next steps.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 text-sm">
          <strong>What happens next?</strong><br />
          1. Our team will review your requirements<br />
          2. We&apos;ll send you a detailed proposal<br />
          3. Once approved, we&apos;ll start working on your project<br />
          4. Regular updates throughout the development process
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-slate-500">
          Reference ID: {formData.submissionId}
        </p>

        <button
          onClick={closeModal}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}