/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#090A0D',
          dark: '#060709',
          subtle: '#0D0F14'
        },
        surface: {
          1: '#111318',
          2: '#161920',
          elevated: '#1D212A',
          overlay: 'rgba(17, 19, 24, 0.75)'
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          dark: '#4338CA',
          light: '#818CF8',
          soft: 'rgba(99, 102, 241, 0.12)',
          border: 'rgba(99, 102, 241, 0.25)',
          glow: 'rgba(99, 102, 241, 0.35)'
        },
        secondary: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          teal: '#14B8A6'
        },
        content: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
          muted: '#6B7280',
          faint: '#4B5563'
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          medium: 'rgba(255, 255, 255, 0.12)',
          highlight: 'rgba(255, 255, 255, 0.2)'
        },
        // Keep brand aliases for backwards compatibility if needed
        brand: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
          soft: 'rgba(99, 102, 241, 0.12)',
          ink: '#090A0D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        'elevation-low': '0 2px 8px -2px rgba(0, 0, 0, 0.5), 0 1px 4px -1px rgba(0, 0, 0, 0.4)',
        'elevation-medium': '0 12px 28px -6px rgba(0, 0, 0, 0.6), 0 6px 16px -4px rgba(0, 0, 0, 0.4)',
        'elevation-high': '0 24px 48px -12px rgba(0, 0, 0, 0.75), 0 12px 24px -6px rgba(0, 0, 0, 0.5)',
        'accent-sm': '0 0 20px -5px rgba(99, 102, 241, 0.35)',
        'accent-md': '0 0 35px -5px rgba(99, 102, 241, 0.45)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem'
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'widest': '0.15em'
      }
    }
  },
  plugins: []
}