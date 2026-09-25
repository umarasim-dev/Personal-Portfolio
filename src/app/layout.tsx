import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Muhammad Umar Asim | Frontend Web Developer & Graphic Designer',
  description:
    'Muhammad Umar Asim is a Frontend Web Developer and Graphic Designer specializing in responsive websites, HTML, CSS, Tailwind CSS, JavaScript, Bootstrap, React, Next.js, UI implementation and digital design.',
  keywords: [
    'Muhammad Umar Asim',
    'Frontend Web Developer',
    'Graphic Designer',
    'Web Developer',
    'Tailwind CSS',
    'React',
    'Next.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Figma UI Implementation',
    'Responsive Web Design',
    'Faisalabad Pakistan'
  ],
  authors: [{ name: 'Muhammad Umar Asim' }],
  openGraph: {
    title: 'Muhammad Umar Asim | Frontend Web Developer & Graphic Designer',
    description: 'Frontend Web Developer & Graphic Designer creating modern, responsive, user-friendly digital experiences.',
    type: 'website',
    images: ['/profile.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Umar Asim | Frontend Web Developer & Graphic Designer',
    description: 'Frontend Web Developer & Graphic Designer creating modern responsive websites.',
    images: ['/profile.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
