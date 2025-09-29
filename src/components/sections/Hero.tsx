// components/sections/Hero.tsx
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {COMPANY_INFO.tagline}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {COMPANY_INFO.description}
          </p>

          <p className="text-lg mb-12 text-blue-200 max-w-xl mx-auto">
            From 48-hour landing pages to full mobile applications - we help Filipino SMEs establish and grow their digital presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#pricing"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Your Quote Today
            </Link>

            <Link
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}