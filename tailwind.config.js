/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0907',
          900: '#12100D',
          800: '#1B1813',
          700: '#26221B',
          600: '#3A342A',
          500: '#5A5245',
          400: '#8A8071',
          300: '#B5AC9C',
        },
        gold: {
          100: '#F7EFD8',
          200: '#EDDFB5',
          300: '#DCC479',
          400: '#C9A227',
          500: '#A8871F',
          600: '#7E6417',
        },
        ivory: {
          50: '#FCFAF5',
          100: '#F6F1E7',
          200: '#EDE5D5',
          300: '#DFD4BE',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '2px',
        md: '2px',
        lg: '2px',
      },
      letterSpacing: {
        widest: '0.28em',
        brand: '0.42em',
      },
      keyframes: {
        rise: { '0%': { opacity: '0', transform: 'translateY(18px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        draw: { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
      },
      animation: {
        rise: 'rise .8s cubic-bezier(.22,.61,.36,1) both',
        draw: 'draw 1.1s cubic-bezier(.22,.61,.36,1) both',
      },
    },
  },
  plugins: [],
}
