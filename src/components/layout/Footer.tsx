// components/layout/Footer.tsx
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-slate-300 mb-4">{COMPANY_INFO.description}</p>
            <p className="text-slate-300">{COMPANY_INFO.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#features" className="text-slate-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>{COMPANY_INFO.contact.email}</li>
              <li>{COMPANY_INFO.contact.phone}</li>
              <li>{COMPANY_INFO.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}