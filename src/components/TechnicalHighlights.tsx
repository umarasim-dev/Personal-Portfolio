'use client';

import React from 'react';
import { TECHNICAL_HIGHLIGHTS } from '@/data/portfolioData';
import { Monitor, Code2, LayoutGrid, Layout, Zap, BookOpen, Layers } from 'lucide-react';

export default function TechnicalHighlights() {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-cyan-500" };
    switch (iconName) {
      case 'Monitor': return <Monitor {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'Figma': return <Layout {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  return (
    <section className="py-20 md:py-24 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>DEVELOPMENT APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineering <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Principles &amp; Standards</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            How I approach frontend web development to deliver responsive, maintainable, and high-performance user interfaces.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mt-2" />
        </div>

        {/* 6 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
