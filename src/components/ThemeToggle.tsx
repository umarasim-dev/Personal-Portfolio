'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-slate-800/40 border border-slate-700/50" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-cyber-cyan hover:border-cyber-cyan transition-all"
      aria-label="Toggle Dark / Light Theme"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400 animate-spin-slow" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}
