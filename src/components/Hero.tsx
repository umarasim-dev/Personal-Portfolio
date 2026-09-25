'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowRight, Mail, Code, Layout, Monitor } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      
      {/* Background glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Frontend &amp; Web Projects</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                <Code className="w-6 h-6 text-purple-500" />
                <span>{PERSONAL_INFO.title}</span>
              </h2>
            </div>

            {/* Main Statement */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-2 font-semibold">
                Tech Stack:
              </span>
              {["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Bootstrap", "React", "Next.js", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono shadow-sm hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center gap-2 hover:border-cyan-500 dark:hover:border-cyan-400 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-slate-900/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-600 dark:text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Headshot Photo & Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-3xl p-3 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-slate-900/40 shadow-2xl">
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-inner">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex items-center space-x-3 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Responsive Web</div>
                  <div className="text-[11px] text-slate-400">Desktop &amp; Mobile</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex items-center space-x-3 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">UI Implementation</div>
                  <div className="text-[11px] text-slate-400">Figma to Code</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
