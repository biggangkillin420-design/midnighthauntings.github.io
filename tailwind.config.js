/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  safelist: [
    'bg-obsidian', 'bg-obsidian-deep', 'bg-phantom', 'bg-spectral', 'bg-mist', 'bg-blood',
    'text-obsidian', 'text-phantom', 'text-spectral', 'text-mist', 'text-blood',
    'border-obsidian', 'border-phantom', 'border-blood',
    'font-bebas', 'font-inter', 'font-mono', 'font-heading',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading:  ['Bebas Neue', 'cursive'],
        bebas:    ['Bebas Neue', 'cursive'],
        mono:     ['Space Mono', 'monospace'],
        inter:    ['Inter', 'sans-serif'],
      },
      colors: {
        obsidian: {
          DEFAULT: '#09090F',
          deep: '#0D0D14',
        },
        phantom:  '#C19BFF',
        spectral: '#F0EEF8',
        mist:     '#A0A0B8',
        blood:    '#8B1A1A',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input:  'hsl(var(--input))',
        ring:   'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
