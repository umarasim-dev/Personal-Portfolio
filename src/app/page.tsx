'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import GraphicDesignGallery from '@/components/GraphicDesignGallery';
import Education from '@/components/Education';
import TechnicalHighlights from '@/components/TechnicalHighlights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors font-sans overflow-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Skills & Capabilities */}
      <Skills />

      {/* Services / What I Do */}
      <Services />

      {/* Professional Experience */}
      <Experience />

      {/* Projects Showcase */}
      <Projects />

      {/* Graphic Design Portfolio */}
      <GraphicDesignGallery />

      {/* Education */}
      <Education />

      {/* Technical Principles & Development Approach */}
      <TechnicalHighlights />

      {/* Contact Form Section with Database Integration */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
