import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#07090e",
          card: "#0d111a",
          cardHover: "#131a29",
          border: "#1e293b",
          cyan: "#00f0ff",
          green: "#00ff9d",
          purple: "#a855f7",
          pink: "#f43f5e",
          orange: "#ff8c00",
          text: "#e2e8f0",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'matrix-rain': 'matrix 15s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
        'cyber-gradient': "linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(168,85,247,0.15) 50%, rgba(0,255,157,0.15) 100%)",
        'neon-glow': "radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
