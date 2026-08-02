/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
  theme: {
    extend: {
      colors: {
        brand: {
<<<<<<< HEAD
          DEFAULT: '#4f8cff',
          dark: '#2c6df2',
          soft: 'rgba(79, 140, 255, 0.18)',
          ink: '#060b14'
=======
          DEFAULT: '#40826d',
          dark: '#356b5a',
          glow: 'rgba(64, 130, 109, 0.5)'
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
<<<<<<< HEAD
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
=======
      }
    },
  },
  plugins: [],
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
}