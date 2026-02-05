import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
        highlight: 'var(--color-highlight)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.04em'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.15)',
        lift: '0 24px 80px rgba(0,0,0,0.22)'
      }
    }
  },
  plugins: []
};

export default config;
