'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { contactFormSchema } from '@/lib/validations';
import { Mail, Send, Copy, Check, MapPin, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website_hp: '', // Honeypot field for spam bots
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus('idle');

    // 1. Client-side Zod validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('submitting');

    try {
      // 2. Submit to server API route /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || "Message sent successfully! I'll get back to you as soon as possible.");
        setFormData({ name: '', email: '', subject: '', message: '', website_hp: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('[Contact Form Error]:', err);
      setStatus('error');
      setStatusMessage('Unable to send your message right now. Please check your network connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Let&apos;s Build Something <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Great Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base font-sans">
            Have a project requirement, job opportunity, or graphic design inquiry? Send a message directly or connect via social links below.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono font-semibold text-slate-500 hover:text-cyan-500 flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400">Direct Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white hover:text-cyan-500 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Status:</span>
                <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Hire
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Connect Online</div>
              <div className="flex items-center space-x-3 pt-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-500 font-mono text-xs font-bold hover:border-emerald-500 transition-all shadow-sm flex items-center gap-1.5"
                  title="Fiverr Freelance Profile"
                >
                  <span>Fiverr</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 text-xs font-mono">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>SECURE FORM SUBMISSION</span>
                </span>
                <span className="text-slate-400">PostgreSQL DB Integration</span>
              </div>

              {/* Success / Error Alerts */}
              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm flex items-start gap-3 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Message sent successfully!</div>
                    <div className="text-xs opacity-90">{statusMessage}</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex items-start gap-3 animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Unable to send message</div>
                    <div className="text-xs opacity-90">{statusMessage}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot Field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-500 font-mono">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-red-500 font-mono">{errors.email}</p>}
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Requirement / Hiring Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  {errors.subject && <p className="text-[11px] text-red-500 font-mono">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, website requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-red-500 font-mono">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
