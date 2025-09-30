// src/data/company.ts
export const COMPANY_INFO = {
  name: 'Lunaxcode',
  tagline: 'Code at the Speed of Light',
  description: 'Professional websites and mobile apps for Filipino SMEs',
  contact: {
    email: 'hello@lunaxcode.site',
    phone: '+63 912 345 6789',
    location: 'Antipolo City, Rizal, Philippines'
  },
  paymentTerms: {
    deposit: '30-50%',
    balance: 'on delivery',
    methods: ['GCash', 'PayMaya', 'Bank Transfer']
  }
} as const;