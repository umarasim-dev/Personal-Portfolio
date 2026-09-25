'use client';

import React from 'react';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC QUALIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Educational <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Background</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white flex items-center justify-center shadow-md shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {EDUCATION_DATA.degree}
                </h3>
                <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 pt-1">
                  {EDUCATION_DATA.institution}
                </div>
              </div>
            </div>

            <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold self-start sm:self-auto">
              {EDUCATION_DATA.status}
            </span>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-500" />
              <span>Relevant Academic Core Focus Areas:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {EDUCATION_DATA.relevantAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
