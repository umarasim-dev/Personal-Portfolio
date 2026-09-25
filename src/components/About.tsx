'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { User, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>BIOGRAPHY &amp; BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Muhammad Umar Asim</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Bio Details */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed font-sans">
            <p className="font-medium text-slate-800 dark:text-slate-200">
              I am <span className="font-bold text-cyan-600 dark:text-cyan-400">Muhammad Umar Asim</span>, an IT professional and passionate Frontend Web Developer with a strong interest in web development, programming, UI design, and graphic design.
            </p>
            
            <p>
              My primary focus is <strong className="text-slate-900 dark:text-white">frontend development</strong>, where I transform ideas and designs into responsive and interactive websites. I build modern interfaces working with 
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> HTML, CSS, Tailwind CSS, JavaScript, Bootstrap, React, Next.js, and Figma</span>.
            </p>

            <p>
              Alongside web development, I have practical experience in graphic design, including logos, banners, thumbnails, flyers, business cards, CVs, presentations, and social media graphics.
            </p>

            <p>
              I continuously improve my skills by working on real-world projects and learning modern technologies to deliver clean code, accessible UI, and recruiter-ready digital assets.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Responsive Frontend Interfaces</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Figma UI to Code Conversion</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Professional Digital Graphic Assets</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>BS Information Technology Degree</span>
              </div>
            </div>

          </div>

          {/* Right Column: Statistics Grid & Location Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Education</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">BS Information Technology</div>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-sm">
                <div className="text-2xl font-mono font-bold text-cyan-500">1+ Year</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Web Dev Experience</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-sm">
                <div className="text-2xl font-mono font-bold text-purple-500">3+ Years</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Freelance / Graphic Design</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
