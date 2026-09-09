/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf4',
          100: '#d6f5e3',
          200: '#b0e9cb',
          300: '#7bd6ac',
          400: '#45bc89',
          500: '#22a06e',
          600: '#158058',
          700: '#116649',
          800: '#0f513c',
          900: '#0c3f30',
          950: '#05241c',
        },
        sand: {
          50: '#fbfaf7',
          100: '#f5f2ea',
          200: '#e9e3d4',
        },
        gold: {
          400: '#e3b23c',
          500: '#c99a2e',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(12, 63, 48, 0.25)',
        card: '0 2px 14px -4px rgba(15, 23, 42, 0.12)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .6s ease-out both',
      },
    },
  },
  plugins: [],
}
