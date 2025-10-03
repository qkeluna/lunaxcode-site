// Fallback data when API is unavailable (e.g., CORS issues in development)
import { SERVICES } from '@/data/services';
import { PRICING_PLANS } from '@/data/pricing';
import { FEATURES } from '@/data/features';
import { ADDONS } from '@/data/addons';
import { COMPANY_INFO } from '@/data/company';
import type { PricingPlan, Service, Feature, Addon, CompanyInfo } from '@/types/api';

// Transform local data to match API format
export const fallbackPricingPlans: PricingPlan[] = PRICING_PLANS.map(plan => ({
  ...plan,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}));

export const fallbackServices: Service[] = SERVICES.map(service => ({
  ...service,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}));

export const fallbackFeatures: Feature[] = FEATURES.map((feature, index) => ({
  id: index + 1,
  ...feature,
  display_order: index,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}));

export const fallbackAddons: Addon[] = ADDONS.map((addon, index) => ({
  id: index + 1,
  name: addon.name,
  description: '',
  price_range: addon.priceRange,
  icon: '',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}));

export const fallbackCompanyInfo: CompanyInfo = {
  id: 1,
  name: COMPANY_INFO.name,
  tagline: COMPANY_INFO.tagline,
  description: COMPANY_INFO.description,
  contact: COMPANY_INFO.contact,
  payment_terms: COMPANY_INFO.paymentTerms,
  updated_at: new Date().toISOString(),
};
