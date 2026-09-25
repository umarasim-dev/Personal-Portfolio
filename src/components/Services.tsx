'use client';

import React from 'react';
import { SERVICES_DATA } from '@/data/portfolioData';
import { Code2, Monitor, LayoutGrid, Globe, Palette, Presentation, Sparkles } from 'lucide-react';

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-cyan-500" };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'Monitor': return <Monitor {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Presentation': return <Presentation {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT I DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Specialized services tailored for businesses, individuals, and organizations seeking high-quality web interfaces and digital designs.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-lg transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getServiceIcon(service.icon)}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
