'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { Code2, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'services', 'experience', 'projects', 'design', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Design', href: '#design', id: 'design' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug group-hover:text-cyan-500 transition-colors">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-tight">
                Frontend Dev &amp; Designer
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Let's Talk CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs shadow-md hover:brightness-110 hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-2 text-sm mt-3 animate-in fade-in duration-200 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg transition-colors font-medium ${
                activeSection === link.id
                  ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-md"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
