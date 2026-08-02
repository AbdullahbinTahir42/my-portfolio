/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f8cff',
          dark: '#2c6df2',
          soft: 'rgba(79, 140, 255, 0.18)',
          ink: '#060b14'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 60px rgba(4, 8, 20, 0.35)'
      },
      backgroundImage: {
        'mesh-grid': 'radial-gradient(circle at top left, rgba(79, 140, 255, 0.22), transparent 35%), linear-gradient(120deg, rgba(255,255,255,0.04) 0%, transparent 100%)'
      }
    }
  },
  plugins: []
}