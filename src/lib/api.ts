import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import type {
  PricingPlan,
  Service,
  Feature,
  Addon,
  CompanyInfo,
  OnboardingSchema,
  LeadCreate,
  Lead,
  HealthResponse,
  DatabaseHealthResponse,
  ApiError,
} from '@/types/api';

class ApiService {
  private client: AxiosInstance;
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://lunaxcode-fastapi.vercel.app';
    
    this.client = axios.create({
      baseURL: `${this.baseUrl}/api/v1`,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000, // 30 seconds
    });

    // Response interceptor for error handling
    const responseSuccessHandler = <T>(response: AxiosResponse<T>) => response;

    this.client.interceptors.response.use(
      responseSuccessHandler,
      (error: AxiosError<ApiError>) => {
        if (error.response) {
          // Server responded with error
          console.error('❌ API Error Response:', {
            status: error.response.status,
            data: error.response.data,
            url: error.config?.url,
            method: error.config?.method,
            requestData: error.config?.data,
          });
          
          // Handle validation errors (422)
          if (error.response.status === 422 && error.response.data) {
            console.error('🔍 Validation Details:', error.response.data);
          }
          
          throw new Error(error.response.data.detail || 'An error occurred');
        } else if (error.request) {
          // Request made but no response (timeout, network, CORS, etc.)
          // Use console.warn instead of console.error - fallback will handle it
          console.warn('API request failed, fallback data will be used:', error.message);
          throw new Error('API unavailable');
        } else {
          // Something else happened
          console.warn('Request setup error:', error.message);
          throw error;
        }
      }
    );
  }

  // Health Checks
  async healthCheck(): Promise<HealthResponse> {
    const { data } = await this.client.get<HealthResponse>('/health');
    return data;
  }

  async databaseHealth(): Promise<DatabaseHealthResponse> {
    const { data } = await this.client.get<DatabaseHealthResponse>('/health/db');
    return data;
  }

  // Pricing Plans
  async getPricingPlans(): Promise<PricingPlan[]> {
    const { data } = await this.client.get<PricingPlan[]>('/pricing');
    return data;
  }

  async getPricingPlan(id: string): Promise<PricingPlan> {
    const { data } = await this.client.get<PricingPlan>(`/pricing/${id}`);
    return data;
  }

  // Services
  async getServices(): Promise<Service[]> {
    const { data } = await this.client.get<Service[]>('/services');
    return data;
  }

  async getService(id: string): Promise<Service> {
    const { data } = await this.client.get<Service>(`/services/${id}`);
    return data;
  }

  // Features
  async getFeatures(): Promise<Feature[]> {
    const { data } = await this.client.get<Feature[]>('/features');
    return data;
  }

  // Add-ons
  async getAddons(): Promise<Addon[]> {
    const { data } = await this.client.get<Addon[]>('/addons');
    return data;
  }

  // Company Info
  async getCompanyInfo(): Promise<CompanyInfo> {
    const { data } = await this.client.get<CompanyInfo>('/company');
    return data;
  }

  // Onboarding Questions
  async getOnboardingQuestions(serviceType: string): Promise<OnboardingSchema> {
    const { data } = await this.client.get<OnboardingSchema>(
      `/onboarding/questions/${serviceType}`
    );
    return data;
  }

  // Leads
  async createLead(lead: LeadCreate): Promise<Lead> {
    const { data } = await this.client.post<Lead>('/leads', lead);
    return data;
  }

  // Admin endpoints (require API key)
  async getLeads(apiKey: string): Promise<Lead[]> {
    const { data } = await this.client.get<Lead[]>('/leads', {
      headers: { 'X-API-Key': apiKey },
    });
    return data;
  }

  async getLead(id: number, apiKey: string): Promise<Lead> {
    const { data } = await this.client.get<Lead>(`/leads/${id}`, {
      headers: { 'X-API-Key': apiKey },
    });
    return data;
  }
}

// Export singleton instance
export const api = new ApiService();

// Export class for testing or custom instances
export default ApiService;
