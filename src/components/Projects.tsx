'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS_DATA, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ArrowUpRight, Sparkles, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'E-Commerce', 'AI / FYP'];

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO &amp; CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Web development applications, e-commerce storefronts, and artificial intelligence academic projects engineered with modern technologies.
          </p>
          <div className="w-16 h-1 bg-purple-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md scale-105'
                  : 'bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-xl transition-all group overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Image Banner */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/90 text-white shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Badge & Title */}
                <div className="space-y-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 text-[11px] font-mono text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center space-x-3 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-500 transition-colors"
                      title="GitHub Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-500 transition-colors"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
