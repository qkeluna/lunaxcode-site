// components/layout/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { useUIStore } from '@/store/ui-store';
import { COMPANY_INFO } from '@/data/company';
import { ThemeToggleSwitch } from '@/components/ui/theme-toggle-switch';
import { AnimatedMenuToggle } from '@/components/ui/animated-menu-toggle';

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(100, (window.scrollY / scrollHeight) * 100) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
{ href: '#process', label: 'Our Process' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-[var(--container-padding)]">
        <div className="flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-h5 font-bold text-primary hover:text-[var(--accent-primary)] transition-all duration-300 group"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-[var(--accent-primary)] group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[var(--accent-primary)] rounded-full filter blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            {COMPANY_INFO.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body text-secondary hover:text-[var(--accent-primary)] transition-all duration-300 relative group"
                onClick={closeMobileMenu}
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-primary)] group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggleSwitch />
          </div>

          {/* Mobile Actions - Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle for Mobile */}
            <ThemeToggleSwitch />
            
            {/* Animated Mobile Menu Toggle */}
            <AnimatedMenuToggle 
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-xl rounded-b-lg">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body text-secondary hover:text-[var(--accent-primary)] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-[var(--surface-elevated)] animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Contact Info */}
              <div className="px-4 text-center">
                <p className="text-caption text-tertiary mb-2">
                  Ready to start your project?
                </p>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="text-body-sm text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--border-subtle)]">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-300"
          style={{
            width: `${scrollProgress}%`
          }}
        ></div>
      </div>
    </header>
  );
}