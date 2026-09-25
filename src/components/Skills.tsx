'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Cpu, Code2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, categoryName: c.category }))
  );

  const filteredSkills = allSkills.filter(
    (s) => activeCategory === 'All' || s.categoryName === activeCategory
  );

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Technical <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Skills &amp; Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Categorized overview of frontend development tools, UI implementation practices, graphic design applications, and software tools.
          </p>
          <div className="w-16 h-1 bg-purple-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md scale-105'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>

                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {skill.levelName}
                </span>
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-cyan-500 transition-colors">
                  {skill.name}
                </h3>
                <div className="text-xs text-slate-400 font-mono">
                  {skill.categoryName}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
