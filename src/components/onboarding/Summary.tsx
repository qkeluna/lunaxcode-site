// components/onboarding/Summary.tsx
'use client';

import { useOnboardingStore } from '@/store/onboarding-store';
import { DataService } from '@/lib/data-service';

export function Summary() {
  const { formData, submitOnboarding, isLoading, error } = useOnboardingStore();
  const service = DataService.getServices().find(s => s.id === formData.serviceType);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitOnboarding();
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900 mb-4">Review Your Information</h3>
      <p className="text-slate-600 mb-6">
        Please review your information before submitting your request.
      </p>

      <div className="bg-slate-50 rounded-lg p-6 space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-slate-900 mb-2">Service Selected</h4>
          <p className="text-slate-700">{service?.name}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2">Basic Information</h4>
          <div className="text-slate-700 space-y-1">
            <p><strong>Name:</strong> {formData.basicInfo?.name}</p>
            <p><strong>Email:</strong> {formData.basicInfo?.email}</p>
            <p><strong>Phone:</strong> {formData.basicInfo?.phone}</p>
            {formData.basicInfo?.company && (
              <p><strong>Company:</strong> {formData.basicInfo.company}</p>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2">Service Requirements</h4>
          <div className="text-slate-700">
            {formData.serviceSpecific && Object.entries(formData.serviceSpecific).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
              </p>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => useOnboardingStore.getState().prevStep()}
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            disabled={isLoading}
          >
            Previous
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors"
          >
            {isLoading ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
}