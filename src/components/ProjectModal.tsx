'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/data/portfolioData';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white pt-1">
            {project.title}
          </h2>
        </div>

        {/* Image Preview */}
        <div className="relative w-full h-56 sm:h-72 my-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          {project.fullDescription}
        </p>

        {/* Highlights */}
        {project.details && project.details.length > 0 && (
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-500" />
              <span>Key Technical Highlights &amp; Features</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
              {project.details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-6 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Technologies &amp; Concepts:</span>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <span>Live Website Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2 hover:border-cyan-500 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-cyan-500" />
              <span>GitHub Code</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
