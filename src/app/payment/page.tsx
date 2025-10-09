'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Mail, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

function PaymentContent() {
  const searchParams = useSearchParams();
  const [submissionId, setSubmissionId] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('');

  useEffect(() => {
    const id = searchParams.get('id');
    const service = searchParams.get('service');

    if (id) setSubmissionId(id);
    if (service) setServiceType(service);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4">
      {/* Gradient Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl" />
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-4">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-h2 text-primary font-bold mb-3 bg-gradient-to-r from-[var(--accent-primary)] to-purple-500 bg-clip-text text-transparent">
              Submission Received!
            </h1>
            <p className="text-body text-secondary max-w-md mx-auto leading-relaxed">
              Thank you for choosing LunaxCode. We&apos;ve received your project details and will be in touch shortly.
            </p>
          </div>

          {/* Submission Details */}
          <div className="bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
              <h3 className="text-h5 text-primary font-semibold">Submission Details</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-[var(--border-subtle)]">
                <span className="text-body-sm text-tertiary">Submission ID</span>
                <span className="text-body-sm text-secondary font-mono">{submissionId}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[var(--border-subtle)]">
                <span className="text-body-sm text-tertiary">Service Type</span>
                <span className="text-body-sm text-secondary capitalize">
                  {serviceType.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-body-sm text-tertiary">Status</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-caption font-medium">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                  Pending Payment
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-8">
            <h3 className="text-h5 text-primary font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--accent-primary)]" />
              What Happens Next?
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)]/10 rounded-full flex items-center justify-center text-body-sm text-[var(--accent-primary)] font-semibold">
                  1
                </div>
                <div>
                  <h4 className="text-body text-primary font-medium mb-1">Email Confirmation</h4>
                  <p className="text-body-sm text-secondary">
                    You&apos;ll receive a confirmation email with your submission details within a few minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)]/10 rounded-full flex items-center justify-center text-body-sm text-[var(--accent-primary)] font-semibold">
                  2
                </div>
                <div>
                  <h4 className="text-body text-primary font-medium mb-1">Payment Invoice</h4>
                  <p className="text-body-sm text-secondary">
                    Our team will review your requirements and send you a detailed quote with payment instructions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)]/10 rounded-full flex items-center justify-center text-body-sm text-[var(--accent-primary)] font-semibold">
                  3
                </div>
                <div>
                  <h4 className="text-body text-primary font-medium mb-1">Project Kickoff</h4>
                  <p className="text-body-sm text-secondary">
                    Once payment is confirmed, we&apos;ll schedule a kickoff call to discuss your project in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-[var(--accent-primary)]/5 to-purple-500/5 border border-[var(--accent-primary)]/20 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-body text-primary font-medium mb-1">Questions?</h4>
                <p className="text-body-sm text-secondary mb-2">
                  Our team is here to help. Reach out anytime at:
                </p>
                <a
                  href="mailto:lunaxcode2030@gmail.com"
                  className="text-body-sm text-[var(--accent-primary)] hover:underline font-medium"
                >
                  team@lunaxcode.site
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="flex-1 px-6 py-3 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-quaternary)] border border-[var(--border-subtle)] text-primary rounded-lg transition-all duration-300 text-center font-medium"
            >
              Back to Home
            </Link>
            <a
              href="mailto:lunaxcode2030@gmail.com"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-purple-600 hover:from-[var(--accent-primary)]/90 hover:to-purple-600/90 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg shadow-[var(--accent-primary)]/20"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-caption text-tertiary mt-6">
          Typically, we respond within 2-4 business hours
        </p>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-body text-secondary">Loading...</div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}
