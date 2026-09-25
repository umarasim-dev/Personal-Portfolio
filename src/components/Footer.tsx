'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 font-sans text-xs py-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80 items-center">
          
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 text-white flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm pt-1">
              {PERSONAL_INFO.title} — Building modern websites, creative interfaces, and digital experiences.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap gap-4 font-medium text-xs text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#design" className="hover:text-cyan-400 transition-colors">Design</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="md:col-span-3 flex items-center justify-start md:justify-end space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all flex items-center gap-1 font-mono text-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-1">
            <span>Built with</span>
            <span className="text-cyan-400 font-bold">Next.js 14</span>
            <span>,</span>
            <span className="text-purple-400 font-bold">Tailwind CSS</span>
            <span>&amp;</span>
            <span className="text-emerald-400 font-bold">Supabase PostgreSQL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
