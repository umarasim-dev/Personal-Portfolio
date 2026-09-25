'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            A timeline of web development software roles, graphic design engagements, and technical contributions.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-slate-300 dark:before:to-slate-800">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 text-cyan-500 font-mono text-xs shadow-md shrink-0 z-10 left-0 md:left-1/2 md:-translate-x-1/2 absolute">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md ml-10 md:ml-0 transition-all">
                <div className="space-y-3">
                  
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 font-mono pt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-cyan-500" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
