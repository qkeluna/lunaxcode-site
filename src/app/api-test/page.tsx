'use client';

import { useState } from 'react';
import { api } from '@/lib/api';

export default function ApiTestPage() {
  const [status, setStatus] = useState<string>('Not tested');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const testHealthCheck = async () => {
    setStatus('Testing health check...');
    setError('');
    try {
      const health = await api.healthCheck();
      setResult(health);
      setStatus('✅ Health check passed');
    } catch (err: any) {
      setError(err.message);
      setStatus('❌ Health check failed');
    }
  };

  const testDatabaseHealth = async () => {
    setStatus('Testing database...');
    setError('');
    try {
      const dbHealth = await api.databaseHealth();
      setResult(dbHealth);
      setStatus('✅ Database connected');
    } catch (err: any) {
      setError(err.message);
      setStatus('❌ Database connection failed');
    }
  };

  const testCreateLead = async () => {
    setStatus('Testing lead creation...');
    setError('');
    try {
      const testLead = {
        full_name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890',
        company: 'Test Company',
        service_type: 'website',
        budget_range: '$1,000 - $5,000',
        timeline: '1-2 months',
        project_description: 'Test project description',
        answers: { test: 'value' },
        source: 'api_test',
      };
      const lead = await api.createLead(testLead);
      setResult(lead);
      setStatus('✅ Lead created successfully');
    } catch (err: any) {
      setError(err.message);
      setStatus('❌ Lead creation failed');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h2 text-primary mb-8">API Connection Test</h1>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
          <h2 className="text-h4 text-primary mb-4">API Endpoint</h2>
          <p className="text-body text-secondary font-mono">
            {process.env.NEXT_PUBLIC_API_URL || 'https://lunaxcode-fastapi.vercel.app'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={testHealthCheck}
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Test Health
          </button>
          <button
            onClick={testDatabaseHealth}
            className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Test Database
          </button>
          <button
            onClick={testCreateLead}
            className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Test Create Lead
          </button>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
          <h2 className="text-h4 text-primary mb-2">Status</h2>
          <p className="text-body text-secondary">{status}</p>
          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-body text-red-500">{error}</p>
            </div>
          )}
        </div>

        {result && (
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-6">
            <h2 className="text-h4 text-primary mb-4">Result</h2>
            <pre className="text-body-sm text-secondary font-mono bg-[var(--bg-tertiary)] p-4 rounded-lg overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
