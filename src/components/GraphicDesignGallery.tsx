'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GRAPHIC_DESIGNS, DesignItem } from '@/data/portfolioData';
import { Palette, Maximize2, X } from 'lucide-react';

export default function GraphicDesignGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);

  const categories = [
    'All',
    'Logos',
    'Social Media',
    'YouTube Thumbnails',
    'Banners',
    'Flyers',
    'Business Cards',
    'CV Designs',
    'Presentations'
  ];

  const filteredDesigns = GRAPHIC_DESIGNS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="design" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
            <Palette className="w-3.5 h-3.5" />
            <span>VISUAL ART &amp; COLLATERAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Graphic Design <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            A visual showcase of brand identity logos, social media graphics, YouTube thumbnails, promotional banners, flyers, and business presentations.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md scale-105'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDesigns.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDesign(item)}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm pt-1.5 group-hover:text-cyan-500 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedDesign && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedDesign(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDesign(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              {selectedDesign.category}
            </span>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {selectedDesign.title}
            </h3>

            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
              <Image
                src={selectedDesign.image}
                alt={selectedDesign.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm font-sans">
              {selectedDesign.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
